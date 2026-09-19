---
title: Impact | GEOGLOWS
description: What changes for people when forecasts reach them, with stories and results from around the world.
blocks:
  - type: countriesMap
    eyebrow: Countries & projects
    anchor: countries
    heading: Where GEOGLOWS is at work
    intro: "GEOGLOWS is deployed with national hydrological services and regional partners in more than 30 countries, usually through SERVIR hubs and local institutions. A sample of documented deployments:"
    points:
      - { country: Costa Rica, lat: 9.75, lng: -83.75, pos: left }
      - { country: Honduras, lat: 14.97, lng: -86.24, pos: top }
      - { country: Guatemala, lat: 15.5, lng: -90.23, pos: left }
      - { country: El Salvador, lat: 13.79, lng: -88.9, pos: bottom }
      - { country: Dominican Republic, lat: 18.74, lng: -70.16, pos: top }
      - { country: Colombia, lat: 4.1, lng: -73.0, pos: left }
      - { country: Ecuador, lat: -1.83, lng: -78.18, pos: left }
      - { country: Peru, lat: -9.19, lng: -75.02, pos: left }
      - { country: Brazil, lat: -10.0, lng: -52.0, pos: right }
      - { country: Malawi, lat: -13.25, lng: 34.3, pos: bottom }
      - { country: Israel, lat: 31.4, lng: 35.0, pos: left }
      - { country: India, lat: 21.5, lng: 78.96, pos: left }
      - { country: Nepal, lat: 28.39, lng: 84.12, pos: top }
      - { country: Bhutan, lat: 27.51, lng: 90.9, pos: right }
      - { country: Bangladesh, lat: 23.68, lng: 90.36, pos: bottom }
    directoryHeading: Project directory
    directoryIntro: "Select a country on the map or below."
    projects:
      - country: Ecuador
        challenge: >-
          Around 40% of Azuay's 882,000 residents have reliable water access, and
          many rivers carry no observed data, leaving floods unexplained and
          unforecast.
        partners:
          - name: "INAMHI"
            url: https://www.inamhi.gob.ec
          - name: "GAD Azuay"
            url: https://www.azuay.gob.ec
        application: >-
          INAMHI GEOGLOWS Tethys Portal (12 apps) and Hydroviewer Ecuador;
          historical streamflow feeding HEC-RAS designs.
        status: Operational
        result: >-
          INAMHI now issues flood forecasts on timing, magnitude and impact for
          technical, government and public users. An approved irrigation design
          drawn from the historical record will serve around 5,000 people.
        href: "https://stories.geoglows.org/south-america/ecuador"
      - country: Colombia
        challenge: >-
          IDEAM has few or recent stations across large areas, especially the
          Amazon, and no forecasting tools to cover them.
        partners:
          - name: "IDEAM"
            url: https://www.ideam.gov.co
          - name: "NASA SERVIR-Amazonia"
            url: https://alliancebioversityciat.org/projects/servir-amazonia
        application: >-
          Hydroviewer Colombia and the 15-day ensemble forecast, with bias
          correction from the SERVIR-Amazonia project.
        status: Operational
        result: >-
          IDEAM's early-warning office uses the 15-day forecast to produce its daily
          Hydrological Bulletin and to decide whether to hold or lower warning
          levels.
        href: "https://stories.geoglows.org/south-america/colombia"
      - country: Peru
        challenge: >-
          National flood observation needed reliable thresholds on river stretches
          beyond those the local model covered.
        partners:
          - name: "SENAMHI"
            url: https://www.senamhi.gob.pe
        application: >-
          GEOGLOWS combined with SONICS, SENAMHI's ARNO/VIC and RAPID model
          calibrated on 43 hydrometric stations over 1981 to 2020.
        status: Operational
        result: >-
          Flood thresholds are published for 2.33, 5 and 10-year return periods on
          each river stretch, and the forecast drives a decision-making game used in
          training.
        href: "https://stories.geoglows.org/south-america/peru"
      - country: Brazil
        challenge: >-
          CEMADEN needed to extend its disaster-warning capability with flows
          accurate enough for local decisions.
        partners:
          - name: "CEMADEN"
            url: https://www.gov.br/cemaden
        application: >-
          Hydroviewer Brazil, a Historical Validation Tool, and a National Water
          Level Forecast built on bias-corrected GEOGLOWS data.
        status: Operational
        result: >-
          Catchment-level alerts are colour-coded and searchable by station, backed
          by a bias-corrected national water level forecast.
        href: "https://stories.geoglows.org/south-america/brazil"
      - country: Honduras
        challenge: >-
          During Hurricanes Eta and Iota in 2020 the El Cajón Dam reached maximum
          storage, threatening the Sula Valley's agriculture and industry.
        partners:
          - name: "ENEE (national power company)"
            url: https://www.enee.hn
        application: >-
          The 15-day discharge forecast from the GEOGLOWS Streamflow Forecast
          service, used to plan reservoir releases.
        status: Operational
        result: >-
          Controlled releases before Iota and closure of the dam's inflow during the
          storm avoided severe damage, saving over 30% of the economic losses
          recorded for Hurricane Mitch in 1998.
        href: "https://stories.geoglows.org/central-america/honduras"
      - country: Guatemala
        challenge: >-
          Lake Atitlán has been contaminated by sewage and agricultural runoff since
          2009, and algal-bloom prediction software was too costly for the small
          communities that depend on the lake.
        partners:
          - name: "CEPREDENAC"
            url: https://www.cepredenac.org
          - name: "local organizations"
        application: >-
          The GEOGLOWS Python package and Hydroviewer, generating 14-day streamflow
          and inflow volume for the three rivers feeding the lake.
        status: Operational
        result: >-
          A script integrating all three rivers now feeds an algal-bloom algorithm
          local organizations use to target interventions. CEPREDENAC uses the same
          service for hurricane early warning.
        href: "https://stories.geoglows.org/central-america/guatemala"
      - country: El Salvador
        challenge: >-
          The Lempa basin supplies water to over half the population and much of its
          hydropower, yet is exposed to floods, droughts and landslides.
        application: >-
          GEOGLOWS ECMWF streamflow forecasts across the Lempa River basin.
        status: Demonstrated
        result: >-
          The forecast anticipated the rapid flood at Citalá on 16 November 2020,
          later verified against the Citalá hydrometric record, showing the service
          could be folded into routine monitoring.
        href: "https://stories.geoglows.org/central-america/el-salvador"
      - country: Dominican Republic
        challenge: >-
          The country is highly exposed to floods and hurricanes, and installing in-
          situ monitoring nationwide would be costly and impractical.
        partners:
          - name: "INDRHI"
            url: https://www.indrhi.gob.do
          - name: "WMO"
            url: https://wmo.int
          - name: "BYU"
            url: https://www.byu.edu
        application: >-
          INDRHI GEOGLOWS Portal, a Tethys platform of 12 apps, with model output
          refined through GIS analysis of raw station data.
        status: Operational
        result: >-
          Decision-makers have national hydrological coverage without nationwide
          gauging. INDRHI presented the platform and its HydroSOS collaboration at
          the 19th World Meteorological Congress in Geneva in May 2023.
        href: "https://stories.geoglows.org/caribbean/dominican-republic"
      - country: Bangladesh
        challenge: >-
          Upstream flows from the Ganges and Brahmaputra account for 92% of the
          drainage area and drive repeated flooding, but streamflow forecasts were
          unavailable.
        partners:
          - name: "Flood Forecast and Warning Centre (FFWC)"
            url: https://www.ffwc.gov.bd
        application: >-
          A Tethys application reading ECMWF ensemble forecasts through the
          streamflow prediction API at each transboundary river.
        status: Operational
        result: >-
          FFWC issues probabilistic forecasts on the transboundary rivers with a
          15-day lead time.
        href: "https://stories.geoglows.org/east-asia/bangladesh"
      - country: Nepal
        challenge: >-
          DHM had to forecast floods and droughts across the Karnali, Gandaki and
          Koshi basins, all fed by high-mountain glaciers.
        partners:
          - name: "Department of Hydrology and Meteorology (DHM)"
            url: https://www.dhm.gov.np
        application: >-
          A Tethys web application embedding DHM's own national model with real-time
          forecast access by province and district.
        status: Operational
        result: >-
          DHM runs 24/7 flood forecasting and early warning for the public and
          partner agencies through the monsoon, without assembling global datasets
          itself.
        href: "https://stories.geoglows.org/east-asia/nepal"
      - country: Bhutan
        challenge: >-
          Despite modernised hydromet infrastructure, flood prediction was limited
          by a shortage of qualified staff and decision-support tools.
        partners:
          - name: "National Center for Hydrology and Meteorology (NCHM)"
            url: https://www.nchm.gov.bt
        application: >-
          Customised GEOGLOWS web apps giving free access to flood information.
        status: In validation
        result: >-
          NCHM has assessed performance across the major basins and identified
          gauging sites for validation, with river infrastructure, hydropower and
          disaster agencies now sharing data and resources.
        href: "https://stories.geoglows.org/east-asia/bhutan"
      - country: India
        challenge: >-
          Dam-controlled streams and heavy human modification make raw global
          forecasts unreliable without bias correction.
        partners:
          - name: "World Bank National Hydrology Project"
            url: https://www.worldbank.org
          - name: "Aquaveo"
            url: https://aquaveo.com
        application: >-
          The GEOGLOWS ECMWF Streamflow Service, covering data access and forecast
          bias correction.
        status: Capacity building
        result: >-
          Virtual workshops trained agencies and engineers to reproduce the
          Hydrologic Modeling as a Service approach on their own data ahead of the
          monsoon season.
        href: "https://stories.geoglows.org/east-asia/india"
      - country: Malawi
        challenge: >-
          Cyclone Ana in January 2022 affected over 193,000 households and destroyed
          croplands, and flood warning lead time was measured in hours.
        partners:
          - name: "RCMRD (SERVIR-Africa)"
            url: https://www.rcmrd.org
          - name: "UNDP"
            url: https://www.undp.org
          - name: "Malawi Red Cross Society"
            url: https://www.redcross.mw
        application: >-
          A hybrid Community Based Flood Early Warning System combining telemetry
          from 21 rivers with bias-corrected GEOGLOWS-ECMWF forecasts across eight
          flood-prone regions.
        status: Operational
        result: >-
          Warning lead time went from hours to 15 days. During Cyclone Ana the
          forecast correctly predicted peak flows on the Phalombe River, verified by
          water-level sensors the same day, and alerted the Red Cross by SMS and
          email for emergency coordination.
        href: "https://stories.geoglows.org/africa-malawi"
      - country: Israel
        challenge: >-
          Streamflow forecasting tools were scarce, and the available GloFAS and
          EFAS services were limited in scale or accessibility.
        application: >-
          GEOGLOWS ECMWF high-resolution streamflow data behind an early-warning
          system for flooding and inundation in Tel Aviv.
        status: Evaluated
        result: >-
          GEOGLOWS was assessed as accurate and comparable to the tools previously
          in use, and now supplies forecasts and historical data for small rivers,
          including work supporting the West Bank.
        href: "https://stories.geoglows.org/middle-east-israel-palestinegaza"
      - country: Costa Rica
        challenge: >-
          Women working in emergency management and decision-making faced gender
          disparities, limited access to information, and gaps in technology skills.
        partners:
          - name: "BYU Ballard Center"
            url: https://ballard.byu.edu
        application: >-
          GEOGLOWS applications taught alongside the Social Impact Cycle
          methodology.
        status: Pilot
        result: >-
          Fifty women were trained, with pre- and post-training surveys measuring
          the change and a six-month follow-up planned to track what reached their
          communities.
        href: "https://stories.geoglows.org/our-impact/costa-rica-pilot"
  - type: statBand
    eyebrow: Results
    anchor: results
    heading: Impact by the numbers
    intro: "Adoption and reach across the service, from the rivers it covers to the institutions that depend on it every day."
    stats:
      - { value: "30+", label: countries with active deployments }
      - { value: "7.2M", label: river reaches covered }
      - { value: "~100K", label: forecast requests daily }
      - { value: "193", label: WMO member states the chain can reach }
  - type: caseStudies
    eyebrow: Case studies
    anchor: case-studies
    heading: GEOGLOWS in the field
    intro: "Documented deployments where national services and regional partners put GEOGLOWS forecasts to work, at both depths: longer case studies and shorter field stories."
    items:
      - location: Malawi
        kind: Case study
        title: "Community flood early warning on the Shire River"
        text: "GEOGLOWS-ECMWF forecasts were integrated into a Community-Based Flood Early Warning System (CBFEWS) so downstream communities receive actionable warnings before the water arrives."
        source: "SERVIR · GEO"
        href: "https://www.youtube.com/watch?v=Okyf_YIgVWc"
      - location: Nepal · Hindu Kush Himalaya
        kind: Case study
        title: "Combining ground and satellite data to forecast floods"
        text: "SERVIR-HKH and ICIMOD paired GEOGLOWS forecasts with ground and satellite observations to deliver flood forecasts up to ten days ahead across the region."
        source: "SERVIR-HKH · ICIMOD"
        href: "https://servir.icimod.org/news/combining-ground-and-satellite-data-to-forecast-flood-in-nepal/"
      - location: Central America
        kind: Case study
        title: "A shared platform for seven national services"
        text: "National hydrological and meteorological services across Central America use daily GEOGLOWS forecasts and the historical simulation through the regional CRRH-SICA platform."
        source: "CRRH-SICA"
        href: "https://www.youtube.com/watch?v=5wasYThy54g"
      - location: Peru
        kind: Case study
        title: "A national streamflow platform at SENAMHI"
        text: "Peru's national service SENAMHI runs a GEOGLOWS-based streamflow platform to support water-resource and drought monitoring in Andean basins."
        source: "SENAMHI"
        href: "https://www.youtube.com/watch?v=A9s7rWH2u5I"
      - location: Amazon Basin
        kind: Case study
        title: "Bringing streamflow forecasting to the Amazon"
        text: "SERVIR-Amazonia customized the GEOGLOWS service with regional partners to extend streamflow forecasting across the Amazon basin."
        source: "SERVIR-Amazonia"
        href: "https://www.youtube.com/watch?v=Q3RPtxfSj1k"
      - location: Honduras
        kind: Case study
        title: "Forecasts for reservoir and hydropower operations"
        text: "Honduras's national electricity utility ENEE applied GEOGLOWS forecasts to inform reservoir and hydropower decisions."
        source: "ENEE"
        href: "https://www.youtube.com/watch?v=l3Gjy2ZAV8E"
      - location: Bangladesh
        kind: Field story
        title: "Anticipating monsoon floods days ahead on the Brahmaputra"
        image: /images/story-brahmaputra.webp
        href: "/community#news"
      - location: Colombia
        kind: Field story
        title: "Bias-corrected forecasts guide the Magdalena basin"
        image: /images/story-magdalena.webp
        href: "/community#news"
      - location: East Africa
        kind: Field story
        title: "Training national hydrological services on ensemble forecasts"
        image: /images/story-training.webp
        href: "/community#news"
      - location: Peru
        kind: Field story
        title: "Drought monitoring for Andean water supply planning"
        image: /images/story-andes.webp
        href: "/community#news"
    cta: { label: See more from the community, href: /community#news }
  - type: closingCta
    heading: Put GEOGLOWS to work in your region
    ctas:
      - { label: Get involved, href: /community#involved, style: blue }
      - { label: Explore the tools, href: /tools, style: navy }
---
