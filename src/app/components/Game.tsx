'use client';

import { useRef, useEffect, useState } from 'react';

const DoomLikeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 400;
  const height = 300;

  const [playing, setPlaying] = useState(false);
  const [gunFrameIndex, setGunFrameIndex] = useState(0);
  const [isFiring, setIsFiring] = useState(false);
  const isFiringRef = useRef(false);

  const gunIdleImage = useRef<HTMLImageElement | null>(null);
  const gunFireImage = useRef<HTMLImageElement | null>(null);


  const GUN_FRAME_WIDTH = 200;
  const GUN_FRAME_HEIGHT = 200;
  const GUN_ANIMATION_FRAMES = 2;


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

  // Enemy type
  type Enemy = {
    x: number;
    y: number;
    speed: number;
    alive: boolean;
    frame: number;
  };

  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const enemiesRef = useRef<Enemy[]>([]);

  // At the top, add a constant for minimum spawn distance (in tiles)
  const MIN_SPAWN_DIST = 3 * tileSize;

  // Preload enemy sprites
  const enemySprites = [
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
    useRef<HTMLImageElement | null>(null),
  ];

  // Add animation tick for enemy animation
  const [enemyAnimTick, setEnemyAnimTick] = useState(0);

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

    // Move enemies toward player
    enemiesRef.current.forEach((enemy: Enemy) => {
      if (!enemy.alive) return;
      const dx = posX.current - enemy.x;
      const dy = posY.current - enemy.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 1) {
        // Try to move toward player, but check for wall collision
        const stepX = (dx / dist) * enemy.speed;
        const stepY = (dy / dist) * enemy.speed;
        const nextX = enemy.x + stepX;
        const nextY = enemy.y + stepY;
        if (isWalkable(nextX, enemy.y)) {
          enemy.x = nextX;
        }
        if (isWalkable(enemy.x, nextY)) {
          enemy.y = nextY;
        }
      }
    });
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
  
    // Draw enemies as projected sprites in the 3D view
    enemiesRef.current.forEach((enemy: Enemy) => {
      if (!enemy.alive) return;
      if (!isEnemyVisible(enemy)) return;
      // Vector from player to enemy
      const dx = enemy.x - posX.current;
      const dy = enemy.y - posY.current;
      // Player direction vector
      const dirX = Math.cos(dir.current);
      const dirY = Math.sin(dir.current);
      // Camera plane (perpendicular to direction)
      const planeX = -dirY;
      const planeY = dirX;
      // Transform enemy position to camera space
      const invDet = 1.0 / (planeX * dirY - dirX * planeY);
      const relX = dx;
      const relY = dy;
      const transformX = invDet * (dirY * relX - dirX * relY);
      const transformY = invDet * (-planeY * relX + planeX * relY);
      // Only draw if in front of player
      if (transformY > 0) {
        // Projected X position on screen
        const enemyScreenX = Math.floor((width / 2) * (1 + transformX / transformY));
        // Scale size by distance, clamp to minimum
        const rawSize = Math.abs(Math.floor(height / transformY));
        const enemySize = Math.max(rawSize, 20);
        // Animation frame based on global tick
        const frame = Math.floor((enemyAnimTick / 1) % 3);
        const sprite = enemySprites[frame].current;
        if (sprite) {
          ctx.drawImage(
            sprite,
            enemyScreenX - enemySize / 2,
            height / 2 - enemySize / 2,
            enemySize,
            enemySize
          );
        }
      }
    });
  
    const image = isFiringRef.current ? gunFireImage.current : gunIdleImage.current;
    if (!image) return;
  
    // Center the gun at the bottom of the screen
    const gunX = width / 2 - image.width / 2;
    const gunY = height - image.height + 20;
    ctx.drawImage(image, gunX, gunY);
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
      spawnEnemies(3); // For first round, 3 enemies
      requestAnimationFrame(loop);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const idleImg = new Image();
    const fireImg = new Image();

    idleImg.src = '/shotgun_idle.png';
    fireImg.src = '/shotgun_fire.png';

    idleImg.onload = () => {
      gunIdleImage.current = idleImg;
    };
    
    fireImg.onload = () => {
      gunFireImage.current = fireImg;
    };    

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx?.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
      
    const keyDownHandler = (e: KeyboardEvent) => {
      if (!playing) return;

      if (e.key === 'Escape') {
        running.current = false;
        setPlaying(false);
        document.body.style.overflow = '';
        return;
      }

      if (e.code === 'Space') {
        if (isFiringRef.current) return;
        isFiringRef.current = true;
        setIsFiring(true);
        setGunFrameIndex(1);
        setTimeout(() => {
          isFiringRef.current = false;
          setIsFiring(false);
          setGunFrameIndex(0);
        }, 100);
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

    // Preload enemy sprite images
    const files = ['/enemy_1.png', '/enemy_2.png', '/enemy_3.png'];
    files.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        enemySprites[i].current = img;
      };
    });

    // Animation timer for enemy walking
    const interval = setInterval(() => setEnemyAnimTick((tick: number) => tick + 1), 200);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      document.body.style.overflow = '';
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, [playing]);

  // Helper: Get all valid spawn points (open tiles, not near player)
  function getValidSpawnPoints(): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        if (
          map[y][x] === 0 &&
          Math.abs(x * tileSize - posX.current) > tileSize * 2 &&
          Math.abs(y * tileSize - posY.current) > tileSize * 2
        ) {
          points.push({
            x: x * tileSize + tileSize / 2,
            y: y * tileSize + tileSize / 2,
          });
        }
      }
    }
    return points;
  }

  // Modified spawnEnemies to use fixed spawn points and spread out enemies
  function spawnEnemies(count: number) {
    const spawnPoints = getValidSpawnPoints();
    const newEnemies: Enemy[] = [];
    const usedIndices = new Set<number>();
    let attempts = 0;
    for (let i = 0; i < count && spawnPoints.length > 0; i++) {
      let idx;
      let valid = false;
      let tryCount = 0;
      while (!valid && tryCount < 100) {
        idx = Math.floor(Math.random() * spawnPoints.length);
        const { x, y } = spawnPoints[idx];
        valid = true;
        for (const enemy of newEnemies) {
          const dist = Math.hypot(enemy.x - x, enemy.y - y);
          if (dist < MIN_SPAWN_DIST) {
            valid = false;
            break;
          }
        }
        tryCount++;
      }
      usedIndices.add(idx!);
      const { x, y } = spawnPoints[idx!];
      newEnemies.push({
        x,
        y,
        speed: 0.1 + Math.random() * 0.1, // Slower speed
        alive: true,
        frame: 0,
      });
    }
    enemiesRef.current = newEnemies;
    setEnemies(newEnemies);
  }

  // Helper: Check if a position is walkable
  function isWalkable(x: number, y: number): boolean {
    const tileX = Math.floor(x / tileSize);
    const tileY = Math.floor(y / tileSize);
    return (
      tileX >= 0 && tileX < mapWidth &&
      tileY >= 0 && tileY < mapHeight &&
      map[tileY][tileX] === 0
    );
  }

  // Helper: Raycast from player to enemy to check for wall occlusion
  function isEnemyVisible(enemy: Enemy): boolean {
    const dx = enemy.x - posX.current;
    const dy = enemy.y - posY.current;
    const dist = Math.hypot(dx, dy);
    const steps = Math.ceil(dist / 4); // step size: 4px
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = posX.current + dx * t;
      const y = posY.current + dy * t;
      const tileX = Math.floor(x / tileSize);
      const tileY = Math.floor(y / tileSize);
      if (
        tileX < 0 || tileX >= mapWidth ||
        tileY < 0 || tileY >= mapHeight
      ) {
        return false;
      }
      if (map[tileY][tileX] > 0) {
        return false; // Wall blocks view
      }
    }
    return true;
  }

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
      {/* {playing && (
        <img
          src={gunFrame === 'fire' ? '/shotgun_fire.png' : '/shotgun_idle.png'}
          alt="Gun"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '75%',
            transform: 'translateX(-75%)',
            width: '200px',
            zIndex: 5,
            pointerEvents: 'none',
            transition: 'filter 0.1s ease',
          }}
        />
      )} */}
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
