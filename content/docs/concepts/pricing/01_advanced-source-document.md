---
title: "「进阶源代码文档」计费规则"
linkTitle: "进阶源代码文档"
description: "介绍 RZCode 进阶源代码文档生成的计费规则与示例。"
summary: "查看进阶源代码文档生成的计费步骤、费用构成与示例。"
weight: 81
date: 2026-03-25T10:00:00+08:00
lastmod: 2026-08-22T10:00:00+08:00
params:
  seo:
    title: "进阶源代码文档计费规则"
    description: "了解 RZCode 进阶源代码文档生成的 credits 计费规则与示例。"
    keywords: ["RZCode进阶源代码文档", "源代码文档计费", "credits计费"]
    canonical: "https://rzcode.vip/docs/concepts/pricing/01_advanced-source-document/"
    robots: "index, follow"
---

# 进阶源代码文档计费规则

进阶模式会调用大模型智能分析项目代码，区分核心业务模块、测试代码、静态资源和第三方库等，优先生成核心业务代码内容。计费由以下步骤组成：

## 计费规则

### Step 1：修复非 UTF-8 编码

- 每修复 20 个非 UTF-8 文件计费 0.01 credits，不足 20 个按 20 个计算
- 无需修复时不收费
- 不重复收费

### Step 2：筛选文件后缀

- 0.2 credits / 次
- 由 LLM 结合项目内容判断应包含哪些源码后缀
- 不重复收费

### Step 3：目录打标

- 0.05 credits / 文件夹
- 对包含源码的目录进行分类（核心模块、测试代码、资源目录、第三方库等）
- 不重复收费

### Step 4：文档合并

- 0.2 credits / 次
- 按标签优先级筛选并合并代码，生成最终 DOCX

预计合计约 0.5 - 2 credits。

## 计费示例

若项目中需要处理：

- 40 个非 UTF-8 文件
- 1 次文件后缀识别
- 10 个源码目录打标
- 1 次文档合并

则预计消耗：

```text
(0.01 x 2) + 0.2 + 0.05 x 10 + 0.2 = 0.92 credits
```

其中 0.01 的计费按 20 个文件为一档计算。
