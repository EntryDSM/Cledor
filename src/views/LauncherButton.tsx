import * as React from 'react';

export interface LauncherButtonProps {
  appKey: string;
  onClick?: () => void;
}

const LauncherButton: React.FC<LauncherButtonProps> = ({
  appKey,
}: LauncherButtonProps) => {
  return <div>{appKey}</div>;
};

export default LauncherButton;
