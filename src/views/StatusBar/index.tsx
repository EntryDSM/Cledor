import * as React from 'react';
import * as S from './styles';

interface InfoBarProps {
  onlines: number;
  onClose: () => void;
}

const InfoBar: React.FC<InfoBarProps> = ({ onlines, onClose }) => {
  return (
    <S.InfoBarCover>
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
      <S.InfoBarText>현재 관리자</S.InfoBarText>
      <S.Onlines>{onlines}명</S.Onlines>
    </S.InfoBarCover>
  );
};

export default InfoBar;
