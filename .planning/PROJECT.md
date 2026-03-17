# A股多智能体量化交易系统

## What This Is

一个基于多智能体(Multi-Agent)的A股量化交易决策系统，通过AI协作实现信息收集、分析、决策的全流程自动化。系统模拟基金经理的决策过程，由多个专业AI Agent分别负责不同维度的分析，最终通过投票/加权机制给出投资建议。

## Core Value

**让AI成为您的"虚拟投研团队"** — 10+个AI Agent实时监控市场信息，5个决策Agent联合给出投资建议，方差缩小提升信号质量，最终由您确认执行。

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] 多智能体信息收集系统 — 10+个Agent覆盖国内/国际信息
- [ ] 多智能体决策系统 — 5个决策Agent联合决策
- [ ] 评级与权重系统 — A/B/C评级 + 动态权重
- [ ] 方差缩小机制 — 多源信息聚合降低噪音
- [ ] 风险控制系统 — 仓位/止损/分散度控制
- [ ] 模拟盘对接 — 实盘前的回测验证

### Out of Scope

- [实盘交易对接] — 模拟盘验证充分后再考虑
- [高频交易] — 专注于短线/中线信号
- [杠杆/期权] — 初期仅做现货

## Context

**背景**：
- 您有多年A股投资经验，理解市场规律
- 使用OpenCode + oh-my-opencode作为开发工具
- DeepSeek作为主要LLM后端
- AKShare作为免费数据源

**参考方案**（头脑风暴输出）：
- 信息收集层：政策/行业/财报/资金/舆情/技术/宏观/地缘/外盘/汇率 10个Agent
- 决策层：宏观策略/行业轮动/因子量化/情绪资金/风控 5个Agent
- 方差缩小：置信度加权 + 多源验证 + 因子正交化
- 评级系统：A级(90%+置信度)/B级(70-90%)/C级(<70%)

## Constraints

- **[技术栈]**: OpenCode + oh-my-opencode + DeepSeek — 纯AI驱动开发
- **[数据源]**: AKShare免费数据，A股日线/财务/资金流
- **[资金]**: 模拟盘阶段，资金不设限
- **[风险]**: 最大回撤控制20%，单票仓位≤15%

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 多智能体架构 | 单一Agent视角有限，多Agent方差缩小 | — Pending |
| DeepSeek为主LLM | 成本低，中文理解强 | — Pending |
| 方差缩小机制 | 多源信息聚合提升信号质量 | — Pending |
| 模拟盘先行 | 先验证策略有效性，再考虑实盘 | — Pending |

---

*Last updated: 2025-03-17 after initialization*
