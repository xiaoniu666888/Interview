// using literal strings instead of numbers so that it's easier to inspect
// debugger events
// 跟踪操作的类型
export enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  // 迭代操作
  ITERATE = 'iterate',
}
// 触发操作的类型
export enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear',
}
// 响应式对象的标志
export enum ReactiveFlags {
  // 跳过代理
  SKIP = '__v_skip',
  // 是否是响应式对象
  IS_REACTIVE = '__v_isReactive',
  // 是否是只读对象
  IS_READONLY = '__v_isReadonly',
  // 是否是浅层代理
  IS_SHALLOW = '__v_isShallow',
  // 原始对象
  RAW = '__v_raw',
  // 是否是 ref 对象
  IS_REF = '__v_isRef',
}
