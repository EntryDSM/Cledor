import * as React from 'react';
import * as S from './styles';
import Message from '../../entities/Message';
import MessageWrapper from '../MessageWrapper';

interface MessagesBoardProps {
  messages: Message[];
}

export default class MessagesBoard extends React.Component<MessagesBoardProps> {
  private bottomOfBoard = React.createRef<HTMLDivElement>();

  componentDidUpdate() {
    this.bottomOfBoard.current && this.bottomOfBoard.current.scrollIntoView();
  }

  render() {
    const { messages } = this.props;

    const wrappedMessages = messages.map(
      ({ content, encodedImageData, isAdmin, _id, sendedAt }) => {
        return (
          <MessageWrapper
            key={_id}
            sendedAt={sendedAt}
            isAdmin={isAdmin}
            encodedImageData={encodedImageData}
            content={content}
          />
        );
      },
    );

    return (
      <S.ChatBoardCover>
        {wrappedMessages}
        <S.BottomOfBoard ref={this.bottomOfBoard} />
      </S.ChatBoardCover>
    );
  }
}
