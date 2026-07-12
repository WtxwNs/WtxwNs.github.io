---
title: 'FBS: Modeling Native Parallel Reading inside a Transformer'
authors: ['Tongxi Wang']
authorNote: 'Sole author'
authorNoteZh: '唯一作者'
venue: 'ACL 2026'
year: 2026
status: 'Accepted'
tags: ['Large Language Models', 'Efficient Inference', 'Transformer Architecture', 'Adaptive Computation']
tldr: 'Make the computation path itself a learnable decision inside the Transformer.'
tldrZh: '将计算路径变成 Transformer 内部可学习的决策变量。'
contributions:
  - 'Introduces preview, block, and skip modules for learning a quality-compute trade-off inside the model.'
  - 'Trains the computation path itself instead of attaching external acceleration mechanisms only at inference time.'
  - 'Explores trainable dynamic-compute structures for efficient language model inference.'
contributionsZh:
  - '设计 preview、block、skip 三个模块，在模型内部学习质量-计算量权衡。'
  - '把计算路径本身纳入训练，而不是只在推理阶段拼接外部加速机制。'
  - '面向高效大语言模型推理，探索可训练的动态计算结构。'
links:
  arxiv: 'https://arxiv.org/abs/2601.21708'
  code: 'https://github.com/WtxwNs/FBS'
highlight: true
order: 3
---
