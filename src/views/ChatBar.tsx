import * as React from 'react';

export interface ChatBarProps {
  send: (content: String, imageData: File) => void;
}

export interface ChatBarState {
  content: String;
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
