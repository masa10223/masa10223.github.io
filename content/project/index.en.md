---
title: "Projects"
summary: "List of research projects"
type: "page"
layout: "single"
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
**mindGAP** (Measuring INDividual–population GAPs in psychiatric energy landscapes) is a hierarchical variational Bayesian framework that jointly estimates **population-level** and **individual-level** symptom dynamics from longitudinal questionnaire data and quantifies how they diverge. It formalizes mismatches between collective assessment and personal symptom organization—such as appearing stable while struggling internally, or the reverse—as energy landscapes.

### Key Features
- **Hierarchical variational Bayes**: Joint estimation of population parameters and participant-specific deviations
- **Energy landscape analysis**: Extracts attractor states and transitions from multivariate response patterns (e.g., PHQ-9)
- **Individual–population landscape divergence**: Quantified via Jensen–Shannon divergence between landscapes
- **Links to external measures**: Associated not only with depressive severity but also with modern-type depression traits (TACS-22) and interpersonal sensitivity (IPS-22)

### Study (Longitudinal survey during the COVID-19 pandemic)
We applied mindGAP to longitudinal PHQ-9 data from 248 participants across five time points collected in Japan during the COVID-19 pandemic. The population landscape revealed three major stable states (resilient, intermediate, severe), whereas individualized landscapes often diverged substantially from this shared structure. The same symptom trajectories could show different attractor-transition patterns at the individual versus population level (e.g., steady–unsteady, unsteady–steady).

### Significance and Outlook
As a way to capture **structural heterogeneity** in symptoms beyond summary scores, mindGAP may support personalized mental health assessment and precision psychiatry.

**Related Links:**
- 📄 Paper: *In preparation *

---

## 🪰 DOLO (Drosophila tracking with YOLO)
<div id="dolo">
<div style="width: 100%; height: 300px; background: linear-gradient(135deg,rgb(102, 234, 142) 0%,rgb(59, 78, 224) 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin: 1rem 0;">
  <div style="text-align: center; color: white;">
    <div style="font-size: 4rem; margin-bottom: 1rem;">🪰</div>
    <div style="font-size: 1.2rem; font-weight: bold;">DOLO</div>
    <div style="font-size: 0.9rem; opacity: 0.8;">Drosophila tracking with YOLO</div>
  </div>
</div>

### Related manuscript (submitted)
**Chemosensory input suppresses cannibalism by stabilizing social feeding boundaries in Drosophila larvae**  
Submitted (no preprint)

### Overview
We developed **DOLO**, a markerless multi-animal tracking method for *Drosophila* larvae based on YOLO, to quantify social feeding behavior and cannibalism. The platform supports analyses of how chemosensory input stabilizes social feeding boundaries and suppresses cannibalism.

### Approach
- **YOLO**: Deep learning-based markerless multi-animal tracking
- **Transfer learning**: Training specialized for larval behavior

### Research Results
DOLO enabled quantitative comparison of multi-larva behavior and evaluation of the relationship between social feeding boundaries and cannibalism.

### Future Prospects
We aim to extend this approach to behavioral analysis in other animals.

</div>