import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0B1120]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
            <BarChart3 size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Finance Fox</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hover:bg-white/10 hover:text-white">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Sign up</Button>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 mt-12 md:mt-0">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm mb-8 text-primary font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          The new standard in personal finance
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6 text-white">
          Master your money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">intelligent insights.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mb-10">
          Track expenses, monitor investments, and achieve your financial goals with our intuitive dashboard designed for modern wealth management.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Start for free <ArrowRight size={18} />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-white/10 hover:text-white">
            View Live Demo
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto w-full text-left">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Real-time updates and instant synchronization across all your devices." },
            { icon: Shield, title: "Seamless Expense Management", desc: "Track and optimize your spending with ease." },
            { icon: BarChart3, title: "Deep Analytics", desc: "Visualize your spending patterns with interactive charts." },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-textMuted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="py-8 text-center text-textMuted text-sm border-t border-slate-800 mt-20 z-10">
        &copy; {new Date().getFullYear()} Finance Fox. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
