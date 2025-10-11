import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - 7Grim Studio",
  description: "7Grim Studio privacy policy and data protection information.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-gaming text-5xl md:text-6xl text-gradient mb-6">
              PRIVACY POLICY
            </h1>
            <p className="font-gaming-light text-xl text-gray-400">
              Last updated: December 2024
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="card-gaming space-y-8">
            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">1. INTRODUCTION</h2>
              <p className="text-gray-300 leading-relaxed">
                7Grim Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our games and services.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">2. INFORMATION WE COLLECT</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Name and email address when you contact us</li>
                    <li>Account information for our services</li>
                    <li>Feedback and support requests</li>
                    <li>Newsletter subscriptions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-gaming-light text-lg text-white mb-2">Game Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you play our games, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Game progress and achievements</li>
                    <li>Performance metrics and crash reports</li>
                    <li>In-game preferences and settings</li>
                    <li>Multiplayer session data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">3. HOW WE USE YOUR INFORMATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Provide and improve our games and services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you updates about our games and studio</li>
                <li>Analyze game performance and user experience</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">4. INFORMATION SHARING</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-1">
                <li>With service providers who assist us in operating our website and games</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">5. DATA SECURITY</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">6. YOUR RIGHTS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">7. COOKIES AND TRACKING</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience, 
                analyze usage patterns, and provide personalized content. You can control cookie settings 
                through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">8. CHILDREN&apos;S PRIVACY</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">9. CHANGES TO THIS POLICY</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. 
                Your continued use of our services after any modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">10. CONTACT US</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
