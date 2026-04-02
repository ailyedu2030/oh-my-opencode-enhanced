import type { ModelRequirement } from "../shared/model-requirements"

// NOTE: These requirements are used by the CLI config generator (`generateModelConfig`).
// They intentionally use "install-time" provider IDs (anthropic/openai/google/opencode/etc),
// not runtime-only providers like `nvidia`.

export const CLI_AGENT_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
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

export const CLI_CATEGORY_MODEL_REQUIREMENTS: Record<string, ModelRequirement> = {
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
