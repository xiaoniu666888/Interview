# Switch

## 需求分析

- 类似checkbox
- 样式独特

## 确定方案

- 属性

```ts
export type SwitchValueType = boolean | number | string

export interface SwitchProps {
    // 绑定值
  modelValue: SwitchValueType
  disabled?: boolean
    // 打开状态下的文字描述
  activeText?: string
    // 关闭状态下的文字描述
  inactiveText?: string
    // 打开状态时的值
  activeValue?: SwitchValueType
    // 关闭状态时的值
  inactiveValue?: SwitchValueType
  name?: string
  id?: string
  size?: 'small' | 'large'
}
```

- 事件

```ts
export interface SwitchEmits {
  (e: 'change', value: SwitchValueType): void
  (e: 'update:modelValue', value: SwitchValueType): void
}
```

- 组件

```vue
<template>
    <div class="yv-switch" :class="{

        [`yv-switch--${size}`]: size,
        'is-disabled': disabled,
        'is-checked': checked
    }" @click="switchValue">
        <input ref="inputRef" class="yv-switch__input" type="checkbox" role="switch" :name="name" :disabled="disabled"
            @keydown.enter="switchValue" />

        <div class="yv-switch__core">
            <div class="yv-switch__core-inner">
                <span class="yv-switch__core-inner-text" v-if="activeText || inactiveText" yv-switch__core-inner-text>
                    {{ checked ? activeText : inactiveText }}
                </span>
            </div>
            <div class="yv-switch__core-action"></div>
        </div>
    </div>
</template>
```

