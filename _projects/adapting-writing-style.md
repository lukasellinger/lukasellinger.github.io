---
layout: page
title: Adapting to the User’s Writing Style  
description: How LLMs align with personal writing distributions without finetuning  
img: assets/img/adapting-writing-style.png
importance: 1
category: Current Research Topics
---

Large Language Models are increasingly used as **everyday productivity tools**:  
drafting emails from bullet points, rewriting messages, preparing summaries, or expanding short notes into polished text.  
For these systems to be genuinely useful, their output must reflect **how the user naturally writes** — not how a generic AI assistant writes.

If the model cannot adapt to the user’s tone, structure, vocabulary, and preferred level of detail, it produces text that feels artificial, overly formal, or simply “not like me.”  
But finetuning a model for every individual user is impractical.  
Instead, LLMs must infer a user’s **personal writing distribution** directly from context.

This project investigates how models can adapt to user-specific style using **in-context signals, distribution steering, and representation anchoring**, without any parameter updates.

## Why User Style Adaptation Is Difficult

A user’s writing style is not a single feature — it is a **distribution** over many behaviors:

- preferred vocabulary and phrasing  
- sentence length and rhythm  
- politeness, directness, emotional tone  
- structural preferences (bullets, paragraphs, narrative flow)  
- level of detail (concise ↔ elaborate)  
- formality or casualness  

LLMs often override these signals by:
- drifting back to a default assistant persona,  
- treating style as optional,  
- generalizing incorrectly from too little data,  
- or failing to maintain stylistic consistency across turns.

This project examines mechanisms that help models reliably imitate a user’s linguistic identity in a stable way.

## In-Context Learning Instead of Finetuning

Since individual finetuning is impractical, the project focuses on **signal-efficient adaptation strategies**, including:

### **1. Style Bootstrapping**
Using a handful of user-written examples (emails, messages, short texts) to infer a “style manifold” the model should follow.

### **2. Distribution Steering**
Aligning the model not to a single example, but to a *distribution* of patterns:
- lexical probability shifts  
- typical sentence shapes  
- preferred narrative structures  
- emotional register  
- amount of detail  

This moves the model toward “how the user usually writes.”

### **3. Self-Feedback and Contrastive Refinement**
The model critiques its own output for stylistic alignment and iteratively adjusts it.

## Why This Matters

For productivity and accessibility it is essential that LLMs:

- write like the *user*, not like a template  
- maintain stylistic consistency  
- adapt to multilingual, hybrid, or idiosyncratic writing  
- avoid over-formalization  
- support natural, personalized communication patterns  

This is critical in applications such as:
- email assistants  
- co-writing and brainstorming tools  
- communication support for people with disabilities  

---

## Research Questions

1. **How can LLMs infer a user’s writing style distribution from minimal context?**  
2. **Which contextual signals most effectively guide in-context stylistic adaptation?**  
3. **How stable is the imitated style across long conversation histories?**  
5. **Which approaches yield the most robust style alignment: exemplars, distribution steering, self-feedback, or representation anchoring?**  
6. **How do multilingual or inconsistent writers affect adaptation quality?**

---

## Selected References  
- <https://dl.acm.org/doi/10.5555/3737916.3742265>
- <https://aclanthology.org/2025.acl-long.461/>
- <https://aclanthology.org/2025.findings-emnlp.532/>  
- <https://arxiv.org/abs/2510.13939>  
- <https://aclanthology.org/2025.emnlp-main.1766/>