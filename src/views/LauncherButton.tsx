import * as React from 'react';
import { LauncherButtonCover } from './styled-components/LauncherButton';

export interface LauncherButtonProps {
  onClick?: () => void;
}

const LauncherButton: React.FC<LauncherButtonProps> = ({
  onClick,
}: LauncherButtonProps) => {
  return <LauncherButtonCover onClick={onClick} />;
};

export default LauncherButton;
