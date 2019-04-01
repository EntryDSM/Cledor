import * as React from 'react';
import Messege from '../entities/Messege';

export interface ChatBoardProps {
  messege?: Messege[];
}

// tslint:disable-next-line: variable-name
const ChatBoard: React.FC<ChatBoardProps> = (_props: ChatBoardProps) => {
  return <div />;
};

export default ChatBoard;
