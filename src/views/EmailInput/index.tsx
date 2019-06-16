import * as React from 'react';
import * as S from './styles';
import { validateEmail } from '../../utlis/validateEmail';

interface EmailInputProps {
  onSubmit: (email: string) => void;
}

interface EmailInputState {
  email: string;
  isInvalidEmail: boolean;
}

export default class EmailInput extends React.Component<
  EmailInputProps,
  EmailInputState
> {
  constructor(props: EmailInputProps) {
    super(props);

    this.state = {
      email: '',
      isInvalidEmail: false,
    };
  }

  handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: value, isInvalidEmail: false });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email } = this.state;
    if (email && validateEmail(email)) {
      const { onSubmit } = this.props;
      onSubmit(email);
    } else {
      this.setState({ isInvalidEmail: true });
    }
  }

  render() {
    const { email, isInvalidEmail } = this.state;

    return (
      <S.EmailInputForm onSubmit={this.handleSubmit}>
        <S.GuidingMessage>
          관리자가 나중에 확인한 후 답변을 전송할 수 있도록 이메일을 적어주세요!
        </S.GuidingMessage>
        <S.EmailInput
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={this.handleChange}
          hasError={isInvalidEmail}
        />
      </S.EmailInputForm>
    );
  }
}
