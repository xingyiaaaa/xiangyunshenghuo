import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleProductEnter = () => {
    clearCloseTimer();
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsProductOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const navItems = [
    { name: '首页', href: '/' },
    { name: '产品中心', href: '/products', hasDropdown: true },
    { name: '解决方案', href: '/solutions' },
    { name: '关于我们', href: '/about' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
      onMouseLeave={handleProductLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="祥云圣火" className="h-10 w-auto" />
            <div className="ml-2">
              <h1 className="text-lg font-bold text-gray-800">祥云圣火</h1>
              <p className="text-xs text-gray-500">XIANGYUN SHENGHUO</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={handleProductEnter}
                  onMouseLeave={handleProductLeave}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-md transition-colors font-medium inline-flex items-center"
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </a>

                  <div
                    onMouseEnter={handleProductEnter}
                    onMouseLeave={handleProductLeave}
                    className={`absolute top-full left-0 mt-1 w-56 transition-all duration-200 ease-out ${
                      isProductOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                      <a
                        href="/products"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                      >
                        空地协同智能巡检平台
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-md transition-colors font-medium"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-2 border-t">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
                {item.hasDropdown && (
                  <div className="bg-gray-50 border-t border-b">
                    <a
                      href="/products"
                      className="block pl-8 pr-4 py-2.5 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      空地协同智能巡检平台
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
