export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categoryBadges: string[];
  description: string;
  prototypeUrl?: string;
  statusLabel: string;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
    unit?: string;
  }[];
}

export interface SkillCluster {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
  tags: {
    name: string;
    variant: 'primary' | 'secondary' | 'neutral' | 'accent';
  }[];
}

export interface LearningTrack {
  id: string;
  number: string;
  trackType: string;
  statusBadge: string;
  isPulsing?: boolean;
  title: string;
  description: string;
  progressPercent: number;
  gradientClass: string;
}

export interface CertificationItem {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  colorClass: string;
  issuerUrl?: string;
}
