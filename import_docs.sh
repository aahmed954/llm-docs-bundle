#!/usr/bin/env bash
set -euo pipefail
REPOS=(
  runpod/docs
  huggingface/hub-docs
  huggingface/transformers=docs/source
  huggingface/diffusers=docs/source
  huggingface/datasets=docs/source
  huggingface/text-generation-inference=docs
  oobabooga/text-generation-webui=docs
  LostRuins/koboldcpp=docs
  ggerganov/llama.cpp=docs
  turboderp/exllamav2=docs
  turboderp/exllamav3=README.md
  vllm-project/vllm=docs
  SillyTavern/SillyTavern=docs
  LangGraphAI/langgraph=docs
  FlowiseAI/Flowise=docs
  mlc-ai/mlc-llm=docs
  Lightning-AI/lit-llama=docs
  arcee-ai/mergekit=docs
  EleutherAI/lm-evaluation-harness=docs
  AlignmentResearch/LLM-Jailbreak
  uburuntu/jailbreakbench
  blackforest-ai/Force-Jailbreak
  chub-ai/chub-json-export
  SillyTavern/Character-Cards
  NVIDIA/TensorRT-LLM=docs
  InternLM/lmdeploy=docs
  ollama/ollama=README.md
  triton-inference-server/server=docs
  ml-explore/mlx=docs
  BlinkDL/RWKV-LM=README.md
  mlc-ai/private-llm-docs
  google-ai-edge/mediapipe=docs
)

TMP=$(mktemp -d)
for entry in "${REPOS[@]}"; do
  repo=${entry%%=*}; sub=${entry#*=}
  [[ $repo == $sub ]] && sub="README.md docs doc"
  name=${repo##*/}
  echo "→ $name"
  GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 --filter=blob:none --sparse \
         "https://github.com/$repo.git" "$TMP/$name" &>/dev/null || { echo "   ! skip"; continue; }
  git -C "$TMP/$name" sparse-checkout init --cone &>/dev/null
  git -C "$TMP/$name" sparse-checkout set $sub &>/dev/null || true
  rsync -a --delete --exclude='.git' "$TMP/$name/" "./$name/"
done
rm -rf "$TMP"
git add .
git commit -m "docs snapshot: $(date +%Y-%m-%d)"
echo "All docs imported. Push with: git push origin main"