# Content Structure - Princeton AI Partners

> **Last Updated**: 2025-10-30
> **Purpose**: Define all content, copy, and data structures for the rebrand
> **Voice**: Friendly but confident. Playful but technically rigorous. Approachable but elite.

---

## 📝 Writing Guidelines

### Voice & Tone

**We are**:
- Confident (we know our shit)
- Playful (we enjoy what we do)
- Technical (we build from scratch)
- Human (no corporate jargon)

**We are NOT**:
- Salesy
- Corporate
- Jargon-heavy
- Overpromising

**Examples**:
- ✅ "We build anything. Fast."
- ❌ "Leveraging cutting-edge AI solutions to synergize your business outcomes"
- ✅ "RAG agents that don't hallucinate"
- ❌ "Enterprise-grade retrieval-augmented generation systems"

---

## 🏠 Homepage Content

### Hero Section

**Headline**:
```
We Build Anything. Fast.
```

**Subheadline**:
```
Custom AI systems, phone agents, web scrapers, automation—if it involves code, we ship it in weeks.
```

**Primary CTA**: `Start Your Project`
**Secondary CTA**: `See What We Build`

---

### Services Section

**Section Title**: `What We Build`

**Section Subtitle**:
```
From AI agents to custom software—if you can imagine it, we can build it.
```

**Services Grid** (7 cards):
1. RAG Agents - "AI that knows your business inside out"
2. AI Phone Agents - "Your business never misses a call"
3. Custom Products - "From idea to production in weeks"
4. Process Automation - "Free your team from repetitive work"
5. Web Scraping & Bots - "Data extraction at scale"
6. N8n Workflows - "Connect anything to everything"
7. Website Management - "Sites that work as hard as you do"

---

### Social Proof Section

**Section Title**: `Trusted by Startups and Enterprises`

**Stats**:
- **50+** Products Shipped
- **2-4 Weeks** Average MVP Time
- **100%** Client Satisfaction

---

### Final CTA Section

**Headline**:
```
Ready to Build Something Amazing?
```

**Body**:
```
Whether it's a RAG agent, phone system, or custom product—we'll make it real. Fast.
```

**CTA**: `Let's Talk`

---

## 🎯 Service Data Structure

```typescript
// content/services.ts

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;              // Lucide icon name
  color: string;             // Hex color for 3D icon
  features: string[];
  benefits: Benefit[];
  useCases: UseCase[];
  techStack?: string[];
  pricing: string;
  cta: string;
  demoType?: 'rag' | 'audio' | 'workflow' | 'code' | null;
}

export interface Benefit {
  title: string;
  description: string;
  metric?: string;           // Optional stat (e.g., "90% reduction")
}

export interface UseCase {
  industry: string;
  scenario: string;
  result: string;
}
```

---

## 📋 Service Pages Content

### 1. RAG Agents

**Tagline**: "AI that knows your business inside out"

**Description**:
```
Retrieval-Augmented Generation systems that ground AI responses in your actual data. No hallucinations, just accurate answers from your knowledge base.
```

**Features**:
- Custom vector databases tuned to your content
- Real-time retrieval from live data sources
- Context-aware responses grounded in facts
- Semantic search across documents, databases, APIs

**Benefits**:
1. **Eliminate AI Hallucinations**
   - RAG keeps responses grounded in your actual data
   - Metric: "90% reduction in false information"

2. **Scale Knowledge Instantly**
   - Train AI on thousands of docs in hours, not months
   - Metric: "100x faster than manual training"

3. **Always Up-to-Date**
   - Live retrieval means AI always has latest info
   - Metric: "Real-time accuracy"

**Use Cases**:
1. **Healthcare** - Medical knowledge assistant for doctors
   - Result: Instant access to latest research and patient data

2. **Legal** - Case law research and document analysis
   - Result: 80% faster legal research with higher accuracy

3. **Customer Support** - AI support agent with full product knowledge
   - Result: 60% reduction in escalations to human agents

**Tech Stack**: Pinecone, OpenAI Embeddings, LangChain, PostgreSQL, FastAPI

**Pricing**: "Starting at $8,000 for basic implementation"

**CTA**: "Build Your RAG Agent"

**Demo**: Interactive query interface (mock version)

---

### 2. AI Phone Agents

