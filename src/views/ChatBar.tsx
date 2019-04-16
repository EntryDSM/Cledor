import * as React from 'react';
import { Key } from 'ts-keycode-enum';
import {
  ChatBarContainerCover,
  MessegeTextarea,
  UploadImageButton,
  SendMessegeButton,
  HiddenFileInput,
  FileInputLabel,
} from './styled-components/ChatBar';

interface ChatBarProps {
  send: (content: string, imageData?: File) => void;
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

  private get isEmptyContent() {
    const { content } = this.state;
    return !content;
  }

  private handleTextareaChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ content: value });
  }

  private handleTextareaKeyDown = ({
    ctrlKey,
    keyCode,
  }: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (ctrlKey && keyCode === Key.Enter && !this.isEmptyContent) {
      this.send();
    }
  }

  private send = (file?: File) => {
    const { send } = this.props;
    const { content } = this.state;
    send(content, file);
    this.setState({ content: '' });
  }

  private handleUploadImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length > 0) {
      this.send(files[0]);
    }
  }

  private handleSendMessage = () => {
    this.send();
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
        <MessegeTextarea
          placeholder="메시지를 입력해주세요"
          maxRows={6}
          value={this.state.content}
          onChange={this.handleTextareaChange}
          onKeyDown={this.handleTextareaKeyDown}
        />
        <SendMessegeButton onClick={this.handleSendMessage} />
      </ChatBarContainerCover>
    );
  }
}
