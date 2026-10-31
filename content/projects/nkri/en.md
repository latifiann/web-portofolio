---
locale: en
title: NKRI
summary: A real-time messaging application for personal and group chat, file sharing, and calling, built during an internship as one of two mobile developers. I worked on message dispatching, reconnection handling, search, and a WebRTC calling prototype.
cardSummary: A real-time messaging application for chat, file sharing, and calling, built during an internship by a six-person cross-role team.
roleSummary: Mobile Developer · Mitra Informatika
seoDescription: NKRI case study covering my mobile contribution as one of two developers, including WebSocket messaging, search, attachments, and a WebRTC calling prototype.
mediaAlt:
  hero: Three phone screens showing the NKRI messaging app, with a chat thread containing a photo attachment, the login screen, and the chat list with unread, group, and favorite filters.
mediaCaption:
  hero: The visual presents the NKRI product, which the company maintains. Screenshots use demo data. This case study covers the real-time communication module I worked on.
outcomeSummary: The company maintains the messaging product. My contribution covered the real-time communication module and an experimental calling prototype during the internship.
highlights:
  - label: Contribution
    value: Real-time communication
    note: Message dispatching, reconnect handling, background service, and activity status.
  - label: Prototype
    value: Voice and video calls
    note: WebRTC signaling prototype, not a shipped calling platform.
  - label: Project status
    value: Maintained by the company
    note: My contribution covered the internship period, January to June 2025.
---

## Overview

NKRI is a real-time communication app for personal and group chat, file sharing, and voice or video calls. I joined it during my internship at Mitra Informatika from January to June 2025, as one of two mobile developers in a six-person cross-role team.

The mobile app is built with Flutter and a shared set of reusable UI components. Riverpod manages state, Isar stores local data, Dio handles HTTP requests, and AutoRoute manages navigation. Real-time traffic moved from Socket.IO to WebSocket during my time there.

I worked on the mobile client. The company maintains the product, keeps the source code private, and owns the back-end services, so this case study covers my mobile contribution only. The screenshots use demo data.

The calling feature stayed a prototype. We built personal voice and video calls on WebRTC with WebSocket signaling, covering the offer and answer exchange, ICE candidates, media streams, call state, and the flow for accepting and ending a call.

## My responsibilities

- Worked on the real-time communication module as one of two mobile developers, from message dispatching through background service integration.
- Migrated real-time traffic from Socket.IO to WebSocket and handled reconnection and user activity status.
- Built the voice and video call prototype with WebRTC signaling, including offer and answer exchange, ICE candidates, media streams, and call state.
- Added message search, message filtering, and chat-room pagination with Riverpod, including debounce and end-of-data handling.
- Contributed to attachment upload and download for images, documents, voice notes, and video, including media preview, group details, member list, room metadata, group photo, and the start of the group creation flow.
