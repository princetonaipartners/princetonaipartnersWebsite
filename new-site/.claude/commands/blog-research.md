# Blog Research & Content Generation

Research topics and generate SEO-optimized blog posts for Princeton AI Partners.

## Usage

```
/blog-research "topic or keyword"
```

Examples:
- `/blog-research "AI for restaurants"`
- `/blog-research "how to automate customer support"`
- `/blog-research "custom software vs SaaS"`

---

## Phase 1: Research

### Step 1: Web Search
Use WebSearch to gather:
- Top 5 competitor articles on the topic
- Common questions people ask
- Related keywords and phrases
- Recent news or developments

### Step 2: Analyze Competitors
For each top result:
- Note their H2/H3 structure
- Identify gaps in their coverage
- Find angles they missed
- Check word count (aim for 1500+ words)

### Step 3: Identify Target Keywords
Group by intent:
- **Primary keyword**: Main topic (1-2 keywords)
- **Secondary keywords**: Related terms (3-5 keywords)
- **Long-tail keywords**: Specific queries (5-10 keywords)

### Step 4: Map to Princeton AI Services
Identify which services relate to this topic:
- AI Agents → /solutions/ai-agents
- AI Phone Systems → /solutions/ai-phone-systems
- Web Development → /solutions/web-development
- Process Automation → /solutions/process-automation
- Web Scraping → /solutions/web-scraping
- Custom Bots → /solutions/custom-bots
- Bespoke Software → /solutions/bespoke-software

---

## Phase 2: Outline Generation

### Blog Post Structure
```
1. Hook/Introduction (grab attention, state the problem)
2. Background/Context (why this matters)
3. Main Content (3-5 H2 sections with practical value)
4. Data/Examples (statistics, case studies, comparisons)
5. Solution (how Princeton AI can help - natural, not salesy)
6. Conclusion (summary + CTA)
```

### SEO Checklist for Outline
- [ ] Primary keyword in title
- [ ] Primary keyword in first 100 words
- [ ] H2 headings include keywords
- [ ] At least one data table or comparison
- [ ] Internal links to 2-3 solution pages
- [ ] Clear CTA at the end

---

## Phase 3: Content Generation

### Frontmatter Template
```yaml
---
title: "[Keyword-Rich Title Under 60 Chars]"
excerpt: "[Compelling 1-2 sentence summary, 150-160 chars]"
publishedAt: "[YYYY-MM-DD]"
author:
  name: "Parth Thakker"
  role: "Co-Founder"
category: "[ai-automation|web-development|business-strategy|case-study]"
tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
featured: false
---
```

### Category Guidelines
- `ai-automation` - AI agents, automation, RAG, LLMs
- `web-development` - Websites, Next.js, React, SEO
- `business-strategy` - ROI, decision-making, planning
- `case-study` - Client stories, results, implementations

### Writing Style
- **Tone**: Professional but conversational
- **Perspective**: First-person plural ("We've found that...")
- **Evidence-based**: Include stats, data, examples
- **Actionable**: Give readers practical takeaways
- **No fluff**: Every paragraph should add value

### Content Requirements
- 1500-2500 words
- 5-7 H2 sections
- 1+ data tables or comparisons
- 2-3 internal links to solution pages
- 1 clear CTA (usually "Schedule a free consultation")

---

## Phase 4: Output

### File Location
```
content/blog/[slug].mdx
```

Slug format: lowercase, hyphens, no special chars
Example: `ai-for-restaurants-complete-guide.mdx`

### MDX Features Available
```mdx
## Heading 2
### Heading 3

**Bold text** and *italic text*

- Bullet points
- Another point

1. Numbered list
2. Another item

> Blockquotes for emphasis

| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |

[Link text](/solutions/ai-agents)

<Callout type="info">
  Important information here
</Callout>

<Callout type="warning">
  Warning message here
</Callout>
```

---

## Example Output

For `/blog-research "AI for restaurants"`:

```mdx
---
title: "AI for Restaurants: The Complete 2025 Guide"
excerpt: "How restaurants are using AI to automate phone orders, manage reservations, and reduce labor costs by 30%. Real examples and implementation strategies."
publishedAt: "2025-01-14"
author:
  name: "Parth Thakker"
  role: "Co-Founder"
category: "ai-automation"
tags: ["AI for restaurants", "restaurant automation", "AI phone systems", "hospitality AI", "food service technology"]
featured: false
---

## The Restaurant Industry's Labor Problem

[Introduction about staffing challenges, missed calls, etc.]

## How AI is Transforming Restaurant Operations

### AI Phone Systems: Never Miss an Order Again

[Content about AI answering phones, taking orders, handling reservations]
[Internal link: Learn more about our [AI phone systems](/solutions/ai-phone-systems)]

### Automated Customer Support

[Content about AI handling inquiries, complaints, FAQs]
[Internal link: See how [AI agents](/solutions/ai-agents) work]

### Process Automation Beyond the Phone

[Content about backend automation, inventory, scheduling]
[Internal link: Explore [process automation](/solutions/process-automation)]

## Real Results: Restaurant AI by the Numbers

| Metric | Before AI | After AI |
|--------|-----------|----------|
| Missed calls | 35% | 2% |
| Average order time | 4 min | 90 sec |
| Labor cost per order | $2.50 | $0.40 |

## Getting Started with AI for Your Restaurant

[Practical steps, considerations, timeline]

## Next Steps

Ready to see how AI can transform your restaurant? [Schedule a free consultation](/contact) to discuss your specific needs.
```

---

## Checklist Before Finalizing

- [ ] Title includes primary keyword
- [ ] Excerpt is compelling and under 160 chars
- [ ] Category matches content
- [ ] 5 relevant tags
- [ ] At least 2 internal links to solution pages
- [ ] Data table or comparison included
- [ ] Clear CTA at the end
- [ ] No placeholder text
- [ ] Grammatically correct
- [ ] Factually accurate

---

## After Creating

1. Save file to `content/blog/[slug].mdx`
2. Run `npm run build` to verify
3. Check post appears at `/blog/[slug]`
4. Verify internal links work
5. Consider adding to featured if high-value
