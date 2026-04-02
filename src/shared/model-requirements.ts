export type FallbackEntry = {
  providers: string[]
  model: string
  variant?: string // Entry-specific variant (e.g., GPT→high, Opus→max)
}

export type ModelRequirement = {
  fallbackChain: FallbackEntry[]
  variant?: string // Default variant (used when entry doesn't specify one)
  requiresModel?: string // If set, only activates when this model is available (fuzzy match)
  requiresAnyModel?: boolean // If true, requires at least ONE model in fallbackChain to be available (or empty availability treated as unavailable)
  requiresProvider?: string[] // If set, only activates when any of these providers is connected
}

export const AGENT_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
  sisyphus: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
    requiresAnyModel: true,
  },
  hephaestus: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  oracle: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  librarian: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  explore: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  "multimodal-looker": {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  prometheus: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  metis: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  momus: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  atlas: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
}

export const CATEGORY_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
  "visual-engineering": {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  ultrabrain: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  deep: {
    fallbackChain: [
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  artistry: {
    fallbackChain: [
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  quick: {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  "unspecified-low": {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  "unspecified-high": {
    fallbackChain: [
      { providers: ["opencode"], model: "minimax/m2.7" },
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
  writing: {
    fallbackChain: [
      { providers: ["opencode"], model: "qwen3.6-plus-free" },
      { providers: ["opencode"], model: "minimax/m2.5-free" },
      { providers: ["opencode"], model: "big-pickle" },
    ],
  },
}
