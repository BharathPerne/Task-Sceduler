'use client';

import { motion } from 'framer-motion';
import { Task as TaskType } from '@/lib/types';
import { getStatusColor, formatTime } from '@/lib/utils';
import { useState } from 'react';

interface TaskProps {
  task: TaskType;
  onDragStart: (task: TaskType) => void;
  onDragEnd: () => void;
  isDragging?: boolean;
}

const Task: React.FC<TaskProps> = ({ task, onDragStart, onDragEnd, isDragging = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isOverdue = task.status === 'overdue';

  const handleDragStart = (event: any) => {
    // Set data for HTML5 drag and drop
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', task.id);
    }
    onDragStart(task);
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  return (
    <motion.div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`
        p-2 rounded-lg border-l-4 cursor-grab text-sm relative
        ${getStatusColor(task.status)}
        hover:shadow-md transition-all
        ${isOverdue ? 'animate-pulse' : ''}
        ${isDragging ? 'shadow-xl scale-105 z-50' : ''}
      `}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ 
        scale: 1.05,
        cursor: 'grabbing'
      }}
      layout
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
    >
      {/* Overdue indicator with animation */}
      {isOverdue && (
        <motion.div 
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Task content */}
      <motion.div
        animate={{
          opacity: isDragging ? 0.8 : 1,
        }}
      >
        <div className="font-medium truncate">{task.title}</div>
        <div className="text-xs text-gray-600">
          {formatTime(task.startTime)} - {formatTime(task.endTime)}
          {isOverdue && (
            <motion.span 
              className="text-red-600 ml-1 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              • OVERDUE
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Enhanced Tooltip */}
      {showTooltip && (
        <motion.div
          className="absolute z-50 p-3 bg-white border border-gray-200 rounded-lg shadow-xl max-w-xs"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0 
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          style={{
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
          }}
        >
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
          
          <h4 className="font-semibold text-sm mb-1">{task.title}</h4>
          <p className="text-xs text-gray-600 mb-2">{task.description}</p>
          <div className="text-xs space-y-1">
            <div>🕐 {formatTime(task.startTime)} - {formatTime(task.endTime)}</div>
            <div className={`capitalize ${isOverdue ? 'text-red-600 font-semibold' : ''}`}>
              📊 Status: {task.status}
              {isOverdue && ' (Past due)'}
            </div>
            {isOverdue && (
              <motion.div 
                className="text-red-600 text-xs mt-1 p-1 bg-red-50 rounded border border-red-200"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                ⚠️ This task should have been completed already
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Task;