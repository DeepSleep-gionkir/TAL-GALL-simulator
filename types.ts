export interface NotificationState {
  id: number;
  message: string;
  subMessage: string;
  type: 'success' | 'info' | 'warning' | 'error' | 'discovery' | 'shout';
}

export enum ActionType {
  LEAVE = 'LEAVE',
  RETURN = 'RETURN',
  PLAY = 'PLAY',
  QUIT = 'QUIT',
  INSIGHT = 'INSIGHT',
  WHINE = 'WHINE'
}