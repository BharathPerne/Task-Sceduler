export interface Task {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'completed' | 'overdue';
  color: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  status: 'pending' | 'completed' | 'overdue';
  color: string;
}