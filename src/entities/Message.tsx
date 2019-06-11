export default class Message {
  _id: string;
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
}
