import * as React from 'react';
import { Key } from 'ts-keycode-enum';
import * as S from './styles';

interface LightBoxProps {
  onClose: () => void;
  imageSrc: string;
}

interface LightBoxState {
  magnification: number;
}

const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
  event.stopPropagation();

export default class LightBox extends React.Component<
  LightBoxProps,
  LightBoxState
> {
  constructor(props: LightBoxProps) {
    super(props);

    this.state = {
      magnification: 7,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === Key.Escape) {
        const { onClose } = this.props;
        onClose();
      }
    });
  }

  private zoomIn = () => {
    this.setState(({ magnification }) => {
      if (magnification < 10) {
        return {
          magnification: magnification + 1,
        };
      }
      return { magnification };
    });
  }

  private zoomOut = () => {
    this.setState(({ magnification }) => {
      if (magnification > 1) {
        return {
          magnification: magnification - 1,
        };
      }
      return { magnification };
    });
  }

  render() {
    const { onClose, imageSrc } = this.props;
    const { magnification } = this.state;

    return (
      <S.LightBox>
        <S.ToolBar>
          <S.DownloadButton href={imageSrc} download />
          <S.ZoomInButton onClick={this.zoomIn} />
          <S.ZoomOutButton onClick={this.zoomOut} />
          <S.CloseButton onClick={onClose} />
        </S.ToolBar>
        <S.ImageFlexContainer onClick={onClose}>
          <S.Image
            src={imageSrc}
            magnification={magnification}
            onClick={stopPropagation}
          />
        </S.ImageFlexContainer>
      </S.LightBox>
    );
  }
}
