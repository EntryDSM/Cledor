export default class Message {
  id: string;
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
}
