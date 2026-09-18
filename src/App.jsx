import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// ==========================================
// 1. 站点数据定义 (Site Data)
// ==========================================
const siteConfig = {
  name: "SOURDEN",
  tagline: "China Sourcing. Done.",
  positioning: "Sourcing Without the Barriers.",
  email: "service@sourden.com",
  whatsapp: "+86 19861639802",
  whatsappClean: "8619861639802"
};

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
];

const capabilities = [
  { num: "01", title: "Supplier Sourcing" },
  { num: "02", title: "Factory Verification" },
  { num: "03", title: "Purchasing" },
  { num: "04", title: "Quality Control" },
  { num: "05", title: "Global Shipping" },
];

const services = [
  { num: "01", title: "Product Sourcing", description: "Research and identify suitable suppliers based on your product requirements, specifications, target pricing and sourcing goals." },
  { num: "02", title: "Supplier Verification", description: "Assess supplier capabilities, product fit, pricing, MOQ, lead times and other factors before you move forward." },
  { num: "03", title: "Purchasing & Order Management", description: "Coordinate quotations, purchasing, supplier communication, production progress and order details." },
  { num: "04", title: "Quality Control", description: "Arrange product checks before shipment to identify issues and confirm that the order matches the agreed requirements." },
  { num: "05", title: "Shipping from China", description: "Coordinate shipping from China and connect the sourcing process with an appropriate logistics solution." }
];

const processSteps = [
  { num: "01", title: "Tell Us What You Need", description: "Share your product, specifications, quantity, target price and destination." },
  { num: "02", title: "Find Suitable Suppliers", description: "Research suppliers that match your requirements and sourcing goals." },
  { num: "03", title: "Verify & Compare", description: "Compare capabilities, quotations, MOQ, lead times and other relevant factors." },
  { num: "04", title: "Manage the Order", description: "Coordinate purchasing, supplier communication, production and order progress." },
  { num: "05", title: "Inspect & Ship", description: "Arrange quality checks and coordinate shipping from China." }
];

