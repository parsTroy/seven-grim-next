'use client';

import { useRef, useEffect, useState } from 'react';

const DoomLikeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 400;
  const height = 300;

  const [playing, setPlaying] = useState(false);

  const posX = useRef(100);
  const posY = useRef(100);
  const dir = useRef(0);
  const running = useRef(false);
  const keys = useRef<Record<string, boolean>>({});

  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const tileSize = 64;
  const mapWidth = map[0].length;
  const mapHeight = map.length;
  const speed = 1;

  const update = () => {
    const moveStep = speed * (keys.current['ArrowUp'] ? 1 : keys.current['ArrowDown'] ? -1 : 0);
    const rotStep = (keys.current['ArrowRight'] ? 1 : 0) - (keys.current['ArrowLeft'] ? 1 : 0);
  
    dir.current += rotStep * 0.015;
  
    const moveX = Math.cos(dir.current) * moveStep;
    const moveY = Math.sin(dir.current) * moveStep;
  
    const nextX = posX.current + moveX;
    const nextY = posY.current + moveY;
  
    const tileX = Math.floor(nextX / tileSize);
    const tileY = Math.floor(posY.current / tileSize);
  
    if (map[tileY]?.[tileX] === 0) {
      posX.current = nextX;
    }
  
    const tileX2 = Math.floor(posX.current / tileSize);
    const tileY2 = Math.floor(nextY / tileSize);
  
    if (map[tileY2]?.[tileX2] === 0) {
      posY.current = nextY;
    }
  };   

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    for (let x = 0; x < width; x++) {
      const rayAngle = dir.current - 0.5 + (x / width);
      const rayX = Math.cos(rayAngle);
      const rayY = Math.sin(rayAngle);

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

  const handleClickToStart = () => {
    if (!playing) {
      setPlaying(true);
      running.current = true;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(loop);
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (!playing) return;

      if (e.key === 'Escape') {
        running.current = false;
        setPlaying(false);
        document.body.style.overflow = '';
        return;
      }

      keys.current[e.key] = true;

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

  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClickToStart}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          width: '4px',
          height: '4px',
          backgroundColor: 'white',
          borderRadius: '50%',
          zIndex: 10,
        }}
      />
      <img
        src="/shotgoin.png"
        alt="Gun"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
      <canvas
        ref={canvasRef}
        width={640}
        height={400}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: playing ? 'none' : 'default',
        }}
      />
      {!playing && (
        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-lg font-bold">
          Click to Play
        </div>
      )}
    </div>
  );
};

export default DoomLikeGame;
