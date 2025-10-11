import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Support - 7Grim Studio",
  description: "Get technical support and help with 7Grim Studio games.",
};

export default function Support() {
  const supportCategories = [
    {
      title: "Technical Issues",
      icon: "🔧",
      description: "Report bugs, crashes, and technical problems",
      items: [
        "Game crashes or freezes",
        "Performance issues",
        "Graphics problems",
        "Audio issues",
        "Controller/input problems"
      ]
    },
    {
      title: "Gameplay Help",
      icon: "🎮",
      description: "Get help with game mechanics and features",
      items: [
        "How to play guides",
        "Feature explanations",
        "Control schemes",
        "Game progression",
        "Achievement help"
      ]
    },
    {
      title: "Account Issues",
      icon: "👤",
      description: "Problems with accounts and profiles",
      items: [
        "Login problems",
        "Profile issues",
        "Save data problems",
        "Progress sync issues",
        "Account recovery"
      ]
    },
    {
      title: "Platform Support",
      icon: "💻",
      description: "Platform-specific issues and requirements",
      items: [
        "System requirements",
        "Platform compatibility",
        "Installation issues",
        "Update problems",
        "Platform-specific bugs"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-gaming text-5xl md:text-6xl text-gradient mb-6">
              SUPPORT CENTER
            </h1>
            <p className="font-gaming-light text-xl text-gray-400 max-w-3xl mx-auto">
              Need help with our games? Our support team is here to assist you with technical issues, 
              gameplay questions, and any other concerns you may have.
            </p>
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <div key={index} className="card-gaming">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <h2 className="font-gaming text-xl text-gradient">{category.title}</h2>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Support Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="card-gaming">
              <h2 className="font-gaming text-2xl text-gradient mb-6">REPORT AN ISSUE</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="game" className="block text-sm font-gaming-light text-gray-400 mb-2">
                    Game
                  </label>
                  <select
                    id="game"
                    name="game"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a game</option>
                    <option value="nexus-warriors">Nexus Warriors</option>
                    <option value="cyber-shadows">Cyber Shadows</option>
                    <option value="void-runners">Void Runners</option>
                    <option value="general">General Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="issueType" className="block text-sm font-gaming-light text-gray-400 mb-2">
                    Issue Type
                  </label>
                  <select
                    id="issueType"
                    name="issueType"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select issue type</option>
                    <option value="bug">Bug Report</option>
                    <option value="crash">Game Crash</option>
                    <option value="performance">Performance Issue</option>
                    <option value="gameplay">Gameplay Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="platform" className="block text-sm font-gaming-light text-gray-400 mb-2">
                    Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select platform</option>
                    <option value="pc">PC (Windows)</option>
                    <option value="mac">PC (Mac)</option>
                    <option value="linux">PC (Linux)</option>
                    <option value="playstation">PlayStation</option>
                    <option value="xbox">Xbox</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-gaming-light text-gray-400 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors resize-vertical"
                    placeholder="Please describe the issue in detail..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit Support Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-gaming">
                <h2 className="font-gaming text-2xl text-gradient mb-6">CONTACT SUPPORT</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">📧</span>
                    </div>
                    <div>
                      <h3 className="font-gaming text-lg text-white mb-1">Email Support</h3>
                      <p className="text-gray-400">support@7grimstudio.com</p>
                      <p className="text-gray-400 text-sm">Response within 24-48 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-gaming text-lg text-white mb-1">Priority Support</h3>
                      <p className="text-gray-400">For critical issues</p>
                      <p className="text-gray-400 text-sm">Response within 12 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-gaming">
                <h2 className="font-gaming text-2xl text-gradient mb-6">BEFORE YOU CONTACT</h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-sm">Check our FAQ page for common solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-sm">Ensure your game is updated to the latest version</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-sm">Include your system specifications if reporting technical issues</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-sm">Provide detailed steps to reproduce the issue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
