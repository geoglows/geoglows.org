---
title: Tools & Data | GEOGLOWS
description: The GEOGLOWS apps, open data services, and resources, all in one place.
blocks:
  - type: howItWorks
    eyebrow: How GEOGLOWS works
    anchor: how-it-works
    heading: From global weather to your river
    intro: "One chain turns the meteorology behind the world's weather forecasts into river discharge for every stream on Earth, gauged or not. GEOGLOWS works in reaches: single stretches of river between one junction and the next."
    cta: { label: "Look up any river in the Hydroviewer", href: "https://hydroviewer.geoglows.org" }
    steps:
      - title: "Meteorological data"
        text: >-
          ECMWF's forecasting system supplies the weather as an ensemble: the same
          forecast run 51 times from slightly different starting conditions, out to
          15 days.
        ref: { label: "ECMWF forecast documentation", href: "https://www.ecmwf.int/en/forecasts/documentation-and-support" }
      - title: "Runoff"
        text: >-
          A global land-surface model turns that weather into runoff over every
          landmass, the water that reaches the ground and starts moving.
      - title: "TDX-Hydro river network"
        text: >-
          Runoff is mapped onto TDX-Hydro, a river network traced from 12 m
          satellite elevation data: about 7.2 million reaches, each with the
          catchment that drains into it.
        ref: { label: "TDX-Hydro at NGA", href: "https://earth-info.nga.mil/index.php?dir=coordsys&action=tdx-hydro" }
      - title: "Routing"
        text: >-
          A routing model called RAPID moves that water downstream from reach to
          reach, so every reach carries what everything above it contributes.
      - title: "Streamflow"
        text: >-
          The result is a flow rate at every reach, gauged or not, reported every
          three hours.
      - title: "Retrospective"
        text: >-
          The same chain run on 85 years of past weather, back to 1940, sets what
          counts as normal for each reach and how rare a given high flow is.
        ref: { label: "ERA5, the past-weather record", href: "https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels" }
      - title: "Forecast"
        text: >-
          The 15-day forecast is published against those levels, so a reach
          carries both an expected flow and whether that flow is unusual for it.
  - type: valueProps
    compact: true
    eyebrow: GEOGLOWS V2
    anchor: whats-new
    heading: V2 specifications
    intro: "What changed in V2, beyond the stages above."
    items:
      - title: "~7.2 million river reaches"
        text: >-
          Up from roughly 1 million in V1.
      - title: "15-day forecast"
        text: >-
          51-member ECMWF ensemble.
      - title: "85-year retrospective"
        text: >-
          From 1940; V1's record began in 1979.
      - title: "3-hourly outputs"
        text: >-
          Forecast and retrospective alike.
      - title: "TDX-Hydro"
        text: >-
          Traced from 12 m TanDEM-X satellite elevation, replacing V1's 90 m SRTM.
      - title: "Routing and model methodology"
        text: >-
          A matrix Muskingum routing scheme, with calibration improved by a
          machine-learning regression.
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
    heading: Everything published about GEOGLOWS
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
    text: >-
      A connected suite of open applications and data services for exploring,
      analyzing, and downloading global streamflow forecasts and the 85-year
      retrospective, whatever your work with water requires.
    ctas:
      - { label: Open GEOGLOWS RFS, href: https://apps.geoglows.org, style: blue }
      - { label: Read the publications, href: /publications, style: navy }
---
