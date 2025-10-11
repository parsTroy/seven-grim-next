import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Cookie Policy - 7Grim Studio",
  description: "7Grim Studio cookie policy and tracking information.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-gaming text-5xl md:text-6xl text-gradient mb-6">
              COOKIE POLICY
            </h1>
            <p className="font-gaming-light text-xl text-gray-400">
              Last updated: December 2024
            </p>
          </div>

          {/* Cookie Policy Content */}
          <div className="card-gaming space-y-8">
            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">1. WHAT ARE COOKIES?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners 
                about how users interact with their sites.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">2. HOW WE USE COOKIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                7Grim Studio uses cookies to enhance your experience on our website and to provide you with personalized 
                content and services. We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To improve website functionality and performance</li>
                <li>To provide personalized content and recommendations</li>
                <li>To ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">3. TYPES OF COOKIES WE USE</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and remembering your preferences.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">
                      <strong>Purpose:</strong> Website functionality, security, user authentication<br />
                      <strong>Duration:</strong> Session or up to 1 year<br />
                      <strong>Can be disabled:</strong> No (required for basic functionality)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">
                      <strong>Purpose:</strong> Website analytics, performance monitoring<br />
                      <strong>Duration:</strong> Up to 2 years<br />
                      <strong>Can be disabled:</strong> Yes (optional)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-3">Preference Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies remember your choices and preferences to provide you with a more personalized experience.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">
                      <strong>Purpose:</strong> User preferences, settings, customization<br />
                      <strong>Duration:</strong> Up to 1 year<br />
                      <strong>Can be disabled:</strong> Yes (optional)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">
                      <strong>Purpose:</strong> Advertising, marketing, retargeting<br />
                      <strong>Duration:</strong> Up to 1 year<br />
                      <strong>Can be disabled:</strong> Yes (optional)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">4. THIRD-PARTY COOKIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some cookies on our website are set by third-party services. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Google Analytics for website traffic analysis</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Content delivery networks for performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">5. MANAGING COOKIES</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  You have several options for managing cookies:
                </p>
                
                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Block all cookies</li>
                    <li>Allow only first-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-2">Cookie Consent</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you first visit our website, you may see a cookie consent banner. You can choose which 
                    types of cookies to accept or reject.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">6. IMPACT OF DISABLING COOKIES</h2>
              <p className="text-gray-300 leading-relaxed">
                If you choose to disable cookies, some features of our website may not function properly. 
                This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
                <li>Inability to remember your preferences</li>
                <li>Reduced website performance</li>
                <li>Loss of personalized content</li>
                <li>Difficulty accessing certain features</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">7. UPDATES TO THIS POLICY</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">8. CONTACT US</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@7grimstudio.com<br />
                  <strong>Address:</strong> 7Grim Studio, Toronto, Ontario, Canada
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
