---
layout: page
title: Context Clashes  
description: How phrasing and formatting unintentionally shift LLM behavior  
img: assets/img/context-clash.png
importance: 1
category: Current Research Topics
---

Large Language Models often behave differently depending on how a user phrases, frames, or structures a message — even when the underlying intent is identical.  
These unintended shifts, called **context clashes**, occur when seemingly minor changes to the input push the model into a different internal reasoning trajectory.

## What Are Context Clashes?

A context clash occurs when:

- the **task stays the same**,  
- but the **model’s behavior changes**,  
because the surrounding *linguistic or conversational context* shifts the model into a different internal interpretation.

These shifts can be caused not only by differences in the **prompt itself**, but also by the **preceding conversation**, **latent assumptions**, and **contextual cues** the model has accumulated.

This phenomenon lies at the intersection of **ambiguity**, **context grounding**, and **robustness**, and can arise from a broad range of variations, including:

#### **Prompt-related sources**
- removing or reshuffling constraints  
- stylistic changes (formal ↔ informal, neutral ↔ directive)  
- paraphrasing or shortening instructions  
- changes in question structure  
- switching from explicit to implicit intent  
- over-explaining or under-explaining details  
- adding or removing reasoning cues (“step-by-step”, “briefly”, “explain like…”)  

#### **Context-related sources**
- differences in conversation history  
- earlier turns that shift the model’s stance or expectations  
- subtle framing from user tone or prior messages  
- implicit assumptions carried over from previous interactions  
- conflicting or weak grounding signals  
- accumulation of unintended context drift over multiple turns  

---

## Research Questions

1. **When do phrasing changes lead to unintended shifts in model behavior?**  
2. **How do different formulations occupy different regions of the model’s latent space?**  
3. **How can we detect context clashes through logits, entropy, and temperature comparisons?**  
4. **How can models be made more robust to these unintended contextual drifts?**

---

## Selected Reference  
- <https://aclanthology.org/2025.findings-emnlp.370/>
- <https://aclanthology.org/2025.uncertainlp-main.20/>
- <https://arxiv.org/abs/2507.11981>