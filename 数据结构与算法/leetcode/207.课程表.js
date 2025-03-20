/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses - 课程的数量
 * @param {number[][]} prerequisites - 课程的先决条件数组
 * @return {boolean} - 是否可以完成所有课程
 */
var canFinish = function (numCourses, prerequisites) {
  // 拓扑排序，用于存储每个课程的后续课程列表
  const edges = new Array(numCourses).fill(0).map(() => new Array())
  // 0 未搜索 1 搜索中 2 已完成，用于标记每个课程的搜索状态
  const visited = new Array(numCourses).fill(0)
  // 标记是否有环，若有环则无法完成所有课程
  let valid = true

  // 深度优先搜索函数，用于遍历课程图
  const dfs = (u) => {
    // 将当前课程标记为搜索中
    visited[u] = 1
    // 遍历当前课程的所有后续课程
    for (let v of edges[u]) {
      // 如果后续课程未被搜索过
      if (visited[v] === 0) {
        // 递归调用 dfs 函数搜索后续课程
        dfs(v)
        // 如果在搜索过程中发现有环，直接返回
        if (!valid) return
      }
      // 如果后续课程正在搜索中，说明存在环
      else if (visited[v] === 1) {
        // 标记有环
        valid = false
        return
      }
    }
    // 将当前课程标记为已完成
    visited[u] = 2
  }

  // 构建图，将每个课程的先决条件添加到 edges 数组中
  for (const info of prerequisites) {
    // 将 info[0] 课程添加到 info[1] 课程的后续课程列表中
    edges[info[1]].push(info[0])
  }

  // 深度优先搜索，遍历所有课程
  for (let i = 0; i < numCourses && valid; i++) {
    // 如果课程未被搜索过
    if (visited[i] === 0) {
      // 调用 dfs 函数搜索该课程
      dfs(i)
    }
  }

  // 返回结果，若 valid 为 true 则可以完成所有课程，否则不能
  return valid
}
// @lc code=end
