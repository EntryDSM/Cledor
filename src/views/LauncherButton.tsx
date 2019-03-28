import * as React from 'react';

export interface LauncherButtonProps {
  appKey: string;
  onClick?: () => void;
}

export default function launcherButton({ appKey }: LauncherButtonProps) {
  return <div>{appKey}</div>;
}
