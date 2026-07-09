---
title: 'Tracking Drift: Variation-Aware Entropy Scheduling for Non-Stationary Reinforcement Learning'
authors: ['Tongxi Wang', 'Zhuoyang Xia', 'Xinran Chen', 'Shan Liu']
authorNote: 'First author'
authorNoteZh: '第一作者'
venue: 'ICML 2026'
year: 2026
status: 'Accepted'
tags: ['Reinforcement Learning', 'Non-stationary RL', 'Entropy Regularization', 'Dynamic Regret', 'Online Learning']
tldr: 'Adaptive Entropy Scheduling turns the entropy coefficient in non-stationary RL into a drift-responsive control signal.'
tldrZh: '提出 Adaptive Entropy Scheduling，将非平稳强化学习中的探索强度从固定超参数改为由 online drift proxy 驱动的动态调度量。并证明调度的理论最优性。'
contributions:
  - 'Interprets entropy coefficients as tracking-control variables rather than fixed hyperparameters.'
  - 'Derives a tracking-stability trade-off from dynamic mirror descent and non-stationary OCO.'
  - 'Uses TD-error to build a critic-based drift proxy that can be integrated into PPO, SAC, and related algorithms.'
contributionsZh:
  - '把 entropy coefficient 解释为跟踪非平稳环境的控制量。'
  - '从 dynamic mirror descent / non-stationary OCO 推导 tracking-stability trade-off。'
  - '使用 TD-error 构造 critic-based drift proxy，并可接入 PPO、SAC 等主流强化学习算法。'
links:
  arxiv: 'https://arxiv.org/abs/2601.19624'
  code: 'https://github.com/WtxwNs/AES'
highlight: true
order: 2
---
