// TypeScript types for Prisma schema

// Enum for Provider
export enum Provider {
    Google = 'Google',
    Wallet = 'Wallet',
  }
  
  // Enum for TaskStatus
  export enum TaskStatus {
    Done = 'Done',
    Pending = 'Pending',
  }
  
  // Interface for User
  export type User = {
    userId: number;
    username?: string;
    email?: string;
    publicKey: string;
    balance: number;
    picture: string;
    provider: Provider;
    tasks?: TaskType[]; // Relation to TaskParticipant
    createdTasks?: TaskType[]; // Relation to Task
    TaskParticipant?: TaskParticipant[]; // Relation to TaskParticipant
    TaskResult?: TaskResult[]; // Relation to TaskResult
  }
  
  // Interface for Task
  export type TaskType = {
    taskId: number;
    name: string;
    description?: string;
    participants?: TaskParticipant[]; // Relation to TaskParticipant
    results?: TaskResult[]; // Relation to TaskResult
    time: number; // Store number of seconds
    status?: TaskStatus;
    creatorPublicKey: string
  }
  
  // Interface for TaskParticipant
  export interface TaskParticipant {
    taskId: number;
    userId: number;
    amount: number;
    user: User; // Relation to User
    task: TaskType; // Relation to Task
  }
  
  // Interface for TaskResult
  export interface TaskResult {
    taskId: number;
    userId: number;
    result: boolean;
    user: User; // Relation to User
    task: TaskType; // Relation to Task
  }
  

export type ResType = {
  valid: boolean
  msg: string
}