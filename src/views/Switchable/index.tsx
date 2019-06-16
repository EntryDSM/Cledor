import * as React from 'react';
import * as S from './styles';

interface SwitchableProps {
  children: (onClose: () => void) => React.ReactNode;
}

interface SwitchableState {
  canChat: boolean;
}

export default class Switchable extends React.Component<
  SwitchableProps,
  SwitchableState
> {
  constructor(props: SwitchableProps) {
    super(props);

    this.state = { canChat: false };
  }

  openContent = () => {
    this.setState({ canChat: true });
  }

  closeContent = () => {
    this.setState({ canChat: false });
  }

  render() {
    const { children } = this.props;
    const { canChat } = this.state;

    return (
      <S.SwitchableContainer canChat={canChat}>
        <S.LauncherButton onClick={this.openContent} />
        <S.Content>{children(this.closeContent)}</S.Content>
      </S.SwitchableContainer>
    );
  }
}
