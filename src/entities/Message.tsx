export default class Message {
  id: string;
  content?: string;
  sendedAt?: number;
  isAuthorMe: boolean;
  encodedImageData?: string;
}
