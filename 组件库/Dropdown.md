# Dropdown 组件

## 需求分析

- 根据 Tooltip 开发的二次组件
- 显示/隐藏有多个选项的菜单列表
- 菜单中有多个选项
- 使用语义化结构

## 确定方案

确定属性和事件：

```ts
import type { VNode } from "vue";
import type { TooltipProps } from "../Tooltip/types";
// 需要在Tooltip组件的属性上进行拓展
export interface DropdownProps extends TooltipProps {
  // 传入的菜单项，用一个数组保存
  menuOptions: MenuOption[];
  // 点击某一项之后关闭菜单展示
  afterClickItem?: boolean;
}
// 每一项列表具有的属性
export interface MenuOption {
   // 字符串或自定义节点
  label: string | VNode;
  key: string | number;
  disabled?: boolean;
  // 分割线 
  divided?: boolean;
}

export interface DropdownEmits {
   // 打开列表
  (e: "visible-change", value: boolean): void;
  // 选中选项派发事件
  (e: "select", value: MenuOption): void;
}

export interface DropdownInstance {
  show: () => void;
  hide: () => void;
}
```

确定基本内容：

```vue
<template>
    <div class="yv-dropdown">
    <!--  通过组件 slot 来设置下拉触发的元素
	具名 slot 为 dropdown 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。-->
        <Tooltip 
                 :trigger="trigger" 
                 :placement="placement" 
                 :popper-options="popperOptions" 
                 :open-delay="openDelay"
                 :close-delay="closeDelay" 
                 :manual="manual" 
                 @visible-change="visibleChange" 
                 ref="tooltipRef">
            <slot></slot>
            <template #content>
                <ul class="yv-dropdown__menu">
                    <template v-for="item in menuOptions" :key="item.key">
                        <!-- 分割线 -->
                        <hr v-if="item.divided" role="separator" class="divided-placeholder">

                        <li class="yv-dropdown__item" @click="itemClick(item)" :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }

                            " :id="`dropdown-item-${item.key}`">
                            <!-- 中介组件 -->
                            <RenderVnode :v-node="item.label" />
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
```



