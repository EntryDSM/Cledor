import * as React from 'react';
import { LauncherButtonCover } from './styled-components/LauncherButton';

export interface LauncherButtonProps {
  onClick?: () => void;
}

export default function launcherButton({ onClick }: LauncherButtonProps) {
  return <LauncherButtonCover onClick={onClick} />;
}
