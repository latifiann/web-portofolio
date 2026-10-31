---
locale: en
title: Semina
summary: A website project for purchasing event tickets, developed from BuildWithAngga MERN course material. My contribution covers the React event-management CMS and backend ticket checkout API. Checkout through the participant web interface is not integrated.
cardSummary: An event-ticket purchasing website learning project from BuildWithAngga MERN material, with a React CMS and checkout API. Participant web checkout is not integrated.
roleSummary: Full-Stack Developer · Personal project
seoDescription: Semina, an event-ticket website project from BuildWithAngga MERN material. React CMS and API work. Participant web checkout is not integrated.
mediaAlt:
  hero: Dark event-platform landing page promoting technology events with a green Browse Now button.
mediaCaption:
  hero: The visual represents the event-platform context from authorized learning material. It is not a screenshot of the CMS I built. This case study focuses on my React CMS and backend API work.
outcomeSummary: The CMS and API were implemented and reviewed in source code. Frontend build, browser testing, endpoint behaviour, email delivery, transactions, and concurrency were not verified in that review, and there is no public deployment.
highlights:
  - label: Contribution
    value: Event CMS and checkout API
    note: React CMS with backend event and order workflows.
  - label: Implementation
    value: CMS workflows and transactions
    note: Dynamic event forms and server-side checkout validation.
  - label: Project context
    value: Independent learning project
    note: Extends BuildWithAngga course material.
---

## Overview

Semina is a website project for purchasing event tickets. It includes a React CMS for managing categories, speakers, payment methods, events, and the order list, plus a backend API for participant authentication, order history, and ticket checkout.

It is an independent learning project built from the BuildWithAngga Full Stack Developer — MERN Website Event course. The course supplied the starting scope, and I extended it into the workflows described here.

The participant-facing interface is still a static HTML template, so participant registration and checkout through a web interface are not integrated. There is no verified public deployment, and the backend repository is the only public code destination.

## My responsibilities

- Built the React CMS for categories, speakers, payment methods, and events with React Bootstrap, Redux, and Redux Thunk.
- Added search with debounce, category and speaker filters, and image upload to the CMS lists.
- Built the event form with dynamic key points and ticket categories, pricing, stock, active status, and Draft or Published state.
- Integrated session persistence, role-based route guards, JWT authentication, and HTTP 401 handling on the frontend.
- Implemented separate CMS and participant tokens, bcrypt password hashing, role-based authorization for owner, organizer, and admin, and organizer-scoped data access on the backend.
- Built checkout with MongoDB transactions that validate the event, payment method, ticket status, quantity, and stock, with prices and totals calculated on the server.
- Added the CMS order list with pagination and date-range filtering.
- Integrated OTP activation and checkout confirmation email through Nodemailer and Mustache, plus JPEG and PNG upload up to 3 MB through Multer and centralized error handling.