**Tagline**: "Your business never misses a call"

**Description**:
```
Conversational AI phone systems that handle calls 24/7. Natural voice, intelligent routing, perfect recall.
```

**Features**:
- Natural voice conversations (not robotic)
- Intelligent call routing and escalation
- CRM integration and automatic logging
- Multi-language support

**Benefits**:
1. **Never Miss Revenue**
   - AI answers every call instantly, 24/7
   - Metric: "100% call coverage"

2. **Reduce Costs**
   - Handle 10x call volume with same team
   - Metric: "70% lower cost per call"

3. **Instant Insights**
   - Every call transcribed, analyzed, and logged
   - Metric: "Zero manual data entry"

**Use Cases**:
1. **Restaurants** - Reservation handling and menu questions
   - Result: 300% increase in reservation bookings

2. **Medical Practices** - Appointment scheduling and patient intake
   - Result: 50% reduction in no-shows

3. **E-commerce** - Order status and customer support
   - Result: 80% of calls resolved without human

**Tech Stack**: Twilio, ElevenLabs, Anthropic Claude, Supabase, Next.js

**Pricing**: "Starting at $2,000 setup + $0.10/min usage"

**CTA**: "Launch Your Phone Agent"

**Demo**: Embedded demo call recording (audio player)

---

### 3. Custom Products

**Tagline**: "From idea to production in weeks"

**Description**:
```
Fully custom software built from scratch. No templates, no limitations. We build exactly what you need.
```

**Features**:
- Full-stack custom development
- Modern tech stack (Next.js, Python, Go)
- Cloud-native architecture (AWS, Vercel, Railway)
- Complete ownership of code

**Benefits**:
1. **Ship Fast**
   - MVP in 2-4 weeks, full product in 2-3 months
   - Metric: "10x faster than traditional dev"

2. **100% Custom**
   - Built exactly to your specs, not adapted templates
   - Metric: "Zero compromises"

3. **You Own Everything**
   - Full code ownership, no vendor lock-in
   - Metric: "Complete IP rights"

**Use Cases**:
1. **SaaS Startups** - MVP for fundraising
   - Result: Launched and raised $2M seed round

2. **Enterprise** - Internal workflow automation tool
   - Result: 90% reduction in manual work

3. **E-commerce** - Custom marketplace platform
   - Result: $500K GMV in first 3 months

**Tech Stack**: Next.js 15, TypeScript, PostgreSQL, Redis, Vercel, Stripe

**Pricing**: "Projects from $10K to $100K+"

**CTA**: "Start Your Project"

---

### 4. Process Automation

**Tagline**: "Free your team from repetitive work"

**Description**:
```
Custom automation systems that handle the boring stuff. From data entry to report generation—if it's repetitive, we can automate it.
```

**Features**:
- Custom workflow automation
- API integrations (connect any service)
- Intelligent document processing
- Scheduled tasks and triggers

**Benefits**:
1. **Save Time**
   - Automate hours of manual work per day
   - Metric: "80% time savings on routine tasks"

2. **Eliminate Errors**
   - Automated processes are consistent
   - Metric: "99.9% accuracy"

3. **Scale Without Hiring**
   - Handle 10x volume with same team
   - Metric: "No additional headcount needed"

**Use Cases**:
1. **Finance** - Automated invoice processing
   - Result: Process 1000+ invoices monthly with zero manual entry

2. **Operations** - Inventory management automation
   - Result: Real-time stock updates across all channels

3. **Marketing** - Automated reporting and analytics
   - Result: Daily reports generated in minutes, not hours

**Tech Stack**: Python, n8n, Make, Zapier (when appropriate), PostgreSQL

**Pricing**: "Starting at $3,000 for basic workflows"

**CTA**: "Automate Your Workflow"

**Demo**: Animated workflow diagram (React Flow)

---

### 5. Web Scraping & Bots

**Tagline**: "Data extraction at scale"

**Description**:
```
Custom web scraping systems that extract, transform, and deliver data from any source. Built to handle millions of pages without breaking.
```

**Features**:
- Scalable scraping infrastructure
- Anti-detection techniques (proxies, user agents)
- Data cleaning and normalization
- API delivery or database storage

**Benefits**:
1. **Get Any Data**
   - Scrape websites, PDFs, images—anything
   - Metric: "No source is off-limits"

