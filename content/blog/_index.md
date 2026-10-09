---
title: "软著技术分享 - 智能体技术与实战经验"
description: "软宝宝技术博客：分享软著智能体的代码理解、文档生成、信息提取等核心技术方案，以及软著申请实战经验、产品动态和行业洞察。"
keywords: ["技术分享", "软著技术", "智能体", "AI应用", "代码分析", "文档生成", "产品实践"]
weight: 20
summary: "技术分享与产品动态，持续更新软著申请实战经验。"
lead: "这里分享软著申请的技术实现、产品更新和实战经验，与社区一起探讨如何用技术提升软著申请效率。"
date: 2023-09-07T16:12:03+02:00
lastmod: 2026-06-15T15:00:00+08:00
draft: false
toc: true
layout: "single"
type: "blog"
contributors: ["软宝宝团队"]
params:
  seo:
    title: "软著技术博客｜智能体实现与产品分享｜软宝宝"
    description: "软宝宝技术博客：分享软著智能体的代码理解、文档生成、信息提取等核心技术方案，以及产品动态和软著申请实战经验。"
    keywords: ["软著申请", "技术分享", "软著技术", "智能体", "AI应用", "代码分析", "软宝宝", "RZCode"]
    canonical: "https://rzcode.vip/rzcodedocs/blog/"
    robots: "index, follow"
  section:
    title: "technical"
    iconName: "book"
    startUrl: "/blog"
---

<style>
/* 提示框背景 */
.docs-alert-box {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    color: #4b5563;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

/* 卡片基础样式 */
.docs-nav-card {
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    border: 1px solid #e5e7eb;
    background-color: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none !important;
}

/* 卡片悬浮效果 */
.docs-nav-card:hover {
    border-color: #0d6efd;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
    transform: translateY(-2px);
}

/* 高亮状态 (类似截图中的 Overview) */
.docs-nav-card.active-card {
    border-color: #0d6efd;
    background-color: #f0f7ff;
}

/* 卡片内部元素 */
.docs-nav-card .card-body {
    padding: 2rem 1.5rem !important;
}

.docs-icon-wrapper {
    color: #0d6efd;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
}

.docs-nav-card h5 {
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.docs-nav-card p {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 0;
    line-height: 1.5;
}
</style>
<div class="docs-alert-box">
  此页面包含产品的多用的技术和产品亮点，希望能和大家多交流解惑。
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 text-center">

<div class="col">
  <a href="blog/techniques" class="docs-nav-card active-card" data-path="blog/techniques/">
    <div class="card-body">
      <div class="docs-icon-wrapper" style="color: #fd7e14;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.765 1.559a.5.5 0 0 1 .47 0l6 3.429a.5.5 0 0 1 0 .862l-6 3.428a.5.5 0 0 1-.47 0l-6-3.428a.5.5 0 0 1 0-.862l6-3.429z"/>
          <path d="M1.259 8.587a.5.5 0 0 1 .671-.165L8 12.082l6.07-3.66a.5.5 0 0 1 .514.858L8.257 12.941a.5.5 0 0 1-.514 0L1.094 9.258a.5.5 0 0 1-.165-.671z"/>
          <path d="M1.259 11.587a.5.5 0 0 1 .671-.165L8 15.082l6.07-3.66a.5.5 0 0 1 .514.858L8.257 15.941a.5.5 0 0 1-.514 0L1.094 12.258a.5.5 0 0 1-.165-.671z"/>
        </svg>
      </div>
      <h5>技术栈</h5>
      <p>深度解析据吉的技术底座。</p>
    </div>
  </a>
</div>

<div class="col">
  <a href="blog/releases" class="docs-nav-card" data-path="blog/releases/">
    <div class="card-body">
      <div class="docs-icon-wrapper" style="color: #8e44ad;" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm11 11.966V3.034a.034.034 0 0 1 .034-.034.034.034 0 0 1 .034.034v9.932a.034.034 0 0 1-.034.034.034.034 0 0 1-.034-.034zm-2-9.932v9.932a.034.034 0 0 1-.034.034.034.034 0 0 1-.034-.034V3.034a.034.034 0 0 1 .034-.034.034.034 0 0 1 .034.034zm-2 9.932V3.034a.034.034 0 0 1 .034-.034.034.034 0 0 1 .034.034v9.932a.034.034 0 0 1-.034.034.034.034 0 0 1-.034-.034zm-2-9.932v9.932a.034.034 0 0 1-.034.034.034.034 0 0 1-.034-.034V3.034a.034.034 0 0 1 .034-.034.034.034 0 0 1 .034.034zm-2 9.932V3.034a.034.034 0 0 1 .034-.034.034.034 0 0 1 .034.034v9.932a.034.034 0 0 1-.034.034.034.034 0 0 1-.034-.034z"/>
          <path d="M7 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <h5>版本发布</h5>
      <p>追踪据吉的每一次进化。实时获取最新的功能发布、系统优化及安全更新日志。</p>
    </div>
  </a>
</div>

</div>

<script>
// Adjust paths based on environment
document.querySelectorAll('[data-path]').forEach(link => {
  const path = link.getAttribute('data-path');
  const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  if (isProduction) {
    // Production: prepend /rzcodedocs/
    link.href = '/rzcodedocs/' + path;
  } else {
    // Local: use path as is
    link.href = '/' + path;
  }
});
</script>
