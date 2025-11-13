---
layout: page
title: Granularity & Uncertainty in LLM Responses  
description: How LLMs express, manage, and adapt to uncertainty  
img: assets/img/granularity-uncertainty.png
importance: 1
category: Current Research Topics
---

Large Language Models often respond with confident, detailed statements — even when they are uncertain or lack evidence.  
This creates a mismatch between **what the model knows**, **how sure it is**, and **how specific the answer should be**.

This project investigates whether LLMs can choose **the appropriate level of granularity** in their responses depending on their uncertainty, and how they express uncertainty in natural language.

Examples of granularity mismatch:
- “His birthday is **11 October 2025**.” (high granularity, high confidence required)  
vs.  
- “He was born **in 2025**.” (low granularity, low confidence acceptable)

Do LLMs understand this principle?  
Do they adjust their answer depending on **epistemic** (knowledge-based) vs **aleatoric** (inherent randomness) uncertainty?  
Do they *hedge*, *downgrade detail*, or *refuse* appropriately?

## Why Granularity Matters

Faithful language generation — answering **only as specifically as the model is confident** — is a key requirement for trustworthy AI systems.

Yet recent research shows:
- LLMs frequently generate overly confident specific claims even when they are uncertain.  
- They often fail to calibrate granularity to internal uncertainty.  
- Hedging language (“it might be”, “I’m not sure”) is inconsistent and often decoupled from actual logits.  

This project investigates where these failures come from and how granularity can be aligned with internal confidence.

---

## Types of Uncertainty

#### **Aleatoric Uncertainty**  
Uncertainty inherent to the world.  
Example: “Will it rain at exactly 14:37 on Tuesday?” — fundamentally unpredictable.

#### **Epistemic Uncertainty**  
Uncertainty due to lack of knowledge.  
Example: “When was the person born?” — model may not know but can answer at a coarse level.

This project focuses on **how LLMs handle epistemic uncertainty** by adjusting answer granularity.

---

## Key Research Directions

#### **1. Do LLMs choose the right level of granularity?**
If a model is unsure:
- Does it generalize (“in 2025”) instead of hallucinating specifics (“11 October 2025”)?  
- Can it scale up or down the detail level depending on internal uncertainty?


#### **2. Do LLMs express their uncertainty naturally?**
Do they hedge appropriately?  
Do they explicitly say “I don’t know”?  
Do they use calibrated probability language?

Most models hedge inconsistently and not proportional to the logits.

#### **3. Faithful Generation (beyond factuality)**

Unlike factuality (“don’t be wrong”), faithfulness means:

> “Never decisively state things you are not confident about.”

Modern LLMs are not explicitly trained for this and perform poorly.

This project investigates mechanisms for:
- identifying uncertain fragments inside an answer  
- highlighting or tagging low-confidence content  
- conditional hedging  
- adjusting detail levels dynamically


#### **4. Tool Use and Uncertainty**
When models use tools (e.g., search engines, code execution, calculators), new uncertainty types emerge:
- uncertainty over tool reliability  
- uncertainty about tool outputs  
- uncertainty about integration of external knowledge

How should uncertainty be expressed when using external APIs?


#### **5. Informational Value & Granularity**
Different correct answers contain different **information gain**.  
We explore metrics for measuring:
- how informative an answer is  
- whether information is appropriate for the uncertainty level  
- how to align granularity across wildly different question types

---

## Selected References
- <https://aclanthology.org/2024.emnlp-main.443.pdf>  
- <https://aclanthology.org/2024.acl-long.365.pdf>  