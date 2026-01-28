
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Receipt, 
  BrainCircuit, 
  Menu,
  Coins,
  Cpu,
  Crown,
  LogOut,
  Zap,
  Settings as SettingsIcon,
  Eye,
  EyeOff,
  Activity,
  CreditCard,
  Server,
  Radio,
  X,
  Download,
  ShieldCheck,
  Smartphone,
  AppWindow,
  CloudCheck,
  SmartphoneNfc,
  Copy,
  Info,
  CheckCircle,
  AlertTriangle,
  Mail,
  Send,
  MessageSquare,
  FileDown,
  RefreshCw,
  ExternalLink,
  Globe,
  Rocket,
  Code2
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AIConsultant from './components/AIConsultant';
import WealthManager from './components/WealthManager';
import FinancialAcademy from './components/FinancialAcademy';
import TradingBot from './components/TradingBot';
import AssetForge from './components/AssetForge';
import AdminPanel from './components/AdminPanel';
import LuckyBox from './components/LuckyBox';
import AutonomousEngine from './components/AutonomousEngine';
import WithdrawalModal from './components/WithdrawalModal';
import RegistrationGate from './components/RegistrationGate';
import LandingScreen from './components/LandingScreen';
import PlanSelection from './components/PlanSelection';
import OnboardingFlow from './components/OnboardingFlow';
import AffiliateAuth from './components/AffiliateAuth';
import SponsoredAd from './components/SponsoredAd';
import { Account, UserProfile, PlanTier, CustomAsset, PlatformMetrics } from './types';

const MOCK_ACCOUNTS: Account[] = [
  { id: '1', bankName: 'Itaú Personalité', accountType: 'Corrente', balance: 12500.50, currency: 'BRL', lastUpdate: 'Agora' },
  { id: '2', bankName: 'XP Investimentos', accountType: 'Investimento', balance: 45000.00, currency: 'BRL', lastUpdate: '10 min atrás' },
  { id: '3', bankName: 'Nubank', accountType: 'Corrente', balance: 3200.00, currency: 'BRL', lastUpdate: '1 hora atrás' }
];

