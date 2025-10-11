import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service - 7Grim Studio",
  description: "7Grim Studio terms of service and user agreement.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-gaming text-5xl md:text-6xl text-gradient mb-6">
              TERMS OF SERVICE
            </h1>
            <p className="font-gaming-light text-xl text-gray-400">
              Last updated: December 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="card-gaming space-y-8">
            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using 7Grim Studio&apos;s website, games, and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">2. DESCRIPTION OF SERVICE</h2>
              <p className="text-gray-300 leading-relaxed">
                7Grim Studio provides gaming entertainment services, including but not limited to video games, 
                online gaming platforms, and related digital content. Our services are provided &quot;as is&quot; 
                and we reserve the right to modify or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">3. USER ACCOUNTS</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  When creating an account with us, you must provide information that is accurate, complete, 
                  and current at all times. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains accurate</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">4. ACCEPTABLE USE</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. 
                You may not use our services in any manner that could damage, disable, overburden, or impair our servers 
                or networks. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using cheats, hacks, or exploits in our games</li>
                <li>Harassing or threatening other users</li>
                <li>Distributing malicious software or content</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">5. INTELLECTUAL PROPERTY</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, trademarks, service marks, trade names, logos, and other intellectual property rights 
                in our services are owned by 7Grim Studio or our licensors. You may not use, reproduce, distribute, 
                or create derivative works from our content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">6. PAYMENT AND REFUNDS</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  For paid services, payment is required in advance. All sales are final unless otherwise specified. 
                  Refunds may be provided at our sole discretion in cases of:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Technical issues preventing game functionality</li>
                  <li>Duplicate purchases due to system errors</li>
                  <li>Other circumstances as determined by 7Grim Studio</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">7. PRIVACY</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                of our services, to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">8. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no representations 
                or warranties of any kind, express or implied, regarding the use or results of our services in terms 
                of their correctness, accuracy, reliability, or otherwise.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">9. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall 7Grim Studio, its officers, directors, employees, or agents be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">10. TERMINATION</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your account and bar access to our services immediately, without prior 
                notice or liability, under our sole discretion, for any reason whatsoever, including without limitation 
                if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">11. GOVERNING LAW</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of Ontario, Canada, without regard to 
                its conflict of law provisions. Our failure to enforce any right or provision of these Terms will 
                not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">12. CHANGES TO TERMS</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="font-gaming text-2xl text-gradient mb-4">13. CONTACT INFORMATION</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@7grimstudio.com<br />
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
