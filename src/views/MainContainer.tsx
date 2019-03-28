import * as React from 'react';
import LauncherButton from './LauncherButton';
import ChatContainer from './ChatContainer';

export interface MainContainerProps {
  appKey: string;
}

export default class MainContainer extends React.Component<MainContainerProps> {
  public render() {
    const { appKey } = this.props;
    return (
      <>
        <LauncherButton appKey={appKey} />
        <ChatContainer />
      </>
    );
  }
}
