
"use client"
import React, { useEffect, useState } from 'react';
import './CursorTrail.css';

const DISTANCE = 20;

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail];
        const newPos = {
          x: e.clientX,
          y: e.clientY,
          key: Date.now(),
        };

        if (newTrail.length === 0) {
          newTrail.push(newPos);
        } else {
          const lastPos = newTrail[newTrail.length - 1];
          const distance = Math.sqrt(
            (e.clientX - lastPos.x) ** 2 + (e.clientY - lastPos.y) ** 2
          );
          
          if (distance > DISTANCE) {
            newTrail.push(newPos);
          }
        }

        if (newTrail.length > 50) { 
          newTrail.shift();
        }

        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="trail-container">
      {trail.map((pos, index) => (
        <span
          key={pos.key}
          className="trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: `translate(-50%, -50%)`,
            opacity: 1 - index / trail.length,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </span>
      ))}
    </div>
  );
};

export default CursorTrail;
