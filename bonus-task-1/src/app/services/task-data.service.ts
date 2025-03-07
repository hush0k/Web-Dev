import { Injectable } from '@angular/core';
import { TaskItem } from './task-data';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private tasks: TaskItem[] = [];

  constructor() {
    this.loadTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  getTasks(): TaskItem[] {
    return this.tasks;
  }

  addTask(task: TaskItem): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  toggleTaskCompletion(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.saveTasks();
    }
  }

  getTaskById(id: number): TaskItem | undefined {
    return this.tasks.find(task => task.id === id);
  }
}
