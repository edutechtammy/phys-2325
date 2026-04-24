# PHYS-2325 University Physics I Lecture
**Texas State Technical College (TSTC)**
**Term:** Fall 2026
**Branch:** 2026_FA_Branch

---

## Course Overview

| Field | Details |
|---|---|
| **Course Number** | PHYS-2325 |
| **Course Name** | University Physics I Lecture |
| **Institution** | Texas State Technical College (TSTC) |
| **Delivery** | Lecture (Canvas LMS) |
| **Approach** | Calculus-based |
| **Term** | Fall 2026 |

**Official Catalog Description:**
> "This course deals with learning fundamental principles of physics: Motion in one dimension, classical mechanics, energy, linear momentum, elasticity, fluids, harmonic motion, and thermodynamics."

**Working Description (for AI-assisted content development):**
> PHYS-2325 is a **calculus-based** introductory physics course. All problem-solving, derivations, and theoretical explanations must use **calculus methods** — derivatives, integrals, and differential equations — rather than algebra-only approaches. Kinematic equations are derived from integration, rates of change are expressed as derivatives, and accumulation problems are solved using definite integrals. This course is intended for students with concurrent or prior calculus enrollment.

> ⚠️ **AI Content Note:** Always default to calculus-based reasoning. Use algebraic simplifications only when explicitly requested or when a result has already been derived via calculus.

---

## Textbook

**Current Textbook (Fall 2026 and forward):**
OpenStax, *University Physics Volume 1* — free OER, no cost to students
🔗 https://openstax.org/details/books/university-physics-volume-1

- All reading assignments in lesson HTML link directly to the relevant OpenStax section URLs
- OpenStax section numbers and titles are used when referencing readings in lesson content
- This replaces the previous paid textbook (Cutnell & Johnson, *Physics* 12th Ed., Wiley Plus)

> ⚠️ **AI Content Note:** All reading references, examples, and problem context must draw from *University Physics Volume 1* (OpenStax). Do not reference Cutnell & Johnson, Wiley Plus, or any paywalled resource.

---

## CME Reference Documents

These documents are maintained by the Content Matter Expert (CME) and contain authoritative course structure information. Always consult these before building new lessons.

