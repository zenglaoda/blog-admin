import type { ReactNode } from 'react';
import classNames from 'classnames';

export type Item = {
  menuItem: ReactNode,
  children?: Item[] 
}

interface Props {
  items: Item[]
}


export function Menu(props: Props) {
  const renderMenuItem = (items?: Item[]) => {
    if (!items || items.length === 0) return
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-none p-0">
            <button className="w-full flex items-center py-2.5  pl-4">
              <span className='size-8 mr-2'></span>
              <span className='flex-1 text-left font-medium text-slate-800/50 text-xs'>Virtual Info</span>
            </button>
          </li>
        ))}
      </ul>
    );
  };
  const renderSecond = (items?: Item[]) => {
    if (!items || items.length === 0) return
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button className="w-full flex items-center py-2.5 pl-4 group is-active">
              <span className='inline-flex items-center justify-center size-8 mr-2 bg-transparent rounded before:content before:size-1 before:bg-slate-800/50 before:rounded-full before:&.is-active:bg-black'></span>
              <span className='flex-1 text-left text-sm font-medium text-slate-800/50 group-[.is-active]:font-semibold group-[.is-active]:text-slate-800'>Virtual Reality</span>
            </button>
            {renderMenuItem(item.children)}
          </li>
        ))}
      </ul>
    );
  }
  return props.items && props.items.length && (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <button className={classNames('w-full flex items-center py-2.5  pl-4 border-0 outline-none group', index === 0 ? 'is-active bg-white rounded shadow-lg' : '')}>
            <span className='inline-flex items-center justify-center size-8 mr-2 bg-white rounded shadow-lg'>-</span>
            <span className='flex-1 text-left text-sm font-medium text-slate-500'>Dashboards</span>
          </button>
          {renderSecond(item.children)}
        </li>
      ))}
    </ul>
  )
}

