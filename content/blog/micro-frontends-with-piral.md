---
title: "When Micro-Frontends Actually Make Sense (Lessons from Piral)"
date: "2026-03-02"
updated: "2026-10-20"
excerpt: "Micro-frontends solve an organizational problem, not a technical one. What I learned working as a React developer on Co4, an energy-management portal built on Piral."
tags: ["Micro-frontend", "Piral", "React", "Architecture"]
published: true
---

Micro-frontends are trendy, and mostly misapplied. Before splitting a frontend into independently deployable pieces, it's worth being honest about *why*. Here's what I took away from working as a React developer on Co4, an energy-management portal built on [Piral](https://piral.io).

## The problem they actually solve

Micro-frontends are an **organizational** solution, not a technical one. They make sense when:

- Multiple teams need to ship features **independently**, without a shared release train.
- Different parts of the app have **different release cadences**.
- You want to isolate the blast radius of a risky feature.

If you're a solo developer or a single small team, a well-structured monolith is almost always the better call. The coordination overhead of micro-frontends only pays off when coordination is your bottleneck.

## How Piral frames it

Piral splits the app into a **shell** (the app instance) and **pilets** (feature modules loaded at runtime). The shell owns shared concerns; pilets plug in.

```ts
// A pilet registers itself with the shell
export function setup(app: PiletApi) {
  app.registerPage("/reports", Reports);
  app.registerMenu(() => <a href="/reports">Reports</a>);
}
```

The win: a team ships `Reports` without touching - or redeploying - the shell or any other pilet.

## Share the hard things, isolate the rest

The failure mode is pilets each shipping their own copy of React, their own auth logic, their own design tokens. Keep these in the shell:

- **Framework runtime** (React) - shared as a peer dependency.
- **Authentication & session** - one source of truth, exposed to pilets via the shell API.
- **Design system** - shared components so the app looks like one product, not five.

Everything domain-specific stays inside the pilet.

## The costs to budget for

- **Runtime integration bugs** that a monolith's type system would catch at build time.
- **Version drift** between shared dependencies.
- **Harder end-to-end testing** across independently deployed pieces.

None are dealbreakers, but they're real, and they're the price of independent deployment.

## Takeaways

- Reach for micro-frontends to solve a **team-scaling** problem, not for novelty.
- Share the framework, auth, and design system in the shell; isolate domain logic in pilets.
- Budget for the integration and testing costs up front.

Used for the right reason, a Piral architecture lets multiple workflows proceed in parallel without stepping on each other. Used for the wrong reason, it's just a distributed monolith with extra steps.
