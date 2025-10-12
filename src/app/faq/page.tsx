import type { Metadata } from "next";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "FAQ - 7Grim Studio",
  description: "Frequently asked questions about 7Grim Studio and our games.",
};

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is 7Grim Studio?",
          answer: "7Grim Studio is a revolutionary game development company founded in 2022, dedicated to creating immersive gaming experiences that push the boundaries of interactive entertainment."
        },
        {
          question: "Where is 7Grim Studio located?",
          answer: "We are based in Toronto, Ontario, Canada, but our team works remotely and collaborates globally."
        },
        {
          question: "How many games has 7Grim Studio released?",
          answer: "We are currently developing our first game, Cards of Fate. This is our debut title and we're excited to share more details as development progresses."
        }
      ]
    },
    {
      category: "Games",
      questions: [
        {
          question: "When will Cards of Fate be released?",
          answer: "Cards of Fate is currently in development. We're targeting a 2025 release, but specific dates will be announced as we get closer to completion."
        },
        {
          question: "What platforms will Cards of Fate be available on?",
          answer: "Cards of Fate will initially be available on PC. We may consider additional platforms based on player interest and development resources."
        },
        {
          question: "What type of game is Cards of Fate?",
          answer: "Cards of Fate is a strategic card game that combines deck-building mechanics with roguelike progression. Players will discover unique cards and create powerful combinations."
        },
        {
          question: "Can I follow the development progress?",
          answer: "Yes! We'll be sharing development updates through our website and social media channels as we progress."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "How can I report bugs or technical issues?",
          answer: "You can report bugs through our Support page or contact us directly at support@7grimstudio.com."
        },
        {
          question: "How can I get help with a game?",
          answer: "For technical support and game-related questions, please contact our support team at support@7grimstudio.com."
        }
      ]
    },
    {
      category: "Business",
      questions: [
        {
          question: "Are you looking for business partnerships?",
          answer: "We are always interested in exploring meaningful partnerships. Please contact us at business@7grimstudio.com for partnership inquiries."
        },
        {
          question: "Do you offer internships or job opportunities?",
          answer: "We occasionally have internship and job opportunities. Check our Contact page or reach out to us for current openings."
        },
        {
          question: "How can the press contact you?",
          answer: "Press inquiries should be directed to press@7grimstudio.com. We&apos;ll respond to media requests promptly."
        }
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
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-gaming-light text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about 7Grim Studio, our games, and our development process.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-gaming">
                <h2 className="font-gaming text-2xl text-gradient mb-8">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-700 pb-6 last:border-b-0">
                      <h3 className="font-gaming-light text-lg text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="card-gaming max-w-2xl mx-auto">
              <h2 className="font-gaming text-2xl text-gradient mb-4">
                STILL HAVE QUESTIONS?
              </h2>
              <p className="text-gray-400 mb-6">
                Can&apos;t find what you&apos;re looking for? We&apos;re here to help. 
                Get in touch with our team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/support" className="btn-primary">
                  Get Support
                </a>
                <a href="/studio" className="btn-secondary">
                  Learn About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
