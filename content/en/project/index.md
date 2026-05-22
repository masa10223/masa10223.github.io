---
title: "Projects"
summary: "List of research projects"
type: "page"
layout: "single"
draft: true
build:
  render: never
  list: never
---

# Research Projects

---

## 🧬 Morpho-VAE: Morphological Difference Representation Learning
<div id="morphovae"></div>

![Morpho-VAE](/images/projects/morpho-vae.jpg)

### Overview
Morphology is a phenotype acquired over a long period of time. There are as many morphologies as there are organisms in the world, and even the same organism has slightly different morphologies. **Morpho-VAE** is an innovative model that represents these differences using deep learning.

### Key Features
- **Landmark-free**: Unlike conventional methods, no specific point designation is required
- **Robust to missing data**: Analysis possible even with incomplete data
- **Application to mandible shape**: Effectiveness demonstrated in primate mandible morphology analysis

### Technical Details
Using a deep learning architecture based on Variational Autoencoder (VAE), high-dimensional morphological data is efficiently mapped to low-dimensional latent space. Successfully extracts features that distinguish species/families.

### Applications
Wide-ranging applications expected in evolutionary biology, morphology, medical image analysis, archaeology, and other fields.

**Related Links:**
- [📄 Paper](https://doi.org/10.1038/s41540-023-00293-6)
- [💻 Code](https://github.com/masa10223/Morpho-VAE)

---

## 🔬 KANADE: Batch Effect Removal Technology
<div id="kanade"></div>

![KANADE](/images/projects/kanade.png)

### Background
In single-cell transcriptomics, **batch effects** due to differences in experimental conditions are a major obstacle to analysis. Conventional methods have the problem of simultaneously removing biological signals.

### KANADE's Innovation
**KANADE** is a new method that cleverly distinguishes between biological signals and batch effects by applying Morpho-VAE. Using deep learning, it removes only technical variation while preserving the essential biological patterns in the data.

### Key Features
- **Variational Autoencoder**: Efficient representation learning through deep learning
- **Selective batch effect removal**: Preserves biological signals, removes only technical variation
- **Scalability**: Handles large-scale datasets
- **Versatility**: Applicable to various single-cell analyses

### Practicality
Demonstrates power in integrative analysis, meta-analysis, and database construction from multiple experimental batches.

**Related Links:**
- [📄 Paper](https://www.biorxiv.org/content/biorxiv/early/2025/04/16/2025.04.10.648296.full.pdf)
- [💻 Code](https://github.com/ShuntaSakaguchi/kanade)

---

## 🧠 mindGAP: Quantifying the Population–Individual Gap
<div id="mindgap"></div>

![mindGAP](/images/projects/mindgap.jpg)

### Overview
**mindGAP** (Measuring INDividual–population GAPs in psychiatric energy landscapes) is a hierarchical variational Bayesian framework that jointly estimates **population-level** and **individual-level** symptom dynamics from longitudinal questionnaire data and quantifies how they diverge.

### Key Features
- **Hierarchical variational Bayes**: Joint estimation of population parameters and participant-specific deviations
- **Energy landscape analysis**: Extracts attractor states and transitions from multivariate response patterns (e.g., PHQ-9)
- **Individual–population landscape divergence**: Quantified via Jensen–Shannon divergence between landscapes
- **Links to external measures**: Associated with depressive severity and with TACS-22 and IPS-22

### Study
We applied mindGAP to longitudinal PHQ-9 data from 248 participants across five time points collected in Japan during the COVID-19 pandemic. Individualized landscapes often diverged from the population-level structure of three major stable states.

**Related Links:**
- 📄 Paper: *In preparation (targeting Nature Human Behaviour)*
