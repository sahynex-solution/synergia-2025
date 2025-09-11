import React, { useEffect, useRef } from "react";
import './LargeHeader.css'; 
import { TweenLite, Circ } from "gsap";




const LargeHeader = () => {

  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const points = useRef([]);
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  let animateHeader = useRef(true);
  let scrollY = useRef(0);

  

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const largeHeader = largeHeaderRef.current;
    largeHeader.style.height = height + 'px';

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    // Create points
    points.current = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        let px = x + (Math.random() * width) / 20;
        let py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.current.push(p);
      }
    }

    // Find the 5 closest points for each point
    points.current.forEach((p1) => {
      const closest = [];
      points.current.forEach((p2) => {
        if (p1 !== p2) {
          closest.push(p2);
        }
      });
      closest.sort((pA, pB) => getDistance(p1, pA) - getDistance(p1, pB));
      p1.closest = closest.slice(0, 6);
    });

    // Assign a circle to each point
    points.current.forEach((p) => {
      const circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255, 255, 255, 1)');
      p.circle = circle;
    });

    // Event listeners
    const mouseMove = (e) => {
      const posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      const posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      target.current = { x: posx, y: posy };
    };

    const scrollCheck = () => {
      scrollY.current = window.scrollY;
      animateHeader.current = scrollY.current <= height;
      canvas.style.transform = `translateY(${scrollY.current * 0.5}px)`; // Adjust this value to control the speed
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      largeHeader.style.height = window.innerHeight + 'px';
    };

    window.addEventListener('mousemove', mouseMove);
    // window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    // Animation
    const animate = () => {
      if (animateHeader.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.current.forEach((p) => {
          if (Math.abs(getDistance(target.current, p)) < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (Math.abs(getDistance(target.current, p)) < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (Math.abs(getDistance(target.current, p)) < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }
          drawLines(p, ctx);
          p.circle.draw(ctx);
        });
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    };

    points.current.forEach(shiftPoint);
    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Utility functions
  const getDistance = (p1, p2) => Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

  const drawLines = (p, ctx) => {
    if (!p.active) return;
    p.closest.forEach((closestPoint) => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      ctx.strokeStyle = `rgba(255,255,255,${p.active})`;
      // change color here if u want
      ctx.stroke();
    });
  };

  function Circle(pos, rad, color) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;

    this.draw = (ctx) => {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(255,255,255,${this.active})`;
      
      ctx.fill();
    };
  }

  return (
    <div id="large-header" className="large-header h-full opacity-50" ref={largeHeaderRef}>
        <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default LargeHeader;
