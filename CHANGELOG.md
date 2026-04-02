# Changelog

All notable changes to this project will be documented in this file.

## [3.8.3] - 2026-04-02

### Added

- **3-Layer Compaction System** (`src/agents/core/compact/`)
  - `microCompact`: Removes stale tool results beyond gap threshold, keeps recent messages
  - `snipCompact`: Merges adjacent messages and removes empty content
  - `autoCompact`: Full context compaction with model-aware token estimation

- **Tool Factory & Streaming Executor** (`src/tools/tool-factory.ts`, `src/tools/streaming-executor.ts`)
  - `StreamingToolExecutor`: Parallel and sequential tool execution with concurrency control
  - `ToolFactory`: Unified tool creation with visibility, enabled, and permission checks
  - `getToolPermission`: Permission gate (allow/deny/ask) before tool execution

- **Permission Pipeline** (`src/core/permissions/`)
  - `checkBashPermissions`: Validates bash command allowlist
  - `validatePath`: Path traversal prevention and safe path resolution
  - `PermissionPipeline`: Unified permission checking with deny/ask/allow modes

- **Subagent Isolation** (`src/agents/subagent/`)
  - `IsolationMode`: Three modes - `copy` (independent), `shared` (context share), `frozen` (read-only)
  - `forkSubagent`: Fork agent with configured isolation level
  - `WorktreeManager`: Git worktree management for isolated subagent execution
  - `SubagentRegistry`: Tracks active subagent sessions

- **Skill System** (`src/features/skill-system/`)
  - `SkillActivator`: Activates skills based on context patterns
  - `skillHooks`: Session hooks for skill activation events
  - `BuiltinSkill` interface: Standard interface for built-in skills

- **Code Reviewer Skill** (`src/features/builtin-skills/skills/code-reviewer.ts`)
  - Pre-landing PR review with SQL safety, LLM trust boundary, conditional side effects checks

### Fixed

- `estimateTokens([])`: Empty array now correctly returns 0 instead of 1
- `mergeAdjacentMessages`: Keeps first user message, discards subsequent duplicates
- `StreamingToolExecutor.executeSingle`: Returns `ToolFinalResult` instead of `void`
- `StreamingToolExecutor` parallel mode: Early errors are properly yielded
- Skill activator glob matching: Fixed `.` escaping issue with `__DOT__` placeholder

### Changed

- `preemptiveCompactionHook`: Now uses `getDefaultCompactConfig()` for model-aware thresholds
- `StreamingToolExecutor`: Integrated `getToolPermission` checks before all tool executions

### Tests

- All 3482 tests passing
- New test coverage for compact, tool-factory, permissions, skill-system modules

## [3.8.2] - Previous Version

See git history for previous changes.
