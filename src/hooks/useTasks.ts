import { useState, useEffect } from 'react';
import { Task } from '@/lib/types';
import { taskDB } from '@/lib/database';
import { v4 as uuidv4 } from 'uuid';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const loadedTasks = await taskDB.getAllTasks();
      setTasks(loadedTasks);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...taskData,
      id: uuidv4(),
    };

    try {
      await taskDB.saveTask(newTask);
      setTasks(prev => [...prev, newTask]);
      return newTask;
    } catch (error) {
      console.error('Failed to save task:', error);
      throw error;
    }
  };

  const updateTask = async (updatedTask: Task) => {
    try {
      await taskDB.saveTask(updatedTask);
      setTasks(prev => prev.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      ));
    } catch (error) {
      console.error('Failed to update task:', error);
      throw error;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskDB.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw error;
    }
  };

  const moveTask = async (taskId: string, newStartTime: Date, newEndTime: Date) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const updatedTask: Task = {
      ...task,
      startTime: newStartTime,
      endTime: newEndTime,
    };

    await updateTask(updatedTask);
  };

  return {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
  };
};