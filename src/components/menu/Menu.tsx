import { Key, useState, useEffect } from 'react';
import { MenuButton } from './MenuButton';

export type MenuItem = {
  title: string,
  id: Key,
  children?: MenuItem[]
}

export interface MenuProps {
  items: MenuItem[];
  openKeys?: Key[],
  selectedKeys?: Key,
  onOpenChange?: (openKeys: Key[]) => void
}

export function Menu(props: MenuProps) {
  const keyField = 'id';
  const labelField = 'title';

  // 折叠
  const [openKeys, setOpenKeys] = useState<Key[]>([]);
  const openKeysSet = new Set(openKeys);
  useEffect(() => {
    if (props.openKeys !== undefined) {
      setOpenKeys(props.openKeys);
    }
  }, [props.openKeys]);
  const isOpen = (item: MenuItem) => openKeysSet.has(item[keyField]);
  const isLeafMenu = (item: MenuItem) => !item.children || item.children.length === 0;
  const open = (item: MenuItem) => {
    if (isOpen(item)) {
      openKeysSet.delete(item[keyField]);
    } else {
      openKeysSet.add(item[keyField]);
    }
    const keys = [...openKeysSet];
    setOpenKeys(keys);
    if (props.onOpenChange) {
      props.onOpenChange(keys);
    }
  }

  // 选中
  const [selectedKeys, setSelectedKeys] = useState(props.selectedKeys);
  useEffect(() => {
    if (props.selectedKeys !== undefined) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys])
  const isActive = (item: MenuItem) => item[keyField] === selectedKeys;
  const onSelect = (item: MenuItem) => {
    setSelectedKeys(item[keyField]);
  }

  const renderMenuItem = (items?: MenuItem[]) => {
    if (!items || items.length === 0) return
    return (
      <ul>
        {items.map((item) => (
          <li key={item[keyField]}>
            <MenuButton
              label={item[labelField]}
              level={2}
              isOpen={isOpen(item)}
              isLeaf={isLeafMenu(item)}
              isActive={isActive(item)}
              onOpen={() => open(item)}
              onSelect={() => onSelect(item)}
            />
          </li>
        ))}
      </ul>
    );
  };
  const renderSecond = (items?: MenuItem[]) => {
    if (!items || items.length === 0) return;
    return (
      <ul>
        {items.map((item) => (
          <li key={item[keyField]}>
            <MenuButton
              label={item[labelField]}
              level={1}
              isOpen={isOpen(item)}
              isLeaf={isLeafMenu(item)}
              isActive={isActive(item)}
              onOpen={() => open(item)}
              onSelect={() => onSelect(item)}
            />
            {isOpen(item) && renderMenuItem(item.children)}
          </li>
        ))}
      </ul>
    );
  };
  return props.items && props.items.length && (
    <ul>
      {props.items.map((item) => (
        <li key={item[keyField]}>
          <MenuButton
            label={item[labelField]}
            level={0}
            isOpen={isOpen(item)}
            isActive={isActive(item)}
            isLeaf={isLeafMenu(item)}
            onOpen={() => open(item)}
            onSelect={() => onSelect(item)}
          />
          {isOpen(item) && renderSecond(item.children)}
        </li>
      ))}
    </ul>
  );
}

