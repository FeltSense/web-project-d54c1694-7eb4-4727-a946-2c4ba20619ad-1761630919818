export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmNGY5ZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now syncing 2.4M+ files daily
        </div>
        
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Work Together in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Perfect Sync
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
          CloudSync Pro eliminates version conflicts and data silos. See every team member's edits as they type, track project metrics in real-time, and connect your entire tech stack without writing a single line of code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
            Start Free 14-Day Trial
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all">
            Watch 2-Min Demo
          </button>
        </div>
        
        <div className="flex items-center gap-6 pt-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-slate-900"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-slate-900"></div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">12,000+ teams</div>
            <div className="text-slate-400">shipping faster with CloudSync</div>
          </div>
        </div>
      </div>
      
      <div className="relative lg:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
        
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900/80 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-blue-300">Live Collaboration</h3>
                <span className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  4 active now
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs">JD</div>
                  <span className="text-slate-300">editing line 47...</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs">SM</div>
                  <span className="text-slate-300">added comment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 rounded-lg p-4 border border-cyan-500/30">
              <h3 className="font-semibold text-cyan-300 mb-3">Analytics Dashboard</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded p-3">
                  <div className="text-2xl font-bold text-green-400">+34%</div>
                  <div className="text-xs text-slate-400">Team velocity</div>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <div className="text-2xl font-bold text-blue-400">2.1h</div>
                  <div className="text-xs text-slate-400">Avg response time</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 rounded-lg p-4 border border-purple-500/30">
              <h3 className="font-semibold text-purple-300 mb-3">Connected Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">Slack</span>
                <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">Jira</span>
                <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">GitHub</span>
                <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">+97 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}