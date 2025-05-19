'use client';
import React from 'react';

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

  // Audio refs
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const shootSoundRef = useRef<HTMLAudioElement | null>(null);
  const deathSoundRef = useRef<HTMLAudioElement | null>(null);

  const GUN_FRAME_WIDTH = 200;
  const GUN_FRAME_HEIGHT = 200;
  const GUN_ANIMATION_FRAMES = 2;

  const posX = useRef(100);
  const posY = useRef(100);
  const dir = useRef(0);
  const running = useRef(false);
  const keys = useRef<Record<string, boolean>>({});

  // Larger map for a more Doom-like feel
  const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1],
    [1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1],
    [1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
    health: number;
    lastAttackTime?: number;
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

  // Round logic state
  const [round, setRound] = useState(1);
  const [isRoundPopup, setIsRoundPopup] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdownValue, setCountdownValue] = useState(3);
  const [enemiesInRound, setEnemiesInRound] = useState(0);
  const [roundInProgress, setRoundInProgress] = useState(false);
  const currentRoundRef = useRef(1);

  // Player health and game over
  const [playerHealth, setPlayerHealth] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  // Wall and floor textures
  const wallTexture = useRef<HTMLImageElement | null>(null);
  const floorTexture = useRef<HTMLImageElement | null>(null);

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
      if (dist > 40) { // Stop if within 40px
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
      } else {
        // Enemy is close enough to attack
        const now = Date.now();
        if (!enemy.lastAttackTime || now - enemy.lastAttackTime > 1000) {
          enemy.lastAttackTime = now;
          setPlayerHealth((h: number) => {
            if (h > 1) {
              return h - 1;
            } else {
              setIsGameOver(true);
              running.current = false;
              return 0;
            }
          });
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
  
    // Doom-style floor casting, blocky for performance, always underfoot
    if (floorTexture.current) {
      const blockSize = 8; // Increase for more performance, decrease for more detail
      for (let y = Math.floor(height / 2); y < height; y += blockSize) {
        // Perspective math
        const rayDirX0 = Math.cos(dir.current) - Math.sin(dir.current);
        const rayDirY0 = Math.sin(dir.current) + Math.cos(dir.current);
        const rayDirX1 = Math.cos(dir.current) + Math.sin(dir.current);
        const rayDirY1 = Math.sin(dir.current) - Math.cos(dir.current);
        const p = y - height / 2;
        const posZ = 0.5 * height;
        const rowDistance = posZ / p;
        const stepX = rowDistance * (rayDirX1 - rayDirX0) / width;
        const stepY = rowDistance * (rayDirY1 - rayDirY0) / width;
        let floorX = posX.current / tileSize + rowDistance * rayDirX0;
        let floorY = posY.current / tileSize + rowDistance * rayDirY0;
        for (let x = 0; x < width; x += blockSize) {
          const tx = Math.floor((floorX % 1) * floorTexture.current.width);
          const ty = Math.floor((floorY % 1) * floorTexture.current.height);
          ctx.drawImage(
            floorTexture.current,
            tx, ty, 1, 1,
            x, y, blockSize, blockSize
          );
          floorX += stepX * blockSize;
          floorY += stepY * blockSize;
        }
      }
    } else {
      ctx.fillStyle = '#222';
      ctx.fillRect(0, height / 2, width, height / 2);
    }
  
    // Wall rendering with texture
    for (let x = 0; x < width; x++) {
      const rayAngle = dir.current - 0.5 + (x / width);
      const rayX = Math.cos(rayAngle);
      const rayY = Math.sin(rayAngle);

      let distance = 0;
      let hit = false;
      let wallX = 0;
      let mapX = 0;
      let mapY = 0;
      let hitVertical = false;
      while (distance < 300) {
        const testX = Math.floor((posX.current + rayX * distance) / tileSize);
        const testY = Math.floor((posY.current + rayY * distance) / tileSize);
        mapX = testX;
        mapY = testY;
        if (
          testX < 0 ||
          testX >= mapWidth ||
          testY < 0 ||
          testY >= mapHeight ||
          map[testY][testX] > 0
        ) {
          // Determine if hit was vertical or horizontal
          const prevX = posX.current + rayX * (distance - 1);
          const prevY = posY.current + rayY * (distance - 1);
          const prevTileX = Math.floor(prevX / tileSize);
          const prevTileY = Math.floor(prevY / tileSize);
          hitVertical = (prevTileX !== testX);
          hit = true;
          break;
        }
        distance += 1;
      }

      const wallHeight = Math.min(height, (tileSize * 400) / (distance || 1));
      // Clamp wall height to reduce stretching up close
      const clampedWallHeight = Math.min(wallHeight, height * 2);
      const drawStart = Math.floor((height - clampedWallHeight) / 2);
      if (hit && wallTexture.current) {
        // Use correct coordinate for texture sampling
        let wallHitCoord;
        if (hitVertical) {
          // Hit a vertical wall, use Y coordinate
          wallHitCoord = (posY.current + rayY * distance) / tileSize;
        } else {
          // Hit a horizontal wall, use X coordinate
          wallHitCoord = (posX.current + rayX * distance) / tileSize;
        }
        wallHitCoord = wallHitCoord - Math.floor(wallHitCoord);
        const textureX = Math.floor(wallHitCoord * wallTexture.current.width) % wallTexture.current.width;
        ctx.drawImage(
          wallTexture.current,
          textureX, 0, 1, wallTexture.current.height,
          x, drawStart, 1, clampedWallHeight
        );
      } else {
        // fallback: solid color
        ctx.fillStyle = `rgb(${255 - distance}, ${255 - distance}, ${255 - distance})`;
        ctx.fillRect(x, drawStart, 1, clampedWallHeight);
      }
    }
  
    // Sort enemies by distance (far to near)
    type ProjectedEnemy = { enemy: Enemy; screenX: number; size: number; drawStartY: number; transformY: number };
    const visibleEnemies: ProjectedEnemy[] = enemiesRef.current
      .filter((enemy: Enemy) => enemy.alive && isEnemyVisible(enemy))
      .map((enemy: Enemy) => {
        const proj = projectEnemy(enemy);
        return proj ? { enemy, ...proj } : null;
      })
      .filter(Boolean) as ProjectedEnemy[];
    visibleEnemies.sort((a: ProjectedEnemy, b: ProjectedEnemy) => b.transformY - a.transformY);

    visibleEnemies.forEach(({ enemy, screenX, size }: ProjectedEnemy) => {
      // Animation frame based on global tick
      const frame = Math.floor((enemyAnimTick / 1) % 3);
      const sprite = enemySprites[frame].current;
      // Dramatically increase enemy height (even larger scaling)
      const tallSize = Math.max(Math.min(size * 8.0, 900), 64);
      if (sprite) {
        ctx.drawImage(
          sprite,
          screenX - tallSize / 2,
          height - tallSize, // feet at bottom of screen
          tallSize,
          tallSize
        );
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
    if (!running.current || isGameOver) return;
    update();
    draw();
    requestAnimationFrame(loop);
  };

  const handleClickToStart = () => {
    if (isGameOver) {
      resetGame();
      document.body.style.overflow = 'hidden';
      return;
    }
    if (!playing) {
      setPlaying(true);
      running.current = true;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(loop);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Preload wall and floor textures
    const wallImg = new window.Image();
    wallImg.src = '/T_Cave.png';
    wallImg.onload = () => {
      wallTexture.current = wallImg;
    };
    const floorImg = new window.Image();
    floorImg.src = '/T_Dirt.png';
    floorImg.onload = () => {
      floorTexture.current = floorImg;
    };

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
      if (!playing || isGameOver) return;

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
        // Play shoot sound
        if (shootSoundRef.current) {
          shootSoundRef.current.currentTime = 0;
          shootSoundRef.current.play();
        }
        // --- Shooting logic ---
        // Cast a ray from player forward
        const shootAngle = dir.current;
        let closestEnemy: Enemy | null = null;
        let closestDist = Infinity;
        enemiesRef.current.forEach((enemy: Enemy) => {
          if (!enemy.alive) return;
          // Project enemy to screen
          const proj = projectEnemy(enemy);
          if (!proj) return;
          // Check if enemy is in the center of the screen (crosshair)
          const crosshairX = width / 2;
          // Use a more generous hitbox (2x sprite width)
          if (
            proj.screenX > crosshairX - proj.size &&
            proj.screenX < crosshairX + proj.size
          ) {
            // Check occlusion (already filtered by visibleEnemies, but double check)
            if (isEnemyVisible(enemy)) {
              // Check distance
              const dx = enemy.x - posX.current;
              const dy = enemy.y - posY.current;
              const dist = Math.hypot(dx, dy);
              if (dist < closestDist) {
                closestDist = dist;
                closestEnemy = enemy;
              }
            }
          }
        });
        if (closestEnemy !== null) {
          (closestEnemy as Enemy).health -= 1;
          // Play death sound only
          if ((closestEnemy as Enemy).health <= 0) {
            (closestEnemy as Enemy).alive = false;
            if (deathSoundRef.current) {
              deathSoundRef.current.currentTime = 0;
              deathSoundRef.current.play();
            }
          }
          setEnemies([...enemiesRef.current]);
        }
        // --- End shooting logic ---
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
      if (isGameOver) return;
      keys.current[e.key] = false;
    };

    if (!isGameOver) {
      window.addEventListener('keydown', keyDownHandler);
      window.addEventListener('keyup', keyUpHandler);
    }

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
  }, [playing, isGameOver]);

  // Preload SFX (top-level useEffect)
  useEffect(() => {
    shootSoundRef.current = new window.Audio('/shoot.mp3');
    deathSoundRef.current = new window.Audio('/death.mp3');
  }, []);

  // Play/pause music on game start/end (top-level useEffect)
  useEffect(() => {
    if (!musicRef.current) {
      musicRef.current = new window.Audio('/music.mp3');
      musicRef.current.loop = true;
      musicRef.current.volume = 0.5;
    }
    if (playing) {
      musicRef.current.currentTime = 0;
      musicRef.current.play();
    } else {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
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
        health: 3,
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

  // Helper: Project enemy to screen and return rendering info
  function projectEnemy(enemy: Enemy) {
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
    if (transformY <= 0) return null;
    // Projected X position on screen
    const enemyScreenX = Math.floor((width / 2) * (1 + transformX / transformY));
    // Scale size by distance, clamp to min and max
    const rawSize = Math.abs(Math.floor(height / transformY));
    const enemySize = Math.max(Math.min(rawSize, 120), 20);
    // Projected floor position (feet at floor)
    const drawStartY = Math.floor(height / 2 + height / (2 * transformY) - enemySize);
    return {
      screenX: enemyScreenX,
      size: enemySize,
      drawStartY: drawStartY,
      transformY: transformY,
    };
  }

  // Helper to start a round
  function startRound(newRound: number) {
    setIsRoundPopup(true);
    const numEnemies = 3 + (newRound - 1) * 2;
    currentRoundRef.current = newRound;
    setTimeout(() => {
      setIsRoundPopup(false);
      spawnEnemies(numEnemies);
      setEnemiesInRound(numEnemies);
      setRoundInProgress(true);
    }, 1200);
  }

  // On game start, start round 1
  useEffect(() => {
    if (playing) {
      setRound(1);
      setTimeout(() => startRound(1), 300);
    }
  }, [playing]);

  // Watch for all enemies dead to trigger next round (robust)
  useEffect(() => {
    if (!playing) return;
    if (enemiesInRound === 0) return;
    if (!roundInProgress) return;
    if (currentRoundRef.current !== round) return;
    const deadCount = enemies.filter((e: Enemy) => !e.alive).length;
    if (deadCount === enemiesInRound && !isCountdown && !isRoundPopup) {
      setIsCountdown(true);
      setCountdownValue(3);
      setRoundInProgress(false);
    }
  }, [enemies, isCountdown, isRoundPopup, playing, round, enemiesInRound, roundInProgress]);

  // Robust countdown effect
  useEffect(() => {
    if (!isCountdown) return;
    if (countdownValue > 0) {
      const timeout = setTimeout(() => {
        setCountdownValue((v: number) => v - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (countdownValue === 0) {
      setIsCountdown(false);
      setRound((r: number) => {
        const nextRound = r + 1;
        setTimeout(() => startRound(nextRound), 200);
        return nextRound;
      });
    }
  }, [isCountdown, countdownValue]);

  // Reset game state for restart
  function resetGame() {
    setPlayerHealth(3);
    setIsGameOver(false);
    setRound(1);
    setEnemies([]);
    enemiesRef.current = [];
    setEnemiesInRound(0);
    setRoundInProgress(false);
    setIsRoundPopup(false);
    setIsCountdown(false);
    setCountdownValue(3);
    setGunFrameIndex(0);
    setIsFiring(false);
    isFiringRef.current = false;
    posX.current = 100;
    posY.current = 100;
    dir.current = 0;
    keys.current = {};
    running.current = false;
    setTimeout(() => {
      setPlaying(true);
      running.current = true;
      setTimeout(() => startRound(1), 300);
      requestAnimationFrame(loop);
    }, 100);
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
      {isRoundPopup && (
        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-3xl font-bold z-20">
          Round {round}
        </div>
      )}
      {isCountdown && (
        <div className="absolute inset-0 bg-black/70 text-white flex items-center justify-center text-2xl font-bold z-20">
          Next round in {countdownValue}...
        </div>
      )}
      {/* Player health UI */}
      {playing && !isGameOver && (
        <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded z-20 text-lg font-bold">
          Health: {playerHealth}
        </div>
      )}
      {/* Game Over overlay */}
      {isGameOver && (
        <div className="absolute inset-0 bg-black/80 text-white flex items-center justify-center flex-col z-30">
          <div className="text-4xl font-bold mb-4">Game Over</div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-2xl mt-2"
            onClick={handleClickToStart}
          >
            Click to Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default DoomLikeGame;
