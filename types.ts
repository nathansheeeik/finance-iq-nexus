
export type PlanTier = 'Básico' | 'Avançado' | 'Pró' | 'Elite';

export interface Plan {
  id: PlanTier;
  name: string;
  price: string;
  features: string[];
  color: string;
  popular?: boolean;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: 'Alimentação' | 'Lazer' | 'Saúde' | 'Transporte' | 'Moradia' | 'Investimentos' | 'Outros' | 'Saque' | 'LuckyBox' | 'Robo_Yield';
  type: 'entrada' | 'saida';
}

export interface UserProfile {
  id?: string;
  name: string;
  cpf?: string;
  email: string;
  phone?: string;
  registeredAt: string;
  plan: PlanTier;
  isAffiliated: boolean;
  avatar?: string;
  role?: 'admin' | 'user';
  status?: 'active' | 'suspended' | 'pending_kyc';
}

export interface Account {
  id: string;
  bankName: string;
  accountType: 'Corrente' | 'Poupança' | 'Investimento';
  balance: number;
  currency: string;
  lastUpdate: string;
}

export interface AutonomousLog {
  id: string;
  timestamp: string;
  action: string;
  reasoning: string;
  amount: number;
  fromBank: string;
  toBank: string;
  status: 'completed' | 'analyzing' | 'optimizing';
}

export interface PlatformMetrics {
  totalFeesCollected: number;
  totalSubscriptionRevenue: number;
  totalVolumeExchange: number;
  activeUsers: number;
  pendingWithdrawals: number;
  totalWithdrawalsProcessed: number;
  serverUptime: string;
  aiTokenUsage: number;
  totalAutonomousProfit: number;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  event: string;
  type: 'info' | 'warning' | 'critical' | 'ai';
  metadata?: any;
}

export interface Milestone {
  id: string;
  target: number;
  label: string;
  reached: boolean;
  notified: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  cost: number;
  level: 'Intermediário' | 'Avançado' | 'Master';
  isUnlocked: boolean;
  thumbnail: string;
}

export interface PremiumState {
  isPremium: boolean;
  weeklyStake: number;
  accumulatedWeeklyProfit: number;
  membershipStartDate?: string;
}

export interface WithdrawalRequest {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  timestamp: string;
  bankInfo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Missing Types to resolve reported errors
export interface CustomAsset {
  id: string;
  name: string;
  symbol: string;
  initialPrice: number;
  currentPrice: number;
  marketCap: number;
  description: string;
  stabilityScore: number;
  growthPotential: string;
  createdAt: string;
}

export interface LuckyPoolState {
  totalCollected: number;
  participantsCount: number;
  nextDrawDate: string;
  userContribution: number;
  userTickets: string[];
}

export interface FinancialInsight {
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export interface BotOperation {
  id: string;
  asset: string;
  type: 'BUY' | 'SELL';
  price: number;
  profit: number;
  timestamp: string;
}

// Added to resolve App.tsx line 44 import error
export interface WithdrawalState {
  isProcessing: boolean;
  lastWithdrawalId?: string;
}
