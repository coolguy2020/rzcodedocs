---
name: seo-frontmatter-keywords
description: Optimize documentation SEO by mapping SEMrush keyword-gap data to relevant pages and updating their front-matter keywords without damaging existing metadata.
---

# SEO Front-Matter Keyword Optimizer

## Objective

Optimize the SEO keywords in documentation front matter for the rzcode.vip website and its documentation.

Use the supplied SEMrush keyword-gap dataset to identify relevant search terms, map them to the correct pages, and update each page's existing `keywords` field.

The goal is to improve search visibility for Chinese search queries related to software copyright registration, commonly called 软著.

Do not blindly add every keyword to every document. Relevance, search intent, and avoiding keyword cannibalization take priority over keyword coverage.

## Target Files

1. Find documentation files containing YAML front matter, including `.md` and `.mdx`.
2. Include documentation source directories and landing-page content maintained in the current repository.
3. Exclude dependencies, generated output, build directories, and third-party files.
4. Inspect the repository structure and existing SEO conventions before editing.
5. Do not modify application code, routing, titles, descriptions, canonical URLs, or unrelated metadata.

## SEMrush Keyword Dataset

Use these keywords as the source of truth:

| Keyword | Intent | Reference volume |
|---|---|---:|
| 软件著作权 | Informational | 1.9K |
| 软著 | Informational | 1.9K |
| 软著查询 | Informational | 720 |
| 软著申请 | Informational | 210 |
| 软 著 | Informational | 110 |
| 软件是否值得下载的判断标准 | Informational | 90 |
| 软 著 申请 | Informational | 70 |
| 软件 著作权 | Informational | 70 |
| 国家版权局软件著作权 | Navigational | 50 |
| 软著申请官网 | Informational | 50 |
| 软 件 | Informational | 40 |
| 软著登记 | Verify intent | Not provided |

Volume values are copied from the supplied dataset. They are reference values, not guaranteed current search volumes.

The dataset contains additional numeric metrics whose column definitions have not been independently verified. Do not infer their meanings or use them as facts.

## Keyword Groups

### Group A: Primary keywords

- 软件著作权
- 软著
- 软著申请

Use these for the main software copyright tool landing page, comprehensive guides, and pages directly focused on the registration workflow.

Choose one primary keyword per page whenever possible.

### Group B: Feature and task keywords

- 软著查询
- 软著申请官网
- 软著登记
- 国家版权局软件著作权

Use these only on pages that genuinely address the corresponding task.

For example:
- A registration-status or query guide may target `软著查询`.
- A registration process guide may target `软著登记`.
- An official-channel guide may target `国家版权局软件著作权`.
- A tool landing page may target `软著申请官网` only if its content supports that search intent.

Never imply that rzcode.vip is a government website.

### Group C: Spelling variants

- 软 著
- 软 著 申请
- 软件 著作权
- 软 件

Treat these as low-priority variants of the core terms. Do not add all variants automatically. Prefer natural Chinese phrases and standard spelling.

Only retain a variant when it adds a meaningful search opportunity and is appropriate for the page.

### Group D: Potentially unrelated keyword

- 软件是否值得下载的判断标准

Do not add this keyword to software copyright pages unless the document specifically discusses software download safety or trustworthiness.

If it is relevant to a separate article, optimize that article independently.

## Workflow

### Step 1: Inspect the project

Before making changes:

1. Identify the documentation framework and content directories.
2. Inspect existing front matter across representative pages.
3. Determine whether `keywords` is a YAML list or a comma-separated string.
4. Check for existing SEO conventions, shared metadata, and generated content.
5. Identify the site's primary landing page and pages that already target the supplied keywords.

Follow the existing repository format. Do not introduce a new front-matter schema.

### Step 2: Build a page-to-keyword map

For each eligible document:

1. Read its title, description, headings, and relevant body content.
2. Determine the page's actual subject and search intent.
3. Select one primary keyword and a small number of relevant secondary keywords.
4. Check existing pages to avoid assigning the same primary keyword to multiple competing pages.
5. Prefer the page that most directly satisfies the search intent.

Use the following initial mapping as guidance, not as an unconditional assignment:

| Page type | Preferred keywords |
|---|---|
| Main tool landing page | 软著申请, 软著, 软件著作权 |
| Software copyright application tutorial | 软著申请, 软件著作权, 软著登记 |
| Registration-status query guide | 软著查询, 软著 |
| Software copyright documentation guide | 软件著作权, 软著申请 |
| Official-channel guide | 国家版权局软件著作权, 软著登记 |
| Dedicated tool directory or homepage | 软著申请官网, 软著 |

Do not assign a keyword to a page just because the page type appears in this table. Confirm that the content actually satisfies the query.

### Step 3: Update front matter

For each relevant document:

1. Preserve all existing front-matter fields.
2. Preserve existing keywords that are still relevant.
3. Add missing, relevant keywords from the dataset.
4. Remove exact duplicates.
5. Avoid changing unrelated metadata or body content.
6. Preserve the existing YAML representation and valid syntax.
7. If the project uses a shared configuration or metadata component instead of per-page front matter, follow the existing architecture and report that finding before making a broad structural change.

For example, if a page currently contains:

```yaml
---
title: 软著申请工具
description: 帮助开发者整理软件著作权申请材料
keywords:
  - 软著申请
---
```

An appropriate update could be:

```yaml
---
title: 软著申请工具
description: 帮助开发者整理软件著作权申请材料
keywords:
  - 软著申请
  - 软著
  - 软件著作权
---
```

This is an illustrative example. Use the actual page content to determine the final keywords.

Do not replace an existing list with the example list. Merge relevant keywords instead.

### Step 4: Keyword quality rules

- Prioritize relevance over search volume.
- Use natural Chinese search phrases.
- Do not add all supplied keywords to every document.
- Do not create new pages unless explicitly requested.
- Do not rewrite page titles or descriptions as part of this task.
- Do not insert keywords into body text unless explicitly requested.
- Avoid excessive keyword variations and repeated terms.
- Avoid keyword cannibalization between the homepage, tool pages, and documentation.
- Do not claim that front-matter keywords alone guarantee Google rankings.
- Do not assume the static-site generator exposes `keywords` as a search-engine ranking signal. Verify the existing SEO template and whether the metadata is actually rendered into the page HTML.
- Do not invent additional search-volume figures.

### Step 5: Validate changes

After editing:

1. Parse the modified YAML front matter to detect syntax errors.
2. Verify that titles, descriptions, slugs, URLs, and other unrelated fields remain unchanged.
3. Verify that no duplicate keywords were introduced.
4. Check that each assigned keyword is supported by the document content.
5. Check for conflicting primary-keyword assignments.
6. Run the project's existing documentation build or validation command if available.
7. Review the Git diff and ensure only intended files were modified.

Do not claim that the build passed unless it was actually run successfully.

## Deliverables

At completion, report:

1. Number of documents scanned.
2. Number of documents updated.
3. Files modified.
4. Primary and secondary keywords assigned to each modified file.
5. Keywords intentionally excluded and why.
6. Validation results.
7. Any pages that need additional content before they can target a keyword effectively.

Do not modify unrelated files.

## Execution Principle

Inspect first, map keywords second, edit third, validate last.

If the page's intent is unclear, leave it unchanged and report it for review rather than guessing.
