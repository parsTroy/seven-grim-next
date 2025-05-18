'use client'

import { useRef, useEffect, useState } from 'react';

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const width = 400;
  const height = 300;

  const posX = useRef(100);
  const posY = useRef(100);
  const dir = useRef(0);
  const running = useRef(false);
  const keys = useRef<Record<string, boolean>>({});

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

    const speed = 2;

    const update = () => {
      if (keys.current['ArrowLeft']) dir.current -= 0.05;
      if (keys.current['ArrowRight']) dir.current += 0.05;
      if (keys.current['ArrowUp']) {
        posX.current+= Math.cos(dir.current) * speed;
        posY.current+= Math.sin(dir.current) * speed;
      }
      if (keys.current['ArrowDown']) {
        posX.current -= Math.cos(dir.current) * speed;
        posY.current -= Math.sin(dir.current) * speed;
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x++) {
        const rayAngle = dir.current - 0.5 + (x / width);
        let rayX = Math.cos(rayAngle);
        let rayY = Math.sin(rayAngle);

        let distance = 0;
        while (distance < 300) {
          const testX = Math.floor((posX.current + rayX * distance) / tileSize);
          const testY = Math.floor((posY.current + rayY * distance) / tileSize);

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
      if (!running.current) return;
      update();
      draw();
      requestAnimationFrame(loop);
    };

    const keyDownHandler = (e: KeyboardEvent) => {
      if (!playing) return;
      if (e.key === 'Escape') {
        running.current = false;
        document.body.sytle.overflow = '';
        return;
      }
      keys[e.key] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      document.body.style.overflow = '';
    };
  }, [playing]);

  const handleClickToStart = () => {
    if (!playing) {
      setPlaying(true);
      running.current = true;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            requestAnimationFrame(() => {
              running.current && loopWrapper();
            });
          }
        }
      });
    }
  };

  const loopWrapper = () => {
    const canvas = canvasRef.current;
      if (!canvas) return;
    const ctx = canvas.getContext('2d');
      if (!ctx) return;

    const loop = () => {
      if (!running.current) return;
      const e = new Event('tick');
      window.dispatchEvent(e);
      const update = new CustomEvent('frame');
      window.dispatchEvent(update);
      requestAnimationFrame(loop);
    };
    loop();
  };

  return ( 
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px`}}
      onClick={() => !playing && setPlaying(true)}
    >
      <canvas ref={canvasRef} width={width} height={height} className="rounded shadow-lg border cursor-crosshair" />
      {!playing && (
        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-lg font-bold">
          Click to Play 
        </div>
      )}
    </div>
  );
};

export default Game;
