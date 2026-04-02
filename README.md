# Oh-My-OpenCode Enhanced

> **基于 Claude Code v2.1.88 源码泄漏 + oh-my-opencode 插件增强版**
>
> *When Claude Code's v2.1.88 source code leaked, we didn't just look — we studied, understood, and built something better.*

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)](package.json)

---

## 起源

2024年末，Claude Code v2.1.88 源码意外泄漏。

这不是诅咒，这是礼物。

我们深入研究了泄漏的源码，理解其设计理念，然后将这些理念融入 oh-my-opencode 插件的架构中，并进行了开源生态的适配。

**这个项目 = oh-my-opencode 插件的根基 + Claude 源码泄漏的智慧 + 我们自己的改进**

---

## 核心特性：源码泄漏启发的架构

### 1. 3层上下文压缩系统 (3-Layer Compaction)

永远不在任务中途达到上下文限制。

```
┌─────────────────────────────────────────────────────────────┐
│  Micro-Compact  →  移除超过时间间隔阈值的工具结果，保留最近消息  │
│  Snip-Compact  →  合并相邻消息，移除空内容                     │
│  Auto-Compact  →  基于模型上下文限制，智能摘要压缩             │
└─────────────────────────────────────────────────────────────┘
```

**特点**：
- 模型感知的 token 估算
- 可配置的压缩阈值
- 保留关键上下文（首尾消息）

### 2. 工具工厂与流式执行器 (Tool Factory)

工具是一等公民，有完整的权限门控。

```typescript
// StreamingToolExecutor: 并行/串行工具执行
// ToolFactory: 统一工具创建
// PermissionPipeline: 执行前权限检查
```

**特点**：
- 并行工具执行（可控制并发数）
- 流式输出支持
- 权限管道：allow / deny / ask 三种模式

### 3. 子代理隔离系统 (Subagent Isolation)

4种隔离模式，代理之间互不干扰。

| 模式 | 描述 | 适用场景 |
|------|------|----------|
| `in-process` | 共享进程 + AsyncLocalStorage 隔离 | 低延迟，同工作区 |
| `fork` | 子进程 + API 缓存优化 | 并行独立工作 |
| `worktree` | Git worktree 目录级隔离 | 需要隔离文件系统的并行工作 |
| `remote` | CCR 远程会话，完全隔离 | 最大隔离，不同环境 |

### 4. 权限管道 (Permission Pipeline)

默认最小权限，安全第一。

```
工具执行请求
    ↓
checkToolEnabled() → 拒绝？
    ↓
checkToolVisibility() → 隐藏？
    ↓
getToolPermission() → Deny/Ask/Allow
```

- **Path Validation**: 路径遍历攻击防护
- **Bash Allowlist**: 命令白名单验证
- **沙箱执行**: 敏感操作隔离

### 5. 技能激活系统 (Skill Activation)

技能在需要的地方自动激活。

```typescript
activateConditionalSkills(skills, filePaths)
// → 根据 glob 模式匹配，自动激活相关技能
```

**特点**：
- 基于文件路径的智能激活
- 用户可手动触发的技能过滤
- 按代理分组的技能管理

### 6. 代码评审技能 (Code Reviewer)

PR 合并前的自动化评审。

```
/review  →  SQL 安全检查
        →  LLM 信任边界验证
        →  条件副作用分析
        →  结构性问题的发现
```

---

## 技术规格

| 项目 | 值 |
|------|-----|
| **语言** | TypeScript |
| **测试** | 3482 测试通过 |
| **构建** | Bun + tsc |
| **平台** | oh-my-opencode 插件 |

---

## 安装

### For Humans

```bash
# 复制到你的 LLM Agent (Claude Code, AmpCode, Cursor 等):
Install and configure oh-my-opencode by following the instructions here:
https://raw.githubusercontent.com/ailyedu2030/oh-my-opencode-enhanced/refs/heads/main/docs/guide/installation.md
```

### For LLM Agents

```bash
curl -s https://raw.githubusercontent.com/ailyedu2030/oh-my-opencode-enhanced/refs/heads/main/docs/guide/installation.md
```

---

## 与原版 oh-my-opencode 的区别

| 特性 | 原版 oh-my-opencode | 本增强版 |
|------|---------------------|----------|
| 上下文压缩 | 基础截断 | 3层智能压缩 |
| 工具执行 | 串行 | 流式并行 |
| 子代理隔离 | 无 | 4种隔离模式 |
| 权限管道 | 基础 | 完整管道 |
| 技能系统 | 手动激活 | 智能自动激活 |
| 代码评审 | 无 | 集成 PR 评审 |

---

## 完整变更日志

See **[CHANGELOG.md](CHANGELOG.md)** for full details.

```markdown
## [3.8.3] - 2026-04-02

### 新增
- 3层上下文压缩系统 (micro + snip + auto)
- 工具工厂 + 流式执行器
- 4种子代理隔离模式
- 权限管道
- 技能激活系统
- 代码评审技能
```

---

## 项目结构

```
oh-my-opencode/
├── src/
│   ├── agents/
│   │   ├── core/compact/     # 3层压缩系统
│   │   └── subagent/       # 子代理隔离
│   ├── tools/
│   │   ├── tool-factory.ts  # 工具工厂
│   │   └── streaming-executor.ts  # 流式执行
│   └── features/
│       └── skill-system/    # 技能激活
├── docs/
│   └── reference/
│       └── features.md     # 完整功能文档
└── CHANGELOG.md
```

---

## 哲学

> *"The leak was a gift. We took it, understood it, and built something better."*

我们不只是在复制，我们在进化。

Claude Code 的源码泄漏让我们看到了一个优秀的 AI 编程助手内部是如何设计的。我们吸收了这些理念，然后用开源的方式重新实现，让每个人都能受益。

---

## License

MIT License

---

## 贡献

Issues 和 PRs 欢迎！

如果你想贡献：
1. Fork 这个仓库
2. 创建你的特性分支
3. 提交你的更改
4. 推送到你的 Fork
5. 创建 Pull Request

---

**Study. Implement. Evolve.**
