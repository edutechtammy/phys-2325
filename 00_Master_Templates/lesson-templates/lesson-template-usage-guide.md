# Lesson Page Template Usage Guide

## Quick Start

1. **Copy the template**: `lesson-page-template.html`
2. **Rename it** following the naming convention: `m[#]-[type]-[topic].html`
   - Example: `m3-introduction-to-intermolecular-forces.html`
   - Example: `m4-explore-reaction-rates.html`
3. **Place it** in the appropriate module folder

## Template Placeholders to Replace

### In `<head>` section:
- `[MODULE]` - Module number (e.g., "M2")
- `[TYPE]` - Page type (e.g., "Introduction", "Explore")
- `[TOPIC]` - Brief topic description

**Example:**
```html
<title>M2 Explore: Molecular Geometry and Polarity</title>
```

### In `<header>` section:
- `MODULE [#] [Module Title]` - Full module name
  - Example: `MODULE 2 Chemical Bonding and Molecular Geometry`
- `M[#] [TYPE]: [Page Title]` - Page heading
  - Example: `M2 Explore: Molecular Geometry and Polarity`

### In Learning Objectives:
- `LO[#].[#].[#]` - Learning objective numbers
  - Format: LO[Module].[Section].[Number]
  - Example: `LO2.1.1 Predict molecular structures using VSEPR Theory`

### Content Section:
- `[Section Title]` - Name of content section
- `[Your content here]` - Replace with actual lesson content

## File Structure

```
Everything before "COPY/PASTE TO CANVAS ENVIRONMENT BEGINS HERE":
├── <!DOCTYPE> and <html>
├── <head> with all CDN links and stylesheets (standardized order)
├── Back button for navigation
└── Opening comment marker

Everything between the comment markers (what gets pasted to Canvas):
├── DP wrapper and header
├── Learning Objectives accordion
├── Your lesson content sections
└── Closing wrapper

Everything after "COPY/PASTE TO CANVAS ENVIRONMENT ENDS HERE":
├── Closing comment marker
├── All JavaScript files (standardized order)
└── Closing </body> and </html>
```

## Standardized Order

### CSS Links (in `<head>`):
1. Google Fonts (Lato)
2. Bootstrap 5.3.2 CSS
3. Canvas Complete CSS (local)
4. CidiLabs Activities CSS (local)
5. Font Awesome 6.0.0

### JavaScript Files (before `</body>`):
1. Bootstrap 5.3.2 JS Bundle
2. canvas-complete.js (local)
3. cidilabs-scripts.js (local)
4. canvas-image-mapper.js (local)

## Common Content Block Icons

Use these Font Awesome icon classes for different section types:

- **Reading/Introduction**: `fa-book`
- **Activities/Explore**: `fa-search` or `fa-flask`
- **Videos/Lectures**: `fa-video` or `fa-play-circle`
- **Documents/Files**: `fa-file-alt` or `fa-file-pdf`
- **Links/Resources**: `fa-link` or `fa-external-link-alt`
- **Discussion**: `fa-comments`
- **Assignment**: `fa-pencil-alt`
- **Key Takeaways/Summary**: `fa-key` ⚠️ **REQUIRED per CME/DA decision (Feb 2026)**

## Required Summary Section Format

**All lessons MUST end with a "Key Takeaways" section using the key icon:**

```html
<div class="dp-content-block kl_conclusion" style="background: #f5f5f5;">
    <h3 class="dp-has-icon" style="border-color: #1d2757;">
        <i class="fas fa-key" style="border-color: #1d2757;" aria-hidden="true">
            <span class="dp-icon-content" style="display: none;">&nbsp;</span>
        </i> 
        Key Takeaways
    </h3>
    <p>In this lesson, you have:</p>
    <ul>
        <li>[Key accomplishment related to learning objectives]</li>
        <li>[Key concept mastered]</li>
        <li>[Application or connection]</li>
    </ul>
</div>
```

**Important:** 
- Section heading MUST be "Key Takeaways" (not "Summary" or other variations)
- Icon MUST be `fas fa-key` (key icon)
- This standardization was mandated by CME and Dean of Academics meeting (February 20, 2026)

## Example Content Block

```html
<div class="dp-content-block kl_readings2" style="background: #f5f5f5;">
    <h3 class="dp-has-icon" style="border-top-color: #1d2757;">
        <i class="fa-book fas" style="border-color: #1d2757;" aria-hidden="true">
            <span class="dp-icon-content" style="display: none;">&nbsp;</span>
        </i> 
        Electronegativity
    </h3>
    <p>Your content here...</p>
</div>
<p>&nbsp;</p>
```

## Copy/Paste to Canvas

When publishing to Canvas LMS:

1. Open the HTML file in a browser or code editor
2. Locate the comment: `<!-- COPY/PASTE TO CANVAS ENVIRONMENT BEGINS HERE -->`
3. Copy everything from that line through `<!-- COPY/PASTE TO CANVAS ENVIRONMENT ENDS HERE -->`
4. Paste into Canvas HTML editor
5. The Canvas Image Mapper will handle image URLs automatically

## Notes

- All relative paths (`../css/`, `../js/`, `../Files/`) assume the file is in a module subfolder
- The template includes Texas Blue (#1d2757) branding on section headers
- Learning Objectives use paragraph tags for easier editing
- Back button always links to `../index.html` (course overview)
- Canvas Image Mapper script is included by default for offline image support
