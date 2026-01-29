import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

const customStyles = {
  root: {
    '--bg-dark': '#6C6A67',
    '--bg-dark-overlay': 'rgba(0,0,0,0.2)',
    '--card-white': '#FFFFFF',
    '--text-main': '#111111',
    '--text-sub': '#888888',
    '--text-light': '#F2F2F2',
    '--accent-gold': '#C5A572',
    '--radius-pill': '999px',
    '--radius-card': '32px',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(197, 165, 114, 0.5), transparent)',
    animation: 'scan 3s linear infinite',
  }
};

const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
      <div className="flex gap-4 pointer-events-auto">
        <div 
          className="text-white font-bold text-2xl tracking-tight mr-4 flex items-center cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <span className="opacity-90">Toy.Lab</span>
        </div>
        <button className="btn-pill btn-glass" onClick={() => navigate('/')}>
          Generate <span className="opacity-60 text-xs ml-1">+</span>
        </button>
        <button className="btn-pill btn-glass" onClick={() => navigate('/marketplace')}>
          Marketplace <span className="opacity-60 text-xs ml-1">+</span>
        </button>
      </div>

      <div className="flex gap-3 pointer-events-auto">
        <button className="btn-icon" onClick={() => navigate('/profile')}>
          <i data-lucide="user" size="20"></i>
        </button>
        <button className="btn-icon">
          <i data-lucide="menu" size="20"></i>
        </button>
      </div>
    </nav>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [material, setMaterial] = useState('Vinyl');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="flex-1 flex w-full h-full">
      <div className="w-5/12 h-full flex flex-col justify-center px-12 xl:px-20 relative z-10">
        <div className="text-white/50 text-sm mb-6 animate-enter" style={{ animationDelay: '0.1s' }}>
          01 — 04
        </div>
        <h1 className="text-white text-6xl xl:text-7xl font-light display-text mb-10 animate-enter" style={{ animationDelay: '0.2s' }}>
          Define your<br />
          <span className="font-medium">play concept</span>
        </h1>
        <div className="w-full max-w-md space-y-8 animate-enter" style={{ animationDelay: '0.3s' }}>
          <div className="group">
            <label className="block text-white/60 text-sm mb-3 pl-4">Prompt</label>
            <input 
              type="text" 
              className="input-pill" 
              placeholder="e.g. A retro-futuristic robot bear..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="group">
            <label className="block text-white/60 text-sm mb-3 pl-4">Material Base</label>
            <div className="flex gap-3">
              <button 
                className={`btn-pill btn-glass text-sm ${material === 'Vinyl' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
                onClick={() => setMaterial('Vinyl')}
              >
                Vinyl
              </button>
              <button 
                className={`btn-pill btn-glass text-sm ${material === 'Wood' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
                onClick={() => setMaterial('Wood')}
              >
                Wood
              </button>
              <button 
                className={`btn-pill btn-glass text-sm ${material === 'Plush' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
                onClick={() => setMaterial('Plush')}
              >
                Plush
              </button>
            </div>
          </div>
          <div className="pt-8">
            <button className="btn-pill btn-solid w-full justify-between group" onClick={() => navigate('/results')}>
              <span>Generate Schema</span>
              <i data-lucide="arrow-right" size="18" className="group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 left-12 text-white/30 text-xs animate-enter" style={{ animationDelay: '0.5s' }}>
          AI Model v4.2 · Rendering latency 12ms
        </div>
      </div>

      <div className="w-7/12 h-full p-6 pl-0 flex items-center justify-center">
        <div className="sheet-card w-full h-full relative flex flex-col animate-enter" style={{ animationDelay: '0.4s' }}>
          <div className="flex-1 relative bg-gray-50 overflow-hidden group cursor-grab active:cursor-grabbing">
            <img src="https://images.unsplash.com/photo-1535581652167-3d6b98c36cd0?q=80&w=2070&auto=format&fit=crop" alt="Toy Render" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium tracking-wide shadow-sm">
              PREVIEW MODE
            </div>
          </div>
          <div className="bg-white p-10 pb-12">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-4xl font-normal tracking-tight mb-2 text-gray-900">
                  Astro-Bot MK1<span className="status-dot"></span>
                </h2>
                <p className="text-gray-400 text-sm">Batch #8829-A</p>
              </div>
              <button className="btn-icon !text-gray-900 !border-gray-200 hover:!bg-gray-100">
                <i data-lucide="share" size="18"></i>
              </button>
            </div>
            <div className="text-sm text-gray-400 mb-6">Fabrication specs:</div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-8">
              <div>
                <div className="label-text mb-1">poly count:</div>
                <div className="data-value">12 450</div>
              </div>
              <div>
                <div className="label-text mb-1">production cost:</div>
                <div className="data-value">$ 45.00</div>
              </div>
              <div>
                <div className="label-text mb-1">print volume:</div>
                <div className="data-value">120 x 80 mm</div>
              </div>
              <div>
                <div className="label-text mb-1">est. demand:</div>
                <div className="data-value">High</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-gray-900">Commercial License included</h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  Full rights for manufacturing and distribution. 3D source files provided in .obj and .stl formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const variations = [
    {
      id: 0,
      version: 'V1.0 — ORIGIN',
      name: 'Astro-Bot Classic',
      description: 'Balanced poly-count & material usage.',
      image: 'https://images.unsplash.com/photo-1535581652167-3d6b98c36cd0?q=80&w=800&auto=format&fit=crop',
      rating: 3
    },
    {
      id: 1,
      version: 'V1.1 — INDUSTRIAL',
      name: 'Chrome-Bear X',
      description: 'High-gloss finish, complex joints.',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop',
      rating: 0
    },
    {
      id: 2,
      version: 'V1.2 — MINIMAL',
      name: 'Ghost Series 01',
      description: 'Optimized for rapid 3D printing.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop',
      rating: 0
    },
    {
      id: 3,
      version: 'V1.3 — NOSTALGIA',
      name: 'The Voyager',
      description: 'Weathered textures, vintage palette.',
      image: 'https://images.unsplash.com/photo-1558688995-54759cb1886d?q=80&w=800&auto=format&fit=crop',
      rating: 0
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full h-full pt-24 px-12 xl:px-20 pb-12 overflow-hidden">
      <header className="flex justify-between items-end mb-12 animate-enter" style={{ animationDelay: '0.1s' }}>
        <div>
          <div className="text-white/50 text-sm mb-4">
            02 — 04 · GENERATION RESULTS
          </div>
          <h1 className="text-white text-5xl font-light display-text">
            Choose your <span className="font-medium">favorite</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-lg">
            Four variations generated based on your "retro-futuristic robot bear" prompt. Select one to proceed or refine the parameters.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-pill btn-outline">
            <i data-lucide="refresh-cw" size="18"></i>
            <span>Regenerate All</span>
          </button>
          <button className="btn-pill btn-solid px-8" onClick={() => navigate('/')}>
            <span>Refine Prompt</span>
            <i data-lucide="sliders" size="18"></i>
          </button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-4 gap-6 min-h-0">
        {variations.map((variation, index) => (
          <div 
            key={variation.id}
            className={`sheet-card relative flex flex-col animate-enter cursor-pointer ${selected === variation.id ? 'selected' : ''}`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            onClick={() => setSelected(variation.id)}
          >
            <div className="selection-indicator">
              {selected === variation.id && <i data-lucide="check" size="14" className="text-white"></i>}
            </div>
            <div className="flex-1 bg-gray-100 relative overflow-hidden">
              <img src={variation.image} className="w-full h-full object-cover" alt={variation.name} />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold tracking-widest text-gray-400">{variation.version}</span>
                {variation.rating > 0 && (
                  <div className="flex gap-1">
                    {[...Array(variation.rating)].map((_, i) => (
                      <i key={i} data-lucide="star" size="12" className="fill-current text-yellow-500"></i>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-medium mb-1">{variation.name}</h3>
              <p className="text-sm text-gray-400">{variation.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center animate-enter" style={{ animationDelay: '0.6s' }}>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="label-text">Comparison Metrics</span>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-xs text-white">Print Stability</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-xs text-white">Material Efficiency</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <span className="text-white/40 text-sm italic mr-2">1 variation selected</span>
          <button className="btn-pill btn-solid bg-white text-black px-12 group" onClick={() => navigate('/fabrication')}>
            <span>Continue to Specs</span>
            <i data-lucide="chevron-right" size="18" className="group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const FabricationPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(68);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 0.05;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(1000%); }
      }
    `;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  return (
    <div className="flex-1 flex w-full h-full">
      <div className="w-5/12 h-full flex flex-col justify-center px-12 xl:px-20 relative z-10">
        <div className="text-white/50 text-sm mb-6 animate-enter" style={{ animationDelay: '0.1s' }}>
          03 — 04 · FABRICATION UNIT 02
        </div>
        <h1 className="text-white text-6xl xl:text-7xl font-light display-text mb-10 animate-enter" style={{ animationDelay: '0.2s' }}>
          Printing in<br />
          <span className="font-medium">progress</span>
        </h1>
        <div className="w-full max-w-md space-y-10 animate-enter" style={{ animationDelay: '0.3s' }}>
          <div>
            <div className="flex justify-between items-end mb-4">
              <span className="text-white/60 text-sm">{Math.floor(progress)}% Completed</span>
              <span className="text-white font-medium">01:42:12 remaining</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Temperature</label>
              <div className="text-white text-2xl font-light">215°C <span className="text-xs text-white/40 font-normal">/ 60°C</span></div>
            </div>
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Flow Rate</label>
              <div className="text-white text-2xl font-light">100% <span className="text-xs text-white/40 font-normal">Stable</span></div>
            </div>
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Z-Axis Height</label>
              <div className="text-white text-2xl font-light">54.4 <span className="text-xs text-white/40 font-normal">mm</span></div>
            </div>
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-widest mb-2">Quality Score</label>
              <div className="text-white text-2xl font-light">99.2% <span className="text-xs text-white/40 font-normal">High</span></div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <button className="btn-pill btn-glass flex-1 bg-red-500/10 border-red-500/20 hover:bg-red-500/20" onClick={() => navigate('/')}>
              <i data-lucide="square" size="16"></i>
              Abort Print
            </button>
            <button className="btn-pill btn-glass flex-1">
              <i data-lucide="pause" size="16"></i>
              Pause
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 left-12 text-white/30 text-xs animate-enter" style={{ animationDelay: '0.5s' }}>
          Unit ID: TF-8829 · Filament: Matte Vinyl Gray
        </div>
      </div>

      <div className="w-7/12 h-full p-6 pl-0 flex items-center justify-center">
        <div className="sheet-card w-full h-full relative flex flex-col animate-enter" style={{ animationDelay: '0.4s' }}>
          <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center">
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="status-dot-pulse"></div>
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">Live Feed — Cam 01</span>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                <i data-lucide="maximize" size="16"></i>
              </button>
              <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                <i data-lucide="camera" size="16"></i>
              </button>
            </div>
          </div>
          <div className="flex-1 cam-feed group">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Printer Bed View" className="w-full h-full object-cover opacity-80" />
            <div className="cam-grid"></div>
            <div style={customStyles.scanLine}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent-gold/40 rounded-lg pointer-events-none">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent-gold"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent-gold"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent-gold"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent-gold"></div>
              <div className="absolute top-4 left-4 text-accent-gold text-[10px] font-bold tracking-tighter">DETECTING: LAYER_ADHESION_OK</div>
            </div>
          </div>
          <div className="bg-white p-10 pb-12">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-4xl font-normal tracking-tight mb-2 text-gray-900">
                  Astro-Bot MK1<span className="ml-4 text-lg text-gray-300 font-light">Active Session</span>
                </h2>
                <p className="text-gray-400 text-sm">Started today at 14:02 · Printing on PEI Flexible Plate</p>
              </div>
              <button className="btn-pill !text-gray-900 !border-gray-200 border hover:!bg-gray-100">
                <i data-lucide="file-text" size="18"></i>
                View G-Code
              </button>
            </div>
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="label-text mb-1">current layer:</div>
                <div className="data-value">452 / 680</div>
              </div>
              <div>
                <div className="label-text mb-1">filament used:</div>
                <div className="data-value">142.4 g</div>
              </div>
              <div>
                <div className="label-text mb-1">fan speed:</div>
                <div className="data-value">100%</div>
              </div>
              <div>
                <div className="label-text mb-1">vibration:</div>
                <div className="data-value">Minimal</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-500">AI Failure Detection Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <span className="text-xs text-gray-500">Timelapse Recording...</span>
                </div>
              </div>
              <div className="text-xs text-gray-400 italic">
                Next maintenance due in 48 hours of print time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketplacePage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All Toys');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const toys = [
    {
      id: 1,
      name: 'Chrome Sentinel',
      creator: '@VectorPulse',
      price: 89,
      material: 'Liquid Vinyl',
      height: '18.5 cm',
      image: 'https://images.unsplash.com/photo-1558679908-541bcf1249ff?q=80&w=1974&auto=format&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Neon Glitch Cat',
      creator: '@CyberCraft',
      price: 120,
      series: 'Alpha 01',
      complexity: 'Expert',
      image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1960&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Wooden Totem',
      creator: '@EcoFab',
      price: 245,
      material: 'Birch Core',
      finish: 'Matte Wax',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1974&auto=format&fit=crop',
      badge: 'Rare'
    }
  ];

  return (
    <>
      <main className="flex-1 w-full h-full pt-32 px-12 pb-12 overflow-y-auto no-scrollbar">
        <header className="mb-12 flex justify-between items-end animate-enter" style={{ animationDelay: '0.1s' }}>
          <div>
            <div className="text-white/50 text-sm mb-2">Trending Designs — 2024</div>
            <h1 className="text-white text-6xl font-light display-text">
              The <span className="font-medium">Collection</span>
            </h1>
          </div>
          <div className="flex gap-3 pb-2">
            <button 
              className={`btn-pill btn-glass text-sm ${filter === 'All Toys' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
              onClick={() => setFilter('All Toys')}
            >
              All Toys
            </button>
            <button 
              className={`btn-pill btn-glass text-sm ${filter === 'Vinyl' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
              onClick={() => setFilter('Vinyl')}
            >
              Vinyl
            </button>
            <button 
              className={`btn-pill btn-glass text-sm ${filter === 'Articulated' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
              onClick={() => setFilter('Articulated')}
            >
              Articulated
            </button>
            <button 
              className={`btn-pill btn-glass text-sm ${filter === 'Limited' ? 'border-white/40 bg-white/10' : 'opacity-50'}`}
              onClick={() => setFilter('Limited')}
            >
              Limited
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {toys.map((toy, index) => (
            <div key={toy.id} className="sheet-card animate-enter" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="aspect-toy bg-gray-100 relative overflow-hidden group">
                <img src={toy.image} alt={toy.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {toy.badge && (
                  <div className={`absolute top-6 right-6 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm ${toy.badge === 'Rare' ? 'bg-black/80 text-white' : 'bg-white/90'}`}>
                    {toy.badge}
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 leading-tight">
                      {toy.name}{toy.badge === 'Best Seller' && <span className="status-dot"></span>}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">By {toy.creator}</p>
                  </div>
                  <div className="text-xl font-semibold text-gray-900">${toy.price}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="label-text mb-1">{toy.material ? 'Material' : 'Series'}</div>
                    <div className="data-value">{toy.material || toy.series}</div>
                  </div>
                  <div>
                    <div className="label-text mb-1">{toy.height ? 'Height' : 'Complexity'}</div>
                    <div className="data-value">{toy.height || toy.complexity || toy.finish}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="sheet-card border-2 border-dashed border-white/20 bg-transparent flex flex-col items-center justify-center p-12 text-center animate-enter" style={{ animationDelay: '0.5s' }}>
            <div className="btn-icon mb-6 scale-125">
              <i data-lucide="plus" size="24"></i>
            </div>
            <h3 className="text-white text-xl font-light mb-2">Create yours</h3>
            <p className="text-white/40 text-sm mb-8">Start the AI generator to add your design here.</p>
            <button className="btn-pill btn-solid w-full" onClick={() => navigate('/')}>Launch Generator</button>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center pb-20 animate-enter" style={{ animationDelay: '0.6s' }}>
          <button className="btn-pill btn-glass px-12">Load more designs</button>
        </div>
      </main>

      <div className="fixed bottom-12 right-12 z-50 flex gap-4">
        <div className="bg-white/90 backdrop-blur-md p-2 rounded-full flex gap-1 shadow-2xl">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white">
            <i data-lucide="grid" size="18"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
            <i data-lucide="list" size="18"></i>
          </button>
        </div>
      </div>
    </>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('collections');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const collections = [
    {
      id: 1,
      name: 'Astro-Bot Series',
      items: 4,
      avgPrice: 45,
      image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Vinyl Creatures',
      items: 8,
      avgPrice: 29,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Timber Mechs',
      items: 2,
      avgPrice: 85,
      image: 'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="flex-1 flex w-full h-full">
      <div className="w-4/12 h-full flex flex-col justify-center px-12 xl:px-20 relative z-10">
        <div className="text-white/50 text-sm mb-6 animate-enter" style={{ animationDelay: '0.1s' }}>
          Dashboard — Account
        </div>
        <div className="flex items-center gap-6 mb-8 animate-enter" style={{ animationDelay: '0.2s' }}>
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/10">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-white text-4xl font-light display-text mb-1">
              Elena <span className="font-medium">Vance</span>
            </h1>
            <p className="text-white/60 text-sm">Pro Member — Since Dec 2023</p>
          </div>
        </div>
        <div className="space-y-2 animate-enter" style={{ animationDelay: '0.3s' }}>
          <nav className="flex flex-col gap-1">
            <button 
              className={`flex items-center gap-4 p-4 rounded-2xl w-full text-left transition-colors ${activeTab === 'collections' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('collections')}
            >
              <i data-lucide="layout-grid" size="18"></i>
              <span className={activeTab === 'collections' ? 'font-medium' : ''}>Collections</span>
            </button>
            <button 
              className={`flex items-center gap-4 p-4 rounded-2xl w-full text-left transition-colors ${activeTab === 'history' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('history')}
            >
              <i data-lucide="history" size="18"></i>
              <span>Generation History</span>
            </button>
            <button 
              className={`flex items-center gap-4 p-4 rounded-2xl w-full text-left transition-colors ${activeTab === 'analytics' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('analytics')}
            >
              <i data-lucide="trending-up" size="18"></i>
              <span>Sales Analytics</span>
            </button>
            <button 
              className={`flex items-center gap-4 p-4 rounded-2xl w-full text-left transition-colors ${activeTab === 'settings' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('settings')}
            >
              <i data-lucide="settings" size="18"></i>
              <span>Settings</span>
            </button>
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 animate-enter" style={{ animationDelay: '0.4s' }}>
          <div className="bg-black/20 p-6 rounded-3xl">
            <div className="label-text text-white/40 mb-2">Current Balance</div>
            <div className="text-2xl text-white font-medium mb-4">$1,420.50</div>
            <button className="btn-pill btn-glass w-full text-sm">Withdraw Funds</button>
          </div>
        </div>
      </div>

      <div className="w-8/12 h-full p-6 pl-0 flex items-center justify-center">
        <div className="sheet-card w-full h-full relative flex flex-col animate-enter shadow-2xl" style={{ animationDelay: '0.4s' }}>
          <div className="p-10 flex flex-col h-full overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-normal tracking-tight mb-2 text-gray-900">Collections</h2>
                <p className="text-gray-400 text-sm">You have 12 published toy series</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-pill !py-2 !px-4 border border-gray-200 text-gray-600 text-sm hover:bg-gray-50">
                  <i data-lucide="filter" size="16"></i> Filter
                </button>
                <button className="btn-pill btn-solid !py-2 !px-4 !bg-gray-900 !text-white text-sm">
                  Create New Folder
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="stat-card">
                <div className="label-text mb-2">Total Sales</div>
                <div className="data-value text-2xl mb-1">124 Units</div>
                <div className="text-xs text-green-600 font-medium">+12% from last week</div>
              </div>
              <div className="stat-card">
                <div className="label-text mb-2">Marketplace Rank</div>
                <div className="data-value text-2xl mb-1">Top 2%</div>
                <div className="text-xs text-gray-400 font-medium">Global Creator</div>
              </div>
              <div className="stat-card">
                <div className="label-text mb-2">Avg. Performance</div>
                <div className="data-value text-2xl mb-1">4.9 ★</div>
                <div className="text-xs text-gray-400 font-medium">89 Reviews</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-8">
              {collections.map((collection) => (
                <div key={collection.id} className="group cursor-pointer">
                  <div className="toy-thumb mb-4 relative">
                    <img src={collection.image} className="w-full h-full object-cover" alt={collection.name} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button className="btn-pill btn-solid scale-90">View Files</button>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900">{collection.name}</h3>
                  <p className="text-xs text-gray-400">{collection.items} Items · ${collection.avgPrice}.00 avg</p>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <button className="text-sm text-accent-gold font-medium">View Full History</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" alt="Activity" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Neon Cyber-Fox (Schema Gen)</div>
                    <div className="text-xs text-gray-400">2 hours ago — #9921-X</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xs text-gray-400">status</div>
                    <div className="text-xs font-medium text-green-600 uppercase tracking-wider">Completed</div>
                  </div>
                  <button className="btn-icon !w-8 !h-8 !text-gray-400 !bg-transparent hover:!bg-gray-100 !border-none">
                    <i data-lucide="more-horizontal" size="16"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      body {
        font-family: 'Inter', sans-serif;
        background-color: #6C6A67;
        color: #111111;
        margin: 0;
        padding: 0;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        width: 100vw;
      }

      .display-text {
        letter-spacing: -0.04em;
        line-height: 1.1;
      }
      
      .label-text {
        letter-spacing: -0.01em;
        font-size: 0.85rem;
        color: #888888;
      }

      .data-value {
        letter-spacing: -0.02em;
        font-weight: 500;
        font-size: 1.125rem;
      }

      .btn-pill {
        border-radius: 999px;
        padding: 12px 24px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
      }

      .btn-glass {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(8px);
        color: white;
        border: 1px solid rgba(255,255,255,0.1);
      }
      
      .btn-glass:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .btn-glass.active {
        background: white;
        color: black;
      }

      .btn-solid {
        background: white;
        color: black;
        border: none;
      }
      
      .btn-solid:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      .btn-outline {
        background: transparent;
        color: white;
        border: 1px solid rgba(255,255,255,0.3);
      }

      .btn-outline:hover {
        border-color: white;
        background: rgba(255,255,255,0.05);
      }

      .btn-icon {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255,255,255,0.1);
        cursor: pointer;
        transition: background 0.2s;
      }
      
      .btn-icon:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .sheet-card {
        background: #FFFFFF;
        border-radius: 32px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .input-pill {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 999px;
        color: white;
        padding: 16px 32px;
        width: 100%;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
      }
      
      .input-pill:focus {
        border-color: rgba(255,255,255,0.6);
        background: rgba(0, 0, 0, 0.3);
      }

      .input-pill::placeholder {
        color: rgba(255,255,255,0.5);
      }

      @keyframes floatUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-enter {
        animation: floatUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      @keyframes pulse {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
      }

      .divider {
        height: 1px;
        background-color: #E5E5E5;
        width: 100%;
        margin: 24px 0;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background-color: #C5A572;
        border-radius: 50%;
        display: inline-block;
        margin-left: 8px;
        margin-bottom: 2px;
      }

      .progress-track {
        height: 4px;
        background: #E5E5E5;
        border-radius: 2px;
        width: 100%;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: #C5A572;
        border-radius: 2px;
        transition: width 1s ease;
      }

      .status-dot-pulse {
        width: 8px;
        height: 8px;
        background-color: #4ADE80;
        border-radius: 50%;
        display: inline-block;
        box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
        animation: pulse 2s infinite;
      }

      .cam-feed {
        background: #000;
        position: relative;
        aspect-ratio: 16/9;
        overflow: hidden;
      }

      .cam-grid {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        pointer-events: none;
      }

      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .selection-indicator {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid white;
        background: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20;
      }

      .sheet-card.selected .selection-indicator {
        background: #C5A572;
        border-color: #C5A572;
      }
      
      .sheet-card.selected {
        outline: 3px solid #C5A572;
        outline-offset: 4px;
      }

      .aspect-toy {
        aspect-ratio: 4/5;
      }

      .toy-thumb {
        aspect-ratio: 1/1;
        border-radius: 16px;
        overflow: hidden;
        background: #f3f3f3;
        transition: transform 0.3s ease;
      }
      .toy-thumb:hover {
        transform: scale(1.02);
      }

      .stat-card {
        background: #F9F9F9;
        border-radius: 20px;
        padding: 24px;
        border: 1px solid #EDEDED;
      }

      #root > div {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `;
    document.head.appendChild(styleEl);

    const lucideScript = document.createElement('script');
    lucideScript.src = 'https://unpkg.com/lucide@latest';
    lucideScript.onload = () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    };
    document.head.appendChild(lucideScript);

    return () => {
      document.head.removeChild(styleEl);
      document.head.removeChild(lucideScript);
    };
  }, []);

  return (
    <Router basename="/">
      <div className="w-full h-full flex flex-col" style={customStyles.root}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/fabrication" element={<FabricationPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;