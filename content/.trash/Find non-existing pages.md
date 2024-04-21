---
date_created: 2024-04-14  15:23:50
date_modified: 2024-04-14  15:26:33
draft: 
language: 
title: Find non-existing pages
type: META
related-to: 
tags: 
---


The following snippet shows a list of all non-existing pages in your vault, i.e. topics which are mentioned using [[wikilinks]], but for which there is no destination.


```dataviewjs
let r = Object.entries(dv.app.metadataCache.unresolvedLinks)
		.filter(([k,v])=>Object.keys(v).length)
		.flatMap(([k,v]) => Object.keys(v).map(x=>dv.fileLink(x)))
dv.list([...new Set(r)])

```