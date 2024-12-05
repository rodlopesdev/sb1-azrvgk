export interface NavItem {
  title: string;
  href: string;
  icon: string;
}

export interface User {
  name: string;
  role: 'producer' | 'transporter' | 'buyer';
  balance: number;
  activeLoads: number;
}