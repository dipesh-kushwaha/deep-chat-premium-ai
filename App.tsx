import React, { useState } from 'react';
import { Menu, Settings, MessageSquare, Zap, Shield, Info, Heart, Crown, LogOut } from 'lucide-react';
import { Chat } from './components/Chat';
import { LiveInterface } from './components/LiveInterface';
import { SettingsModal } from './components/SettingsModal';
import { ContributeModal } from './components/ContributeModal';
import { AppSettings } from './types';

const DEFAULT_SETTINGS: AppSettings = {
  userName: 'User',
  systemInstruction: 'You are Deep Chat, an advanced, professional, and premium AI assistant created by Dipesh Mahato Koiri. You are helpful, concise, intelligent, and use Markdown to format your responses effectively with bold text for emphasis and clear structure.',
  voiceName: 'Zephyr',
};

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isContributeOpen, setIsContributeOpen] = useState(false);
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  return (
    <div className="flex h-screen bg-darker overflow-hidden text-slate-100 font-sans selection:bg-primary/30 selection:text-primary-100">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#0b1121] border-r border-white/5 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 flex items-center gap-4 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 ring-1 ring-white/10">
            <Zap size={24} className="text-white" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-sans">Deep Chat</h1>
            <div className="flex items-center gap-1">
                <Crown size={10} className="text-amber-400" fill="currentColor"/>
                <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase">Premium AI</span>
            </div>
          </div>
        </div>

        <nav className="p-5 space-y-3 flex-1 overflow-y-auto">
          <button className="w-full flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-primary/20 to-transparent text-indigo-300 rounded-2xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all group shadow-lg shadow-black/20">
            <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-bold">New Conversation</span>
          </button>
          
          <div className="pt-6 pb-2 px-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                Recent Chats <span className="h-px bg-slate-800 flex-1"></span>
            </p>
          </div>
          
          <div className="space-y-1">
             {['Creative Writing', 'Code Debugging', 'Marketing Strategy', 'Travel Plan - Japan'].map((item, i) => (
                 <button key={i} className="w-full text-left px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all truncate flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors"></span>
                    {item}
                 </button>
             ))}
          </div>
        </nav>

        <div className="p-5 border-t border-white/5 bg-black/20 space-y-3">
          {/* Contribute Button - Premium Feature */}
          <button 
            onClick={() => setIsContributeOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-emerald-500/20 to-emerald-900/20 border border-emerald-500/20 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 rounded-xl transition-all group"
          >
             <div className="p-1.5 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                <Heart size={16} fill="currentColor" />
             </div>
             <span className="font-bold text-sm">Donate & Support</span>
          </button>

          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <Settings size={18} />
            <span className="font-medium text-sm">Settings</span>
          </button>
          
          {/* Credits */}
          <div className="pt-4 text-center relative group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">
              Created by
            </p>
            <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold mt-1 tracking-wide drop-shadow-sm">
              DIPESH MAHATO KOIRI
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative shadow-2xl">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-6 border-b border-white/5 bg-darker/80 backdrop-blur-md z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-slate-400 hover:text-white lg:hidden transition-colors"
            >
                <Menu size={28} />
            </button>
            <span className="lg:hidden font-bold text-xl flex items-center gap-2 text-white">
               <Zap size={20} className="text-primary" fill="currentColor"/> Deep Chat
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right mr-4">
                <p className="text-xs font-bold text-slate-300">{settings.userName}</p>
                <p className="text-[10px] text-accent uppercase tracking-wider">Pro Plan</p>
            </div>
            <button 
                onClick={() => setIsLiveMode(true)}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-400 border border-red-500/20 rounded-full hover:border-red-500/40 hover:from-red-500/20 hover:to-orange-500/20 transition-all text-sm font-bold tracking-wide shadow-lg shadow-red-900/10 group"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                LIVE VOICE
            </button>
            
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-indigo-500/30">
                 <div className="w-full h-full rounded-full bg-surface border border-black/20 flex items-center justify-center">
                    <span className="font-bold text-xs text-white">{settings.userName.substring(0,2).toUpperCase()}</span>
                 </div>
            </div>
          </div>
        </header>

        {/* Chat Content */}
        <div className="flex-1 overflow-hidden relative">
            <Chat settings={settings} onStartLive={() => setIsLiveMode(true)} />
        </div>
      </main>

      {/* Modals */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={setSettings}
      />

      <ContributeModal
        isOpen={isContributeOpen}
        onClose={() => setIsContributeOpen(false)}
      />

      <LiveInterface 
        isOpen={isLiveMode}
        onClose={() => setIsLiveMode(false)}
        settings={settings}
      />

    </div>
  );
};

export default App;