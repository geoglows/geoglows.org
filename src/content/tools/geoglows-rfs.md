---
name: "GEOGLOWS RFS"
tagline: "Visualize real-time and forecasted streamflow for any river on Earth."
category: Forecasting
icon: waves
image: /images/showcase/hydroviewer.webp
appUrl: https://apps.geoglows.org
order: 1
---

The GEOGLOWS River Forecast System (RFS) is a web application providing an intuitive, interactive interface for visualizing hydrological data and forecasts from the Global Streamflow and Flood Forecasting System.

## How it works

Through the RFS, users access real-time and forecasted streamflow information for millions of river reaches worldwide, enabling them to monitor hydrological conditions at local, regional, and global scales. It is a valuable tool for researchers, water resource managers, and policymakers.

## The science behind the forecast

GEOGLOWS forecasting rests on a chain of physically based models. ECMWF's Integrated Forecast System drives a global land-surface model that converts rainfall and snowmelt into gridded runoff, and that runoff is routed through the river network to produce discharge at every reach on Earth, gauged or not.

**Ensemble meteorology.** A 51-member ECMWF ensemble carries forecast uncertainty out to 15 days, so a forecast is a range of possible outcomes rather than a single line.

**Vector routing.** The RAPID model routes runoff downstream with a matrix Muskingum method across roughly 7 million TDX-Hydro reaches, resolving flow on rivers that have never been gauged.

**An 85-year baseline.** An ERA5-forced retrospective from 1940 establishes each river's normal range and return periods, giving every forecast physical context.

**Calibration.** Routing parameters are tuned with a machine-learning regression against observations to sharpen flow estimates worldwide.
