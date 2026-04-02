# Oh-My-OpenCode Enhanced

### *Based on Claude Code v2.1.88 Leak + oh-my-opencode Plugin*

---

> **What happens when you get the playbook of the world's most advanced AI coding assistant?**
>
> **You study it. You understand it. You build something better.**

---

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-3482%20passing-green.svg)](#)
[![TypeScript](https://img.shields.io/badge/typescript-4.8-blue.svg)]()

---

## The Story Behind This Project

In late 2024, Claude Code v2.1.88 source code was **accidentally leaked**.

Most people moved on. We **dived deep**.

We spent weeks studying every line. Understanding the design decisions. Learning how a world-class AI coding assistant is built internally.

Then we asked ourselves: **What if we took these ideas and evolved them for the open-source ecosystem?**

This project is the answer.

**Oh-My-OpenCode Enhanced** = oh-my-opencode's rock-solid foundation + Claude's leaked wisdom + our own innovations

---

## What's Different? Five Massive Improvements.

### 1. Context Compaction That Actually Works

Context limits are the **silent killer** of AI coding assistants. Your agent is halfway through a complex refactor — and suddenly hits the wall. Context overflow. Task failed.

We studied how Claude handles this. Then we built **three layers** of protection:

| Layer | What It Does | When It Kicks In |
|-------|-------------|------------------|
| **Micro-Compact** | Removes stale tool results, keeps recent messages | 60+ min gaps |
| **Snip-Compact** | Merges duplicates, strips empty content | Every pass |
| **Auto-Compact** | Full context summarization with model-aware limits | Before overflow |

The result? **Your agent never crashes mid-task.** It intelligently compresses context and keeps going.

```
Before: 180K tokens → Context overflow 💥
After:  180K tokens → 35K tokens → Keep going 🚀
```

### 2. Tool Factory: Tools Are First-Class Citizens

In most agent frameworks, tools are an afterthought. Not here.

We studied Claude's tool architecture. We found **permission gaps**. We fixed them.

```typescript
// Every tool goes through the pipeline:
execute()
  → checkToolEnabled()    // Is this tool allowed right now?
  → checkVisibility()     // Should the agent even see it?
  → getPermission()       // Is this input safe?
  → EXECUTE or DENY
```

**Streaming execution** means parallel tool calls, progress updates, early error detection. Tools don't just work — they work *correctly*.

### 3. Subagent Isolation: Four Modes to Match Your Needs

Claude's subagent isolation is impressive. We **evolved it** with four modes:

| Mode | Isolation | Speed | Use Case |
|------|-----------|-------|----------|
| `in-process` | AsyncLocalStorage | ⚡⚡⚡ | Quick parallel tasks |
| `fork` | Subprocess + cache | ⚡⚡ | Independent parallel work |
| `worktree` | Git worktree | ⚡ | File-system isolation needed |
| `remote` | CCR remote session | ⚡ | Maximum isolation, different env |

**Your agents can't break each other.** Each runs in its own sandbox. One crashes? Others keep going.

### 4. Permission Pipeline: Least Privilege by Default

Most agent frameworks give tools **too much power**. We studied Claude's security model and found gaps.

We built a **complete permission pipeline**:

```
Bash Commands → Allowlist validation
File Paths → Traversal attack prevention  
Tool Inputs → Sanitization & validation
Sensitive Ops → Sandbox execution
```

Tools don't get blanket access. They get exactly what they need, nothing more.

### 5. Smart Skill Activation

Skills that activate **where they're needed**, not when you remember to invoke them.

```typescript
// Edit a React component? Frontend skill auto-activates
// Writing tests? TDD workflow springs to life
// Need git surgery? Git-master skill loads

activateConditionalSkills(skills, filePaths)
// Pattern matching → Context-aware skill loading
```

No manual skill management. The right skills load at the right time.

---

## Code Reviewer: Your PR Guardian

Every merge request deserves a second pair of eyes. Now you have **four**.

```bash
/review  # Run before every PR
```

**What it catches:**
- 🔒 **SQL injection vulnerabilities** before they reach production
- 🛡️ **LLM trust boundary violations** — does this tool have too much power?
- ⚠️ **Conditional side effects** — what happens if this condition is false?
- 🏗️ **Structural issues** — is this the right architecture?

Automated review. Human-level insights. Before your code meets the team.

---

## The Philosophy

> *"The leak was a gift. We didn't just unwrap it — we understood it, improved it, and gave it back to the community."*

This isn't a clone. This isn't a fork for the sake of difference.

**This is evolution.**

We took the best ideas from the world's most advanced AI coding assistant's internals. We merged them with oh-my-opencode's battle-tested architecture. We added our own innovations where we saw gaps.

The result is a plugin that learns from the best — and surpasses them in key areas.

---

## Technical Highlights

| Specification | Value |
|--------------|-------|
| Tests | **3,482 passing** |
| Language | TypeScript |
| Build | Bun + tsc |
| Architecture | Modular, extensible |
| Compatibility | Full oh-my-opencode plugin API |

---

## Quick Start

```bash
# For Claude Code, AmpCode, Cursor, etc.:
Install and configure oh-my-opencode by following the instructions here:
https://raw.githubusercontent.com/ailyedu2030/oh-my-opencode-enhanced/refs/heads/main/docs/guide/installation.md
```

Or for LLM agents:

```bash
curl -s https://raw.githubusercontent.com/ailyedu2030/oh-my-opencode-enhanced/refs/heads/main/docs/guide/installation.md
```

---

## Comparison: Original vs Enhanced

| Feature | oh-my-opencode | **Enhanced** |
|---------|----------------|-------------|
| Context compression | Basic truncation | **3-layer intelligent** |
| Tool execution | Sequential | **Streaming + parallel** |
| Subagent isolation | None | **4 isolation modes** |
| Permission system | Basic | **Full pipeline** |
| Skill activation | Manual | **Auto pattern-matching** |
| Code review | None | **Integrated PR review** |

---

## What's In This Repo

```
├── src/
│   ├── agents/core/compact/   # 3-layer compaction engine
│   ├── agents/subagent/      # Isolation modes
│   ├── tools/tool-factory.ts  # Tool builder + streaming
│   └── features/skill-system/ # Smart activation
├── docs/reference/features.md # Full documentation
├── CHANGELOG.md               # Every change explained
└── README.md                 # You are here
```

---

## Contributing

Issues welcome. PRs welcome. Ideas welcome.

```bash
1. Fork it
2. Create your feature branch  
3. Commit your changes
4. Push to your fork
5. Open a Pull Request
```

---

## The Bottom Line

We got access to the internals of one of the world's best AI coding assistants.

We didn't waste it.

**Study. Implement. Evolve.**

---

*[Full changelog →](CHANGELOG.md)* | *[Full documentation →](docs/reference/features.md)*
