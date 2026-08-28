---
title: Tools & Data | GEOGLOWS
description: The GEOGLOWS apps, open data services, and resources, all in one place.
blocks:
  - type: richText
    eyebrow: Tools & data
    anchor: getting-started
    heading: Everything you need to work with GEOGLOWS data
    body: >-
      A connected suite of open applications and data services for exploring,
      analyzing, and downloading global streamflow forecasts and the 85-year
      retrospective. Start in the GEOGLOWS RFS, dig into the groundwater and
      analysis tools, or pull data directly through the web layers, the public
      API, and the open-source packages, whatever your work with water requires.
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
        title: Web layers
        text: "Add GEOGLOWS streamflow forecasts as ready-to-use web map layers through Esri's ArcGIS Living Atlas, no code required."
        links:
          - { label: Esri Living Atlas, href: "https://livingatlas.arcgis.com" }
      - icon: globe
        title: REST API
        text: "Query the forecasts and the full retrospective on demand through the public REST API and data query service, no download required."
        links:
          - { label: Data Guide & API, href: "https://data.geoglows.org" }
      - icon: code
        title: Packages
        text: "Work with GEOGLOWS data directly in your own code using the official open-source packages for Python and JavaScript."
        links:
          - { label: Python (PyPI), href: "https://pypi.org/project/geoglows/" }
          - { label: JavaScript (npm), href: "https://www.npmjs.com/package/geoglows" }
      - icon: database
        title: Cloud storage (S3)
        text: "Pull the complete forecast and retrospective archives straight from the open AWS S3 buckets (geoglows-v2 and geoglows-v2-forecast) in Zarr format, no credentials required. Best for large-scale or offline analysis."
        links:
          - { label: Bulk download guide, href: "https://training.geoglows.org/rfs/accessing-data/bulk-download/" }
          - { label: AWS Open Data, href: "https://registry.opendata.aws/geoglows-v2/" }
  - type: resourceTabs
    eyebrow: Resources
    anchor: resources
    heading: Learn, cite, and go deeper
    intro: "Documentation, research, and training for every level. Scientific and technical papers are filed under Publications, impact reports and case studies live on the Impact page, and annual and organizational reports on the About page."
    tabs:
      - { label: Publications, href: /publications, description: "Peer-reviewed research and technical papers using GEOGLOWS." }
      - { label: Videos, href: /videos, description: "Walkthroughs and demos of the GEOGLOWS RFS, data services, and apps." }
      - { label: Webinars, href: "/videos#webinars", description: "The RFS v2 webinar series, from model formulation to the RFS." }
      - { label: Tutorials, href: "https://training.geoglows.org", description: "In-depth, multilingual courses on the Training Portal." }
  - type: closingCta
    heading: Start building with open water data
    ctas:
      - { label: Open GEOGLOWS RFS, href: https://apps.geoglows.org, style: amber }
      - { label: Read the publications, href: /publications, style: navy }
---
