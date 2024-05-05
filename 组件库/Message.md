# Message

## 需求分析

- 在特定时机，弹出对应提示
- 提示在一定时间之后可以消失
- 支持手动关闭
- 可以弹出多个提示，即可以进行叠加
- 多种类型

## 确定方案

属性：

```ts
export interface MessageProps {
  // 消息主体
  message?: string | VNode
  // 类型
  type?: string
  // 图标
  icon?: string
  // 延迟时间
  duration?: number
  // 手动关闭
  showClose?: boolean
  // 偏移值
  offset?: number
  // 添加z-index
  zIndex: number
  // 手动销毁
  useDestroy: () => void
  // 唯一id
  id: string
  // 过渡
  transitionName?: string
}
// Message上下文
export interface MesssageContext {
  id: string
  vnode: VNode
  props: MessageProps
  // 组件实例
  vm: ComponentInternalInstance
  // 销毁方法
  destroy: () => void
}
// 传入YvMessage函数的props选项，过滤掉三个必选属性
export type CreateMessageProps = Omit<MessageProps,'useDestroy' | 'id' | 'zIndex'
>
```

组件：

```vue
<template>
    <Transition 
                :name="props.transitionName" 
                @after-leave="destroyComponent" 
                @enter="updateHeight">
        <div 
             class="yv-message" 
             v-show="visible" 
             role="alert" 
             :class="{
            [`yv-message--${type}`]: type,
            'is-close': props.showClose
        }" ref="messageRef" :style="cssStyle" 
             @mouseenter="clearTimer" 
             @mouseleave="startTimer">
            <div class="yv-message__content">
                <slot>
                    <RenderVnode :v-node="props.message" v-if="props.message" />
                </slot>
            </div>
            <div class="yv-message__close" v-if="props.showClose">
                <Icon icon="xmark" @click.stop="handleClose"></Icon>
            </div>
        </div>
    </Transition>
</template>
```

## 设计思路

### 初步计划：

- 函数式的方式来创建组件
- 可以弹出多个提示
- 旧的提示可以根据新的提示向下移动位置
- 将组件Render渲染到DOM节点

### 剩余计划：

- 添加手动删除
- 添加z-index
- 添加键盘事件
- hover到Message的时候不会关闭

## 代码实现

- 函数式方式创建组件
- 可以弹出多个提示
- 将组件Render渲染到DOM节点

```ts
import { render, h, shallowReactive } from 'vue'
import Message from './Message.vue'
import useZIndex from '@/hooks/useMessageZIndex'

import type { CreateMessageProps, MesssageContext } from './types'
  // 作为id的标识
let seed = 1
// 存储当前创建的实例,并且使用shallowReactive做浅层监听
const instances: MesssageContext[] = shallowReactive([])
  // 创建Message的函数
export function YvMessage(props: CreateMessageProps) {
  // 从设置的hook函数中拿到写下一层级
  const { nextZIndex } = useZIndex()
  // 设置id
  const id = `message_${seed++}`
  // 创建消息容器
  const container = document.createElement('div')
  // 卸载组件的销毁
  const destroyMesssage = () => {
    // 从实例数组中删除
    const index = instances.findIndex((instance) => instance.id === id)
    if (index === -1) return
    instances.splice(index, 1)
    // h函数为null，从页面删除
    render(null, container)
  }

  //  手动调用删除, 也就是手动调整组件中的visible值
  //  visible 是通过expose传出来的
  const manualDistory = () => {
    const instance = instances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  // 之前过滤掉的属性和方法在这里重新添加
  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    useDestroy: destroyMesssage
  }
 
  const vnode = h(Message, newProps)
  //   console.log('vnode', vnode)
  // 渲染
  render(vnode, container)

  //   ! => 非空判断言符
  // 将第一个元素移动到最后，也就是实现了可以创建多个消息
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component!
  // 创建消息实例
  const instance = {
    id,
    vnode,
    props: newProps,
    vm,
    destroy: manualDistory
  }
  instances.push(instance)
	// 返回实例
  return instance
}
```

- 添加z-index

```ts
import { computed, ref } from 'vue'
// z-index
const zIndex = ref<number>(0)
// 设置层级的hook
const useZIndex = (initialValue = 2000) => {
  // 初始化层级
  const initialZIndex = ref(initialValue)
  // 当前层级
  const currentZIndex = computed(() => zIndex.value + initialZIndex.value)
  // 下一层级
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  }
}
export default useZIndex
```

- 旧的提示可以根据新的提示向下移动位置

```ts
// 获取上一个实例的offset
export const getLastBottomOffset = (id: string) => {
  const index = instances.findIndex((instance) => instance.id === id)
  // console.log('index', id, index, instances.length)
  // 如果 index <= 0 说明是第一项
  if (index <= 0) {
    return 0
  } else {
    const prev = instances[index - 1]
    // 拿到上一项的bottomOffset
    // console.log('prev=>', prev.vm)
    return prev.vm.exposed!.bottomOffset.value
  }
}
```

```ts
// Messasge.vue
import { getLastBottomOffset } from './create'
// 计算偏移高度
const height = ref(0)
// 上一个实例的最下面的坐标数字,第一个是0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 当前元素应该使用的top
const topOffset = computed(() => props.offset + lastOffset.value)
// 该元素为下一个元素预留的offset, 也就是它最低端bottom的值
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(() => ({
    top: topOffset.value + 'px',
    zIndex: props.zIndex
}))
```

