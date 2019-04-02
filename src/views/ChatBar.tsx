import * as React from 'react';

export interface ChatBarProps {
  send: (content: string, imageData: File) => void;
}

export interface ChatBarState {
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
    return <div />;
  }
}
