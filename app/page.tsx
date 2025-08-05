'use client';
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { Accordion } from "@/app/components/Accordion";
import { Carousel } from "@/app/components/Carousel";
import { Badge } from "@/app/components/Badge";
import { Tabs } from "@/app/components/Tabs";
import { FaRocket, FaMagic, FaChartLine, FaShieldAlt, FaUsers, FaCogs } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <header className="w-full bg-white/90 backdrop-blur-lg shadow sticky top-0 z-50 border-b border-gray-200">
        <nav className="container flex items-center justify-between py-4">
          <div className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent select-none">ADmyBRAND</div>
          <div className="flex gap-10">
            <a href="#home" className="text-gray-700 hover:text-primary font-medium transition-colors hover:underline underline-offset-4">Home</a>
            <a href="#features" className="text-gray-700 hover:text-primary font-medium transition-colors hover:underline underline-offset-4">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary font-medium transition-colors hover:underline underline-offset-4">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors hover:underline underline-offset-4">Contact</a>
          </div>
        </nav>
      </header>
      <main>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary-dark/10 py-20 md:py-28"
        id="home"
      >
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 w-[60vw] h-[60vw] -translate-x-1/2 bg-gradient-to-tr from-primary via-accent to-primary-dark opacity-30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] bg-gradient-to-br from-accent via-primary to-primary-dark opacity-20 rounded-full blur-2xl animate-pulse-slower" />
        </div>
        <div className="container flex flex-col items-center text-center relative z-10">
          <h1
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent drop-shadow-2xl animate-fade-in"
          >
            ADmyBRAND AI Suite
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto text-gray-800 font-semibold leading-snug animate-fade-in delay-200">
            Supercharge your marketing with <span className="text-primary font-bold">AI-powered automation</span>, <span className="text-accent font-bold">analytics</span>, and <span className="text-primary-dark font-bold">creative tools</span>.
          </p>
          <Button size="lg" className="px-12 py-5 text-2xl shadow-2xl mb-10 rounded-2xl flex items-center gap-3 animate-fade-in delay-300">
            <span>Get Started Free</span>
            <FaRocket className="inline-block text-pink-400 text-2xl mt-[-2px]" />
          </Button>
        </div>
        {/* Decorative SVG Wave */}
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32 -z-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#hero-wave)" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <defs>
            <linearGradient id="hero-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="0.5" stopColor="#f472b6" />
              <stop offset="1" stopColor="#1e40af" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* Features Section */}
      <section id="features" className="animate-fade-in-on-scroll">
        <div className="container">
          <h2 className="text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaRocket />, title: "AI Campaigns", desc: "Launch campaigns in seconds with AI-generated content.", badge: "New" },
              { icon: <FaMagic />, title: "Creative Studio", desc: "Generate stunning visuals and copy instantly.", badge: "Creative" },
              { icon: <FaChartLine />, title: "Analytics", desc: "Real-time insights and smart recommendations.", badge: "Insights" },
              { icon: <FaShieldAlt />, title: "Security", desc: "Enterprise-grade security and privacy controls.", badge: "Secure" },
              { icon: <FaUsers />, title: "Collaboration", desc: "Work with your team in real-time.", badge: "Team" },
              { icon: <FaCogs />, title: "Integrations", desc: "Connect with your favorite tools seamlessly.", badge: "API" },
            ].map((f, i) => (
              <div key={i} className="card flex flex-col items-center text-center transition-all hover:shadow-xl hover:scale-[1.03] animate-fade-in-on-scroll">
                <div className="text-4xl mb-4 text-primary">{f.icon}</div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="card-title">{f.title}</div>
                  <Badge color={i % 2 === 0 ? "primary" : "accent"}>{f.badge}</Badge>
                </div>
                <div className="card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="animate-fade-in-on-scroll">
        <div className="container">
          <h2 className="text-center mb-12">Pricing</h2>
          <Tabs
            tabs={[
              {
                label: "Monthly",
                content: (
                  <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {[
                      {
                        name: "Starter",
                        price: "$0",
                        features: ["Basic AI tools", "Email support", "Up to 1,000 contacts"],
                        cta: "Start Free",
                        highlight: false,
                      },
                      {
                        name: "Pro",
                        price: "$29/mo",
                        features: ["All Starter features", "Advanced analytics", "Priority support", "Unlimited contacts"],
                        cta: "Upgrade Now",
                        highlight: true,
                      },
                      {
                        name: "Enterprise",
                        price: "Contact Us",
                        features: ["All Pro features", "Custom integrations", "Dedicated manager"],
                        cta: "Contact Sales",
                        highlight: false,
                      },
                    ].map((tier, i) => (
                      <div
                        key={i}
                        className={`card flex-1 flex flex-col items-center ${tier.highlight ? "border-4 border-primary scale-105 z-10" : "border border-gray-200"} transition-all hover:shadow-2xl animate-fade-in-on-scroll`}
                      >
                        <div className="card-title text-2xl">{tier.name}</div>
                        <div className="text-3xl font-extrabold mb-4">{tier.price}</div>
                        <ul className="mb-6 space-y-2 text-gray-700">
                          {tier.features.map((f, j) => (
                            <li key={j}>• {f}</li>
                          ))}
                        </ul>
                        <Button variant={tier.highlight ? "default" : "outline"} size="lg" className="w-full">
                          {tier.cta}
                        </Button>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "Yearly (Save 20%)",
                content: (
                  <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {[
                      {
                        name: "Starter",
                        price: "$0",
                        features: ["Basic AI tools", "Email support", "Up to 1,000 contacts"],
                        cta: "Start Free",
                        highlight: false,
                      },
                      {
                        name: "Pro",
                        price: "$290/yr",
                        features: ["All Starter features", "Advanced analytics", "Priority support", "Unlimited contacts"],
                        cta: "Upgrade Now",
                        highlight: true,
                      },
                      {
                        name: "Enterprise",
                        price: "Contact Us",
                        features: ["All Pro features", "Custom integrations", "Dedicated manager"],
                        cta: "Contact Sales",
                        highlight: false,
                      },
                    ].map((tier, i) => (
                      <div
                        key={i}
                        className={`card flex-1 flex flex-col items-center ${tier.highlight ? "border-4 border-primary scale-105 z-10" : "border border-gray-200"} transition-all hover:shadow-2xl animate-fade-in-on-scroll`}
                      >
                        <div className="card-title text-2xl">{tier.name}</div>
                        <div className="text-3xl font-extrabold mb-4">{tier.price}</div>
                        <ul className="mb-6 space-y-2 text-gray-700">
                          {tier.features.map((f, j) => (
                            <li key={j}>• {f}</li>
                          ))}
                        </ul>
                        <Button variant={tier.highlight ? "default" : "outline"} size="lg" className="w-full">
                          {tier.cta}
                        </Button>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section (Carousel, no photos) */}
      <section id="testimonials">
        <div className="container">
          <h2 className="text-center mb-12">What Our Customers Say</h2>
          <div className="max-w-xl mx-auto">
            <Carousel
              items={[
                { avatar: '', name: 'Priya S.', company: 'GrowthX', quote: 'ADmyBRAND AI Suite transformed our marketing workflow!' },
                { avatar: '', name: 'Rahul M.', company: 'AdSpark', quote: 'The analytics and automation features are game changers.' },
                { avatar: '', name: 'Samantha T.', company: 'Brandly', quote: 'We saved hours every week with the creative tools.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section id="faq">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <Accordion title="How does the AI Suite work?">
            Our AI Suite uses advanced algorithms to automate and optimize your marketing campaigns.
          </Accordion>
          <Accordion title="Can I try it for free?">
            Yes! The Starter plan is free forever with no credit card required.
          </Accordion>
          <Accordion title="Is my data secure?">
            Absolutely. We use enterprise-grade security and encryption.
          </Accordion>
        </div>
      </section>
      {/* Contact Form & Footer */}
      <footer id="contact">
        <div className="container text-center">
          <form className="max-w-lg mx-auto mb-8 grid gap-4 bg-white/80 rounded-xl p-6 shadow-lg" onSubmit={e => { e.preventDefault(); alert('Thank you for contacting us!'); }}>
            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
            <Input label="Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Input label="Message" name="message" as="textarea" required />
            <Button type="submit" className="w-full mt-2">Send Message</Button>
          </form>
          <div className="mb-2">© {new Date().getFullYear()} ADmyBRAND. All rights reserved.</div>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" aria-label="Twitter" className="hover:text-primary">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">💼</a>
            <a href="#" aria-label="Facebook" className="hover:text-primary">📘</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}