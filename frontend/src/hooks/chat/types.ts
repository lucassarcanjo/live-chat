export enum MessageType {
  UserMessage = "UserMessage",
  UserJoin = "Joined the chat",
  UserLeave = "Left the chat",
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
  type: MessageType.UserJoin;
}

export interface LeaveMessage {
  user: string;
  timestamp: number;
  type: MessageType.UserLeave;
}

export type ChatMessage = UserMessage | EnterMessage | LeaveMessage;
