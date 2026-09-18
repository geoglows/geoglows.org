---
title: Tools & Data | GEOGLOWS
description: The GEOGLOWS apps, open data services, and resources, all in one place.
blocks:
  - type: featureSection
    eyebrow: Tools & data
    anchor: getting-started
    heading: Everything you need to work with GEOGLOWS data
    image: /images/showcase/hydroviewer.webp
    imageSide: right
    body: >-
      A connected suite of open applications and data services for exploring,
      analyzing, and downloading global streamflow forecasts and the 85-year
      retrospective, whatever your work with water requires.
    points:
      - { title: "Applications", text: "Interactive apps for streamflow forecasting, groundwater, and hydrological analysis." }
      - { title: "Open data, four ways", text: "Esri web layers, a public REST API, Python and JavaScript packages, and direct AWS S3 access." }
      - { title: "Learn and cite", text: "Publications, videos, webinars, and hands-on training for every level." }
  - type: howItWorks
    eyebrow: How GEOGLOWS works
    anchor: how-it-works
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
  - type: toolsGrid
    eyebrow: Applications
    anchor: tools
    heading: One place for every tool
    intro: Explore the GEOGLOWS applications for forecasting, groundwater, and analysis.
  - type: dataAccess
    eyebrow: Access the data
    anchor: data
    background: muted
    heading: Ways to build on the data
    intro: "The full 15-day ensemble forecasts and the 85-year retrospective are open to everyone, no account required. Pick the access path that fits your work."
    items:
      - icon: layers
        tag: No code
        title: Web layers
        text: "Drop GEOGLOWS streamflow forecasts straight into any ArcGIS map as ready-to-use layers from the Living Atlas, nothing to install."
        links:
          - { label: Browse the layers, href: "https://livingatlas.arcgis.com" }
      - icon: globe
        tag: REST
        title: REST API
        text: "Query forecasts and the full retrospective on demand from the public data service, no download required."
        code: "curl data.geoglows.org"
        links:
          - { label: Data Guide & API, href: "https://data.geoglows.org" }
          - { label: How GEOGLOWS works, href: "/tools#how-it-works" }
      - icon: code
        tag: Python · JS
        title: Packages
        text: "Pull data straight into your own analysis with the official open-source packages."
        code: "pip install geoglows"
        links:
          - { label: Python (PyPI), href: "https://pypi.org/project/geoglows/" }
          - { label: JavaScript (npm), href: "https://www.npmjs.com/package/geoglows" }
      - icon: database
        tag: AWS CLI
        title: Cloud storage (S3)
        text: "Pull the complete forecast and retrospective archives from the open AWS buckets in Zarr format, no credentials needed. Best for large-scale or offline work."
        code: "aws s3 cp s3://geoglows-v2"
        links:
          - { label: Bulk download guide, href: "https://training.geoglows.org/rfs/accessing-data/bulk-download/" }
          - { label: AWS Open Data, href: "https://registry.opendata.aws/geoglows-v2/" }
  - type: resourceTabs
    eyebrow: Documentation & Resources
    anchor: resources
    heading: Documentation & Resources
    intro: "Documentation, research, reports, and training for every level, organized by what you are looking for."
    tabs:
      - { label: Publications, href: /publications, icon: document, group: Documents, description: "Scientific and technical papers using GEOGLOWS." }
      - { label: Impact reports & case studies, href: "/impact#case-studies", icon: globe, group: Documents, description: "Real-world deployment stories and on-the-ground outcomes, on the Impact page." }
      - { label: Annual & organizational reports, href: "/about#reports", icon: bars, group: Documents, description: "Program reports and governance documents, on the About page." }
      - { label: Videos, href: /videos, icon: play, group: Watch & learn, description: "Walkthroughs and demos of the GEOGLOWS RFS, data services, and apps." }
      - { label: Webinars, href: "/videos#webinars", icon: capacity, group: Watch & learn, description: "The RFS v2 webinar series, from model formulation to the RFS." }
      - { label: Tutorials, href: "https://training.geoglows.org", icon: book, group: Watch & learn, description: "In-depth, multilingual courses on the Training Portal." }
  - type: closingCta
    heading: Start building with open water data
    ctas:
      - { label: Open GEOGLOWS RFS, href: https://apps.geoglows.org, style: blue }
      - { label: Read the publications, href: /publications, style: navy }
---