2. **Scale Infinitely**
   - Handle millions of pages reliably
   - Metric: "99.9% uptime"

3. **Always Fresh**
   - Automated updates on your schedule
   - Metric: "Real-time data when you need it"

**Use Cases**:
1. **E-commerce** - Competitor price monitoring
   - Result: Track 10,000+ products across 50 competitors daily

2. **Real Estate** - Property listing aggregation
   - Result: 500,000+ listings updated hourly

3. **Research** - Academic paper collection
   - Result: 1M+ papers extracted and indexed

**Tech Stack**: Python, Scrapy, Playwright, PostgreSQL, Redis, AWS Lambda

**Pricing**: "Starting at $2,500 for basic scrapers"

**CTA**: "Build Your Scraper"

**Demo**: Live code examples with syntax highlighting

---

### 6. N8n Workflows

**Tagline**: "Connect anything to everything"

**Description**:
```
Custom n8n workflows that connect all your tools. From simple automations to complex multi-step processes—we make your stack work together.
```

**Features**:
- Visual workflow builder (n8n)
- 300+ pre-built integrations
- Custom API connections
- Error handling and monitoring

**Benefits**:
1. **No-Code Power**
   - Build complex automations without coding
   - Metric: "Launch workflows in days"

2. **Connect Everything**
   - Integrate any tool via API
   - Metric: "300+ integrations available"

3. **Self-Hosted Control**
   - Your data stays on your servers
   - Metric: "100% data ownership"

**Use Cases**:
1. **Sales** - Lead routing and enrichment
   - Result: Leads auto-qualified and assigned in seconds

2. **Support** - Ticket triage and categorization
   - Result: 70% of tickets auto-categorized

3. **Operations** - Multi-system data sync
   - Result: Real-time sync between CRM, billing, and analytics

**Tech Stack**: n8n, PostgreSQL, Redis, Docker, Railway/AWS

**Pricing**: "Starting at $1,500 for workflow setup"

**CTA**: "Build Your Workflow"

**Demo**: Workflow visualizer (React Flow)

---

### 7. Website Management

**Tagline**: "Sites that work as hard as you do"

**Description**:
```
Modern, fast, conversion-focused websites built with cutting-edge tech. From landing pages to full web apps—we build sites that perform.
```

**Features**:
- Modern frameworks (Next.js, React)
- SEO optimized from day one
- Mobile-first responsive design
- Performance optimized (90+ Lighthouse)

**Benefits**:
1. **Convert More**
   - Fast, beautiful sites that turn visitors into customers
   - Metric: "Average 40% conversion increase"

2. **Rank Higher**
   - Built for SEO from the ground up
   - Metric: "90+ Lighthouse SEO score"

3. **Load Instantly**
   - Optimized for speed (sub-2s load times)
   - Metric: "<2s Largest Contentful Paint"

**Use Cases**:
1. **Startups** - MVP landing page + waitlist
   - Result: 5,000 signups in first month

2. **E-commerce** - Shopify custom storefront
   - Result: 60% faster page loads, 25% revenue increase

3. **SaaS** - Product marketing site
   - Result: 100K monthly visitors, 8% trial signups

**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Vercel, Sanity CMS

**Pricing**: "Starting at $4,000 for landing pages"

**CTA**: "Build Your Site"

**Demo**: Portfolio showcase (our best work)

---

## 📄 Standard Service Page Structure

Every service page follows this template:

```tsx
1. Hero
   - Service name + tagline
   - 1-sentence description
   - Primary CTA

2. What It Is
   - Clear, jargon-free explanation
   - Why it matters
   - Visual diagram or animation (optional)

3. Key Features (Grid - 4 items)
   - Icon + title + short description

4. Benefits (3 columns)
   - Benefit title
   - Description
   - Metric (if applicable)

5. How It Works (Optional - Technical)
   - Step-by-step process
   - Tech stack overview
   - Architecture diagram

6. Use Cases (3 cards)
   - Industry
   - Scenario
   - Result

7. Interactive Demo (where applicable)
   - RAG: Query interface
   - Phone: Audio recording
   - Automation: Workflow diagram
   - Scraping: Code examples

8. Pricing
   - Starting price
   - What's included
   - CTA: "Get a Custom Quote"

9. FAQ (5-7 questions)
   - Common questions
   - Technical details
   - Pricing clarity

10. Final CTA
    - "Ready to Get Started?"
    - Contact form or calendar link
```

