---
layout: page
permalink: /publications/
title: publications
description: Papers, presentations, datasets and software from the COMPEL project, newest first.
nav: true
nav_order: 3
show_significance: true
---

<!-- _pages/publications.md -->
<!-- Entries come from _bibliography/papers.bib, selected by their "section" field
     and sorted by "sortdate" (newest first, set in _config.yml). -->

## Publications and presentations

<div class="publications">
{% bibliography --group_by none --query @*[section=publications]* %}
</div>

## Datasets

<div class="publications">
{% bibliography --group_by none --query @*[section=datasets]* %}
</div>

## Software

<div class="publications">
{% bibliography --group_by none --query @*[section=software]* %}
</div>

## Models

<div class="publications">
{% bibliography --group_by none --query @*[section=models]* %}
</div>
