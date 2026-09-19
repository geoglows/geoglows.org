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
    directoryHeading: Projects
    directoryIntro: "Select a country on the map or below."
    projects:
      - country: Ecuador
        challenge: >-
          Only about 40% of Azuay's 882,000 residents have reliable water access,
          and many rivers carry no observed data.
        partners:
          - name: "INAMHI"
            url: https://www.inamhi.gob.ec
          - name: "GAD Azuay"
            url: https://www.azuay.gob.ec
        application: >-
          The INAMHI GEOGLOWS Tethys Portal, 12 apps, plus historical streamflow
          feeding HEC-RAS designs.
        status: Operational
        result: >-
          INAMHI now forecasts flood timing, magnitude and impact. An irrigation
          design drawn from the record will serve about 5,000 people.
        href: "https://stories.geoglows.org/south-america/ecuador"
      - country: Colombia
        challenge: >-
          IDEAM has few stations across large areas, especially the Amazon, and no
          forecasting tools to cover them.
        partners:
          - name: "IDEAM"
            url: https://www.ideam.gov.co
          - name: "NASA SERVIR-Amazonia"
            url: https://alliancebioversityciat.org/projects/servir-amazonia
        application: >-
          Hydroviewer Colombia and the 15-day ensemble forecast, bias-corrected by
          SERVIR-Amazonia.
        status: Operational
        result: >-
          The 15-day forecast drives IDEAM's daily Hydrological Bulletin and its
          decisions on warning levels.
        href: "https://stories.geoglows.org/south-america/colombia"
      - country: Peru
        challenge: >-
          National flood observation needed reliable thresholds on river stretches
          the local model did not cover.
        partners:
          - name: "SENAMHI"
            url: https://www.senamhi.gob.pe
        application: >-
          GEOGLOWS combined with SONICS, SENAMHI's ARNO/VIC and RAPID model
          calibrated on 43 stations over 1981 to 2020.
        status: Operational
        result: >-
          Flood thresholds are published for 2.33, 5 and 10-year return periods on
          every river stretch.
        href: "https://stories.geoglows.org/south-america/peru"
      - country: Brazil
        challenge: >-
          CEMADEN needed to extend disaster warning with flows accurate enough for
          local decisions.
        partners:
          - name: "CEMADEN"
            url: https://www.gov.br/cemaden
        application: >-
          Hydroviewer Brazil, a Historical Validation Tool and a National Water
          Level Forecast on bias-corrected data.
        status: Operational
        result: >-
          Catchment alerts are colour-coded and searchable by station, backed by a
          bias-corrected national forecast.
        href: "https://stories.geoglows.org/south-america/brazil"
      - country: Honduras
        challenge: >-
          During Hurricanes Eta and Iota in 2020 the El Cajón Dam hit maximum
          storage, threatening the Sula Valley.
        partners:
          - name: "ENEE (national power company)"
            url: https://www.enee.hn
        application: >-
          The 15-day discharge forecast, used to plan reservoir releases.
        status: Operational
        result: >-
          Controlled releases and a closed inflow avoided severe damage, saving over
          30% of the losses recorded for Hurricane Mitch in 1998.
        href: "https://stories.geoglows.org/central-america/honduras"
      - country: Guatemala
        challenge: >-
          Lake Atitlán has been contaminated since 2009, and algal-bloom software
          was too costly for the communities that depend on it.
        partners:
          - name: "CEPREDENAC"
            url: https://www.cepredenac.org
          - name: "local organizations"
        application: >-
          The GEOGLOWS Python package and Hydroviewer, giving 14-day streamflow and
          inflow volume for the lake's three rivers.
        status: Operational
        result: >-
          A script across all three rivers feeds an algal-bloom algorithm.
          CEPREDENAC uses the same service for hurricane warning.
        href: "https://stories.geoglows.org/central-america/guatemala"
      - country: El Salvador
        challenge: >-
          The Lempa basin supplies water to over half the population and much of its
          hydropower, yet floods, droughts and landslides.
        application: >-
          GEOGLOWS ECMWF streamflow forecasts across the Lempa River basin.
        status: Demonstrated
        result: >-
          The forecast anticipated the rapid flood at Citalá on 16 November 2020,
          later verified against the station record.
        href: "https://stories.geoglows.org/central-america/el-salvador"
      - country: Dominican Republic
        challenge: >-
          The country is highly exposed to floods and hurricanes, and nationwide in-
          situ monitoring would be costly and impractical.
        partners:
          - name: "INDRHI"
            url: https://www.indrhi.gob.do
          - name: "WMO"
            url: https://wmo.int
          - name: "BYU"
            url: https://www.byu.edu
        application: >-
          The INDRHI GEOGLOWS Portal, a Tethys platform of 12 apps, refined through
          GIS analysis of station data.
        status: Operational
        result: >-
          National hydrological coverage without nationwide gauging. INDRHI
          presented it at the 19th World Meteorological Congress in 2023.
        href: "https://stories.geoglows.org/caribbean/dominican-republic"
      - country: Bangladesh
        challenge: >-
          Upstream flows from the Ganges and Brahmaputra are 92% of the drainage
          area and drive repeated flooding.
        partners:
          - name: "Flood Forecast and Warning Centre (FFWC)"
            url: https://www.ffwc.gov.bd
        application: >-
          A Tethys application reading ECMWF ensemble forecasts through the
          prediction API at each transboundary river.
        status: Operational
        result: >-
          FFWC issues probabilistic forecasts on the transboundary rivers with 15
          days of lead time.
        href: "https://stories.geoglows.org/east-asia/bangladesh"
      - country: Nepal
        challenge: >-
          DHM had to forecast floods and droughts across the Karnali, Gandaki and
          Koshi basins, all glacier-fed.
        partners:
          - name: "Department of Hydrology and Meteorology (DHM)"
            url: https://www.dhm.gov.np
        application: >-
          A Tethys application embedding DHM's own national model, with forecasts by
          province and district.
        status: Operational
        result: >-
          DHM runs 24/7 flood forecasting through the monsoon without assembling
          global datasets itself.
        href: "https://stories.geoglows.org/east-asia/nepal"
      - country: Bhutan
        challenge: >-
          Modernised infrastructure was not enough: flood prediction lacked
          qualified staff and decision-support tools.
        partners:
          - name: "National Center for Hydrology and Meteorology (NCHM)"
            url: https://www.nchm.gov.bt
        application: >-
          Customised GEOGLOWS web apps giving free access to flood information.
        status: In validation
        result: >-
          NCHM has assessed the major basins and identified gauging sites, with
          hydropower and disaster agencies now sharing data.
        href: "https://stories.geoglows.org/east-asia/bhutan"
      - country: India
        challenge: >-
          Dam-controlled streams and heavy modification make raw global forecasts
          unreliable without bias correction.
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
          Virtual workshops trained agencies and engineers to reproduce the approach
          on their own data before the monsoon.
        href: "https://stories.geoglows.org/east-asia/india"
      - country: Malawi
        challenge: >-
          Cyclone Ana in January 2022 hit over 193,000 households, and flood warning
          lead time was measured in hours.
        partners:
          - name: "RCMRD (SERVIR-Africa)"
            url: https://www.rcmrd.org
          - name: "UNDP"
            url: https://www.undp.org
          - name: "Malawi Red Cross Society"
            url: https://www.redcross.mw
        application: >-
          A hybrid early-warning system combining telemetry from 21 rivers with
          bias-corrected forecasts across eight regions.
        status: Operational
        result: >-
          Lead time went from hours to 15 days. During Cyclone Ana it predicted the
          Phalombe peak, verified same-day, alerting the Red Cross.
        href: "https://stories.geoglows.org/africa-malawi"
      - country: Israel
        challenge: >-
          Streamflow forecasting tools were scarce, and GloFAS and EFAS were limited
          in scale or accessibility.
        application: >-
          High-resolution streamflow data behind an early-warning system for
          flooding in Tel Aviv.
        status: Evaluated
        result: >-
          Assessed as accurate against the tools already in use, and now supplying
          forecasts and history for small rivers.
        href: "https://stories.geoglows.org/middle-east-israel-palestinegaza"
      - country: Costa Rica
        challenge: >-
          Women in emergency management faced gender disparities, limited access to
          information and gaps in technology skills.
        partners:
          - name: "BYU Ballard Center"
            url: https://ballard.byu.edu
        application: >-
          GEOGLOWS applications taught alongside the Social Impact Cycle
          methodology.
        status: Pilot
        result: >-
          Fifty women trained, with pre- and post-training surveys measuring the
          change and a six-month follow-up planned.
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
