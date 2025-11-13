'use client';

import { useState } from 'react';
import { addWeeks, subWeeks, format } from 'date-fns';
import WeekView from './WeekView'; // Change to default import
import TaskForm from './TaskForm'; // Change to default import
import { useTasks } from '@/hooks/useTasks';
import { Task } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  
  const { tasks, addTask, moveTask, loading } = useTasks();

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const prevWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleAddTask = async (taskData: Omit<Task, 'id'>) => {
    await addTask(taskData);
    setShowTaskForm(false);
  };

  const handleTaskDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
  };

  const handleDrop = async (date: Date, timeSlot: string) => {
    if (draggedTask) {
      const [hours, minutes] = timeSlot.split(':').map(Number);
      const newStartTime = new Date(date);
      newStartTime.setHours(hours, minutes, 0, 0);
      
      const duration = draggedTask.endTime.getTime() - draggedTask.startTime.getTime();
      const newEndTime = new Date(newStartTime.getTime() + duration);
      
      await moveTask(draggedTask.id, newStartTime, newEndTime);
    }
  };

  if (loading) {
    return (
      <motion.div 
        className="flex items-center justify-center h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="text-lg flex items-center gap-2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          Loading...
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="p-4 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with animations */}
      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Task Scheduler
        </motion.h1>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <motion.button
              onClick={prevWeek}
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Previous Week
            </motion.button>
            <motion.button
              onClick={nextWeek}
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Week →
            </motion.button>
          </div>
          <motion.button
            onClick={() => setShowTaskForm(true)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            + Add Task
          </motion.button>
        </div>
      </motion.div>

      {/* Current Week Display */}
      <motion.div 
        className="text-lg font-semibold text-center text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {format(currentDate, 'MMMM yyyy')} - Week of {format(currentDate, 'MMM d')}
      </motion.div>

      {/* Task Form Modal with enhanced animations */}
      <AnimatePresence>
        {showTaskForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowTaskForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <TaskForm
                onSubmit={handleAddTask}
                onCancel={() => setShowTaskForm(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendar Grid */}
      <motion.div 
        className="bg-white rounded-lg shadow-lg border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <WeekView
          tasks={tasks}
          currentDate={currentDate}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onDrop={handleDrop}
        />
      </motion.div>

      {/* Legend with animations */}
      <motion.div 
        className="flex gap-4 text-sm justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { status: 'pending', label: 'Pending', color: 'bg-blue-200 border-blue-500' },
          { status: 'completed', label: 'Completed', color: 'bg-green-200 border-green-500' },
          { status: 'overdue', label: 'Overdue', color: 'bg-red-200 border-red-500' },
        ].map((item, index) => (
          <motion.div
            key={item.status}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className={`w-4 h-4 rounded border-l-4 ${item.color}`}
              whileHover={{ scale: 1.2 }}
            />
            <span>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Calendar;