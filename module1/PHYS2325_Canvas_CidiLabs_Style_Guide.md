## 10. Button Bar for Reading Links

Use a horizontal button bar to display reading or resource links in a visually engaging way. This is a preferred alternative to a simple list for the Reading section.

**HTML Example:**

```html
<div style="display: flex; gap: 1em; flex-wrap: wrap; justify-content: center; margin: 1.5em 0;">
  <a href="https://openstax.org/books/university-physics-volume-1/pages/1-1-the-scope-and-scale-of-physics" target="_blank" style="background: #1d2757; color: #fff; padding: 0.75em 1.5em; border-radius: 4px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">1.1 Scope and Scale</a>
  <a href="https://openstax.org/books/university-physics-volume-1/pages/1-2-units-and-standards" target="_blank" style="background: #1d2757; color: #fff; padding: 0.75em 1.5em; border-radius: 4px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">1.2 Units and Standards</a>
  <a href="https://openstax.org/books/university-physics-volume-1/pages/1-3-unit-conversion" target="_blank" style="background: #1d2757; color: #fff; padding: 0.75em 1.5em; border-radius: 4px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">1.3 Unit Conversions</a>
  <a href="https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis" target="_blank" style="background: #1d2757; color: #fff; padding: 0.75em 1.5em; border-radius: 4px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">1.4 Dimensional Analysis</a>
  <a href="https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures" target="_blank" style="background: #1d2757; color: #fff; padding: 0.75em 1.5em; border-radius: 4px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">1.6 Significant Figures</a>
</div>
```

**Usage Notes:**
- Use `<a>` tags for each resource link.
- Flexbox and gap for horizontal layout and wrapping.
- Inline styles for button appearance (color, padding, border-radius, shadow).
- Responsive and accessible.
- Adjust colors, spacing, or add icons as needed.
## 9. CidiLabs Popover (Modal/Tooltip)

Use the CidiLabs Popover tool to provide additional information, tips, or decision trees without cluttering the main page. This is useful for definitions, significant figure rules, or any content that benefits from being hidden until needed.

**HTML Example:**

```html
<a id="dpPopup0" class="dp-popover-trigger" href="#dpPopup0Content" aria-describedby="#dpPopup0Content">Is that zero significant?</a>
<div id="dpPopup0Content" class="dp-popover-content dp-popup-content" style="border: 1px solid #A9A9A9; background: #f7f7f7; padding: 10px; width: 400px; max-width: 100%; margin: auto; border-radius: 6px;">
  <h4>Significant Figures: Is That Zero Significant?</h4>
  <ul>
    <li><strong>Leading zeros</strong> (before all nonzero digits) are <span style="color: #b00;">not significant</span>.</li>
    <li><strong>Captive zeros</strong> (between nonzero digits) are <span style="color: #080;">always significant</span>.</li>
    <li><strong>Trailing zeros</strong> (after a decimal point and after a nonzero digit) are <span style="color: #080;">significant</span>.</li>
    <li><strong>Trailing zeros</strong> (in a whole number with no decimal shown) are <span style="color: #b00;">not significant</span> unless specified by a bar or scientific notation.</li>
  </ul>
  <p style="margin-top: 1em; font-size: 0.95em; color: #555;">Tip: Use scientific notation to clearly show the number of significant figures.</p>
</div>
```

**Usage Notes:**
- The `dp-popover-trigger` class is used for the clickable element (button or link).
- The `dp-popover-content`/`dp-popup-content` class is used for the popover content.
- The `href` and `id` attributes must match for the trigger and content.
- Only use inline styles and classes already present in the course.
- Use for quick reference, definitions, or decision trees.
# PHYS 2325 Canvas/CidiLabs Style Guide

## 1. Layout & Structure
- **Main Wrapper:** `<div id="dp-wrapper" class="dp-wrapper dp-flat-sections variation-1">`
- **Header:** `<header class="dp-header dp-flat-sections">` with module and lesson titles.
- **Section Blocks:** Use `<section class="dp-content-block ...">` for major content areas.
- **Backgrounds:** Most sections use `style="background: #f5f5f5; margin-bottom: 1.5em;"`.

## 2. Headings & Text
- **Lesson Titles:** `<h2 class="dp-heading">`
- **Section Headings:** `<h3 class="dp-has-icon">` (optionally with FontAwesome icons)
- **Lead/Intro Text:** `<p class="dp-lead" style="text-align: center;">` for quotes or key ideas.
- **Subheadings:** `<h4>` for sub-sections or activity titles.

## 3. Callouts & Panels
- **Callout Boxes:** 
  - `<div class="dp-callout ... card ...">` for info, warnings, or tips.
  - Use `dp-callout-color-dp-primary`, `dp-callout-type-title-bar`, or `dp-callout-type-info` for different styles.
- **Accordion Panels:** 
  - `<div class="dp-panels-wrapper dp-accordion-default ...">` for collapsible content.
  - Each panel: `<div class="dp-panel-group">` with `<h3 class="dp-panel-heading">` and `<div class="dp-panel-content">`.

## 4. Interactive Elements
- **Order/Sort Activities:** 
  - `<div class="dp-order-wrapper">` for ordering steps.
  - `<div class="dp-si-sort-pool ...">` for sorting/matching activities.
- **Flip Cards:** 
  - `<div class="dp-flip-card ...">` for Q&A or concept checks.
- **Practice Problems:** 
  - Use panels or accordions for practice and apply sections.
  - `<div class="dp-panels-wrapper ...">` with each problem in a `<div class="dp-panel-group">`.

## 5. Media & Images
- **Images:** 
  - `<figure class="dp-full-width dp-image-rounded-10 ...">` for lesson images.
  - Use `CANVAS_IMAGE_URL` as a placeholder for Canvas-uploaded images.
- **Videos:** 
  - `<div class="dp-embed-wrapper">` for embedded or linked videos.

## 6. Lists & Formatting
- **Objectives/Competencies:** 
  - Use `<ul>` or `<p style="padding-left: 40px;">` for listing LOs.
- **Instructions/Notes:** 
  - Use `<p>`, `<ul>`, and `<li>` for clear, concise instructions.

## 7. Color & Emphasis
- **Primary Color:** `#1d2757` (used for borders, icons, and headings)
- **Highlight Boxes:** Use background colors like `#ededc2` for emphasis.

## 8. IDs & Classes
- **Section Classes:** Use descriptive classes like `kl_introduction`, `kl_objectives2`, `kl_readings2`, `kl_lectures2`, `kl_practice_conceptual`, `kl_practice_computational` for organization and CidiLabs compatibility.
- **No Custom CSS/JS:** Only use inline styles and classes already present in the lessons.

---

### Interactive Types Supported
- Accordion panels (for expandable content)
- Callout/info boxes (for tips, warnings, or highlights)
- Flip cards (for Q&A or concept checks)
- Sort/order activities (for matching or sequencing)
- Embedded videos and images
- Practice problems in panels/accordions

### Not Supported
- Custom JavaScript
- Custom CSS beyond inline styles already in use

---

This guide should be used for all future content upgrades and builds. If you want a more detailed breakdown of any component or want to see examples, let me know!