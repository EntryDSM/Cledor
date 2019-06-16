import * as React from 'react';
import { Key } from 'ts-keycode-enum';
import * as S from './styles';
import EmailInput from '../EmailInput';

interface ChatBarProps {
  send: (content: string, imageData?: File) => void;
  onChangeEmail: (email: string) => void;
  email: string;
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

  private handleTextareaKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    const { shiftKey, altKey, ctrlKey, keyCode } = event;
    if (
      keyCode === Key.Enter &&
      !(shiftKey || altKey || ctrlKey) &&
      !this.isEmptyContent
    ) {
      this.send();
      event.preventDefault();
    }
  }

  private send = (file?: File) => {
    const { send } = this.props;
    const { content } = this.state;
    send(content.trim(), file);
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
    const { email, onChangeEmail } = this.props;
    if (email === '') return <EmailInput onSubmit={onChangeEmail} />;

    return (
      <S.ChatableBar>
        <S.UploadImageButton>
          <S.FileInputLabel htmlFor="upload-image" />
        </S.UploadImageButton>
        <S.HiddenFileInput
          type="file"
          id="upload-image"
          onChange={this.handleUploadImage}
        />
        <S.MessegeTextarea
          placeholder="메시지를 입력해주세요"
          maxRows={6}
          value={this.state.content}
          onChange={this.handleTextareaChange}
          onKeyDown={this.handleTextareaKeyDown}
          autoFocus
        />
        <S.SendMessegeButton onClick={this.handleSendMessage} />
      </S.ChatableBar>
    );
  }
}
