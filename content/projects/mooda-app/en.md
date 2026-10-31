---
locale: en
title: Mooda App
summary: A Flutter ride-hailing app for passengers, built during an internship as the team's only mobile developer. I built the app's authentication, booking, live trip status, ratings, and history flows against the team's backend.
cardSummary: A Flutter ride-hailing prototype for passengers, built during an internship as the team's only mobile developer.
roleSummary: Mobile Developer · PT Piramida Teknologi Informasi
seoDescription: Mooda App case study covering my work as the only mobile developer on a ride-hailing prototype, including Flutter features and live trip tracking.
mediaAlt:
  hero: Three phone screens showing the Mooda App, with a map and a Request a Ride button, the splash screen, and a ride request form with pickup, drop-off, vehicle type, and payment options.
mediaCaption:
  hero: The visual presents the passenger app I built during the internship. Screenshots use demo data. The team's backend and web frontend are not shown.
outcomeSummary: The team delivered a working ride-hailing prototype for passengers and drivers. It was not published to an app store, and the source code remains with the company.
highlights:
  - label: Contribution
    value: Passenger app end to end
    note: Authentication, booking and cancellation, live trip status, ratings, profile, and history.
  - label: Integration
    value: REST API and Socket.IO
    note: Dio for backend requests and Socket.IO for real-time trip updates.
  - label: Project status
    value: Prototype, not released
    note: Internal ride-hailing prototype without app-store publication.
---

## Overview

Mooda App is a ride-hailing app for ordering trips, developed during my internship at PT Piramida Teknologi Informasi from July to December 2025. The team of four worked in a hybrid Agile-Waterfall process: two back-end developers, one web front-end developer, and me as the only mobile developer.

I built the mobile app for passengers. The back-end API and the web front end were built by teammates, so this case study covers the mobile side only. The company owns the source code, so no repository link is published. The screenshots use demo data.

The app runs on a feature-based layered architecture. Riverpod manages state, GoRouter handles authentication-based navigation, Hive keeps the local session, and Dio connects the app to the team's REST API. Trip updates arrive through Socket.IO, and Google Maps handles geolocation, reverse geocoding, location selection, and driver location updates.

## My responsibilities

- Built the passenger mobile app with Flutter as the team's only mobile developer, from interface to backend integration.
- Implemented authentication, booking and cancellation, real-time trip status, rating, profile, driver status, and trip history.
- Connected the app to the team's back-end through REST APIs with Dio and received trip updates through Socket.IO.
- Integrated Google Maps for geolocation, reverse geocoding, location selection, and driver location tracking.
- Managed state with Riverpod, navigation with GoRouter, and the local session with Hive inside a feature-based layered architecture.
- Designed the interface in Figma and tested the passenger and driver flows manually on Android.
