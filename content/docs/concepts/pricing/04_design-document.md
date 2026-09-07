---
title: "「设计文档」计费规则"
linkTitle: "设计文档"
description: "介绍 RZCode 设计文档生成的计费规则与示例。"
summary: "查看设计文档生成的章节、设计图和审校计费方式。"
weight: 84
date: 2026-03-25T10:00:00+08:00
lastmod: 2026-08-22T10:00:00+08:00
params:
  seo:
    title: "设计文档计费规则"
    description: "了解 RZCode 设计文档生成的 credits 计费规则与示例。"
    keywords: ["设计文档计费", "设计图计费", "章节计费", "RZCode"]
    canonical: "https://rzcode.vip/docs/concepts/pricing/04_design-document/"
    robots: "index, follow"
---

# 设计文档计费规则

设计文档生成按任务消耗 credits，计费由以下四部分组成：

## 计费规则

### Step 1：推荐章节与设计图

- 0.5 credits / 次
- 一次性费用，推荐结果会持久化到项目，可复用

### Step 2：自动生成设计图

- 0.9 credits / 张
- 仅当选择由云端自动生成设计图时计费
- 用户自行上传的设计图不额外收费

### Step 3：章节生成

- 0.4 credits / 章

### Step 4：成文审校

- 1.1 credits / 全文
- 包括文字审校、去AI味、噪音清理、结构检查与图片排版等

## 计费示例

若一次任务包含：

- 推荐章节与设计图 1 次
- 自动生成 6 张设计图
- 共 11 个章节

则预计消耗：

```text
0.5 + 0.9 x 6 + 0.4 x 11 + 1.1 = 11.4 credits
```

其中 1.1 为成文审校费用。
