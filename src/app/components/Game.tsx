'use client'

import { useRef, useEffect, useState } from 'react';

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const width = 400;
  const height = 300;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const map = [
      [1,1,1,1,1,1,1,1,],      
      [1,0,0,0,0,0,0,1,],
      [1,0,0,0,0,1,0,1,],
      [1,0,0,1,0,1,0,1,],
      [1,0,0,1,0,0,0,1,],
      [1,1,1,1,1,1,1,1,],
    ];
    const tileSize = 64;
    const mapWidth = map[0].length;
    const mapHeight = map.length;

    let posX = 100, posY = 100;
    let dir = 0;

    const keys: Record<string, boolean> = {};
    const speed = 2;
    let running = false;

    const update = () => {
      if (keys['ArrowLeft']) dir -= 0.05;
      if (keys['ArrowRight']) dir += 0.05;
      if (keys['ArrowUp']) {
        posX += Math.cos(dir) * speed;
        posY += Math.sin(dir) * speed;
      }
      if (keys['ArrowDown']) {
        posX -= Math.cos(dir) * speed;
        posY -= Math.sin(dir) * speed;
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x++) {
        const rayAngle = dir - 0.5 + (x / width);
        let rayX = Math.cos(rayAngle);
        let rayY = Math.sin(rayAngle);

        let distance = 0;
        while (distance < 300) {
          const testX = Math.floor((posX + rayX * distance) / tileSize);
          const testY = Math.floor((posY + rayY * distance) / tileSize);

          if (
            testX < 0 ||
            testX >= mapWidth ||
            testY < 0 ||
            testY >= mapHeight ||
            map[testY][testX] > 0
          ) {
            break;
          }

          distance += 1;
        }

        const wallHeight = Math.min(height, (tileSize * 400) / (distance || 1));
        ctx.fillStyle = `rgb(${255 - distance}, ${255 - distance}, ${255 - distance})`;
        ctx.fillRect(x, (height - wallHeight) / 2, 1, wallHeight);
      }
    };

    const loop = () => {
      if (!running) return;
      update();
      draw();
      requestAnimationFrame(loop);
    };

    const startGame = () => {
      setPlaying(true);
      running = true;
      document.body.style.overflow = 'hidden';
      loop();
    };

    const stopGame = () => {
      setPlaying(false);
      running = false;
      document.body.style.overflow = '';
    };

    const keyDownHandler = (e: KeyboardEvent) => {
      if (!playing) return;
      if (e.key === 'Escape') {
        stopGame();
        return;
      }
      keys[e.key] = true;
      e.preventDefault();
    }

    const keyUpHandler = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      document.body.style.overflow = '';
    };
  }, [playing]);

  return ( 
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px`}}
      onClick={() => !playing && setPlaying(true)}
    >
      <canvas ref={canvasRef} width={width} height={height} className="rounded shadow-lg border cursor-crosshair" />;
      {!playing && (
        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-lg font-bold">
          Click to Play 
        </div>
      )}
    </div>
  );
};

export default Game;
