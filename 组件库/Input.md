# Input

## 需求分析

- 支持input/textarea
- 支持不同大小
- 支持一键清空
- 支持切换密码显示
- 支持自定义前缀和后缀
- 之前复合型输入框前置和后置
- 部分原生属性

## 确定方案

- 属性

```ts
export interface InputProps {
  // 类型
  type?: string
  // 绑定的值
  modelValue: string
  // 尺寸
  size?: 'large' | 'small'
  disabled?: boolean
  clearable?: boolean
  // 显示密码
  showPassword?: boolean
  // 占位
  placeholder?: string
  // 只读
  readonly?: boolean
  // 自动补全提示
  autocomplete?: string
  // 自动聚焦
  autofocus?: boolean
  // 关联的表单
  form?: string
}
```

- 事件

```ts
export interface InputEmits {
  // 和modelValue结合支持v-model
  (e: 'update:modelValue', value: string): void
  // input事件就是指值有变化就算
  (e: 'input', value: string): void
  // input的change事件指修改了值, 并且失去了focus
  (e: 'change', value: string): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
  (e: 'clear'): void
}
```

- ref

```ts
export interface InputInstance {
    // 分别对应input和textarea
  ref: HTMLInputElement | HTMLTextAreaElement
}
```

- 组件

```ts
<template>
    <div class="yv-input" :class="{
        [`yv-input--${type}`]: props.type,
        [`yv-input--${size}`]: props.size,
        'is-disabled': props.disabled,
        'is-prepend': $slots.prepend,
        'is-append': $slots.append,
        'is-prefix': $slots.prefix,
        'is-suffix': $slots.suffix,
        'is-focus': isFocus
    }">

        <!-- input形式 -->
        <template v-if="type !== 'textarea'">
            <!-- 输入框前置内容，只对非 type="textarea" 有效 -->
            <div v-if="$slots.prepend" class="yv-input__prepend">
                <slot name="prepend"></slot>
            </div>
            <!-- 输入框 -->
            <div class="yv-input__wrapper">
                <!-- 输入框头部内容，只对非 type="textarea" 有效 -->
                <span v-if="$slots.prefix" class="yv-input__prefix">
                    <slot name="prefix"></slot>
                </span>

                <input ref="inputRef" v-bind="attrs" class="yv-input__inner"
                    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :disabled="disabled"
                    :readonly="readonly" :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus"
                    :form="form" v-model="innerValue" @input="handleInput" @change="handleChange" @focus="handleFocus"
                    @blur="handleBlur" />

                <!-- 输入框尾部内容，只对非 type="textarea" 有效 -->
                <span v-if="$slots.suffix || showClear || showPasswordArea" class="yv-input__suffix" @click="keepFocus">
                    <slot name="suffix"></slot>

                    <Icon @click="clearValue" v-if="showClear" icon="circle-xmark" class="yv-input__clear"
                        @mousedown.prevent="NOOP" />
					// 显示密码的图标
                    <Icon v-if="showPasswordArea && passwordVisible" icon="eye" @click="togglePasswordVislble"
                        class="yv-input__password" />
					// 不显示密码的图标
                    <Icon v-if="showPasswordArea && !passwordVisible" icon="eye-slash" @click="togglePasswordVislble"
                        class="yv-input__password" />
                </span>
            </div>
            <!-- 输入框后置内容，只对非 type="textarea" 有效 -->
            <div v-if="$slots.append" class="yv-input__append">
                <slot name="append"></slot>
            </div>
        </template>

        <!-- textarea形式 -->
        <template>
            <textarea ref="inputRef" v-bind="attrs" class="yv-textarea__wrapper" :disabled="disabled"
                :readonly="readonly" :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus"
                :form="form" v-model="innerValue" @input="handleInput" @change="handleChange" @focus="handleFocus"
                @blur="handleBlur" />
        </template>

    </div>
</template>
```



## 设计思路

- 支持v-model
- 支持点击清空
  - 只有input时支持，textarea不支持
  - 当 Input 进入 focus 状态的时候，并且 input 的值不为空的时候，在 suffix 区域显示一个清空图标
  - 点击清空图标以后，文本变为空
- 支持切换密码显示还是不显示
  - 只有input支持，textarea不支持
  - 当 Input 的值不为空的时候，显示为密码，在右侧显示一个点击以后显示密码具体内容的图标(eye-slash)
  - 点击以后，Input 显示为文本，右侧图标变为点击以后隐藏密码具体内容的图标(eye)
  - 来回点击可以多次切换
- 支持一系列事件
- 支持原生属性

## 代码实现

- 支持v-model

```ts

```

