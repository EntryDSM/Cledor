import * as React from 'react';
import {
  InfoBarCover,
  InfoBarText,
  Onlines,
  CloseButton,
} from './styled-components/InfoBar';

export interface InfoBarProps {
  onlines: number;
  onClose: () => void;
}

const InfoBar: React.FC<InfoBarProps> = ({ onlines, onClose }: InfoBarProps) => {
  return (
    <InfoBarCover>
      <CloseButton onClick={onClose}>×</CloseButton>
      <InfoBarText>현재 관리자</InfoBarText>
      <Onlines>{onlines}명</Onlines>
    </InfoBarCover>
  );
};

export default InfoBar;
