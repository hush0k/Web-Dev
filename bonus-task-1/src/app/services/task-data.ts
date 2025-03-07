export interface TaskItem {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  isCompleted: boolean;
  deadline: Date;
}

