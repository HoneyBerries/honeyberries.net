import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

/**
 * 404 Not Found page component
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-pulse">
            404
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute -top-8 -right-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-150 opacity-70"></div>
          <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce delay-300 opacity-60"></div>
          <div className="absolute -bottom-6 right-1/3 w-5 h-5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-bounce delay-500 opacity-65"></div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-gray-500">
            Don't worry though, even the best explorers sometimes take a wrong turn! 🧭
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            as={Link} 
            to="/" 
            variant="primary"
            className="glow"
          >
            🏠 Go Home
          </Button>
          <Button 
            as={Link} 
            to="/projects" 
            variant="secondary"
          >
            🚀 View My Projects
          </Button>
        </div>

        {/* Fun suggestion */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-semibold text-gray-900">Pro tip:</span> While you're here, why not check out my amazing projects?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              to="/projects/minecraft-server" 
              className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm hover:bg-emerald-200 transition-colors"
            >
              ⚡ Gem SMP Server
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              👨‍💻 About Me
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
            >
              📬 Get in Touch
            </Link>
          </div>
        </div>

        {/* Easter egg */}
        <div className="mt-8 text-xs text-gray-400">
          <p>Error code: PAGE_NOT_FOUND_BUT_YOU_FOUND_THIS_COOL_404_PAGE 🎉</p>
        </div>
      </div>
    </div>
  );
}
