import { useRef, useEffect } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.1 + 0.05,
      fade: Math.random() * 0.01 + 0.002,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        s.opacity += s.fade;
        if (s.opacity <= 0 || s.opacity >= 1) s.fade = -s.fade;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.shadowColor = "rgba(255,255,255,0.1)";
        ctx.shadowBlur = 5;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      const widthRatio = newWidth / canvas.width;
      const heightRatio = newHeight / canvas.height;

      stars.forEach((s) => {
        s.x *= widthRatio;
        s.y *= heightRatio;
      });

      canvas.width = newWidth;
      canvas.height = newHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
