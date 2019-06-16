import * as React from 'react';
import * as S from './styles';
import Message from '../../entities/Message';
import MessageWrapper from '../MessageWrapper';
import LightBox from '../LightBox';

interface MessagesBoardProps {
  messages: Message[];
}

interface MessagesBoardState {
  imageSrc?: string;
}

export default class MessagesBoard extends React.Component<
  MessagesBoardProps,
  MessagesBoardState
> {
  private bottomOfBoard = React.createRef<HTMLDivElement>();

  constructor(props: MessagesBoardProps) {
    super(props);

    this.state = {
      imageSrc: undefined,
    };
  }

  componentDidUpdate() {
    this.bottomOfBoard.current && this.bottomOfBoard.current.scrollIntoView();
  }

  handleClickImage = (imageSrc: string) => {
    this.setState({ imageSrc });
  }

  closeLightBox = () => {
    this.setState({ imageSrc: undefined });
  }

  render() {
    const { messages } = this.props;
    const { imageSrc } = this.state;

    const wrappedMessages = messages.map(
      ({ content, encodedImageData, isAdmin, _id, sendedAt }) => {
        return (
          <MessageWrapper
            key={_id}
            sendedAt={sendedAt}
            isAdmin={isAdmin}
            encodedImageData={encodedImageData}
            content={content}
            onClickImage={this.handleClickImage}
          />
        );
      },
    );

    return (
      <S.ChatBoardCover>
        {imageSrc && (
          <LightBox imageSrc={imageSrc} onClose={this.closeLightBox} />
        )}
        {wrappedMessages}
        <S.BottomOfBoard ref={this.bottomOfBoard} />
      </S.ChatBoardCover>
    );
  }
}
