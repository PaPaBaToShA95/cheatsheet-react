import React, { useRef, useEffect } from "react";

const MyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");


    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 150, 100);


    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(20, 20, 150, 100);


    ctx.fillStyle = "green";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 50, 50);


    ctx.beginPath();
    ctx.arc(150, 100, 40, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }, []);

  return (
    <div className="flex justify-center items-center my-5">
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default MyCanvas;
