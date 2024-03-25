# Tailwind CSS

## Screen
min-width

| sm    | md    | lg     | xl     | 2xl    |
| ----- | ----- | ------ | ------ | ------ |
| 640px | 768px | 1024px | 1280px | 1536px |


## 布局
- **position**
| Class    | Properties        |
| -------- | ----------------- |
| relative | position:relative |
| absolute | position:absolute |
| fixed    | position: fixed   |
| sticky   | position: sticky  |

- **flex**
| Class            | Properties                  |
| ---------------- | --------------------------- |
| flex             | display: flex               |
| flex-row         | flex-direction: row         |
| flex-row-reverse | flex-direction: row-reverse |
| flex-col         | flex-direction: column      |
| flex-wrap        | flex-wrap: wrap             |
| flex-nowrap      | flex-wrap: nowrap           |
| items-center     | align-items:center          |
| justify-center   | justify-content: center     |
| grow             | flex-grow:1                 |
| grow-0           | flex-grow:0                 |
| shrink           | flex-shrink:1               |
| shrink-0         | flex-shrink:0               |


## Spacing
`html` 元素默认的 `font-size` 为 16px，即 `1rem=16px`;
tailwind CSS 将 1rem 分成 4分。

`p`, `m`, `space-x-0`, `gap`, `width-1`, `min-width-1`相关间距类样式使用该规则。


| Class     | Properties                      |
| --------- | ------------------------------- |
| p-0.5     | padding: 0.125rem; /* 2px */    |
| p-1       | padding: 0.25rem; /* 4px */     |
| m-1       | margin: 0.25rem; /* 4px */      |
| space-x-1 | margin-left: 0.25rem; /* 4px */ |


## Typography

- **字体颜色**
| 颜色 | 浅色          | 深色                     |
| ---- | ------------- | ------------------------ |
| 黑色 | text-black    | color: rgb(0 0 0);       |
| 白色 | text-white    | color: rgb(255 255 255); |
| 灰色 | text-gray-300 | text-gray-950            |
| 红色 | text-red-300  | text-red-950             |


- **字体大小**
| Class     | Properties                            |
| --------- | ------------------------------------- |
| text-xs   | font-size: 0.75rem; /* 12px, 16px */  |
| text-sm   | font-size: 0.875rem; /* 14px, 20px */ |
| text-base | font-size: 1rem; /* 16px, 24px */     |
| text-lg   | font-size: 1.125rem; /* 18px, 28px */ |
| text-xl   | font-size: 1.25rem; /* 20px, 28px */  |

- **line-height**
把 16px 分 4份，leading-3表示占 3份 即 3*4px = 12px

| Class     | Properties                                 |
| --------- | ------------------------------------------ |
| leading-3 | line-height: .75rem; /* 12px */            |
| leading-4 | line-height: 1rem; /* 16px */              |
| leading-5 | leading-5	line-height: 1.25rem; /* 20px */ |


## 圆角
| Class        | Properties                         |
| ------------ | ---------------------------------- |
| rounded-none | border-radius: 0px;                |
| rounded-sm   | border-radius: 0.125rem; /* 2px */ |
| rounded      | border-radius: 0.25rem; /* 4px */  |
| rounded-md   | border-radius: 0.375rem; /* 6px */ |
| rounded-xl   | border-radius: 0.75rem; /* 12px */ |


## Reference
- [网站UI参考](https://demos.creative-tim.com/)
- [UI参考](https://demos.creative-tim.com/soft-ui-flowbite-pro/#)