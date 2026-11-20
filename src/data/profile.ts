import home from './home.json';
import academic from './academic.json';

export const siteConfig = {
  ...home as typeof home & { portrait?: string },
  site: 'https://wtxwns.github.io',
  defaultLang: 'zh',
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

export const { interests, honors, honorsZh } = academic;

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