---

## 📞 Contact Page Content

**Hero Headline**:
```
Let's Build Something Together
```

**Subheadline**:
```
Tell us about your project and we'll get back to you within 24 hours
```

**Form Fields**:
- Name (required)
- Email (required)
- Company (optional)
- What do you need? (dropdown - required)
  - RAG Agents
  - AI Phone Agents
  - Custom Product
  - Process Automation
  - Web Scraping
  - N8n Workflows
  - Website Development
  - Other
- Tell us about your project (textarea - required)

**Success Message**:
```
Thanks for reaching out!
We'll get back to you within 24 hours.
```

---

## 👥 About Page Content

**Hero Headline**:
```
We Build the Future, One Line of Code at a Time
```

**Our Story** (section):
```
Princeton AI Partners started with a simple idea: businesses shouldn't have to choose between quality, speed, and custom solutions.

We're a team of full-stack engineers who love building things from scratch. No templates, no shortcuts, no compromises—just clean code and creative solutions to complex problems.

Whether it's a RAG agent that eliminates hallucinations, a phone system that never sleeps, or a custom product that doesn't exist yet—we're here to make it real.
```

**What We Believe** (3 principles):
1. **Speed Without Sacrifice**
   - Fast doesn't mean sloppy. We ship MVPs in weeks because we know what we're doing.

2. **Custom is King**
   - Templates are for amateurs. Every project gets built from the ground up, exactly to spec.

3. **Tech That Works**
   - We use cutting-edge tools (Next.js, Python, AI) but never just for the sake of it. Every decision has a reason.

**Tech Stack We Love** (logos):
- Next.js
- TypeScript
- Python
- PostgreSQL
- Anthropic Claude
- Vercel
- React
- Tailwind CSS

---

## 🔍 SEO Metadata Templates

### Homepage
```typescript
title: "Princeton AI Partners - Custom AI Systems & Software Development"
description: "We build custom AI agents, phone systems, web scrapers, and software in weeks. RAG agents, automation, and bespoke products from scratch."
keywords: "custom AI, RAG agents, AI phone agents, web scraping, custom software development, process automation"
```

### Service Page Template
```typescript
title: "[Service Name] - Custom [Category] | Princeton AI Partners"
description: "[Service description in 150 chars]. Built from scratch, shipped in weeks."
```

**Example - RAG Agents**:
```typescript
title: "RAG Agents - Custom AI Systems | Princeton AI Partners"
description: "Build Retrieval-Augmented Generation agents that eliminate hallucinations. Custom vector databases, real-time retrieval, grounded AI responses."
```

---

## ✍️ CTA Copy Variations

**Primary CTAs** (buttons):
- Start Your Project
- Get Started
- Build Your [Service]
- Let's Talk
- Get a Quote
- Book a Call

**Secondary CTAs** (links):
- Learn More
- See What We Build
- View Examples
- Read Case Studies
- Explore Services

**Urgency CTAs**:
- Launch in 2 Weeks
- Ship Your MVP Fast
- Get Started Today

---

## 💬 Testimonials (Placeholder)

**Format**:
```typescript
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
```

**Example**:
```typescript
{
  quote: "Princeton AI built our RAG system in 3 weeks. It's faster and more accurate than anything we could have built in-house.",
  author: "Sarah Chen",
  role: "CTO",
  company: "HealthTech Inc",
}
```

---

## 📊 Stats to Track

**Homepage Stats** (update regularly):
- Products Shipped: 50+
- Average MVP Time: 2-4 weeks
- Client Satisfaction: 100%
- Lines of Code: 500K+ (optional)

---

## 🎯 Content Priorities

### Phase 4 (Content Writing):
1. ✅ Homepage copy (hero, services, CTAs)
2. ✅ RAG Agents page (most technical, flagship)
3. ✅ Custom Products page (broad appeal)
4. ✅ Contact page copy
5. ✅ Service page templates (apply to all)
6. ✅ About page (company story)
7. ✅ All remaining service pages
8. ✅ 404 page copy

---

**Last Updated**: 2025-10-30
**Status**: Complete - All content structured and ready for implementation
