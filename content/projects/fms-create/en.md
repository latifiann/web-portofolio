---
locale: en
title: FMS-CREATE
summary: A passenger-side Flutter application for electric-vehicle fleet operations, built individually inside a cross-platform FMS ecosystem as a modular monolith, along with the operator prototype variant.
cardSummary: A passenger-side Flutter application for electric-vehicle fleet operations, built with modular architecture, REST APIs, SSE, and Google Maps.
roleSummary: Mobile Developer · Final academic project
seoDescription: FMS-CREATE case study covering the passenger Flutter app and operator prototype I built inside a cross-platform electric-vehicle fleet ecosystem.
mediaAlt:
  hero: FMS-CREATE passenger mobile screens beside a fleet dashboard interface from the wider team ecosystem.
mediaCaption:
  hero: The visual presents the broader FMS-CREATE ecosystem. The dashboard interface belongs to the team's fleet operations context. This case study focuses on the mobile variants I built.
outcomeSummary: The passenger app and the operator prototype were completed as the final academic project, with manual and automated checks for app behaviour and architecture rules. Both Android builds stay internal.
highlights:
  - label: Contribution
    value: Passenger app and operator prototype
    note: Built both mobile variants within the team's FMS ecosystem.
  - label: Architecture
    value: Modular monolith
    note: Variants are assembled from modules before the APK build, not installed at runtime.
  - label: Project status
    value: Completed, internal builds
    note: The operator variant remains a prototype. Neither variant has an app-store release.
---

## Overview

FMS-CREATE is a fleet management system for electric bus operations. Passengers use the mobile app to see routes, stops, estimated arrivals, and the live position of a bus. A second variant serves fleet operators.

The app was my final project for the applied informatics degree. I built the passenger-side application and the whole operator prototype individually, inside a wider ecosystem handled by a cross-platform team. The mobile codebase is a modular monolith, built so that its modules can be orchestrated into different application variants. Each variant is assembled by choosing a set of modules before the APK build. Module selection happens at build time, not dynamically while the app runs.

A teammate built Nusantara EV Connect, the orchestration app that offers the module picker and automates the APK build. I did not build that orchestration tool. The repository is private and both Android builds stay internal, so the project has no store listing and no public demo.

## My responsibilities

- Built the passenger mobile app on a modular monolith with one runner, five feature modules, and four core modules.
- Built the whole operator variant as a prototype on the same modular foundation.
- Assembled each variant on the modular monolith through module registration at build time and at initialization, without runtime module installation.
- Implemented OTP authentication, session recovery, a mobile dashboard, and vehicle tracking with Google Maps.
- Integrated REST APIs for initial data loading and Server-Sent Events for live location updates.
- Handled stream lifecycle, exponential backoff, secure storage, and network-aware connection recovery.
- Developed shared infrastructure and reusable UI components with Riverpod, GoRouter, and Dio.
- Ran manual and automated testing for app behaviour and architecture-rule compliance.
