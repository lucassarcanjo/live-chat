export enum MessageType {
  UserMessage,
  EnterMessage,
  LeaveMessage,
}

export interface UserMessage {
  text: string;
  user: string;
  timestamp: number;
  type: MessageType.UserMessage;
}

export interface EnterMessage {
  user: string;
  timestamp: number;
  type: MessageType.EnterMessage;
}

export interface LeaveMessage {
  user: string;
  timestamp: number;
  type: MessageType.LeaveMessage;
}

export type ChatMessage = UserMessage | EnterMessage | LeaveMessage;
