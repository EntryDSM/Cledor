import * as React from 'react';
import LauncherButton from './LauncherButton';
import ChatContainer from './ChatContainer';
import { MainContainerCover } from './styled-components/MainContainer';

export interface MainContainerProps {
  appKey: string;
}

export interface MainContainerState {
  onChat: Boolean;
}

export default class MainContainer extends React.Component<
  MainContainerProps,
  MainContainerState
> {
  constructor(props: MainContainerProps) {
    super(props);

    this.state = {
      onChat: false,
    };
  }

  private openChat = () => this.setState({ onChat: true });

  private closeChat = () => this.setState({ onChat: false });

  public render() {
    const { onChat } = this.state;
    const currentPage = onChat ? (
      <ChatContainer onClose={this.closeChat} />
    ) : (
      <LauncherButton onClick={this.openChat} />
    );
    return <MainContainerCover>{currentPage}</MainContainerCover>;
  }
}
