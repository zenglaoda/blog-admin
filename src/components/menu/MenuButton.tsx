import type { ReactNode } from 'react';
import classNames from 'classnames';

interface MenuButtonProps {
  isOpen: boolean;
  isLeaf: boolean;
  isActive: boolean;
  label: ReactNode,
  level: number;
  onOpen: () => void;
  onSelect: () => void;
}

export function MenuButton(props: MenuButtonProps) {
  const onCollapse = (event: Event) => {
    event.stopPropagation();
    props.onOpen()
  };
  let iconClassNames = '';
  if (props.level === 0) {
    iconClassNames = 'bg-white rounded shadow-lg before:content-["D"] before:text-slate-500';
  } else if (props.level === 1) {
    iconClassNames = 'before:content before:size-1 before:bg-slate-500 before:rounded';
  }

  return (
    <button onClick={() => props.onSelect()} className={classNames('w-full flex items-center pl-4 border-0 outline-none group py-1.5', {'py-2.5': props.level === 0, 'py-2': props.level === 1},props.isActive ? 'is-active bg-gray-200 rounded' : '')}>
      <span className={classNames('inline-flex items-center justify-center size-8 mr-2', iconClassNames)}></span>
      <span className='flex-1 text-left text-sm font-medium text-slate-500'>{props.label}</span>
      {
        !props.isLeaf &&
        (<span className='flex-1 text-left text-sm font-medium text-slate-500' onClick={(e)=> onCollapse(e)}>{props.isOpen ? '-' : '+'}</span>)
      }
    </button>
  );
}