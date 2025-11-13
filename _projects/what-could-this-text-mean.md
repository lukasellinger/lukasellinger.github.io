---
layout: page
title: What Could This Message Mean?
description: LLMs as external observers generating plausible interpretations of text
importance: 1
img: assets/img/what-could-mean.png
category: Current Research Topics
---

Understanding a message in conversation is rarely straightforward.  
A text can express intentions, assumptions, emotions, or ambiguities that are not fully explicit.  
This project examines how Large Language Models behave when positioned not as participants in the dialogue, but as **external observers** that interpret the exchange from the outside.

## LLMs as Third-Point Observers

Instead of producing a single, authoritative interpretation, the LLM is used to surface a set of **plausible meanings** a message might have in context.  
The goal is to model what an LLM believes the message *could reasonably mean* given the surrounding conversation.

We analyze:
- how many different readings the model considers plausible,
- how context shifts these interpretations,
- and how subtle conversational cues shape the model’s inference process.

This project aims to **make ambiguity explicit**:
- by generating interpretation candidates,
- comparing competing readings,
- and identifying uncertainty in user intent.

## Research Questions
1. **What could a text mean?**  
   Identifying multiple plausible interpretations rather than a single answer.

2. **How do LLMs infer intent as observers?**  
   Modeling what the text might communicate to an external analyst.

3. **How sensitive are interpretations to context?**  
   Investigating how small changes in phrasing alter meaning.

## Selected References
- <https://aclanthology.org/2025.emnlp-main.1207/>
- <https://aclanthology.org/2025.findings-emnlp.256/>  
