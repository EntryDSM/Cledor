import * as React from 'react';

export interface LauncherButtonProps {
  appKey: String;
  onClick?: () => void;
}

export default function launcherButton({ appKey }: LauncherButtonProps) {
  return <div>{appKey}</div>;
}
