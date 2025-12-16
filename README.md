# **Crypto Checkout – Frontend Take-Home Assessment**

This project is a frontend implementation of a **crypto checkout experience**, inspired by products like Stripe Checkout, built as part of a take-home assessment.

The goal of the exercise was to convert selected Figma designs into **clean, responsive, production-ready UI** using React / Next.js, with a focus on component structure, state handling, and UI accuracy.

## **What’s Implemented**

---

I selected **two core screens** from the Figma design that best demonstrate UI composition and interaction flow:

1.  **Crypto to Cash Checkout**

    - Currency selection
    - Wallet selection
    - Amount input
    - Primary call-to-action
    - Tab-based navigation

2.  **Processing / Success State**

    - Transaction feedback
    - Copy-to-clipboard interaction
    - User flow continuation

Other tabs (“Cash to Crypto”, “Crypto to Fiat Loan”) are implemented as **Coming Soon** states to reflect realistic product staging.

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React + TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **Next/Image** for optimized SVG rendering

## 🧩 Component Structure

The UI is broken down into reusable, focused components:

- CurrencyDropdown
- WalletSelector
- Page-level layout components (CryptoToCashPage, ComingSoonPage, ProcessingPage)
- Centralized constants for currencies and wallets

This keeps state localized, avoids prop-drilling, and mirrors how a real checkout SDK might be structured for embeddability.

## State Handling

- Local component state via useState
- Controlled form inputs
- Page flow managed through a simple page state enum
- Logical button enable/disable rules (e.g. cannot proceed without required selections)

No global state or external libraries were used to avoid over-engineering.

## Responsiveness & Accessibility

- Fully responsive layout (desktop + mobile)
- Touch-friendly controls
- Semantic HTML where appropriate
- Accessible buttons and inputs
- Visual focus and hover states aligned with design intent

## Design Fidelity

The UI closely follows the provided Figma design in terms of:

- Spacing
- Typography
- Color usage
- Component sizing
- Interaction behavior

Some spacing and interaction decisions were adjusted slightly to improve real-world usability without deviating from the design language.

## Assumptions & Trade-offs

- No real payment processing or blockchain logic is implemented
- Exchange rates and wallet data are mocked
- Validation is minimal and focused on UX clarity
- Emphasis was placed on **clarity and maintainability** over pixel-perfect micro-details

## Getting Started

### 1\. Clone the repository

```bash
   git clone   cd crypto-checkout
```

### 2\. Install dependencies

```bash
   npm install
```

### 3\. Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Demo

- **Live Demo:** _\[Vercel / Netlify link here\]_
- **Video Demo (optional):** _\[Loom / Jam.dev link here\]_

## Time Spent

Approx. **5 hours**, including:

- Design review
- Component planning
- UI implementation
- Interaction handling
- Cleanup and polish

## Final Notes

This implementation focuses on:

- Clean, readable code
- Logical component boundaries
- Realistic product behavior
- Readiness for future backend integration

The goal was not to overbuild, but to demonstrate how I approach frontend problems in a real production setting.
