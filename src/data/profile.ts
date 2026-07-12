export const siteConfig = {
  site: 'https://wtxwns.github.io',
  defaultLang: 'zh',
  name: 'Tongxi Wang',
  nameZh: '王童曦',
  email: 'tongxi_wang@seu.edu.cn',
  github: 'https://github.com/WtxwNs',
  institution: 'School of Future Technology, Southeast University',
  institutionZh: '东南大学未来技术学院',
  location: 'Nanjing, China',
  locationZh: '中国南京',
  scholar: 'https://scholar.google.com/citations?user=IJX5_8EAAAAJ',
  lastUpdated: '2026-07-13',
  hasPublicPdfCv: false,
  description:
    '王童曦的个人主页，研究学习系统的动力学、稳定性与计算效率。',
  descriptionEn:
    'Personal homepage of Tongxi Wang, studying the dynamics, stability, and efficiency of learning systems.'
};

export const copy = {
  en: {
    nav: {
      research: 'Research',
      publications: 'Publications',
      systems: 'Systems',
      writing: 'Writing',
      cv: 'CV'
    },
    heroTitle: 'Tongxi Wang / 王童曦',
    tagline: 'I study the dynamics, stability, and efficiency of learning systems.',
    intro:
      'I am an undergraduate researcher at Southeast University, working across reinforcement learning, multi-agent learning, and efficient language models. I care about mathematical structure that clarifies how learning systems behave and improves how they work in practice.',
    personalLine: 'A small geometric observation can sometimes change the whole stability story.',
    ctaEmail: 'Email',
    ctaGithub: 'GitHub',
    ctaCv: 'Web CV',
    ctaScholar: 'Google Scholar'
  },
  zh: {
    nav: {
      research: '研究',
      publications: '论文',
      systems: '系统',
      writing: '写作',
      cv: '简历'
    },
    heroTitle: '王童曦 / Tongxi Wang',
    tagline: '我研究学习系统的动力学、稳定性与计算效率。',
    intro:
      '我目前就读于东南大学未来技术学院，研究强化学习、多智能体学习与高效语言模型。我关注能够由数学结构解释、同时对真实系统有用的学习问题。',
    personalLine: '一个很小的几何观察，有时会改变整个稳定性故事。',
    ctaEmail: '邮箱',
    ctaGithub: 'GitHub',
    ctaCv: '网页版简历',
    ctaScholar: 'Google Scholar'
  }
} as const;

export const education = [
  {
    school: 'Southeast University',
    schoolZh: '东南大学',
    degree: 'B.Eng. in Future Robotics, School of Future Technology',
    degreeZh: '未来机器人专业工学学士，未来技术学院',
    period: 'Aug. 2023 - Expected Jun. 2027',
    periodZh: '2023.08 - 预计 2027.06',
    detail:
      'An interdisciplinary elite program selected through a second-round competitive process.',
    detailZh: '经二次选拔进入交叉学科拔尖项目，专业排名 3/49。'
  },
  {
    school: 'RWTH Aachen University',
    schoolZh: '亚琛工业大学',
    degree: 'Exchange studies, 16 credits',
    degreeZh: '交换学习，16 学分',
    period: 'Feb. 2025 - May 2025',
    periodZh: '2025.02 - 2025.05',
    detail: 'Coursework and research exposure in robotics, control, and engineering systems.',
    detailZh: '学习机器人、控制与工程系统相关课程。'
  }
];

export const coursework = [
  'Reinforcement Learning',
  'Unified Robotics',
  'Pattern Recognition and Machine Learning',
  'Robotics Software Engineering',
  'Optimization Methods',
  'Automatic Control',
  'Signals and Systems',
  'Embedded Systems',
  'Electronic Circuits'
];

export const interests = [
  {
    index: '01',
    title: 'Learning Dynamics',
    titleZh: '学习动力学',
    question: 'How can learning systems remain stable under feedback, strategic interaction, and environmental drift?',
    questionZh: '学习系统如何在反馈、策略互动和环境漂移中保持稳定？',
    description: 'Entropy-regularized RL, non-stationary learning, logit responses, and game dynamics.',
    descriptionZh: '熵正则强化学习、非平稳学习、Logit 响应与博弈动力学。',
    works: ['Tracking Drift', 'Sharp Spectral Thresholds']
  },
  {
    index: '02',
    title: 'Adaptive Computation',
    titleZh: '自适应计算',
    question: 'How should a model allocate computation according to the structure and difficulty of each input?',
    questionZh: '模型如何依据输入的结构与难度动态分配计算量？',
    description: 'Trainable computation paths, efficient inference, and internal routing in language models.',
    descriptionZh: '可训练计算路径、高效推理与语言模型内部路由。',
    works: ['Fovea-Block-Skip Transformer']
  },
  {
    index: '03',
    title: 'Reliable Learning',
    titleZh: '可靠学习',
    question: 'What observable structure tells us when a learning procedure is stable and trustworthy?',
    questionZh: '哪些可观测结构能够判断学习过程是否稳定、可信？',
    description: 'Spectral coverage, prompt-length selection, and stability under resampling.',
    descriptionZh: '谱覆盖、Prompt 长度选择与重采样下的稳定性。',
    works: ['Stability of In-Context Learning']
  }
];

export const news = [
  {
    date: '2026.07',
    en: 'Published a research note on the limits of self-generated RL training signals.',
    zh: '发布关于自生成强化学习训练信号能力边界的论文笔记。',
    hrefZh: '/zh/blog/ai-reasoning-ceiling-zh',
    hrefEn: '/en/blog'
  },
  {
    date: '2026.05',
    en: 'Released Sharp Spectral Thresholds for Logit Fixed Points on arXiv.',
    zh: 'Sharp Spectral Thresholds for Logit Fixed Points 发布于 arXiv。',
    hrefZh: 'https://arxiv.org/abs/2605.15651',
    hrefEn: 'https://arxiv.org/abs/2605.15651'
  },
  {
    date: '2026.01',
    en: 'Tracking Drift and FBS became available with open-source implementations.',
    zh: 'Tracking Drift 与 FBS 论文及开源实现上线。',
    hrefZh: '/zh/publications',
    hrefEn: '/en/publications'
  }
];

export const honors = [
  'Forward Alumni Scholarship, awarded to 5 students university-wide across undergraduate, master, and doctoral levels',
  'Southeast University President Scholarship',
  'National First Prize, China Undergraduate Physics Tournament',
];

export const honorsZh = [
  'Forward Alumni Scholarship，全校本硕博每年共 5 人获评',
  '东南大学校长奖学金',
  '中国大学生物理学术竞赛全国一等奖'
];
