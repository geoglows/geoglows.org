---
title: What We Do | GEOGLOWS
description: The science behind GEOGLOWS streamflow forecasting and how the open architecture, models, data services, and tools fit together.
blocks:
  - type: richText
    eyebrow: What we do
    heading: The science and system behind the forecast
    body: >-
      This page is the how. GEOGLOWS turns global weather into a river-discharge
      forecast for every stream on Earth. Here we walk through both sides of
      that: the hydrologic science that makes a global forecast possible, and the
      open architecture of models, data services, and tools that fit together to
      produce it and get it to the people who act on it.
  - type: pillars
    eyebrow: What we work on
    anchor: work
    heading: "Helping communities see their water before it's a crisis"
    intro: "Four connected areas of work, from the forecast on every river to the people trained to act on it."
    items:
      - icon: waves
        image: /images/aerial-river.webp
        title: Streamflow forecasting
        text: "15-day forecasts and an 85-year retrospective for every river on Earth, gauged or not, so remote communities get the same warning window as major cities."
      - icon: flood
        image: /images/aerial-thermal.webp
        title: Flood mapping
        tag: coming soon
        text: "Turning streamflow forecasts into block-by-block flood extent maps, so a warning shows what's at risk, not just that a river will rise."
      - icon: drop
        image: /images/showcase/grace.webp
        title: Groundwater monitoring
        text: "Satellite gravity data and local well records combined, so storage trends are visible before a well runs dry, not after."
      - icon: capacity
        image: /images/story-training.webp
        title: Capacity building
        text: "Training national hydrological services and student teams to run, interpret, and act on the forecasts in their own basins."
  - type: richText
    eyebrow: How it works
    anchor: getting-started
    heading: From global weather to your river
    body: >-
      The GEOGLOWS Streamflow Forecasting initiative combines advanced hydrologic
      models with high-resolution global meteorology to deliver accurate,
      real-time forecasts of river discharge for millions of stream reaches
      worldwide. Improved data services, visualization tools, and analytical
      capabilities let users access, analyze, and apply streamflow data for
      everything from flood early warning to water-resource planning. With
      continuous updates and community engagement, the service stays at the
      forefront of hydrological science and technology.
  - type: howItWorks
    heading: How the system fits together
    steps:
      - { title: Global forecasts, text: "ECMWF ensemble runoff forecasts are produced daily for the entire globe, powered by Esri's Living Atlas and programmatic APIs." }
      - { title: Routed & corrected, text: "Runoff is routed through more than 7 million mapped river reaches and bias-corrected against observations." }
      - { title: Explore & apply, text: "Open the Hydroviewer to read the forecast for any river, or access the data directly through the REST API and AWS Open Data." }
  - type: valueProps
    eyebrow: GEOGLOWS V2
    anchor: whats-new
    heading: What powers the forecast today
    intro: "The current system is built on GEOGLOWS V2, a ground-up upgrade to the hydrography, meteorology, data services, and tools behind every forecast."
    items:
      - title: Higher-resolution hydrography
        text: "The TDX-Hydro hydro fabric, derived from the 12 m TanDEM-X DEM, replaces V1's 90 m SRTM data, mapping about 7 million river reaches (up from 1 million) across 125 Vector Processing Units, with expanded coverage in northern North America, Europe, and Asia."
      - title: 3-hourly forecasts on ECMWF IFS 48r1
        text: "Forecasts use the latest ECMWF meteorology and land-surface data and report discharge at a consistent 3-hour interval for easier analysis."
      - title: An 85-year retrospective from 1940
        text: "The historical simulation now begins in 1940 using ERA5 reanalysis, extending V1's coverage that started in 1979."
      - title: Open data on AWS
        text: "The complete forecast and retrospective datasets are available on demand through the AWS Open Data Program, broken down by location and time for fast, reliable access."
      - title: Upgraded maps and Hydroviewer
        text: "Faster Living Atlas web maps cover all 7 million reaches, and the Hydroviewer integrates the new data sources and the GEOGLOWS Python package."
      - title: Faster, more reliable services
        text: "The data service and Python package were overhauled, the model code optimized, and routing calibration improved with a machine-learning regression model for better flow estimates."
  - type: closingCta
    heading: See it working
    ctas:
      - { label: Explore the tools & data, href: /tools, style: amber }
      - { label: See the impact, href: /impact, style: navy }
---
