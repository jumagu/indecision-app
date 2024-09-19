export interface IChatMessage {
  id: number;
  media?: string;
  message: string;
  isSender: boolean;
}
