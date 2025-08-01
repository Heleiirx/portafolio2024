'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { hardSkills, softSkills } from '../contexts/skillsData';
import { Skills } from '../utils/types';

const MAX_SIDES = 8;
const SIZE = 280;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 50;

const SkillsSpiderChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft'>('hard');

  const chartData = useMemo(() => {
    const skills = activeTab === 'hard' ? hardSkills : softSkills;
    const angleStep = (2 * Math.PI) / MAX_SIDES;

    // Pad skills to always have 8 points for octagon shape
    let skillsToDraw: Skills[] = skills;
    if (skills.length < MAX_SIDES) {
      const padding: Skills[] = Array(MAX_SIDES - skills.length).fill({ name: '', level: 0 });
      skillsToDraw = [...skills, ...padding];
    }

    const points = skillsToDraw.map((skill, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const r = (skill.level / 5) * RADIUS;
      const x = CENTER + r * Math.cos(angle);
      const y = CENTER + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    const labels = skills.map((skill, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelRadius = RADIUS + 20;
        const x = CENTER + labelRadius * Math.cos(angle);
        const y = CENTER + labelRadius * Math.sin(angle);
        return { x, y, name: skill.name };
    });

    return { points, labels };
  }, [activeTab]);

  const renderGrid = () => {
    const angleStep = (2 * Math.PI) / MAX_SIDES;
    const levels = 5;
    const grid = [];

    // Concentric octagons for grid
    for (let level = 1; level <= levels; level++) {
        const r = (level / levels) * RADIUS;
        const points = Array.from({ length: MAX_SIDES }).map((_, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const x = CENTER + r * Math.cos(angle);
            const y = CENTER + r * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
        grid.push(
          <polygon 
            key={`grid-${level}`} 
            points={points} 
            fill="none" 
            stroke="#e5e7eb" 
            strokeWidth="0.8" 
            opacity="0.6"
          />
        );
    }

    // Lines from center to vertices
    for (let i = 0; i < MAX_SIDES; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const x = CENTER + RADIUS * Math.cos(angle);
        const y = CENTER + RADIUS * Math.sin(angle);
        grid.push(
          <line 
            key={`line-${i}`} 
            x1={CENTER} 
            y1={CENTER} 
            x2={x} 
            y2={y} 
            stroke="#e5e7eb" 
            strokeWidth="0.8" 
            opacity="0.6"
          />
        );
    }

    return grid;
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black uppercase tracking-wider">SKILLS</h2>
      
      {/* Tab buttons - minimalistas */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-md p-1">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'hard' 
                ? 'bg-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            style={{
              color: activeTab === 'hard' ? '#a855f7' : undefined
            }}
            onClick={() => setActiveTab('hard')}
          >
            Hard Skill
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'soft' 
                ? 'bg-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            style={{
              color: activeTab === 'soft' ? '#ec4899' : undefined
            }}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skill
          </button>
        </div>
      </div>

      {/* Spider Chart */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm">
          <svg width="100%" height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="drop-shadow-sm">
            {renderGrid()}
            <motion.polygon
              points={chartData.points}
              fill={activeTab === 'hard' ? "rgba(168, 85, 247, 0.4)" : "rgba(236, 72, 153, 0.4)"}
              stroke={activeTab === 'hard' ? "#a855f7" : "#ec4899"}
              strokeWidth="2.5"
              animate={{ points: chartData.points }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {/* Data points */}
            {chartData.labels.map((label, i) => {
              const skills = activeTab === 'hard' ? hardSkills : softSkills;
              if (i < skills.length) {
                const angleStep = (2 * Math.PI) / MAX_SIDES;
                const angle = angleStep * i - Math.PI / 2;
                const r = (skills[i].level / 5) * RADIUS;
                const pointX = CENTER + r * Math.cos(angle);
                const pointY = CENTER + r * Math.sin(angle);
                
                return (
                  <circle
                    key={`point-${i}`}
                    cx={pointX}
                    cy={pointY}
                    r="4"
                    fill={activeTab === 'hard' ? "#a855f7" : "#ec4899"}
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              }
              return null;
            })}
            {/* Labels */}
            {chartData.labels.map((label, i) => (
              <text 
                key={`label-${i}`} 
                x={label.x} 
                y={label.y} 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-xs font-medium fill-gray-700"
                style={{ fontSize: '11px' }}
              >
                {label.name}
              </text>
            ))}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-4">
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-2">
            {activeTab === 'hard' ? 'Hard Skills' : 'Soft Skills'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSpiderChart;