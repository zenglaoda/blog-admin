import { MenuItem } from './MenuItem';

import type { ReactNode } from 'react';

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
            {item.menuItem}
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
          <li key={index} className="list-none p-0">
            {item.menuItem}
            {renderMenuItem(item.children)}
          </li>
        ))}
      </ul>
    );
  }
  return props.items && props.items.length && (
    <ul>
      {props.items.map((item, index) => (
        <li key={index} className="list-none p-0">
          {item.menuItem}
          {renderSecond(item.children)}
        </li>
      ))}
    </ul>
  )
}

