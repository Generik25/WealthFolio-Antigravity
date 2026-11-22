import React, { useState, useRef, useEffect } from 'react';
import { Portfolio } from '../types';
import {
  askFinancialAssistant,
  buildCompactPortfolioSummary,
  getCachedChatMessages,
  saveCachedChatMessages,
  clearCachedChatMessages,
  getCachedFullReport,
  formatCacheTimestamp,
} from '../services/geminiService';
import { Sparkles, Send, Loader2, Bot, User, Trash2, ShieldCheck, TrendingUp, DollarSign, Globe, Award, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AIAdvisorProps {
  portfolios: Portfolio[];
  activePortfolioId: string | 'all';
  reportingCurrency?: string;
  convertValue?: (amount: number, from: string, to: string) => number;
  macroStats?: any;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
  onOpenFullReport?: () => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIExpert {
  id: string;
  name: string;
  role: string;
  badge: string;
  avatarColor: string;
  icon: React.ReactNode;
  philosophy: string;
  prompt: string;
}

const AI_EXPERTS = (iconSize: number = 18): AIExpert[] => [
  {
    id: 'elena',
    name: 'Elena Popescu',
    role: 'Expert Index ETF & Diversificare Pasivă',
    badge: 'Pasiv & ETF',
    avatarColor: 'from-blue-600 to-cyan-500 shadow-blue-500/10',
    icon: <Award size={iconSize} className="text-white" />,
    philosophy: 'Susține alocarea pe termen lung în fonduri index globale cu costuri minime (TER mic), disciplină DCA și rebalansare regulată.',
    prompt: `Elena Popescu, expert ETF-uri pasive: diversificare globală (MSCI World/FTSE All-World), TER minim, DCA, rebalansare disciplinată, fără stock-picking speculativ.`
  },
  {
    id: 'victor',
    name: 'Victor Radu',
    role: 'Expert Growth Stocks & Tech Internațional',
    badge: 'Agresiv & Growth',
    avatarColor: 'from-rose-600 to-amber-500 shadow-rose-500/10',
    icon: <TrendingUp size={iconSize} className="text-white" />,
    philosophy: 'Caută liderii tehnologici ai viitorului (AI, cloud, tech medical, semiconductori), vizând depășirea pieței (randament Alpha) prin volatilitate controlată.',
    prompt: `Victor Radu, analist growth & tech: lideri cu moat tehnologic (AI, cloud, semiconductori), căutare randament Alpha, toleranță la volatilitate.`
  },
  {
    id: 'andrei',
    name: 'Andrei Marin',
    role: 'Expert Titluri de Stat & Dividende defensive',
    badge: 'Defensiv & Venit',
    avatarColor: 'from-emerald-600 to-teal-500 shadow-emerald-500/10',
    icon: <ShieldCheck size={iconSize} className="text-white" />,
    philosophy: 'Prioritizează siguranța capitalului, generarea de dividende stabile de la companii solide și instrumente cu venit fix (Fidelis, Tezaur).',
    prompt: `Andrei Marin, manager conservator income: conservare capital, dividende sustenabile, titluri de stat (Fidelis/Tezaur), sectoare defensive, volatilitate redusă.`
  },
  {
    id: 'diana',
    name: 'Diana Nistor',
    role: 'Expert Strategii Macro & Arbitraj Valutar',
    badge: 'Tactical & Macro',
    avatarColor: 'from-purple-600 to-fuchsia-500 shadow-purple-500/10',
    icon: <Globe size={iconSize} className="text-white" />,
    philosophy: 'Analizează ciclurile economice globale, inflația, dobânzile băncilor centrale și oferă protecții strategice active (aur, valute RON/EUR/USD).',
    prompt: `Diana Nistor, strateg macro global: inflație, dobânzi Fed/BCE/BNR, cicluri economice, protecție prin aur/mărfuri și optimizare expunere valutară RON/EUR/USD.`
  },
  {
    id: 'warren',
    name: 'Warren Buffett (AI)',
    role: 'Legenda Value Investing & Moat-uri Competitive',
    badge: 'Value Investing',
    avatarColor: 'from-amber-600 to-yellow-500 shadow-amber-500/10',
    icon: <DollarSign size={iconSize} className="text-white" />,
    philosophy: 'Caută companii de calitate excepțională, cu avantaje competitive de durată (Moats), evaluate la prețuri atractive, pentru deținere pe termen lung.',
    prompt: `Warren Buffett, value investing: valoare intrinsecă, marjă de siguranță, economic moat durabil, free cash flow solid, deținere pe termen lung.`
  },
  {
    id: 'adrian',
    name: 'Adrian Codirlașu',
    role: 'Doctor în Finanțe & Expert Macro regional',
    badge: 'CFA & Macro local',
    avatarColor: 'from-cyan-600 to-indigo-500 shadow-cyan-500/10',
    icon: <Globe size={iconSize} className="text-white" />,
    philosophy: 'Analizează deciziile de dobândă BNR, inflația regională, cursul de schimb EUR/RON și impactul fiscal direct asupra investitorilor din România.',
    prompt: `Adrian Codirlașu, CFA & doctor în finanțe RO: politică BNR, curs EUR/RON & USD/RON, BVB, titluri de stat locale și optimizare fiscală România (impozite, CASS).`
  }
];

export interface UseAIAdvisorProps {
  portfolios: Portfolio[];
  activePortfolioId: string | 'all';
  reportingCurrency?: string;
  convertValue?: (amount: number, from: string, to: string) => number;
  macroStats?: any;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
  onOpenFullReport?: () => void;
}

export const useAIAdvisor = ({
  portfolios,
  activePortfolioId,
  reportingCurrency = 'EUR',
  convertValue,
  macroStats,
  externalPrompt,
  onClearExternalPrompt,
  onOpenFullReport
}: UseAIAdvisorProps) => {
  const [activeExpertId, setActiveExpertId] = useState<string>('elena');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const experts = AI_EXPERTS(16);
  const activeExpert = experts.find(e => e.id === activeExpertId) || experts[0];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isChatLoading]);

  // Handle external prompts (e.g. from the Target Allocation component)
  useEffect(() => {
    if (externalPrompt) {
      setMessages([]);
      setChatInput(externalPrompt);
      if (onClearExternalPrompt) {
        onClearExternalPrompt();
      }
    }
  }, [externalPrompt, onClearExternalPrompt]);

  const contextName = activePortfolioId === 'all' 
    ? 'Toate Portofoliile' 
    : portfolios.find(p => p.id === activePortfolioId)?.name || 'Portofoliu';

  const buildGreetingMessage = (targetExpert: AIExpert): ChatMessage => ({
    id: `greeting-${targetExpert.id}`,
    role: 'assistant',
    content: `Salutare! Sunt **${targetExpert.name}**, asistentul tău specializat ca **${targetExpert.role}**. 

*Filozofia mea:* ${targetExpert.philosophy}

Am acces la rezumatul agregat din **${contextName}**. Întreabă-mă orice despre strategii de optimizare sau rebalansare, sau folosește butoanele de asistență rapidă de mai jos!`,
    timestamp: new Date()
  });

  // Load cached conversation from localStorage on load/context/expert change (NO automatic API call)
  useEffect(() => {
    const cached = getCachedChatMessages(activePortfolioId, activeExpertId);
    if (cached && cached.messages.length > 0) {
      setMessages(
        cached.messages.map((m: any) => ({
          ...m,
          timestamp: m.timestamp ? new Date(m.timestamp) : new Date(),
        }))
      );
      return;
    }
    const targetExpert = experts.find(e => e.id === activeExpertId) || experts[0];
    setMessages([buildGreetingMessage(targetExpert)]);
  }, [activePortfolioId, activeExpertId, contextName]);

  const handleExpertChatSubmit = async (e: React.FormEvent | null, customText?: string) => {
    if (e) e.preventDefault();
    const textToSend = customText || chatInput || '';
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    const nextMessagesWithUser = [...messages, userMsg];
    setMessages(nextMessagesWithUser);
    if (!customText) setChatInput('');
    setIsChatLoading(true);

    try {
      // Pre-calculate totals, weights and P/L in TypeScript; send ONLY compact JSON (no transaction history)
      const compactPortfolio = buildCompactPortfolioSummary(
        portfolios,
        activePortfolioId,
        reportingCurrency,
        convertValue,
        macroStats
      );
      const responseText = await askFinancialAssistant(userMsg.content, compactPortfolio, activeExpert.prompt);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText || "Nu am putut genera un răspuns.",
        timestamp: new Date()
      };
      const updatedMessages = [...nextMessagesWithUser, aiMsg];
      setMessages(updatedMessages);
      if (responseText && !responseText.startsWith('Eroare AI:')) {
        saveCachedChatMessages(activePortfolioId, activeExpertId, updatedMessages);
      }
    } catch (e) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "A apărut o eroare de conexiune la asistentul AI.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const askForQuickAdvice = (topic: string) => {
    let question = '';
    const contextData = activePortfolioId === 'all' ? 'întregul portofoliu' : portfolios.find(p => p.id === activePortfolioId)?.name || 'portofoliul curent';
    
    if (topic === 'rebalance') {
      question = `Cum rebalansez ${contextData} conform strategiei tale? Oferă 3 pași exacți.`;
    } else if (topic === 'risk') {
      question = `Care sunt cele mai mari 2-3 riscuri în ${contextData} acum?`;
    } else {
      question = `Ce instrumente prioritizezi pentru capital nou în ${contextData}?`;
    }

    setChatInput(question);
    setTimeout(() => {
      handleExpertChatSubmit(null, question);
    }, 50);
  };

  const changeActiveExpert = (expertId: string, forceReset: boolean = false) => {
    setActiveExpertId(expertId);
    if (forceReset) {
      clearCachedChatMessages(activePortfolioId, expertId);
      const targetExpert = experts.find(e => e.id === expertId) || experts[0];
      setMessages([buildGreetingMessage(targetExpert)]);
    }
  };

  return {
    activeExpertId,
    setActiveExpertId,
    chatInput,
    setChatInput,
    messages,
    setMessages,
    isChatLoading,
    chatContainerRef,
    experts,
    activeExpert,
    contextName,
    handleExpertChatSubmit,
    askForQuickAdvice,
    changeActiveExpert,
  };
};

