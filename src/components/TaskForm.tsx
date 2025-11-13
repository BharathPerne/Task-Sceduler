'use client';

import { useState, useMemo } from 'react';
import { Task } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id'>) => void;
  onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: formatDate(new Date()),
    startTime: '09:00',
    endTime: '10:00',
    status: 'pending' as 'pending' | 'completed' | 'overdue',
  });

  // Check if the task would be overdue
  const isOverdue = useMemo(() => {
    const endTime = new Date(`${formData.date}T${formData.endTime}`);
    return endTime < new Date();
  }, [formData.date, formData.endTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const startTime = new Date(`${formData.date}T${formData.startTime}`);
    const endTime = new Date(`${formData.date}T${formData.endTime}`);

    // Validate end time is after start time
    if (endTime <= startTime) {
      alert('End time must be after start time');
      return;
    }

    // Auto-set status to overdue if end time is in the past
    const status = endTime < new Date() ? 'overdue' : formData.status;

    onSubmit({
      title: formData.title,
      description: formData.description,
      startTime,
      endTime,
      status,
      color: '#3b82f6',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Add New Task</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="time"
            required
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="time"
            required
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
          />
        </div>
      </div>

      {isOverdue && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="text-red-800 text-sm font-medium">
            ⚠️ This task will be marked as OVERDUE
          </div>
          <div className="text-red-600 text-xs mt-1">
            The end time is in the past. This task is already overdue.
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={isOverdue ? 'overdue' : formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
          disabled={isOverdue}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
        </select>
        {isOverdue && (
          <p className="text-xs text-red-600 mt-1">
            Status automatically set to "Overdue" because the end time has passed
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;