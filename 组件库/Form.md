# From

## 需求分析

- 自定义UI
  - 可以渲染多种类型元素
  - 自定义提交区域的内容
- 验证
  - 表单默认blur的时候验证
  - 在点击提交按钮的时候全部验证
- 验证规则
  - 每个input可以配置多条规则
  - 可以自定义规则

## 确定方案

- 属性

```ts
// form
export interface FormProps {
  model?: Record<string, any>
  rules?: FormRules
}
// formitem
export interface FormItemProps {
  label?: string
  prop?: string
}
```

- 组件

```vue
// Form.vue
<template>
    <form class="yv-form">
        <slot />
    </form>
</template>

// FormItem
<template>
    <div class="yv-form-item" :class="{
        'is-error': validateStatus.state === 'error',
        'is-success': validateStatus.state === 'success',
        'is-loading': validateStatus.loading,
        'is-required': isRequired
    }">
        <!-- 表头 -->
        <label class="yv-form-item__label">
            <slot name="label" :label="label">
                {{ label }}</slot>
        </label>
         <!-- 内容 -->
        <div class="yv-form-item__content">
          	 <!-- 表单元素 -->
            <slot :validate="validate"></slot>
             <!-- 验证信息 -->
            <div v-if="validateStatus.state === 'error'" class="yv-form-item__error-msg">
                {{ validateStatus.errorMsg }}
            </div>
        </div>
    </div>
</template>
```

## 设计思路

- 单个item验证
- 整个Form验证
- 验证流程：规则+值，在特殊时机，调用特殊逻辑验证最终结果

