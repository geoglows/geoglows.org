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
  - type: featureSection
    anchor: forecasting
    eyebrow: Forecasting
    heading: Turning global weather into river discharge
    image: /images/showcase/river-network.webp
    imageSide: right
    body: >-
      GEOGLOWS forecasting rests on a chain of physically based models. ECMWF's
      Integrated Forecast System drives a global land-surface model that converts
      rainfall and snowmelt into gridded runoff, and that runoff is routed
      through the river network to produce discharge at every reach on Earth,
      gauged or not.
    points:
      - { title: "Ensemble meteorology", text: "A 51-member ECMWF ensemble carries forecast uncertainty out to 15 days, so a forecast is a range of possible outcomes rather than a single line." }
      - { title: "Vector routing", text: "The RAPID model routes runoff downstream with a matrix Muskingum method across roughly 7 million TDX-Hydro reaches, resolving flow on rivers that have never been gauged." }
      - { title: "An 85-year baseline", text: "An ERA5-forced retrospective from 1940 establishes each river's normal range and return periods, giving every forecast physical context." }
      - { title: "Calibration", text: "Routing parameters are tuned with a machine-learning regression against observations to sharpen flow estimates worldwide." }
  - type: featureSection
    anchor: flood-mapping
    eyebrow: Flood mapping
    tag: In development
    heading: From a discharge forecast to where the water goes
    image: /images/aerial-thermal.webp
    imageSide: left
    background: muted
    body: >-
      A rising hydrograph tells you a river will flood; it does not tell you
      which streets. Flood mapping is the science of translating forecast
      discharge into inundation extent, pairing the forecast with high-resolution
      terrain and satellite observations of surface water.
    points:
      - { title: "High-resolution terrain", text: "The 12 m TanDEM-X elevation model that defines the river network also constrains where forecast water spreads across the floodplain." }
      - { title: "Satellite observation", text: "Optical and radar (SAR) imagery map actual surface-water extent, providing the ground truth to calibrate and validate inundation estimates." }
      - { title: "Forecast-driven extent", text: "Linking forecast discharge to modeled inundation turns 'the river will rise' into a map of what is at risk, block by block." }
  - type: featureSection
    anchor: groundwater
    eyebrow: Groundwater
    heading: Making invisible water visible in time to act
    image: /images/showcase/grace.webp
    imageSide: right
    body: >-
      Groundwater is out of sight until a well runs dry. GEOGLOWS combines
      measurements from space with records on the ground to make storage trends
      visible while there is still time to respond.
    points:
      - { title: "Satellite gravimetry", text: "The NASA/DLR GRACE and GRACE-FO satellites detect tiny changes in Earth's gravity field, revealing month-to-month changes in total water storage." }
      - { title: "Ground observations", text: "In-situ well levels and aquifer characterization anchor the coarse satellite signal to real, local conditions." }
      - { title: "Bridging scales", text: "The engineering problem is downscaling: translating basin-wide gravity anomalies into aquifer-level insight a community can act on." }
  - type: featureSection
    anchor: capacity-building
    eyebrow: Capacity building
    heading: Engineering forecasts into local decisions
    image: /images/story-training.webp
    imageSide: left
    background: muted
    body: >-
      The hardest part of a global model is the last mile: making it usable inside
      a national service or a local community. Capacity building is the
      deliberate engineering of that adoption, co-developing methods and skills
      with the people who run and act on the forecasts.
    points:
      - { title: "National services", text: "Working through existing hydromet institutions and their data policies, not around them, so forecasts fit into daily operations." }
      - { title: "Research and students", text: "BYU's Capstone program pairs student teams with SERVIR regional hubs to build basin-specific applications and extend the science into new use cases." }
      - { title: "Regional hubs", text: "SERVIR hubs and GEO regional structures carry training and support into each region, building durable local expertise." }
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
      - { label: Explore the tools & data, href: /tools, style: blue }
      - { label: See the impact, href: /impact, style: navy }
---
