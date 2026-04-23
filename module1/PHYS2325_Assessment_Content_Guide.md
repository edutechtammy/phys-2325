# PHYS 2325 Assessment-Oriented Content Design Guide

This guide outlines best practices and principles for building assessment-oriented content in Canvas using CidiLabs interactives and standard HTML, within the allowed style and scripting constraints.

---

## 1. Guiding Principles
- **Alignment:** All assessment activities should directly support the lesson's learning objectives (LOs) and course competencies (CCs).
- **Clarity:** Instructions and questions must be clear, concise, and unambiguous.
- **Feedback:** Where possible, provide immediate feedback (using CidiLabs features) to reinforce learning.
- **Accessibility:** Ensure all activities are accessible (screen reader friendly, keyboard navigable, etc.).
- **No Custom JS/CSS:** Use only built-in Canvas/CidiLabs features, inline styles, and existing classes.

---

## 2. Supported Assessment Interactives
- **Accordion Panels:** For practice problems with solutions or explanations hidden until revealed.
- **Callout Boxes:** For tips, warnings, or highlighting key assessment criteria.
- **Flip Cards:** For self-check Q&A, definitions, or concept checks.
- **Order/Sort Activities:** For sequencing steps, matching terms, or categorizing concepts.
- **Multiple Choice/Knowledge Checks:** For ungraded self-assessment with instant feedback.
- **Embedded Media:** For video- or image-based questions (with alt text and captions).

---

## 3. Assessment Content Types
- **Conceptual Practice:** Use flip cards, callouts, or short answer panels for definitions, principles, and conceptual understanding.
- **Computational Practice:** Use accordion panels or callouts for step-by-step problem solving and worked examples.
- **Procedural Practice:** Use order/sort activities for lab steps, measurement processes, or method sequences.
- **Application Practice:** Use scenario-based questions, real-world examples, or data interpretation tasks.

---

## 4. Visual & Structural Guidelines
- **Sectioning:** Use `<section class="dp-content-block ...">` for each major assessment area.
- **Headings:** Use `<h3 class="dp-has-icon">` for assessment section titles.
- **Instructions:** Place clear instructions at the start of each activity.
- **Feedback:** Use CidiLabs feedback features (e.g., correct/incorrect messages in order/sort activities).
- **Highlighting:** Use callout boxes for important notes or common mistakes.

---

## 5. Example Assessment Flow
1. **Introduction:** Briefly state the purpose of the assessment section.
2. **Practice Problems:** Use a mix of interactives (accordions, flip cards, sort/order) for varied practice.
3. **Feedback:** Provide instant feedback where possible.
4. **Summary/Reflection:** End with a checklist or self-reflection prompt.

---

## 6. Accessibility & Usability
- Use descriptive alt text for all images.
- Ensure all interactive elements are keyboard accessible.
- Avoid color-only cues for correctness/feedback.

---

## 7. What to Avoid
- Custom JavaScript or CSS not already present in the course.
- New classes or IDs not used in other lessons.
- Overly complex interactives that may not render well in Canvas.

---

This guide should be referenced for all assessment-oriented content builds and upgrades in PHYS 2325. For questions or examples, refer to the style guide or existing lesson files.
