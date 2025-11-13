import { addDays, startOfWeek, format, isSameDay, isToday, isPast, isFuture, startOfDay } from 'date-fns';

export const getWeekDays = (date: Date = new Date()): Date[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 }); // Monday
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
};

export const timeSlots = Array.from({ length: 14 }, (_, i) => {
  const hour = 8 + i; // 8 AM to 9 PM
  return `${hour.toString().padStart(2, '0')}:00`;
});

export const getStatusColor = (status: 'pending' | 'completed' | 'overdue') => {
  switch (status) {
    case 'completed': return 'bg-green-200 border-green-500';
    case 'overdue': return 'bg-red-200 border-red-500';
    default: return 'bg-blue-200 border-blue-500';
  }
};

export const formatTime = (date: Date): string => {
  return format(date, 'HH:mm');
};

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const isSameTimeSlot = (date1: Date, date2: Date): boolean => {
  return (
    isSameDay(date1, date2) &&
    date1.getHours() === date2.getHours() &&
    date1.getMinutes() === date2.getMinutes()
  );
};

// New utility functions for time-based styling
export const getTimeSlotStatus = (date: Date, timeSlot: string, currentTime: Date) => {
  const [hours] = timeSlot.split(':').map(Number);
  const slotTime = new Date(date);
  slotTime.setHours(hours, 0, 0, 0);
  
  const isPastTime = isPast(slotTime) && !isToday(slotTime);
  const isPastToday = isPast(slotTime) && isToday(slotTime);
  const isFutureTime = isFuture(slotTime);
  
  return {
    isPast: isPastTime,
    isPastToday,
    isFuture: isFutureTime,
    isCurrentDay: isToday(date),
    slotTime
  };
};

// export const getCurrentTimePosition = (date: Date, currentTime: Date) => {
//   if (!isToday(date)) return null;
  
//   const startOfToday = startOfDay(currentTime);
//   const minutesFromStart = (currentTime.getTime() - startOfToday.getTime()) / (1000 * 60);
//   const position = (minutesFromStart / (24 * 60)) * 100; // Percentage of day
  
//   return position;
// };



export const getCurrentTimePosition = (date: Date, currentTime: Date): number | null => {
  if (!isToday(date)) return null;
  
  const startOfToday = startOfDay(currentTime);
  
  // Adjust for your time slot range (8:00 AM to 9:00 PM)
  const startHour = 8; // 8 AM
  const endHour = 23.3; // 9 PM
  const totalMinutesInView = (endHour - startHour) * 60; // 13 hours * 60 = 780 minutes
  
  // Calculate minutes from start of viewing hours (8:00 AM)
  const minutesFromStartOfDay = (currentTime.getTime() - startOfToday.getTime()) / (1000 * 60);
  const minutesFromStartOfView = minutesFromStartOfDay - (startHour * 60);
  
  // If current time is outside viewing hours, return null
  if (minutesFromStartOfView < 0 || minutesFromStartOfView > totalMinutesInView) {
    return null;
  }
  
  // Calculate position as percentage of viewing hours (8 AM to 9 PM)
  const position = (minutesFromStartOfView / totalMinutesInView) * 100;
  
  return Math.max(0, Math.min(100, position)); // Clamp between 0-100%
};