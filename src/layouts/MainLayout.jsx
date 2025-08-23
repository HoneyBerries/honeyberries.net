import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Main layout component that wraps all pages
 * @param {Object} props - Layout properties
 * @param {React.ReactNode} props.children - Page content
 */
export function MainLayout({ children }) {
  return (
    <div className="min-h-screen relative text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Enhanced global gradient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/40 via-blue-50/30 to-purple-50/20"></div>
        
        {/* Animated floating blobs */}
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-300/30 via-teal-200/25 to-cyan-300/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-blue-300/30 via-indigo-200/25 to-purple-300/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-violet-300/25 via-purple-200/20 to-pink-300/15 blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 rounded-full bg-gradient-to-bl from-pink-300/20 via-rose-200/15 to-orange-300/10 blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/15 via-amber-200/10 to-orange-200/15 blur-3xl animate-pulse delay-4000"></div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}