const App: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [os, setOs] = useState<'ios' | 'android' | 'other'>('other');
  const [emailForBackup, setEmailForBackup] = useState('nathansheeeeik@gmail.com');
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('nexus_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [appState, setAppState] = useState<'landing' | 'plans' | 'registration' | 'onboarding' | 'dashboard' | 'affiliateAuth'>(() => {
    const savedUser = localStorage.getItem('nexus_user');
    return savedUser ? 'dashboard' : 'landing';
  });

  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'ai' | 'wealth' | 'bot' | 'forge' | 'admin' | 'lucky' | 'sentinel' | 'plans_upgrade' | 'settings'>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>(() => {
    const saved = localStorage.getItem('nexus_accounts');
    return saved ? JSON.parse(saved) : MOCK_ACCOUNTS;
  });
  const [customAssets, setCustomAssets] = useState<CustomAsset[]>([]);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [platformMetrics, setPlatformMetrics] = useState<PlatformMetrics>({
    totalFeesCollected: 8450.00,
    totalSubscriptionRevenue: 42300.00,
    totalVolumeExchange: 1254000.00,
    activeUsers: 1542,
    pendingWithdrawals: 2,
    totalWithdrawalsProcessed: 145,
    serverUptime: '99.99%',
    aiTokenUsage: 842500,
    totalAutonomousProfit: 0
  });

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) setOs('ios');
    else if (/Android/.test(ua)) setOs('android');

    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      setIsStandalone(true);
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    window.addEventListener('appinstalled', () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
    });
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsStandalone(true);
      }
    } else {
      const msg = os === 'ios' 
        ? "No iPhone:\n1. Clique em COMPARTILHAR (ícone da seta)\n2. Role para baixo e clique em 'ADICIONAR À TELA DE INÍCIO'."
        : "No Android:\n1. Clique nos 3 PONTINHOS no topo\n2. Selecione 'INSTALAR APLICATIVO'.";
      alert(msg);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin);
    alert("LINK COPIADO! Para manter este app para sempre sem o erro 404, veja as instruções no menu Admin.");
  };

  const saveToWhatsApp = () => {
    const text = encodeURIComponent(`🚨 MEU LINK FINANCEIQ:\n\n${window.location.origin}\n\nNota: Se der erro 404, peça o link novo no chat!`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleSendEmailBackup = () => {
    setIsEmailSending(true);
    setTimeout(() => {
      setIsEmailSending(false);
      setIsEmailSent(true);
      setTimeout(() => setIsEmailSent(false), 5000);
      alert(`Relatório Financeiro enviado com sucesso para ${emailForBackup}.`);
    }, 2500);
  };

  const handleLogout = () => {
    setUser(null);
    setAppState('landing');
    localStorage.clear();
  };

  const handleMasterAccess = (code: string) => {
    if (code === 'Nathan1998') {
      const adminUser: UserProfile = {
        name: 'Nathan Master', email: 'nathansheeeeik@gmail.com', plan: 'Elite', isAffiliated: true, registeredAt: new Date().toISOString(), avatar: 'https://i.pravatar.cc/150?u=nathan-master', role: 'admin'
      };
      setUser(adminUser);
      setAppState('dashboard');
      setActiveTab('admin');
    } else {
      alert("Código Mestre Inválido.");
    }
  };

  const handleAddAutonomousProfit = (amount: number) => {
    setPlatformMetrics(prev => ({ ...prev, totalAutonomousProfit: prev.totalAutonomousProfit + amount }));
    setAccounts(prev => prev.map(acc => acc.id === '1' ? { ...acc, balance: acc.balance + amount } : acc));
  };

  const handleNavItemClick = (id: typeof activeTab) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
  };

  if (appState === 'landing') return <LandingScreen isLive={true} onStart={() => setAppState('affiliateAuth')} onGoogleLogin={() => {}} onMasterAccess={handleMasterAccess} />;
  if (appState === 'affiliateAuth') return <AffiliateAuth onBack={() => setAppState('landing')} onLogin={(email) => { setUser({ name: email.split('@')[0], email, plan: 'Básico', isAffiliated: true, registeredAt: new Date().toISOString(), avatar: `https://i.pravatar.cc/150?u=${email}` }); setAppState('plans'); }} onGoogleLogin={() => {}} />;
  if (appState === 'plans') return <PlanSelection onSelect={(plan) => { setUser(prev => prev ? {...prev, plan} : null); setAppState('registration'); }} onBack={() => setAppState('landing')} />;
  if (appState === 'registration') return <RegistrationGate onRegister={(profile) => { setUser(profile); setAppState('onboarding'); }} selectedPlan={user?.plan || 'Básico'} />;
  if (appState === 'onboarding') return <OnboardingFlow userName={user?.name || ''} onComplete={() => setAppState('dashboard')} />;

  return (
    <div className={`flex h-screen bg-slate-50 overflow-hidden ${isPrivacyMode ? 'privacy-active' : ''}`}>
      {isWithdrawModalOpen && (
        <WithdrawalModal totalBalance={accounts.reduce((acc, curr) => acc + curr.balance, 0)} accounts={accounts} onClose={() => setIsWithdrawModalOpen(false)} onConfirm={() => setIsWithdrawModalOpen(false)} />
      )}

      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />}

      <aside className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200"><BrainCircuit className="text-white" size={24} /></div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight italic">FinanceIQ</h1>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-400"><X size={20} /></button>
          </div>
          <nav className="space-y-2 overflow-y-auto custom-scrollbar flex-1 pr-1">
            <p className="px-3 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ops</p>
            <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" activeTab={activeTab} onClick={handleNavItemClick} />
            <NavItem id="transactions" icon={Receipt} label="Extrato Unificado" activeTab={activeTab} onClick={handleNavItemClick} />
            <NavItem id="ai" icon={BrainCircuit} label="Analista Nexus" activeTab={activeTab} onClick={handleNavItemClick} />
            <div className="h-px bg-slate-100 my-4"></div>
            <NavItem id="sentinel" icon={Activity} label="Auto-Rendimento" isHot activeTab={activeTab} onClick={handleNavItemClick} />
            <NavItem id="bot" icon={Cpu} label="Trading Bot" activeTab={activeTab} onClick={handleNavItemClick} />
            <div className="h-px bg-slate-100 my-4"></div>
            <NavItem id="settings" icon={Smartphone} label="Nexus Control Center" isHot activeTab={activeTab} onClick={handleNavItemClick} />
            {user?.role === 'admin' && <NavItem id="admin" icon={SettingsIcon} label="Admin / Produção" isAdmin activeTab={activeTab} onClick={handleNavItemClick} />}
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative bg-slate-50/50">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 px-8 flex justify-between items-center z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 bg-slate-100 rounded-xl"><Menu size={20} /></button>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
               <ShieldCheck size={14} />
               <span className="text-[10px] font-black uppercase">Seguro</span>
            </div>
            <button onClick={() => setIsPrivacyMode(!isPrivacyMode)} className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-slate-400 hover:text-blue-500 transition-colors">
              {isPrivacyMode ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            <button onClick={handleLogout} className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-red-400 hover:bg-red-50 transition-colors"><LogOut size={18} /></button>
          </div>
        </header>

        <div className={`p-4 md:p-8 max-w-7xl mx-auto ${isPrivacyMode ? 'blur-sm' : ''}`}>
          {activeTab === 'dashboard' && <Dashboard accounts={accounts} transactions={[]} />}
          {activeTab === 'transactions' && <TransactionList transactions={[]} />}
          {activeTab === 'ai' && <AIConsultant transactions={[]} accounts={accounts} />}
          {activeTab === 'sentinel' && <AutonomousEngine accounts={accounts} onAddProfit={handleAddAutonomousProfit} onMoveMoney={() => {}} />}
          {activeTab === 'bot' && <TradingBot accounts={accounts} premium={{ isPremium: user?.plan === 'Elite', weeklyStake: 0, accumulatedWeeklyProfit: 0 }} onUpgrade={() => {}} onAddProfit={() => {}} />}
          
          {activeTab === 'admin' && (
            <div className="space-y-10 animate-in fade-in duration-500 max-w-5xl mx-auto pb-32">
               {/* Guia de Publicação para evitar 404 */}
               <div className="bg-slate-900 p-12 rounded-[56px] text-white shadow-2xl relative overflow-hidden border border-blue-500/30">
                  <div className="absolute top-0 right-0 p-12 opacity-5"><Rocket size={180} /></div>
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-[32px] flex items-center justify-center mb-10 shadow-xl relative z-10"><Globe size={40} /></div>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 relative z-10">Baixar Projeto ZIP</h3>
                  <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium relative z-10 text-sm">
                    Para baixar os arquivos e publicar no seu próprio domínio (ex: vercel.app), salve o conteúdo de todos os arquivos deste painel em uma pasta local no seu computador e compacte-a.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12">
                     <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 font-black">01</div>
                        <h4 className="text-sm font-black uppercase mb-3">Salvar Código</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-bold">Copie o conteúdo de todos os arquivos (App.tsx, types.ts, etc.) para uma pasta no PC.</p>
                     </div>
                     <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 font-black">02</div>
                        <h4 className="text-sm font-black uppercase mb-3">Criar ZIP</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-bold">Compacte a pasta em um arquivo .ZIP usando o Windows ou Mac.</p>
                     </div>
                     <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 font-black">03</div>
                        <h4 className="text-sm font-black uppercase mb-3">Vercel Deploy</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-bold">Suba o ZIP no Vercel ou Netlify para ter um link que nunca expira.</p>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                    <button className="flex-1 px-8 py-6 bg-blue-600 text-white rounded-[28px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
                      <Code2 size={20} />
                      Preparar Build Final
                    </button>
                    <button onClick={() => window.open('https://vercel.com/new', '_blank')} className="flex-1 px-8 py-6 bg-white text-slate-900 rounded-[28px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-slate-100 transition-all flex items-center justify-center gap-3">
                      <ExternalLink size={20} />
                      Subir para Produção
                    </button>
                  </div>
               </div>

               <AdminPanel metrics={platformMetrics} logs={[]} assets={customAssets} isPublished={true} onTogglePublish={() => {}} />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-10 animate-in fade-in duration-500 max-w-4xl mx-auto pb-32">
               {/* Painel de Segurança e Acesso */}
               <div className="bg-slate-900 p-12 rounded-[56px] text-white shadow-2xl relative overflow-hidden border border-white/5">
                  <div className="absolute top-0 right-0 p-10 opacity-5"><SmartphoneNfc size={180} /></div>
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-[32px] flex items-center justify-center mb-10 shadow-xl relative z-10"><ShieldCheck size={40} /></div>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 relative z-10">Nexus Control Center</h3>
                  <p className="text-slate-400 max-w-xl mb-12 leading-relaxed font-medium relative z-10 uppercase text-xs tracking-widest">
                    Gerencie seu acesso para evitar erros 404 e garanta 100% de persistência dos seus dados bancários.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Mail size={14} /> Relatório para E-mail</p>
                        <div className="space-y-4">
                           <input 
                              type="email" 
                              value={emailForBackup} 
                              onChange={(e) => setEmailForBackup(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none focus:border-blue-500"
                              placeholder="nathansheeeeik@gmail.com"
                           />
                           <button 
                              onClick={handleSendEmailBackup}
                              disabled={isEmailSending}
                              className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-3 ${isEmailSending ? 'bg-slate-700' : isEmailSent ? 'bg-emerald-500' : 'bg-blue-600 hover:bg-blue-500'}`}
                           >
                              {isEmailSending ? <RefreshCw className="animate-spin" size={16} /> : isEmailSent ? <CheckCircle size={16} /> : <Send size={16} />}
                              {isEmailSending ? 'Processando...' : isEmailSent ? 'Relatório Pronto' : 'Enviar Tudo por E-mail'}
                           </button>
                        </div>
                     </div>

                     <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2"><MessageSquare size={14} /> Backup de Emergência</p>
                        <p className="text-[11px] text-slate-400 mb-6">Salve seu link em uma conversa segura para nunca ver a página de erro novamente.</p>
                        <button 
                           onClick={saveToWhatsApp}
                           className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-3"
                        >
                           <MessageSquare size={16} />
                           Salvar Link no WhatsApp
                        </button>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                    {!isStandalone && (
                      <button onClick={handleInstallClick} className="flex-1 px-8 py-6 bg-white text-slate-900 rounded-[28px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                        <Download size={20} />
                        Instalar no Celular
                      </button>
                    )}
                    <button onClick={copyToClipboard} className="flex-1 px-8 py-6 bg-blue-600 text-white rounded-[28px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
                      <Copy size={20} />
                      Copiar Link Direto
                    </button>
                  </div>
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ id, icon: Icon, label, isElite, locked, isAdmin, isHot, onClick, activeTab }: any) => (
  <button onClick={() => !locked && onClick(id)} className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all relative ${activeTab === id ? isAdmin ? 'bg-slate-900 text-white shadow-xl' : isElite ? 'bg-amber-500 text-slate-950 shadow-lg' : 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}>
    <Icon size={18} />
    <span className="font-bold text-[11px] uppercase tracking-widest">{label}</span>
    {isHot && <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>}
    {isElite && <Crown size={12} className="ml-auto text-slate-950" />}
  </button>
);

export default App;
