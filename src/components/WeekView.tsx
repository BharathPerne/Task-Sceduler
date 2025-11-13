'use client';

import { Task } from '@/lib/types';
import { isSameDay, format, isToday, isPast, startOfDay } from 'date-fns';
import TaskComponent from './Task';
import { getWeekDays, timeSlots, getTimeSlotStatus, getCurrentTimePosition } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WeekViewProps {
  tasks: Task[];
  currentDate: Date;
  onTaskDragStart: (task: Task) => void;
  onTaskDragEnd: () => void;
  onDrop: (date: Date, timeSlot: string) => void;
}

const WeekView: React.FC<WeekViewProps> = ({
  tasks,
  currentDate,
  onTaskDragStart,
  onTaskDragEnd,
  onDrop,
}) => {
  const weekDays = getWeekDays(currentDate);
  const [dragOverSlot, setDragOverSlot] = useState<{ dayIndex: number; timeSlot: string } | null>(null);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleDragOver = (e: React.DragEvent, dayIndex: number, timeSlot: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSlot({ dayIndex, timeSlot });
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = (e: React.DragEvent, date: Date, timeSlot: string, dayIndex: number) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    setDragOverSlot(null);
    onDrop(date, timeSlot);
  };

  const handleTaskDragStart = (task: Task) => {
    setDraggedTask(task);
    onTaskDragStart(task);
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    onTaskDragEnd();
  };

  const getTasksForTimeSlot = (date: Date, timeSlot: string) => {
    const [hours] = timeSlot.split(':').map(Number);
    return tasks.filter(task => {
      const taskStart = task.startTime;
      return isSameDay(taskStart, date) && taskStart.getHours() === hours;
    });
  };

  const isDragOverSlot = (dayIndex: number, timeSlot: string) => {
    return dragOverSlot?.dayIndex === dayIndex && dragOverSlot?.timeSlot === timeSlot;
  };

  const getDayHeaderClass = (date: Date) => {
    if (isToday(date)) {
      return 'bg-blue-500 text-white';
    }
    if (isPast(startOfDay(date)) && !isToday(date)) {
      return 'bg-gray-300 text-gray-600';
    }
    return 'bg-gray-100 text-gray-800';
  };

  const getTimeSlotClass = (date: Date, timeSlot: string) => {
    const status = getTimeSlotStatus(date, timeSlot, currentTime);
    
    if (status.isPast && !status.isPastToday) {
      return 'bg-gray-50 border-gray-200 text-gray-400';
    }
    
    if (status.isPastToday) {
      return 'bg-blue-50 border-blue-200';
    }
    
    if (status.isFuture) {
      return 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-25';
    }
    
    return 'bg-white border-gray-200';
  };

  return (
    <div className="overflow-x-auto relative">
      <div className="min-w-[800px]">
        {/* Header with animation */}
        <motion.div 
          className="grid grid-cols-[100px_repeat(7,1fr)] gap-1 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2"></div>
          {weekDays.map((day, index) => {
            const isDayToday = isToday(day);
            const isDayPast = isPast(startOfDay(day)) && !isDayToday;
            
            return (
              <motion.div 
                key={index} 
                className={`p-3 text-center rounded-lg border-2 transition-all duration-300 ${
                  isDayToday 
                    ? 'border-blue-500 shadow-lg scale-105' 
                    : isDayPast 
                    ? 'border-gray-300' 
                    : 'border-gray-200 hover:border-blue-300'
                } ${getDayHeaderClass(day)}`}
                whileHover={{ scale: isDayToday ? 1.02 : 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="font-semibold text-sm">{format(day, 'EEE')}</div>
                <div className={`text-xs ${isDayToday ? 'text-blue-100' : 'text-gray-600'}`}>
                  {format(day, 'MMM d')}
                </div>
                {isDayToday && (
                  <div className="text-xs text-blue-200 mt-1">Today</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Time Indicator - CORRECTED SECTION */}
        

        {/* Rest of your component remains the same */}
        <div className="space-y-1 relative">
          {timeSlots.map((timeSlot, timeIndex) => (
            <motion.div 
              key={timeSlot} 
              className="grid grid-cols-[100px_repeat(7,1fr)] gap-1 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: timeIndex * 0.05 }}
            >
              <motion.div 
                className="p-2 text-sm text-gray-500 text-right pr-4 sticky left-0 bg-white z-10"
                whileHover={{ scale: 1.05 }}
              >
                {timeSlot}
              </motion.div>
              
              {weekDays.map((day, dayIndex) => {
                const slotTasks = getTasksForTimeSlot(day, timeSlot);
                const isDragOver = isDragOverSlot(dayIndex, timeSlot);
                const timeSlotStatus = getTimeSlotStatus(day, timeSlot, currentTime);
                
                return (
                  <motion.div
                    key={dayIndex}
                    className={`
                      min-h-[80px] border-2 p-1 transition-all duration-200 relative
                      ${getTimeSlotClass(day, timeSlot)}
                      ${isDragOver ? '!border-blue-400 !bg-blue-100 scale-105 z-20' : ''}
                      ${timeSlotStatus.isPastToday ? 'opacity-80' : ''}
                    `}
                    onDragOver={(e) => handleDragOver(e, dayIndex, timeSlot)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, day, timeSlot, dayIndex)}
                    whileHover={{ scale: timeSlotStatus.isFuture ? 1.02 : 1 }}
                    layout
                  >
                    {/* Past time overlay */}
                    {timeSlotStatus.isPast && !timeSlotStatus.isPastToday && (
                      <div className="absolute inset-0 bg-gray-100 bg-opacity-50 pointer-events-none rounded"></div>
                    )}

                    {/* Drop zone highlight animation */}
                    <AnimatePresence>
                      {isDragOver && (
                        <motion.div
                          className="absolute inset-0 border-2 border-dashed border-blue-400 bg-blue-100 bg-opacity-50 rounded pointer-events-none z-10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Current time dot for this specific time slot */}
                    {timeSlotStatus.isPastToday && timeSlotStatus.slotTime.getHours() === currentTime.getHours() && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}

                    {/* Tasks with layout animations */}
                    <AnimatePresence>
                      {slotTasks.map((task) => (
                        <motion.div
                          key={task.id}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            layout: { duration: 0.3 }
                          }}
                        >
                          <TaskComponent
                            task={task}
                            onDragStart={handleTaskDragStart}
                            onDragEnd={handleTaskDragEnd}
                            isDragging={draggedTask?.id === task.id}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Empty slot placeholder */}
                    {slotTasks.length === 0 && !isDragOver && (
                      <motion.div 
                        className="h-full w-full opacity-0 hover:opacity-100 transition-opacity"
                        whileHover={{ opacity: timeSlotStatus.isFuture ? 0.1 : 0.05 }}
                      >
                        <div className={`h-full w-full border-2 border-dashed rounded ${
                          timeSlotStatus.isFuture ? 'border-blue-300' : 'border-gray-300'
                        }`}></div>
                      </motion.div>
                    )}

                    {/* Time slot label for past slots */}
                    {timeSlotStatus.isPast && !timeSlotStatus.isPastToday && (
                      <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center">
                        <span className="text-black text-xs">Past</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <h4 className="font-semibold text-sm mb-3">Time Indicators</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Past Days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-100 border-2 border-blue-200 rounded"></div>
            <span>Past Time (Today)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded"></div>
            <span>Future Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4  bg-red-500 relative">
              <div className="absolute -top-1  w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <span>Current Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekView;