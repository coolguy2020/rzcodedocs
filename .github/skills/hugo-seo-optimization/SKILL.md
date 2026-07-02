---
name: hugo-seo-optimization
description: |
  **Hugo SEO Optimization Workflow** — Create, optimize, and organize documentation content with SEO best practices.
  Use when: writing new docs or blog posts for Hugo sites; optimizing front matter metadata (title, description, keywords);
  ensuring consistent SEO signals across multilingual content; organizing chronological content with proper weight numbering;
  improving search visibility and indexing for documentation pages.
  Includes: front matter templates, meta description guidelines, keyword strategies, weight ordering (latest-first),
  Hugo i18n best practices, and structured content patterns.
supported-formats: [markdown]
applies-to-file-patterns: ["content/**/*.md", "content/**/_index.md"]
---

# Hugo SEO Optimization

This skill guides you through creating search-optimized documentation pages for Hugo sites with proper metadata, weight ordering, and multilingual SEO.

## Quick Workflow

### 1. **Prepare Front Matter (YAML)**

Use this template for new documentation pages:

```yaml
---
title: "Primary keyword - Concise, benefit-focused title"
description: "160 chars max. Clear summary with primary keywords. Describes what user will learn."
keywords: "keyword1,keyword2,keyword3"
draft: false
date: 2026-07-02
weight: 20
params:
  seo:
    title: "Title With Brand | Brand Name"
    description: "155-160 char description with keywords and call-to-action."
    keywords: [keyword1, keyword2, keyword3]
    canonical: "https://domain.com/docs/topics/"
    robots: "index, follow"
---
```

**Front Matter Rules:**
- **Title**: 50-60 characters; include primary keyword; benefit-driven
- **Description**: 160 character limit; appears in search results
- **Keywords**: Comma-separated string; match user search intent
- **Weight**: Sequential numbering (10, 20, 30...). Smaller = displays first. Always update ALL files in folder
- **Date**: Publication date in YYYY-MM-DD format
- **Params.seo**: Enhanced metadata for search engines

### 2. **Optimize Metadata for Search Engines**

**Title Tag (Meta):**
- Format: `Keyword - Benefit | Brand Name` (60 char limit)
- Example: `Software Copyright Strategy | RZCodeDocs`

**Meta Description (in params.seo):**
- Include primary keyword in first 20 words
- 155-160 characters exactly (this is the meta description users see in search results)
- Call-to-action optional but effective
- Example: `Learn how enterprises optimize software copyright applications under new 2026 regulations. Strategic timing and real-world tactics.`

**Keywords (in params.seo):**
- Array format: `["keyword1", "keyword2", "keyword3"]`
- 5-7 keywords including long-tail variations
- Match actual search queries users perform

### 3. **Weight & Content Ordering Strategy**

**Correct Weight Ordering (Smaller = Displays First):**

```
Weight Range | Display Order | Content Age | Use Case
-------------|---------------|-------------|----------
10           | First (top)   | Oldest      | Earliest/foundational content
20-30        | Second        | Older       | Archive/reference
50-99        | Third         | Recent      | Recently published content
100+         | Last (bottom) | Newest      | Latest posts, newest content
```

**Example Weight Assignment (by publication date):**
- 2026-06-18 post: `weight: 10` (displays first)
- 2026-07-02 post: `weight: 20` (displays second)
- Next post (2026-07-15): `weight: 30` (displays third)

**When Updating Existing Content:**
1. If major changes → increment weight by 10
2. If minor edits → keep same weight; update `date` only
3. Always ensure sequential numbering: 10, 20, 30... for all files in folder

### 4. **Multilingual SEO (Chinese/English)**

**For `/content/docs/` (default language):**
```yaml
title: "English title"
description: "English description with keywords"
keywords: [eng1, eng2, eng3]
```

**For `/content/zh/` (Chinese):**
```yaml
title: "中文标题"
description: "中文描述，含主要关键词"
keywords: [关键词1, 关键词2, 关键词3]
```

**Canonical URLs & Hreflang:**
- Hugo auto-generates hreflang tags if language versions exist
- Ensure `/docs/page/` and `/zh/docs/page/` both exist
- Use trailing slashes consistently (per sidebar render-section-menu requirements)

### 5. **Content Structure for SEO**

**Introduction Section (50-100 words):**
- State the problem/context
- Include primary keyword in first sentence
- Define what reader will learn

**Main Body (H2 Sections):**
- Each H2 should be actionable; include keyword variants
- Aim for 300+ words per section for better indexing
- Use short paragraphs (2-3 sentences); breaks improve readability

**Conclusion/Summary:**
- Recap key takeaways
- Strong call-to-action if applicable
- Secondary link to related docs

**Metadata Tables (Optional):**
- Great for SEO; structured data improves SERP appearance
- Example: comparison tables, feature matrices, version timelines

### 6. **Quality Checklist Before Publishing**

- [ ] Title contains primary keyword; under 60 chars
- [ ] Description 155-160 chars; keyword in first sentence; unique per page
- [ ] Weight assigned correctly (incremental: 10, 20, 30... for chronological order)
- [ ] H1 present (matches or paraphrases title)
- [ ] Heading hierarchy correct (H1 → H2 → H3, no gaps)
- [ ] 2-3 internal links to related pages (canonical paths with /)
- [ ] `date` field set to publication date
- [ ] No duplicate content; unique keywords per page
- [ ] Images have descriptive alt text (SEO + accessibility)
- [ ] Frontmatter YAML valid (no syntax errors)
- [ ] For multilingual: both `/docs/` and `/zh/` versions exist
- [ ] All files in folder have sequential, non-conflicting weights

### 7. **Hugo Build & Verification**

Before committing:

```bash
# Build locally
hugo

# Check front matter parsing
hugo list drafts              # Ensures draft: false is set

# Verify metadata in generated HTML
grep -r "description" public/ | head -5
```

After build, verify in `public/`:
- Meta tags in `<head>` section
- Canonical URL present
- hreflang tags for language versions

---

## Tips & Best Practices

**Keyword Research:**
- Use target audience language
- Check competitor documentation keywords
- Long-tail keywords (3-5 words) often less competitive

**Evergreen vs. Timely:**
- Evergreen (software architecture): lower weight, update rarely
- Timely (2026 regulations): high weight, update with `lastmod`

**SEO Won't Fix Bad Content:**
- Write for users first, search engines second
- Accurate, helpful content ranks naturally

**Tracking Performance:**
- Use search console to monitor impressions/clicks
- Update underperforming titles/descriptions if CTR < 2%

---

## Example: Complete SEO-Optimized Page

```yaml
---
title: "Software Copyright Strategy Under 2026 Regulations"
description: "How enterprises optimize software copyright applications with new compliance rules. Timing and strategic planning."
keywords: "software copyright,high-tech enterprise,compliance,2026,regulations"
draft: false
date: 2026-07-02
weight: 20
params:
  seo:
    title: "2026 Software Copyright Strategy | RZCodeDocs"
    description: "Enterprises optimize software copyright applications under new 2026 regulations. Strategic timing, documentation requirements, and compliance planning explained."
    keywords: ["software copyright", "high-tech enterprise", "2026 regulations", "compliance", "strategic planning"]
    canonical: "https://rzcode.vip/docs/topics/"
    robots: "index, follow"
---

# Software Copyright Strategy Under 2026 Regulations

When regulations shift, enterprises must adapt. This guide explains how software copyright applications have changed and how to optimize your strategy.

## Context: Why 2026 Changed Everything

[Problem statement with primary keyword naturally included...]

## Step 1: Assess Your Current Portfolio

[H2 with keyword variant, actionable guidance...]

## Step 2: Timeline & Documentation

[Another H2, link to related docs...]

## Key Takeaways

[Concise summary, related link...]
```

---

## File Location

Place optimized `.md` files at:
- English docs: `content/docs/topics/`
- Chinese docs: `content/zh/docs/topics/`
- Blog posts: `content/blog/releases/` or `content/blog/techniques/`

Use Hugo front matter frontmatter above as template for all new pages.
