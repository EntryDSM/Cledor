import * as React from 'react';
// import LauncherButton from './LauncherButton';
import ChatContainer from './ChatContainer';
import { MainContainerCover } from './styled-components/MainContainer';

interface MainContainerProps {
  appKey: string;
}

export default class MainContainer extends React.Component<MainContainerProps> {
  public render() {
    return (
      <MainContainerCover>
        {/* <LauncherButton /> */}
        <ChatContainer />
      </MainContainerCover>
    );
  }
}
