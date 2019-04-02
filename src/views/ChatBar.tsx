import * as React from 'react';
import {
  ChatBarContainerCover,
  MessegeTextarea,
  UploadImageButton,
  SendMessegeButton,
} from './styled-components/ChatBar';

interface ChatBarProps {
  send: (content: string, imageData: File) => void;
}

interface ChatBarState {
  content: string;
  imageData: File;
}

export default class ChatBar extends React.Component<
  ChatBarProps,
  ChatBarState
> {
  constructor(props: ChatBarProps) {
    super(props);

    // this.state = {};
  }

  public render() {
    return (
      <ChatBarContainerCover>
        <UploadImageButton />
        <MessegeTextarea placeholder="메시지를 입력해주세요" maxRows={6} />
        <SendMessegeButton />
      </ChatBarContainerCover>
    );
  }
}
