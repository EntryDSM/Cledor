import * as React from 'react';
import {
  ChatBarContainerCover,
  MessegeTextarea,
  UploadImageButton,
  SendMessegeButton,
  HiddenFileInput,
  FileInputLabel,
} from './styled-components/ChatBar';

interface ChatBarProps {
  send: (content: string, imageData: File) => void;
}

interface ChatBarState {
  content: string;
}

export default class ChatBar extends React.Component<
  ChatBarProps,
  ChatBarState
> {
  constructor(props: ChatBarProps) {
    super(props);

    this.state = {
      content: '',
    };
  }

  private handleUploadImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) {
      const { send } = this.props;
      const { content } = this.state;
      send(content, files[0]);
    }
  }

  public render() {
    return (
      <ChatBarContainerCover>
        <UploadImageButton>
          <FileInputLabel htmlFor="upload-image" />
        </UploadImageButton>
        <HiddenFileInput
          type="file"
          id="upload-image"
          onChange={this.handleUploadImage}
        />
        <MessegeTextarea placeholder="메시지를 입력해주세요" maxRows={6} />
        <SendMessegeButton />
      </ChatBarContainerCover>
    );
  }
}