| Document | Link | Notes |
|---|---|---|
| **PHYS 2325 OER Changes Needed** | [Google Doc](https://docs.google.com/document/d/1YgKYnYhHrHsrR09PMAOe_P9KJ5hbnuJavvvL0__RSgw/edit?tab=t.0) | Module outlines, reading assignments, media lists, and practice problem guidance for all modules |
| **PHYS 2325/2326 OER Conversion Timeline** | [Google Doc](https://docs.google.com/document/d/1d9ldf9fQpQ2eUpDCqXBv4FcIf-RHulrg54KCJqVC8G4/edit?tab=t.0#heading=h.79axoyw2hulz) | Project timeline for OER conversion across PHYS 2325 and PHYS 2326 |
| **PHYS 2325 Course Outline** | [Google Sheet](https://docs.google.com/spreadsheets/d/12auLMiELYRWIKj5wQxxf3si6U2aRzDe_sMfgQ-R9nlA/edit?gid=1741891085#gid=1741891085) | Official course outline spreadsheet — modules, competencies, and lesson structure |

> ⚠️ **AI Content Note:** Before building any lesson, check the *PHYS 2325 OER Changes Needed* document for the authoritative reading list, media list, and practice problem outline for that lesson. The user will paste the relevant section into the chat as the content outline.

---

## Course Modules

| Module | Title | CC | Lessons |
|---|---|---|---|
| Module 1 | Measurement and Motion in 1D | CC1.1 | M1L1 Measurement · M1L2 Instantaneous Velocity and Speed · M1L3 Acceleration · M1L4 Constant Acceleration · M1L5 Free Fall · M1L6 Graphical Integration in Motion Analysis |
| Module 2 | Force and Motion | CC2.1 | M2L1 Vectors · M2L2 2D and 3D Motion ⚠️ · M2L3 Force |
| Module 3 | Energy and Work | CC3.1 | M3L1 Work and Kinetic Energy · M3L2 Potential Energy and Conservation of Energy |
| Module 4 | Center of Mass and Linear Momentum ⚠️ | CC4.1 | M4L1 Impulse, Conservation of Momentum, and Center of Gravity |
| Module 5 | Equilibrium and Elasticity | CC5.1 | M5L1 Rotational Motion · M5L2 Translational and Rotational Forces Together · M5L3 Equilibrium |
| Module 6 | Fluids | CC6.1 | M6L1 Fluids |
| Module 7 | Oscillations and Waves | CC7.1 | M7L1 Simple Harmonic Motion · M7L2 Waves · M7L3 Sound Waves |
| Module 8 | Temperature, Heat, and Thermodynamics | CC8.1 | M8L1 Temperature · M8L2 Entropy ⚠️ |

⚠️ = pending structural review — see [`00_Master_Templates/course-competencies-los.md`](00_Master_Templates/course-competencies-los.md) for details.

Full CC and LO details: [`00_Master_Templates/course-competencies-los.md`](00_Master_Templates/course-competencies-los.md)

---

## Project Structure

```
2026_FA_Branch/
├── README.md                        ← You are here
├── 00_Master_Templates/             ← Templates, standards, and reference docs
│   ├── course-competencies-los.md   ← All CCs and LOs by module
│   ├── lesson-templates/            ← HTML lesson template with placeholders
│   ├── cidilabs-components/         ← CidiLabs/DesignPLUS component examples
│   ├── layout-patterns/             ← Reusable HTML layout snippets
│   ├── problem-types/               ← Calculation, concept, and progressive problem templates
│   ├── quality-standards/           ← Canvas accessibility requirements and QA guides
│   └── workflow-separation/         ← Content planning vs. technical implementation guides
├── module1/                         ← Lesson source files for Module 1
│   └── m[N]l[N]-[topic-kebab-case]/
│       └── new-lesson-output/       ← Final HTML lesson file (ready for Canvas)
├── css/
│   ├── canvas-complete.css          ← Primary course stylesheet
│   └── cidilabs-activities.css      ← CidiLabs interactive activity styles
├── js/
│   ├── canvas-complete.js           ← Primary course JavaScript
│   └── cidilabs-scripts.js          ← CidiLabs interactive activity scripts
├── files/
│   └── 00-image-script/
│       ├── canvas-image-mapper.js   ← Maps local image references to Canvas file URLs
│       └── canvas-file-mapping.json ← Image URL mapping data
└── VIDEOS/                          ← Video assets organized by module and lesson
    └── M[N]/L[N]/
```

---

## Technology Stack

| Component | Details |
|---|---|
| **LMS** | Canvas (tstc.instructure.com) |
| **Canvas Build Course** | [PHYS-2325-SBX-P](https://tstc.instructure.com/courses/47588/modules) — active sandbox where lesson HTML is being built and tested |
| **CSS Framework** | Bootstrap 5.3.2 (CDN) |
| **Icon Library** | Font Awesome 6.0.0 (CDN) |
| **Fonts** | Google Fonts — Lato (CDN) |
| **Interactive Components** | CidiLabs DesignPLUS |
| **Primary Stylesheet** | `css/canvas-complete.css` |
| **Primary Script** | `js/canvas-complete.js` |

---

## Lesson File Structure

Each lesson lives in:
```
module[N]/m[N]l[N]-[topic-kebab-case]/new-lesson-output/m[N]l[N]-[topic-kebab-case].html
```

All lesson HTML files follow the same section pattern:

1. **Header** — Course name, lesson title
2. **Introduction** — Motivational quote, lead paragraph, lesson image
3. **Learning Objectives** — Accordion with starred (★) LOs addressed on that page
4. **Required Reading** — OpenStax button links
5. **Optional Reading** — Supplemental resource callout
6. **Media** — Vertical-tab video panels
7. **Practice and Apply – Conceptual** — Order activity + Sort activity + Flip cards
8. **Practice and Apply – Computational** — Worked practice problems with accordion solutions
9. **Lesson Checklist** — Self-check before moving on

The master template with placeholders is at:
[`00_Master_Templates/lesson-templates/lesson-explore-template.html`](00_Master_Templates/lesson-templates/lesson-explore-template.html)

---

## Canvas Copy/Paste Workflow

Lesson HTML files are developed locally and pasted into the Canvas rich content editor.
The copy/paste region is clearly marked in every file:

```html
<!-- ============================================= -->
<!-- COPY/PASTE TO CANVAS ENVIRONMENT BEGINS HERE -->
<!-- ============================================= -->

    ... lesson content ...

<!-- =========================================== -->
<!-- COPY/PASTE TO CANVAS ENVIRONMENT ENDS HERE -->
<!-- =========================================== -->
```

Only the content between these markers is pasted into Canvas. Everything outside (head, scripts, back button) supports local development and preview only.

---

## CSS/JS Path Convention

Lesson files are located **three folders deep** from the workspace root:
```
Module[N]/M[N]L[N] [Topic]/new-lesson-output/lesson.html
```

All local asset references use three levels up (`../../../`):
```html
<link rel="stylesheet" href="../../../css/canvas-complete.css">
<link rel="stylesheet" href="../../../css/cidilabs-activities.css">
<script src="../../../js/canvas-complete.js"></script>
<script src="../../../js/cidilabs-scripts.js"></script>
<script src="../../../files/00-image-script/canvas-image-mapper.js"></script>
```

> ⚠️ A common error is using `../../` (two levels) instead of `../../../` (three levels). Always verify paths when creating new lesson files.

---

## AI-Assisted Development Notes

This project uses AI (GitHub Copilot / Claude) to generate lesson HTML content.
When starting a new lesson build, provide the AI with these files as context:

1. **This file** (`README.md`) — project rules, structure, and conventions
2. **`00_Master_Templates/course-competencies-los.md`** — CCs and LOs for the target module
3. **`00_Master_Templates/lesson-templates/lesson-explore-template.html`** — the HTML template to fill

**Key rules for AI content generation:**
- Always calculus-based — derivatives, integrals, differential equations
- All readings reference OpenStax *University Physics Volume 1* with direct section URLs
- Follow the 9-section lesson structure exactly
- Use `../../../` for all local asset paths
- Lesson title format: `M[N]L[N] [Topic Title]`
- Course code in header: `PHYS-2325`

---

## Build Status

### Module 1 — Measurement and Motion in 1D
| Lesson | Title | Status |
|---|---|---|
| M1L1 | Measurement | ✅ Complete |
| M1L2 | Instantaneous Velocity and Speed | ✅ Complete |
| M1L3 | Acceleration | ✅ Complete |
| M1L4 | Constant Acceleration | ✅ Complete |
| M1L5 | Free Fall | ✅ Complete |
| M1L6 | Graphical Integration in Motion Analysis | ✅ Complete |

### Module 2 — Force and Motion
| Lesson | Title | Status |
|---|---|---|
| M2L1 | Vectors | ✅ Complete |
| M2L2a | Kinematics in 2D and 3D *(proposed split — pending CME approval)* | ⚠️ Draft built |
| M2L2b | Projectile, Circular & Relative Motion *(proposed split — pending CME approval)* | ⚠️ Draft built |
| M2L3 | Newton's Laws and Forces | ✅ Complete |

### Module 3 — Energy and Work
| Lesson | Title | Status |
|---|---|---|
| M3L1 | Work and Kinetic Energy | ✅ Complete |
| M3L2 | Potential Energy and Conservation of Energy | 🔲 Not started |

### Module 4 — Center of Mass and Linear Momentum
| Lesson | Title | Status |
|---|---|---|
| M4L1 | Impulse, Conservation of Momentum, and Center of Gravity | 🔲 Not started |

### Module 5 — Equilibrium and Elasticity
| Lesson | Title | Status |
|---|---|---|
| M5L1 | Rotational Motion | 🔲 Not started |
| M5L2 | Translational and Rotational Forces Together | 🔲 Not started |
| M5L3 | Equilibrium | 🔲 Not started |

### Module 6 — Fluids
| Lesson | Title | Status |
|---|---|---|
| M6L1 | Fluids | 🔲 Not started |

### Module 7 — Oscillations and Waves
| Lesson | Title | Status |
|---|---|---|
| M7L1 | Simple Harmonic Motion | 🔲 Not started |
| M7L2 | Waves | 🔲 Not started |
| M7L3 | Sound Waves | 🔲 Not started |

### Module 8 — Temperature, Heat, and Thermodynamics
| Lesson | Title | Status |
|---|---|---|
| M8L1 | Temperature | 🔲 Not started |
| M8L2 | Entropy ⚠️ *expansion pending CME approval* | 🔲 Not started |

---

## Project Team

| Role | Name | Responsibilities |
|---|---|---|
| **Instructional Designer** | Tammy Moore | Development timeline oversight; HTML/CSS/JS development; Canvas LMS build; custom interactive activities; accessibility standards and compliance; collaboration with CME and Director of Alignment |
| **Content Matter Expert (CME)** | Jamie Romo | Subject matter content; also teaches the course |
| **Director of Alignment** | Jean Campbell | Curriculum alignment oversight |

**Last Updated:** April 23, 2026
