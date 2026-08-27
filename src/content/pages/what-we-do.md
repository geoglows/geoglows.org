---
title: What We Do | GEOGLOWS
description: The science behind GEOGLOWS streamflow forecasting and how the open architecture, models, data services, and tools fit together.
blocks:
  - type: howItWorks
    eyebrow: What we do
    anchor: getting-started
    heading: From global weather to your river
    intro: "GEOGLOWS turns the same meteorology behind the global weather forecast into open, real-time river discharge for every stream on Earth, gauged or not. Here is how the system fits together, step by step."
    steps:
      - { title: "Global weather becomes runoff", text: "ECMWF's Integrated Forecast System drives a global land-surface model, turning the meteorology behind the world's weather forecasts into gridded runoff over every landmass. Forecasts run as a 51-member ensemble out to 15 days; the historical record uses ERA5 reanalysis." }
      - { title: "A river network for the whole planet", text: "That runoff is mapped onto TDX-Hydro, a high-resolution stream network built from 12 m TanDEM-X elevation data: about 7 million river reaches and their catchments, organized into 125 processing units." }
      - { title: "Routing runoff into streamflow", text: "RAPID, the Routing Application for Parallel computation of Discharge, routes runoff downstream through the network with a matrix Muskingum method, turning land runoff into actual discharge at every reach, gauged or not." }
      - { title: "History sets the thresholds", text: "An 85-year retrospective from 1940 establishes each river's normal range and return-period levels, so a forecast carries context: reaches are flagged when flow is expected to exceed local flood thresholds." }
      - { title: "Read any river in the Hydroviewer", text: "The Hydroviewer web app puts the forecast, the retrospective, and return-period flags on an interactive map, so anyone can look up the outlook for a specific reach in seconds." }
      - { title: "Build on the open data", text: "Every forecast and the full retrospective are published openly through a REST API, AWS Open Data, Esri Living Atlas, and the GEOGLOWS Python package, free to integrate into local warning systems and research." }
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
  - type: closingCta
    heading: See it working
    ctas:
      - { label: Explore the tools & data, href: /tools, style: amber }
      - { label: See the impact, href: /impact, style: navy }
---
