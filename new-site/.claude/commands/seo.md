# SEO Audit & Optimization

Comprehensive SEO analysis, keyword research, and schema generation for any page or topic.

## Usage

```
/seo [page-path-or-topic]
```

Examples:
- `/seo /solutions/ai-agents` - Audit the AI Agents page
- `/seo "AI for restaurants"` - Research keywords for this topic
- `/seo` - Full site audit

---

## Mode 1: Page Audit (when given a path)

### Step 1: Read the page files
- Read the `layout.tsx` for metadata and schemas
- Read the `page.tsx` for content structure

### Step 2: Check required schemas
- [ ] **Service/Product schema** - Does it describe the offering?
- [ ] **FAQPage schema** - If page has FAQ accordion, does it have schema?
- [ ] **BreadcrumbList schema** - Navigation path to this page?
- [ ] **Organization schema** - Company info (usually in root layout)

### Step 3: Check metadata completeness
- [ ] `title` - Is it under 60 chars? Does it include target keyword?
- [ ] `description` - Is it under 160 chars? Is it compelling?
- [ ] `keywords` - Are commercial intent keywords included?
- [ ] `openGraph` - Title, description, url, type?
- [ ] `twitter` - Card, title, description?
- [ ] `canonical` - Is canonical URL set?

### Step 4: Check content structure
- [ ] H1 tag - Is there exactly one? Does it include keyword?
- [ ] H2/H3 hierarchy - Proper heading structure?
- [ ] Internal links - Links to related pages?
- [ ] CTA - Clear call-to-action?

### Step 5: Generate report
```
📊 SEO Audit: /solutions/ai-agents

✅ Schemas (3/3)
   - Service schema: Present
   - FAQPage schema: Present (6 questions)
   - BreadcrumbList: Present

✅ Metadata (6/6)
   - Title: "AI Agents for Business | Custom AI Solutions" (48 chars)
   - Description: Present (158 chars)
   - Keywords: 14 keywords
   - OpenGraph: Complete
   - Twitter: Complete
   - Canonical: Set

⚠️ Content (2/3)
   - H1: Present ✅
   - Internal links: Only 2 found ⚠️
   - CTA: Present ✅

📝 Recommendations:
1. Add more internal links to related solutions
2. Consider adding "Related Articles" section
```

---

## Mode 2: Keyword Research (when given a topic)

### Step 1: Web search for the topic
Use WebSearch to find:
- Competitor keywords
- Related searches
- Common questions
- Long-tail variations

### Step 2: Categorize keywords by intent
- **Commercial intent**: "hire", "cost", "service", "for my business"
- **Informational**: "how to", "what is", "guide", "tutorial"
- **Navigational**: Brand names, specific tools

### Step 3: Map to existing pages
Check which keywords could be added to existing pages vs need new content.

### Step 4: Output keyword list
```
🔍 Keyword Research: "AI for restaurants"

## Commercial Intent (High Priority)
- AI for my restaurant
- restaurant automation service
- AI phone system for restaurant
- hire restaurant AI developer

## Informational (Content Ideas)
- how to use AI in restaurant
- AI restaurant examples
- restaurant automation benefits
- AI reservations system

## Long-tail (Low Competition)
- AI order taking system for restaurants
- automated restaurant phone answering
- AI customer service for food service

## Suggested Page Mapping:
- /solutions/ai-phone-systems: Add "restaurant" variations
- /clients: Expand restaurant industry section
- /blog: Write "AI for Restaurants Complete Guide"
```

---

## Mode 3: Schema Generator

Generate ready-to-use JSON-LD schemas.

### FAQPage Schema
```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Question text here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer text here.',
      },
    },
  ],
};
```

### BreadcrumbList Schema
```typescript
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://princeton-ai.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://princeton-ai.com/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Page Name', item: 'https://princeton-ai.com/solutions/page-name' },
  ],
};
```

### Service Schema
```typescript
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Name',
  description: 'Service description',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Service Category',
  areaServed: 'United States',
  priceRange: '$X,XXX - $XX,XXX',
};
```

---

## Full Site Audit Checklist

When run without arguments, check all pages:

### Pages to Audit:
- [ ] / (Homepage)
- [ ] /about
- [ ] /contact
- [ ] /quote
- [ ] /clients
- [ ] /blog
- [ ] /solutions (listing)
- [ ] /solutions/ai-agents
- [ ] /solutions/ai-phone-systems
- [ ] /solutions/web-development
- [ ] /solutions/process-automation
- [ ] /solutions/web-scraping
- [ ] /solutions/custom-bots
- [ ] /solutions/bespoke-software

### Site-wide Checks:
- [ ] robots.txt - Proper disallows?
- [ ] sitemap.xml - All pages included?
- [ ] Canonical URLs - Consistent?
- [ ] 301 redirects - Old pages handled?

---

## Tools Used

- **Read** - Read page files for audit
- **Grep** - Search for patterns across files
- **WebSearch** - Keyword research
- **WebFetch** - Check competitor pages

## Output Format

Always end with actionable recommendations prioritized by impact:
1. **High Impact**: Missing schemas, broken metadata
2. **Medium Impact**: Missing keywords, weak descriptions
3. **Low Impact**: Minor optimizations, nice-to-haves
