---
title: 'Two Forms of Pre-rendering'
date: '2021-11-18'
---

Next.js has tow forms of pre-rendering: **Static Generation** and **Sever-side Rendering**. The difference is in **when** is generates the HTML for a page.

- **Static Generation** is the pre-rendering method tha generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method tha generates the HTML on **each request**

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.