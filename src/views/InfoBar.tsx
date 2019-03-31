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

// tslint:disable-next-line: variable-name
export default function infoBar({ onlines, onClose }: InfoBarProps) {
  return (
    <InfoBarCover>
      <CloseButton onClick={onClose}>×</CloseButton>
      <InfoBarText>현재 관리자</InfoBarText>
      <Onlines>{onlines}명</Onlines>
    </InfoBarCover>
  );
}
