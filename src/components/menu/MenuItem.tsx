import type { ReactNode, Key } from 'react';

interface MenuItemProps {
  label: ReactNode,
  level?: number;
  key?: Key,
  icon?: ReactNode,
}

export function MenuItem(props: MenuItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="shrink-0 size-8 mr-1">icon</div>
      <div className="grow truncate whitespace-nowrap text-sm font-medium text-slate-800/50">
        {props.label}
      </div>
      <div className="shrink-0 size-6 ml-1">+</div>
    </div>
  );
}