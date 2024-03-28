import { useState } from 'react';
import classNames from 'classnames';
import { Menu } from '@/components/menu';

// import type { MenuItem } from '@/components/menu';

export function Sidebar() {
  const [showCategory, ToggleCategory] = useState(false);
  const categories =  [
    {
      "id": 1,
      "pid": 0,
      "next_id": 3,
      "title": "分类一",
      "description": "",
      "children": []
    },
    {
      "id": 3,
      "pid": 0,
      "next_id": 4,
      "title": "分类二",
      "description": "",
      "children": [
        {
          "id": 10,
          "pid": 3,
          "next_id": 12,
          "title": "3-1",
          "description": "",
          "children": []
        },
        {
          "id": 12,
          "pid": 3,
          "next_id": 0,
          "title": "3-3",
          "description": "",
          "children": []
        }
      ]
    },
    {
      "id": 4,
      "pid": 0,
      "next_id": 5,
      "title": "分类三",
      "description": "",
      "children": []
    },
    {
      "id": 5,
      "pid": 0,
      "next_id": 0,
      "title": "分类四",
      "description": "分类4",
      "children": []
    }
  ];
  const menus = [
    {
      "id": 1,
      "title": "Dashboard",
    },
    {
      "id": 3,
      "title": "Center",
    },
  ]
  return (
    <aside className="fixed inset-y-0 flex flex-col flex-nowrap my-4 ml-4 w-56 overflow-y-auto rounded-2xl font-serif">
      <div className={classNames('grow overflow-y-auto', showCategory ? 'hidden' : 'block')}>
        <div className="h-20 flex justify-center items-center text-slate-800 text-xl font-bold">
          Blog
        </div>
        <hr className="h-px mt-0 mb-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
        <Menu items={menus}></Menu>
      </div>
      <div  className={classNames('grow overflow-y-auto', showCategory ? 'block' : 'hidden')}>
        <div className="h-20 flex justify-center items-center text-slate-800 text-xl font-bold">
          Blog
        </div>
        <hr className="h-px mt-0 mb-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
        <Menu items={categories}></Menu>
      </div>
      <div className="shrink-0">
        <button className="w-20 h-8 outline-none" onClick={() => ToggleCategory(!showCategory)}>toggle</button>
      </div>
    </aside>
  )
}