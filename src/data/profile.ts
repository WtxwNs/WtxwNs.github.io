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
  lastUpdated: '2026-07-09',
  hasPublicPdfCv: false,
  description:
    '王童曦的个人学术主页，关注强化学习理论、多智能体系统、高效大语言模型与学习理论。',
  descriptionEn:
    'Personal academic homepage of Tongxi Wang, focused on reinforcement learning theory, multi-agent systems, efficient language models, and learning theory.'
};

export const copy = {
  en: {
    nav: {
      home: 'Home',
      academic: 'Academic',
      publications: 'Publications',
      projects: 'Projects',
      blog: 'Blog',
      links: 'Links',
      about: 'About',
      cv: 'CV'
    },
    heroTitle: 'Tongxi Wang / 王童曦',
    tagline: 'Reinforcement Learning Theory · Multi-agent Systems · LLM Efficiency · Learning Theory',
    intro:
      'I am an undergraduate researcher at Southeast University, working on reinforcement learning theory, multi-agent systems, and efficient language models. I am especially interested in learning problems where mathematical structure leads to practical systems.',
    personalLine: 'I like problems where a small geometric observation changes the stability story.',
    ctaEmail: 'Email',
    ctaGithub: 'GitHub',
    ctaCv: 'Web CV',
    ctaScholar: 'Google Scholar'
  },
  zh: {
    nav: {
      home: '首页',
      academic: '学术',
      publications: '论文',
      projects: '项目',
      blog: '博客',
      links: '链接',
      about: '关于',
      cv: '简历'
    },
    heroTitle: '王童曦 / Tongxi Wang',
    tagline: '强化学习理论 · 多智能体系统 · 大模型效率 · 学习理论',
    intro:
      '我目前就读于东南大学未来技术学院，研究兴趣集中在强化学习理论、多智能体系统与高效大语言模型。我更关心那些能够被数学结构解释、同时又能落到真实系统中的学习问题。',
    personalLine: '我喜欢这样的问题：一个很小的几何观察，能改变整个稳定性故事。',
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
      'Ranked 3/49 in an interdisciplinary elite program selected through a second-round competitive process.',
    detailZh: '在经二次选拔进入的交叉学科拔尖项目中排名 3/49。'
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
    title: 'Reinforcement Learning Theory',
    titleZh: '强化学习理论',
    description: 'Entropy-regularized RL, non-stationary RL, dynamic regret, and adaptive exploration.',
    descriptionZh: '熵正则强化学习、非平稳强化学习、动态遗憾与自适应探索。'
  },
  {
    title: 'Multi-agent Systems and Game Dynamics',
    titleZh: '多智能体系统与博弈动力学',
    description: 'Logit fixed points, softmax response systems, potential games, and learning dynamics.',
    descriptionZh: 'Logit 不动点、softmax 响应系统、势博弈与多智能体学习动力学。'
  },
  {
    title: 'Efficient Large Language Models',
    titleZh: '高效大语言模型',
    description: 'Fovea-Block-Skip Transformer, inference efficiency, architecture, and routing.',
    descriptionZh: 'Fovea-Block-Skip Transformer、推理效率、模型结构与动态计算路径。'
  },
  {
    title: 'Reliable In-Context Learning',
    titleZh: '可靠上下文学习',
    description: 'Prompt-length selection, spectral coverage, and stability under resampling.',
    descriptionZh: 'Prompt 长度选择、谱覆盖与 demonstration 重采样下的稳定性。'
  },
  {
    title: 'Robotics and Embodied AI',
    titleZh: '机器人与具身智能',
    description: 'Medical robotics, robot navigation and control, and multimodal sensing.',
    descriptionZh: '医学机器人、导航控制与多模态感知。'
  }
];

export const honors = [
  'Forward Alumni Scholarship, awarded to 3 students university-wide across undergraduate, master, and doctoral levels',
  'Southeast University President Scholarship',
  'Total scholarships: RMB 45,000',
  'National First Prize, China Undergraduate Physics Tournament',
  'More than ten additional awards across physics and electrical/electronic engineering competitions',
  'Reviewer for AAAI 2026 and Neural Networks',
  'President of Student Union',
  'President of Student Association for Science and Technology',
  'President of SEU Science Fiction Association'
];

export const honorsZh = [
  '至善校友奖学金，全校本科、硕士、博士共 3 人获评',
  '东南大学校长奖学金',
  '累计奖学金 45,000 元',
  '中国大学生物理学术竞赛全国一等奖',
  '十余项物理与电子电工类竞赛奖励',
  'AAAI 2026 与 Neural Networks 审稿人',
  '学生会主席',
  '学生科学技术协会主席',
  '东南大学科幻协会主席'
];