interface AIExpertsListProps {
  experts: AIExpert[];
  activeExpertId: string;
  changeActiveExpert: (id: string) => void;
}

export const AIExpertsList: React.FC<AIExpertsListProps> = ({
  experts,
  activeExpertId,
  changeActiveExpert
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
      <h3 className="text-md font-bold text-white mb-4 flex items-center gap-2">
        <Bot className="text-emerald-400" size={18} />
        Echipa de Experți AI Bursieri
      </h3>
      
      {/* Vertically stacked full-width expert cards for maximum legibility */}
      <div className="grid grid-cols-1 gap-3">
        {experts.map((exp) => {
          const isSelected = exp.id === activeExpertId;
          return (
            <div 
              key={exp.id}
              onClick={() => changeActiveExpert(exp.id)}
              className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isSelected 
                  ? 'bg-slate-950 border-emerald-500/80 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30' 
                  : 'bg-slate-850/50 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${exp.avatarColor} flex items-center justify-center shrink-0`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{exp.name}</h4>
                    <span className="text-[9px] bg-slate-800 border border-slate-700/80 text-slate-400 font-bold px-1.5 py-0.5 rounded-full mt-0.5 inline-block">
                      {exp.badge}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                  {exp.philosophy}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  {isSelected ? 'Activ' : 'Alege Expert'}
                </span>
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface AIConsultationChatProps {
  aiAdvisor: ReturnType<typeof useAIAdvisor>;
}

export const AIConsultationChat: React.FC<AIConsultationChatProps> = ({ aiAdvisor }) => {
  const {
    activeExpert,
    experts,
    contextName,
    messages,
    isChatLoading,
    chatInput,
    setChatInput,
    chatContainerRef,
    handleExpertChatSubmit,
    askForQuickAdvice,
    changeActiveExpert,
    activeExpertId
  } = aiAdvisor;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col h-[650px] shadow-sm overflow-hidden w-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${activeExpert.avatarColor} flex items-center justify-center shrink-0 shadow-md`}>
            {activeExpert.icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Consultă Expert: <span className="text-emerald-400">{activeExpert.name}</span>
              <span className="text-[10px] bg-slate-800 border border-slate-700/80 text-slate-300 font-medium px-2 py-0.5 rounded-full">
                {activeExpert.badge}
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Context activ: <span className="text-slate-200 font-semibold">{contextName}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {messages.length > 1 && (
            <button 
              onClick={() => changeActiveExpert(activeExpertId, true)} 
              className="text-slate-400 hover:text-rose-400 p-2 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Resetează Chat"
            >
              <Trash2 size={15} />
              <span className="hidden sm:inline">Reset Conversație</span>
            </button>
          )}
        </div>
      </div>

      {/* 6 Experts Selector Grid Integrated */}
      <div className="bg-slate-950/90 p-3 border-b border-slate-800/80">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
            <Bot className="text-emerald-400" size={15} /> Alege Asistentul AI Dorit:
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            6 experți bursieri specializați
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {experts.map((exp) => {
            const isSelected = exp.id === activeExpertId;
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => changeActiveExpert(exp.id)}
                className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between relative group cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-tr ${exp.avatarColor} flex items-center justify-center shrink-0`}>
                      {exp.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate leading-tight">{exp.name}</div>
                      <div className="text-[9px] text-slate-400 truncate leading-none mt-0.5">{exp.badge}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-slate-800/80">
                  <span className={`text-[9px] font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {isSelected ? '✓ Activ' : 'Alege'}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Action Suggestion Bar */}
      <div className="bg-slate-950/20 px-4 py-2 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto custom-scrollbar">
        <span className="text-[10px] font-bold text-slate-500 shrink-0 flex items-center gap-1">
          <HelpCircle size={10} /> Consultare Rapidă:
        </span>
        <button 
          onClick={() => askForQuickAdvice('rebalance')}
          className="text-[11px] bg-slate-800 hover:bg-slate-750 text-slate-300 font-medium px-2.5 py-1 rounded-full border border-slate-700 transition-colors shrink-0 animate-in fade-in zoom-in-95 duration-200"
        >
          ⚖️ Sugerează Rebalansare
        </button>
        <button 
          onClick={() => askForQuickAdvice('risk')}
          className="text-[11px] bg-slate-800 hover:bg-slate-750 text-slate-300 font-medium px-2.5 py-1 rounded-full border border-slate-700 transition-colors shrink-0 animate-in fade-in zoom-in-95 duration-200 [animation-delay:50ms]"
        >
          ⚠️ Evaluare Riscuri
        </button>
        <button 
          onClick={() => askForQuickAdvice('capital')}
          className="text-[11px] bg-slate-800 hover:bg-slate-750 text-slate-300 font-medium px-2.5 py-1 rounded-full border border-slate-700 transition-colors shrink-0 animate-in fade-in zoom-in-95 duration-200 [animation-delay:100ms]"
        >
          💵 Alocare Capital Nou
        </button>
      </div>

      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/40 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              msg.role === 'user' 
                ? 'bg-slate-700' 
                : `bg-gradient-to-tr ${activeExpert.avatarColor}`
            }`}>
              {msg.role === 'user' ? <User size={14} className="text-slate-300" /> : activeExpert.icon}
            </div>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-emerald-950/30 border border-emerald-500/20 text-white rounded-tr-none' 
                : 'bg-slate-850/80 border border-slate-800 text-slate-200 rounded-tl-none markdown-body shadow-sm'
            }`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isChatLoading && (
          <div className="flex gap-3">
            <div className={`shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr ${activeExpert.avatarColor} flex items-center justify-center`}>
              {activeExpert.icon}
            </div>
            <div className="bg-slate-850/80 border border-slate-800 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <form onSubmit={(e) => handleExpertChatSubmit(e)} className="relative flex items-center">
          <input 
            type="text" 
            value={chatInput} 
            onChange={(e) => setChatInput(e.target.value)} 
            placeholder={`Întreabă-l pe asistentul tău ${activeExpert.name}...`} 
            className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-lg py-3 pl-4 pr-12 text-slate-200 outline-none text-sm transition-colors" 
          />
          <button 
            type="submit" 
            disabled={isChatLoading || !(chatInput && chatInput.trim())} 
            className="absolute right-2 top-2 p-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white disabled:text-slate-400 rounded-md transition-colors cursor-pointer"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

interface AIGlobalReportProps {
  contextName: string;
  activePortfolioId?: string;
  onOpenFullReport?: () => void;
}

export const AIGlobalReport: React.FC<AIGlobalReportProps> = ({
  contextName,
  activePortfolioId,
  onOpenFullReport
}) => {
  const cachedReport = activePortfolioId ? getCachedFullReport(activePortfolioId) : null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm relative overflow-hidden hover:border-slate-700/80 transition-colors w-full">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Bot size={120} className="text-emerald-500" />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="text-emerald-400" size={18} /> 
              Generator Raport Global Portofoliu
            </h2>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Generați o analiză de risc, diversificare și o notă globală de la toți experții AI pentru contextul: <span className="text-emerald-400 font-medium">{contextName}</span>
            </p>
            {cachedReport?.updatedAt && (
              <p className="text-[10px] text-slate-500 font-mono mt-1.5">
                Ultima analiză salvată: {formatCacheTimestamp(cachedReport.updatedAt)}
              </p>
            )}
          </div>
          <button 
            onClick={onOpenFullReport} 
            className="w-full px-4 py-2.5 rounded-lg font-medium text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-emerald-500/10 hover:scale-[1.01]"
          >
            <Sparkles size={14} />
            Raport Portofoliu Complet
          </button>
        </div>
      </div>
    </div>
  );
};

const AIAdvisor: React.FC<AIAdvisorProps> = (props) => {
  const aiAdvisor = useAIAdvisor(props);
  return (
    <div className="space-y-6">
      <AIExpertsList 
        experts={aiAdvisor.experts} 
        activeExpertId={aiAdvisor.activeExpertId} 
        changeActiveExpert={aiAdvisor.changeActiveExpert} 
      />
      <AIConsultationChat aiAdvisor={aiAdvisor} />
      <AIGlobalReport 
        contextName={aiAdvisor.contextName} 
        activePortfolioId={props.activePortfolioId}
        onOpenFullReport={props.onOpenFullReport} 
      />
    </div>
  );
};

export default AIAdvisor;
