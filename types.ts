export enum Sender {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  isError?: boolean;
  image?: string; // Base64 data URI
}

export interface AppSettings {
  systemInstruction: string;
  userName: string;
  voiceName: string;
}

export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

// For Live API
export interface LiveConfig {
  model: string;
  systemInstruction?: string;
  voiceName?: string;
}