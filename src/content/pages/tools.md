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
    eyebrow: Resources
    anchor: resources
    heading: Learn, cite, and go deeper
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
