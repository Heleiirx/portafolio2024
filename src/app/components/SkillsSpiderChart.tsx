'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { hardSkills, softSkills } from '../contexts/skillsData';
import { Skills } from '../utils/types';

const MAX_SIDES = 7;
const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 40; // Leave space for labels

const SkillsSpiderChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft'>('hard');

  const chartData = useMemo(() => {
    const skills = activeTab === 'hard' ? hardSkills : softSkills;
    const angleStep = (2 * Math.PI) / MAX_SIDES;

    // Pad soft skills to always have 7 points for smooth animation
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
        const r = RADIUS + 15; // Position labels outside the chart
        const x = CENTER + r * Math.cos(angle);
        const y = CENTER + r * Math.sin(angle);
        return { x, y, name: skill.name };
    });

    return { points, labels };
  }, [activeTab]);

  const renderGrid = () => {
    const angleStep = (2 * Math.PI) / MAX_SIDES;
    const levels = 5;
    const grid = [];

    // Concentric polygons
    for (let level = 1; level <= levels; level++) {
        const r = (level / levels) * RADIUS;
        const points = Array.from({ length: MAX_SIDES }).map((_, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const x = CENTER + r * Math.cos(angle);
            const y = CENTER + r * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
        grid.push(<polygon key={`grid-${level}`} points={points} fill="none" stroke="#e5e7eb" strokeWidth="1" />);
    }

    // Lines from center
    for (let i = 0; i < MAX_SIDES; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const x = CENTER + RADIUS * Math.cos(angle);
        const y = CENTER + RADIUS * Math.sin(angle);
        grid.push(<line key={`line-${i}`} x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" />);
    }

    return grid;
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 my-8 bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-4 border-b-2 pb-2">
        <button
          className={`px-6 py-2 text-lg font-semibold rounded-l-lg transition-colors duration-300 ${activeTab === 'hard' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('hard')}
        >
          Hard Skills
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold rounded-r-lg transition-colors duration-300 ${activeTab === 'soft' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {renderGrid()}
        <motion.polygon
          points={chartData.points}
          fill={activeTab === 'hard' ? "rgba(37, 99, 235, 0.6)" : "rgba(236, 72, 153, 0.6)"}
          stroke={activeTab === 'hard' ? "#1d4ed8" : "#d946ef"}
          strokeWidth="2"
          animate={{ points: chartData.points }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
        {
          chartData.labels.map((label) => (
            <text key={label.name} x={label.x} y={label.y} textAnchor="middle" dy="0.3em" className="text-xs font-medium fill-gray-600">{label.name}</text>
          ))
        }
      </svg>
    </div>
  );
};

export default SkillsSpiderChart;