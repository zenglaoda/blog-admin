import { Menu, MenuItem } from '@/components/menu';

import type { Item } from '@/components/menu';

export function Sidebar() {
  const items: Item[] = [
    {
      menuItem: <MenuItem label="一级分类"></MenuItem>,
      children: [
        {
          menuItem: <MenuItem label="二级分类"></MenuItem>,
          children: [
            {
              menuItem: <MenuItem label="三级分类"></MenuItem>,
            }
          ]
        }
      ]
    },
    {
      menuItem: (<div>一级分类</div>),
      children: [
        {
          menuItem: (<div>二级分类</div>),
          children: [
            {
              menuItem: (<div>三级分类</div>),
            }
          ]
        }
      ]
    },
  ];
  return (
    <aside className="fixed inset-y-0 my-4 ml-4 w-60 overflow-y-auto rounded-2xl">
      <div className="h-20 flex justify-center items-center text-slate-800 text-xl font-bold">
        Blog
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
      <Menu items={items}></Menu>
    </aside>
  )
}