/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Home, 
  Target, 
  Ban, 
  Bookmark, 
  History, 
  Plus, 
  HelpCircle, 
  Gavel, 
  Search, 
  Bell, 
  Settings, 
  Play, 
  Pause, 
  Maximize2, 
  Share2, 
  Check, 
  ArrowLeft,
  Tv,
  TrendingUp,
  Volume2,
  VolumeX,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Target, label: 'Focus Feed', id: 'focus', active: true },
  { icon: Ban, label: 'Blocked Content', id: 'blocked' },
  { icon: Bookmark, label: 'Watch Later', id: 'saved' },
  { icon: History, label: 'History', id: 'history' },
];

export default function App() {
  const [isZenMode, setIsZenMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdFree, setIsAdFree] = useState(true);
  const [activeTab, setActiveTab] = useState('focus');
  const [isMuted, setIsMuted] = useState(false);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-on-surface font-sans antialiased overflow-x-hidden">
      {/* Sidebar */}
      <AnimatePresence>
        {!isZenMode && (
          <motion.nav 
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed left-0 top-0 h-full w-64 bg-white border-r border-outline-variant flex flex-col p-6 z-40 hidden md:flex"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0 flex items-center justify-center border border-outline-variant">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnbDYmGKrR8kgcIjpBagIOFK_t-CJ4p8WtuYxRojjNO7pZ2rV2pSCOFe4eT3zcZRp93ZCdFqB9ztRk3K5pRTHBcN6_Dn-iVgktn9KXOEHsLpixiQP8TQw14HXfMBtkwIFwZVz8Irbm_zWJLy-1YJaqLDGKLdlEfnGWqt4uvVb3nh0GcKpoQQK5GMp7joZIRqMKkQcke6ipy0BzBz7143EqCVWHcU_kWvEniw8es0GFrOQhdWhdcyaQvhGmc643qrwRx-uImueFCg" 
                  alt="Executive" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display text-primary">Focused Watch</span>
                <span className="text-xs text-outline font-medium tracking-wide">Institutional Access</span>
              </div>
            </div>

            {/* Main Tabs */}
            <div className="flex flex-col gap-1 flex-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all group ${
                    activeTab === item.id 
                      ? 'bg-primary/5 text-primary font-semibold' 
                      : 'text-outline hover:bg-surface-container-low hover:text-on-surface'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'fill-primary' : ''}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto mb-6">
              <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm">
                <Plus className="w-4 h-4" />
                New Research
              </button>
            </div>

            {/* Footer Tabs */}
            <div className="flex flex-col gap-1 border-t border-outline-variant pt-4">
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-md group text-outline hover:text-on-surface">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Support</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-md group text-outline hover:text-on-surface">
                <Gavel className="w-5 h-5" />
                <span className="text-sm font-medium">Compliance</span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col transition-all duration-500 ease-in-out ${!isZenMode ? 'md:pl-64' : 'pl-0'}`}>
        
        {/* Header */}
        <AnimatePresence>
          {!isZenMode && (
            <motion.header 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-30"
            >
              <div className="flex items-center justify-between px-6 lg:px-10 py-4 max-w-[1440px] mx-auto">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 cursor-pointer group">
                    <Tv className="w-8 h-8 text-red-600 fill-red-600 transition-transform group-hover:scale-110" />
                    <span className="text-xl font-extrabold tracking-tighter text-primary font-display">RESEARCH</span>
                  </div>
                  
                  <div className="hidden lg:flex items-center bg-surface-container-low border border-outline-variant rounded-full px-4 py-2 w-96 group focus-within:border-primary transition-all">
                    <Search className="w-4 h-4 text-outline mr-2 group-focus-within:text-primary" />
                    <input 
                      type="text" 
                      placeholder="Search institutional strategy..."
                      className="bg-transparent border-none focus:ring-0 p-0 text-sm w-full font-medium"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-outline hover:bg-surface-container-high transition-all">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-outline hover:bg-surface-container-high transition-all">
                    <Settings className="w-5 h-5" />
                  </button>
                  <div className="w-8 h-8 ml-2 rounded-full overflow-hidden border border-outline-variant flex-shrink-0 cursor-pointer">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq6lNlSeuHOFk2zkcPGNUstKYFXqMLvcjKvP9N4VhuyC2eeuFT6VrM72XSdiR9ex6VSPXo16dzYqc7Fu4IBap6G61Fs_O3Pub_Fajhvf5IG_zXddMIpzNfWEAbJ_kp2ndZ5P5TkJnyeSGo5sy8Xg3pOptqYxnjDO6LzlJMd71OuuX77wvS0ghbopfQZnH3E_RqZAmuWahL0jKonS6heoW7Y4dXD-ft-Mvh3KaPBo7JdNVj7PKFM-JfFZyOgqUZ9vtVfHuPH_rqQA" 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.header>
          )}
        </AnimatePresence>

        {/* Main Canvas */}
        <main className="flex-1 p-6 lg:p-10 max-w-[1440px] mx-auto w-full">
          {/* Breadcrumb & Zen Control */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-outline text-sm font-medium">
              <ArrowLeft className="w-4 h-4 cursor-pointer hover:text-on-surface" />
              <span className="hover:text-on-surface cursor-pointer">Back to Focus Feed</span>
              <span className="mx-2 text-outline-variant">/</span>
              <span className="text-on-surface font-semibold">Q3 Global Macro Strategy Brief</span>
            </div>
            
            <button 
              onClick={() => setIsZenMode(!isZenMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-semibold text-sm ${
                isZenMode 
                  ? 'bg-primary text-on-primary border-primary' 
                  : 'border-outline-variant border text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              {isZenMode ? 'Exit Zen' : 'Zen Mode'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Video Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Player */}
              <motion.div 
                layout
                className="w-full aspect-video bg-black rounded-3xl overflow-hidden relative group shadow-2xl border border-outline-variant transition-all duration-700"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[2000ms]"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0OpfyZOcxnvHWTDzN_2cLxiwsCO0DUVdL-DdYHCSzX6VFJLACAFDMqR0HN4z15dXX4uZiBfvEMXVPERJz2ZJpXKCfa8qTTOGNJrwzVYBELE3sFS1I1H8ncG1KLgBZksCIxel2Tch2rKXDqwViYQQ816Ep9J4Ry2I929ZVYPAl2E4kUHY21foQtCDm3dwml_Ghy30m68JeR1haZwKVLy4W1sert-w3NSxpiTBccNbQ3ev9VEFeVqkqJ1gjtWinZRDSXOGbLXtUHw')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Center Play Button */}
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl text-white border border-white/30 hover:bg-white/30 transition-all shadow-2xl z-20"
                >
                  {isPlaying ? <Pause className="w-10 h-10 fill-white" /> : <Play className="w-10 h-10 fill-white ml-1" />}
                </motion.button>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between glass-panel border-t border-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-6">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="text-primary hover:scale-110 transition-transform">
                      {isPlaying ? <Pause className="w-6 h-6 fill-primary" /> : <Play className="w-6 h-6 fill-primary" />}
                    </button>
                    <div className="w-64 h-1.5 bg-primary/10 rounded-full relative cursor-pointer group/progress">
                      <div className="absolute top-0 left-0 h-full w-[42%] bg-primary rounded-full" />
                      <div className="absolute top-1/2 left-[42%] -translate-y-1/2 w-4 h-4 bg-primary rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-lg" />
                    </div>
                    <span className="text-xs font-bold text-primary slashed-zero">12:45 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary">
                    <button onClick={() => setIsMuted(!isMuted)} className="hover:scale-110 transition-transform">
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <Settings className="w-5 h-5 hover:rotate-90 transition-transform cursor-pointer" />
                    <Maximize2 className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                </div>
              </motion.div>

              {/* Meta & Info */}
              <div className="bg-white border border-outline-variant rounded-3xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-surface-container-high">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-extrabold font-display leading-tight mb-3">Q3 Global Macro Strategy Brief</h1>
                    <div className="flex items-center gap-3 text-sm text-outline font-medium">
                      <span className="text-primary font-bold">Goldman Sachs Research</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                      <span>Oct 12, 2023</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                      <div className="flex items-center gap-1.5 bg-primary/5 px-2.5 py-1 rounded-lg text-primary text-xs font-bold uppercase tracking-wider">
                        <Check className="w-3.5 h-3.5" />
                        Institutional
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-outline-variant font-bold text-sm hover:bg-surface-container-low transition-all">
                      <Bookmark className="w-4 h-4" />
                      Save
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-surface-container-high font-bold text-sm hover:bg-surface-dim transition-all">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Focus Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary shadow-lg">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface">Clean Stream Active</h3>
                      <p className="text-xs text-outline font-medium">Global ad-blocking and algorithmic filtering enabled.</p>
                    </div>
                  </div>
                  <div className="h-px sm:h-12 w-full sm:w-px bg-outline-variant/50" />
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          checked={isAdFree} 
                          onChange={(e) => setIsAdFree(e.target.checked)} 
                          className="sr-only" 
                        />
                        <div className={`w-12 h-7 rounded-full transition-colors duration-300 ${isAdFree ? 'bg-primary' : 'bg-outline-variant'}`} />
                        <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md ${isAdFree ? 'translate-x-5' : 'translate-x-0'}`} />
                      </div>
                      <span className="text-sm font-bold">Ad-Free</span>
                    </label>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-error/10 text-error font-bold text-sm hover:bg-error/20 transition-all border border-error/20">
                      <Ban className="w-4 h-4" />
                      Filter Channel
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue Watching Section */}
              <div>
                <h2 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                  <History className="w-5 h-5 text-outline" />
                  Continue Watching
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Fixed Income Yield Curves Q4 Forecast",
                      source: "Bloomberg Intelligence",
                      progress: 65,
                      timeLeft: "22 min left",
                      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrq3IgU9rHAU4CIb4OTWr0DQN6bD1yZEq8iSJoqgVj1BGY7aOC35_Z1eqsnaFIfY00DiAQs5k-Prco6TvYEqq9W0wVeQLRugCKwGVTMmf9N8GhWaAKrjMSO6mg-QRkeDEMhgKp-2bUiiOUpFOcC61xPcN6Zo54OwAOIHE6xIBgQ1jUQdTh0n2FT8VUm1QwkA5daaeKYDLeI5kU-mJmWO1LFVvMzM5x0CULhSx8Xi6lUk5-4iwW6rb_v3GBiy5xokMkEtqEgKEQw"
                    },
                    {
                      title: "Emerging Markets: Tech Sector Analysis",
                      source: "J.P. Morgan Insights",
                      progress: 15,
                      timeLeft: "45 min left",
                      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGuSjsgBhfh7tn0ot4VZ-hPL-Uub3CnaxWN2H1k7NCzMhpV-JKjxe3aKEWz8bD9a5uSF6fxEE9wti2RiL5JFVydvOia9tq9jTfNkyqjWzQcZeZYk8dq4lh25kMcnoVRJbASncUXKUYsLqivCqBTQ7bTBmKgTBg8NTBl0GeSpL7G9yFrvuLbgX8GnHdGaAyRjZeTOl0gQMvHBsYn5KuUgQuhtNQHLKOx4G_j1hCL-ytAJenxVWxrwPov7_TQpLqu2Vex-rX3AKN9g"
                    }
                  ].map((video, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="flex gap-4 p-4 rounded-3xl bg-white border border-outline-variant hover:border-primary/30 transition-all cursor-pointer group shadow-sm"
                    >
                      <div className="w-36 aspect-video rounded-xl overflow-hidden relative flex-shrink-0">
                        <img src={video.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Video" />
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-high/50">
                          <div className="h-full bg-primary" style={{ width: `${video.progress}%` }} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h4 className="text-sm font-bold leading-tight line-clamp-2 transition-colors group-hover:text-primary mb-1">{video.title}</h4>
                          <p className="text-[11px] text-outline font-semibold uppercase tracking-wider">{video.source}</p>
                        </div>
                        <span className="text-[11px] text-outline font-medium">{video.timeLeft}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Suggestions */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-outline-variant rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/30">
                  <h2 className="font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Highly Relevant
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary px-2 py-1 rounded">AD-FREE</span>
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      title: "Impact of Rate Hikes on Commercial Real Estate",
                      author: "Morgan Stanley",
                      time: "18:45",
                      match: "98%",
                      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4MRdyGXj-catj3bnfWzdSvVCrAv0d1on5MTXHDrfjDtpIPRJT_aXlbLe-e0vtbh3faXSM-V3LbXP2pYZphvjoqt3a7VkSWRI56CPJdFws3xitnjI6KaY4HIT8GAf422pyO8QEX-W888kzoV0n4f-NxUNh3VGvQIJ3SHoICXko3LhaMb9QoqlbDy5vZD4XrQEggkqixQsZTGSMW-DgGaRQ2Qjt8tSuJ5OBWYX2d2jsMan0wnJeGbZomNa9KIgqxYM8K2sfwcJ1pQ"
                    },
                    {
                      title: "Private Equity Outlook: Tech Valuations",
                      author: "Bain & Company",
                      time: "32:10",
                      match: "95%",
                      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5PkRM4rYYKv6RYoxiOTvO7UmePQso3Ufb5xlySfd2YV-b-nD7-SZxiLqHIehJpZDS8kUrwfb72DUntlosLF58JHu5-6kHU3Mvs07wTTgKmlB6nfqEiIA48kgw4qpZF78ZP0CbjXOtoS37lWrScjuEx2hlcG-uGXZo_KToiYE35Mii1iwKL-sX3f1q0eViwr_6xKzNLPx2EZB2nTjjY84duN5MUgGHuIiNTQ7XFALZrpph8L2NP2-sXbaMAcPpINzSVBrPv34N3Q"
                    },
                    {
                      title: "Regulatory Changes in European Banking 2024",
                      author: "Compliance Weekly",
                      time: "12:05",
                      match: "89%",
                      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu65iaSfYx9532FjShAdx7xz74RDB_9Ltej_mKakFaE5_W_Qfk9-EzZxEG972CgLYEZp65xzTySTFPXitPMkFTSppeuHeC25WNl2xK7_U_qqsIJ9-vIhP6nQomVKbPzw7BYMlnVq_bZXIKyuS8a5wHDo4Zi_g05J-Wwc_V1Abb5eDvv0Odc1a1KcLJMrZ5kXhHU8XLAV3oTyebU3AeLoWpHDzoWYjMB0QjEI50WRzQ7Xt9VL4b1RIztcw32Jq7HNJJTSJnhiHEZA"
                    }
                  ].map((video, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="w-28 h-18 bg-surface-dim rounded-xl overflow-hidden relative flex-shrink-0">
                        <img src={video.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Rec" />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 rounded font-bold">{video.time}</span>
                      </div>
                      <div className="flex flex-col py-0.5">
                        <h4 className="text-[13px] font-bold leading-tight line-clamp-2 transition-colors group-hover:text-primary mb-1">{video.title}</h4>
                        <span className="text-[11px] text-outline font-medium">{video.author}</span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          <span className="text-[10px] font-bold text-primary">{video.match} Match</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full mt-8 py-3 text-center text-primary font-bold text-sm bg-primary/5 hover:bg-primary/10 rounded-xl transition-all flex items-center justify-center gap-2">
                  <ChevronDown className="w-4 h-4" />
                  Load More Insights
                </button>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
