# LeetCode 刷题

## 二叉树

## 链表

### 翻转单链表

## 数组

## 队列

## 栈

## 二分查找

## 动态规划

## 深度优先搜索（DFS）

**使用递归实现**

代码框架如下,

```java
// (x, y) 为坐标位置
void fill(int x, int y) {
    fill(x - 1, y); // 上
    fill(x + 1, y); // 下
    fill(x, y - 1); // 左
    fill(x, y + 1); // 右
}
```

## 广度优先搜索（BFS）

**使用队列实现，可用来解层序遍历、最短路径问题。**
