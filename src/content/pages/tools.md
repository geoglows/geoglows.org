---
title: Tools & Data | GEOGLOWS
description: The GEOGLOWS apps, open data services, and resources, all in one place.
blocks:
  - type: featureSection
    eyebrow: Tools & data
    anchor: getting-started
    heading: Everything you need to work with GEOGLOWS data
    image: /images/showcase/hydroviewer.webp
    imageAlt: "The GEOGLOWS HydroViewer app showing the modelled river network across Europe."
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
    intro: "One chain turns the meteorology behind the world's weather forecasts into river discharge for every stream on Earth, gauged or not."
    steps:
      - title: "Meteorological data"
        token: "ECMWF IFS + ERA5"
        text: >-
          ECMWF's Integrated Forecast System supplies the meteorology: a 51-member
          ensemble out to 15 days for the forecast, and ERA5 reanalysis for the
          historical record.
      - title: "Runoff"
        token: "gridded runoff"
        text: >-
          A global land-surface model converts that meteorology into gridded
          runoff over every landmass, the water that reaches the ground and starts
          moving.
      - title: "TDX-Hydro river network"
        token: "7.2M reaches"
        figure: network
        text: >-
          Runoff is mapped onto TDX-Hydro, a stream network derived from 12 m
          TanDEM-X elevation data: about 7.2 million river reaches and their
          catchments across 125 vector processing units.
      - title: "Routing"
        token: "matrix Muskingum"
        text: >-
          RAPID, the Routing Application for Parallel computation of Discharge,
          moves water downstream through that network with a matrix Muskingum
          method.
      - title: "Streamflow"
        token: "m³/s, 3-hourly"
        text: >-
          The result is discharge at every reach, gauged or not, reported at a
          consistent 3-hour interval.
      - title: "Retrospective"
        token: "85 years from 1940"
        text: >-
          The same chain run on ERA5 back to 1940 gives an 85-year simulation,
          which establishes each reach's normal range and its return-period
          levels.
      - title: "Forecast"
        token: "15-day ensemble"
        figure: forecast
        text: >-
          The 15-day ensemble is published against those levels, so a reach
          carries both an expected flow and whether that flow is unusual for it.
  - type: valueProps
    eyebrow: GEOGLOWS V2
    anchor: whats-new
    heading: V2 specifications
    intro: "The numbers behind the chain above, as GEOGLOWS V2 runs it today."
    items:
      - title: "~7.2 million river reaches"
        text: >-
          TDX-Hydro maps about 7.2 million reaches and their catchments across 125
          vector processing units, up from roughly 1 million in V1.
      - title: "15-day forecast"
        text: >-
          A 51-member ECMWF ensemble runs out to 15 days, so each reach carries a
          range of outcomes rather than a single number.
      - title: "85-year retrospective"
        text: >-
          The historical simulation starts in 1940 on ERA5 reanalysis, extending
          V1's record that began in 1979.
      - title: "3-hourly outputs"
        text: >-
          Discharge is reported at a consistent 3-hour interval across the
          forecast and the retrospective alike.
      - title: "TDX-Hydro"
        text: >-
          The hydro fabric is derived from the 12 m TanDEM-X DEM, replacing the 90
          m SRTM data behind V1.
      - title: "Routing and model methodology"
        text: >-
          RAPID routes runoff with a matrix Muskingum method, with routing
          calibration improved by a machine-learning regression model.
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