const industries = [
  { title: "Consumer Products", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" },
  { title: "Beauty & Personal Care", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { title: "Home & Living", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" },
  { title: "Packaging", image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80" },
  { title: "Electronics & Accessories", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" },
  { title: "Industrial Products", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" }
];

const audience = [
  { num: "01", title: "Small Wholesalers", desc: "Looking for reliable products without committing to large order volumes." },
  { num: "02", title: "Independent Retailers", desc: "Need a better source but don't have a dedicated purchasing team." },
  { num: "03", title: "Local Shops", desc: "Want to access Chinese suppliers without navigating the sourcing process alone." },
  { num: "04", title: "Growing Brands", desc: "Ready to build a more reliable supply chain as your business grows." }
];

const whySourden = [
  { title: "One Point of Contact", desc: "One partner coordinating sourcing from supplier research to shipment." },
  { title: "Local Supplier Access", desc: "Access to China's supplier network without navigating it alone." },
  { title: "Practical Verification", desc: "Look beyond online listings to understand supplier fit and capability." },
  { title: "Quality Before Shipping", desc: "Arrange product checks before goods leave China." },
  { title: "End-to-End Coordination", desc: "Supplier communication, purchasing, production, quality control and shipping through one partner." }
];

const insights = [
  { title: "How to Find Reliable Suppliers in China", category: "SOURCING GUIDE", excerpt: "A practical guide to finding, comparing and evaluating Chinese suppliers before placing an order." },
  { title: "How to Verify a Chinese Supplier Before You Order", category: "SUPPLIER VERIFICATION", excerpt: "What to check beyond a supplier's online profile, including product capability, MOQ, pricing, lead time and production requirements." },
  { title: "China Supplier vs. Trading Company: What's the Difference?", category: "SUPPLIER KNOWLEDGE", excerpt: "Understanding the differences between manufacturers and trading companies, and when each may be suitable for your sourcing needs." }
];

// ==========================================
// 2. 页面UI子组件 (Sub Components)
// ==========================================

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-2xl tracking-tight text-ink">
          {siteConfig.name}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-ink/80 hover:text-ink transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={`mailto:${siteConfig.email}?subject=Sourcing%20Request`} className="inline-flex items-center justify-center bg-ink text-white text-sm font-medium h-11 px-6 rounded-sm hover:bg-ink/90 transition-colors">
            Start a Sourcing Request
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-ink focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-ivory border-b border-stone px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-ink">
                {link.name}
              </a>
            ))}
          </nav>
          <a href={`mailto:${siteConfig.email}?subject=Sourcing%20Request`} className="block w-full text-center bg-ink text-white py-3 font-medium rounded-sm">
            Start a Sourcing Request
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-ivory py-16 md:py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">
            CHINA SOURCING. DONE.
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-ink">
            Find the right<br />suppliers.<br /><br />
            Manage the process.<br /><br />
            Get your products<br />moving.
          </h1>
          <p className="text-base sm:text-lg text-secondaryText max-w-[500px] leading-relaxed">
            Sourden helps businesses source products from China with supplier research, quotation, purchasing, quality control and shipping — handled by one experienced partner.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href={`mailto:${siteConfig.email}?subject=Sourcing%20Request`} className="inline-flex items-center justify-center bg-ink text-white h-13 px-7 rounded-sm font-medium hover:bg-ink/90 transition-colors">
              Start a Sourcing Request
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-ink hover:text-brass transition-colors inline-flex items-center">
              How It Works →
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-stone">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Sourcing process" className="w-full h-full object-cover" />
            <span className="absolute bottom-4 right-4 bg-ink/80 text-white text-[10px] tracking-widest px-2.5 py-1 uppercase">
              SOURCING IN CHINA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesStrip() {
  return (
    <section className="bg-ink text-white py-8 border-b border-stone/20">
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-stone/20">
          {capabilities.map((item, index) => (
            <div key={item.num} className={`flex items-center space-x-3 ${index > 0 ? 'pt-4 md:pt-0 md:pl-4' : ''}`}>
              <span className="text-brass font-heading text-sm font-semibold">{item.num}</span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-ivory/90">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="bg-ivory py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">SOURCING, SIMPLIFIED</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink">Sourcing is more than finding a supplier.</h2>
          <p className="text-secondaryText text-lg leading-relaxed">
            Finding a supplier is only the beginning. We help you navigate the process from supplier research and quotation to purchasing, quality control and shipping.
          </p>
        </div>
        <div className="divide-y divide-stone border-t border-b border-stone">
          {["Supplier Research", "Quotation", "Purchasing", "Quality Control", "Shipping"].map((item, idx) => (
            <div key={item} className="py-5 flex items-center justify-between group hover:pl-2 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <span className="text-brass font-heading text-sm">0{idx + 1}</span>
                <span className="font-heading text-lg sm:text-xl font-medium text-ink">{item}</span>
              </div>
              <span className="text-stone group-hover:text-brass transition-colors">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">OUR SERVICES</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink">From supplier discovery to final shipment.</h2>
          <p className="text-secondaryText text-base">One partner across the process.</p>
        </div>
        <div className="divide-y divide-stone border-t border-b border-stone">
          {services.map((service) => (
            <div key={service.num} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-1 text-brass font-heading text-sm font-semibold">{service.num}</div>
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-ink">{service.title}</h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-secondaryText leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-16">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">HOW IT WORKS</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink uppercase">FROM NEED TO <span className="text-brass">DONE</span>.</h2>
          <p className="text-secondaryText text-base">A straightforward sourcing process, from your first request to final shipment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step) => (
            <div key={step.num} className="space-y-4 border-t border-stone pt-6">
              <span className="text-brass font-heading text-sm font-bold">{step.num}</span>
              <h3 className="font-heading text-lg font-medium text-ink">{step.title}</h3>
              <p className="text-sm text-secondaryText leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="bg-white py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">WHAT WE SOURCE</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink">From everyday products to specialized requirements.</h2>
          <p className="text-secondaryText text-base">We work across a range of product categories, sourcing according to your specifications.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item) => (
            <div key={item.title} className="group cursor-pointer space-y-3">
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone rounded-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-medium text-ink">{item.title}</h3>
                <span className="text-ink/40 group-hover:text-ink transition-colors">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourcingWithoutBarriers() {
  return (
    <section className="bg-ivory py-24 border-b border-stone space-y-20">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">WHO WE'RE BUILT FOR</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-medium text-ink uppercase">SOURCING WITHOUT THE BARRIERS.</h2>
          <p className="text-xl sm:text-2xl font-heading text-ink leading-snug">
            You don't need a large purchasing team, huge order volumes or years of experience in China to source good products.
          </p>
        </div>
        <div className="divide-y divide-stone border-t border-b border-stone">
          {audience.map((item) => (
            <div key={item.num} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <span className="md:col-span-1 text-brass font-heading text-sm">{item.num}</span>
              <h3 className="md:col-span-4 font-heading text-lg font-medium text-ink">{item.title}</h3>
              <p className="md:col-span-7 text-secondaryText text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-site mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-12 border border-stone bg-white/50 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brass uppercase">SOURCE AT YOUR SCALE.</span>
          <p className="text-lg text-ink max-w-3xl leading-relaxed">
            We don't impose our own minimum order quantity. We'll work with you to find sourcing options that fit your current stage and requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhySourden() {
  return (
    <section className="bg-ink text-white py-24 border-b border-stone/20">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-16">
        <span className="text-xs font-semibold tracking-widest text-brass uppercase">WHY SOURDEN</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ivory uppercase">ONE PARTNER. THE WHOLE PROCESS.</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-stone/20 pt-12">
          {whySourden.map((item, index) => (
            <div key={item.title} className="space-y-3">
              <span className="text-brass font-heading text-xs font-bold">0{index + 1}</span>
              <h3 className="font-heading text-lg font-medium text-ivory">{item.title}</h3>
              <p className="text-xs sm:text-sm text-stone/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-white py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-16">
        <span className="text-xs font-semibold tracking-widest text-brass uppercase">CASE STUDIES</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink">Real sourcing. Real requirements.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 border border-stone p-8 sm:p-12 bg-ivory/30 space-y-6">
            <span className="text-brass font-heading text-sm font-bold">01</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-medium text-ink uppercase">CUSTOM COMMERCIAL CHRISTMAS TREE</h3>
            <span className="text-xs text-secondaryText uppercase">Canada</span>
            <div className="text-xs text-secondaryText border-t border-stone pt-6">[ CASE STUDY DETAILS TO BE ADDED ]</div>
          </div>
          <div className="lg:col-span-4 border border-stone p-8 bg-ivory/30 space-y-6">
            <span className="text-brass font-heading text-sm font-bold">02</span>
            <h3 className="font-heading text-xl font-medium text-ink uppercase">SPORTS JERSEYS</h3>
            <span className="text-xs text-secondaryText uppercase">Canada</span>
            <div className="text-xs text-secondaryText border-t border-stone pt-6">[ CASE STUDY DETAILS TO BE ADDED ]</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="bg-ivory py-24 border-b border-stone">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-16">
        <span className="text-xs font-semibold tracking-widest text-brass uppercase">INSIGHTS</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-medium text-ink">Practical knowledge for sourcing from China.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {insights.map((article, idx) => (
            <div key={article.title} className={`${idx === 0 ? 'lg:col-span-6' : 'lg:col-span-3'} border border-stone bg-white p-8 space-y-4`}>
              <span className="text-xs font-semibold text-brass uppercase">{article.category}</span>
              <h3 className="font-heading text-xl font-medium text-ink">{article.title}</h3>
              <p className="text-sm text-secondaryText">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink text-white py-28 border-b border-stone/20 text-center">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-8">
        <span className="text-xs font-semibold tracking-widest text-brass uppercase">START WITH A REQUEST</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-medium text-ivory uppercase">READY TO SOURCE FROM CHINA?</h2>
        <p className="text-stone/80 text-lg max-w-md mx-auto">Tell us what you're looking for. We'll take it from there.</p>
        <a href={`mailto:${siteConfig.email}?subject=Sourcing%20Request`} className="inline-flex items-center justify-center bg-ivory text-ink h-13 px-8 rounded-sm font-medium hover:bg-white transition-colors">
          Start a Sourcing Request →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-stone py-16 text-sm">
      <div className="max-w-site mx-auto px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">{siteConfig.name}</h3>
            <p className="text-stone/70">{siteConfig.tagline}</p>
            <p className="text-brass text-xs uppercase">{siteConfig.positioning}</p>
          </div>
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-medium text-xs uppercase">CONTACT</h4>
            <p className="text-xs text-stone/70">Email: <a href={`mailto:${siteConfig.email}`} className="text-white underline">{siteConfig.email}</a></p>
            <p className="text-xs text-stone/70">WhatsApp: <a href={`https://wa.me/${siteConfig.whatsappClean}`} target="_blank" rel="noreferrer" className="text-white underline">{siteConfig.whatsapp}</a></p>
          </div>
        </div>
        <div className="border-t border-stone/20 pt-8 flex justify-between text-xs text-stone/50">
          <p>© 2026 Sourden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 3. 根应用入口组件 (Root Component)
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brass selection:text-ink pb-16 md:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CapabilitiesStrip />
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <Industries />
        <SourcingWithoutBarriers />
        <WhySourden />
        <CaseStudies />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-ink/95 backdrop-blur-sm border-t border-stone/20 md:hidden z-40">
        <a href={`mailto:${siteConfig.email}?subject=Sourcing%20Request`} className="block w-full bg-ivory text-ink text-center py-3 font-medium text-sm rounded-sm">
          Start a Sourcing Request →
        </a>
      </div>
    </div>
  );
}