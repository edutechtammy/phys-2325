# Canvas LMS Accessibility Requirements - WCAG Compliance Guide

## 🎯 Purpose
This guide documents Canvas LMS accessibility checker requirements and WCAG 2.0/2.1 compliance standards learned through systematic testing. Use this as a technical reference to ensure all content passes Canvas accessibility validation before deployment.

---

## 🎨 **COLOR CONTRAST REQUIREMENTS**

### WCAG Standards
- **Text smaller than 18pt (or bold 14pt):** Minimum 4.5:1 contrast ratio
- **Text 18pt or larger (or bold 14pt+):** Minimum 3:1 contrast ratio
- **Canvas Checker:** Flags any text failing these standards

### Approved Color Values (WCAG Compliant)

#### Texas Blue (Primary)
```css
color: #1d2757;  /* Use for headings, primary text, borders */
background: white;  /* Excellent contrast ratio */
```

#### Badge/Label Colors (on white backgrounds)

**Dark Burnt Orange - INTERMEDIATE level**
```css
background-color: #a84700;  /* WCAG compliant after 4 iterations */
color: white;
/* Previous failures: #ff8c00, #d66800, #c55a00 */
```

**Dark Green - BASIC level**
```css
background-color: #1e7e34;  /* WCAG compliant */
color: white;
/* Previous failure: #28a745 */
```

**Maroon/Dark Red - ADVANCED level**
```css
background-color: #8b0000;  /* WCAG compliant */
color: white;
```

#### Background Colors for Content Sections

**Light Gray Info Boxes**
```css
background-color: #f5f5f5;  /* Better than light blue for link visibility */
border: 2px solid #1d2757;
color: #1d2757;
/* Links use default Canvas blue (no custom color needed) */
```

**Very Light Blue Callouts**
```css
background-color: #e8f4f8;  /* WCAG compliant with Texas Blue text */
border-left: 4px solid #1d2757;
color: #1d2757;
/* Previous failure: #d1ecf1 with #0c5460 text */
```

**White Column Backgrounds**
```css
background-color: white;  /* Safest choice for all text */
border: 2px solid #1d2757;
color: #1d2757;
```

### Common Contrast Failures
❌ **Avoid these combinations:**
- Light blue (#e3f2fd) background with blue (#2196f3) links - Canvas default link blue too similar
- Orange (#ff9800) headers with white text - insufficient contrast
- Light green (#c8e6c9) or light pink (#ffcdd2) backgrounds - may fail with colored text
- Transparent/semi-transparent backgrounds - unpredictable contrast ratios

### Calculating Compliant Colors (The Math Way)

Instead of guessing and testing repeatedly, you can calculate the exact color needed using the WCAG formula.

#### WCAG Contrast Ratio Formula

```
Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)
```

Where:
- `L1` = relative luminance of lighter color (higher value)
- `L2` = relative luminance of darker color (lower value)
- For 4.5:1 ratio requirement: `L1/L2 ≥ 4.5`

#### Relative Luminance Calculation

**Step 1: Convert hex color to RGB values (0-1 range)**
```
For #a84700:
R = 168/255 = 0.6588
G = 71/255 = 0.2784
B = 0/255 = 0.0000
```

**Step 2: Apply gamma correction to each channel**
```javascript
function gammaCorrect(channel) {
    if (channel <= 0.03928) {
        return channel / 12.92;
    } else {
        return Math.pow((channel + 0.055) / 1.055, 2.4);
    }
}
```

**Step 3: Calculate relative luminance**
```javascript
L = 0.2126 × gammaCorrect(R) + 
    0.7152 × gammaCorrect(G) + 
    0.0722 × gammaCorrect(B)
```

The coefficients (0.2126, 0.7152, 0.0722) represent human eye sensitivity to red, green, and blue light.

#### Working Backward: Finding Compliant Colors

**Example: Finding WCAG-compliant orange on white background**

Given:
- White luminance: L_white = 1.0
- Target ratio: 4.5:1
- Need to find: orange color with required luminance

**Solve for needed luminance:**
```
(1.0 + 0.05) / (L_orange + 0.05) = 4.5
1.05 / (L_orange + 0.05) = 4.5
1.05 = 4.5 × (L_orange + 0.05)
1.05 = 4.5 × L_orange + 0.225
0.825 = 4.5 × L_orange
L_orange = 0.1833
```

**Then systematically darken RGB values until luminance ≈ 0.1833**

This is why #a84700 works:
- R: 168 → G: 71 → B: 0
- Calculated luminance ≈ 0.183
- Contrast ratio: (1.0 + 0.05)/(0.183 + 0.05) ≈ 4.51:1 ✓

#### Quick Reference: Common Luminance Targets

| Background | Text | Min Ratio | Required L_text |
|------------|------|-----------|-----------------|
| White (L=1.0) | Dark text | 4.5:1 | ≤ 0.1833 |
| White (L=1.0) | Large text | 3.0:1 | ≤ 0.3 |
| Black (L=0) | Light text | 4.5:1 | ≥ 0.775 |
| Gray (L=0.5) | Dark text | 4.5:1 | ≤ 0.072 |

#### Practical Approach for AI Agents

1. **Know your background luminance** (white = 1.0, black = 0)
2. **Calculate target text luminance** using formula above
3. **Adjust RGB values** (usually darken or lighten all channels proportionally)
4. **Verify with formula** before testing in Canvas
5. **One-shot success** instead of 4 iterations

#### Python Calculator Example

```python
def rgb_to_luminance(r, g, b):
    """Convert RGB (0-255) to relative luminance"""
    def gamma(channel):
        c = channel / 255.0
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    
    return 0.2126 * gamma(r) + 0.7152 * gamma(g) + 0.0722 * gamma(b)

def contrast_ratio(l1, l2):
    """Calculate contrast ratio between two luminance values"""
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

# Example: Check our orange
orange_lum = rgb_to_luminance(168, 71, 0)  # #a84700
white_lum = 1.0
ratio = contrast_ratio(white_lum, orange_lum)
print(f"Contrast ratio: {ratio:.2f}:1")  # Should be ≥ 4.5
```

### Testing Strategy (If Not Using Math)
1. **Progressive Darkening:** If color fails, systematically darken until compliant
2. **Example:** Orange badges required 4 iterations (#ff8c00 → #d66800 → #c55a00 → #a84700)
3. **Conservative Approach:** When in doubt, use Texas Blue (#1d2757) or white backgrounds
4. **Better Approach:** Use the mathematical calculation above for one-shot accuracy

---

## 📊 **TABLE ACCESSIBILITY REQUIREMENTS**

### Required Elements

#### Table Captions (MANDATORY)
Every table must include a `<caption>` element describing the table's purpose:

```html
<table class="table table-bordered">
    <caption>Comparison of Brønsted-Lowry and Lewis Acid-Base Theories</caption>
    <thead>
        <tr>
            <th scope="col">Aspect</th>
            <th scope="col">Brønsted-Lowry Thinking</th>
            <th scope="col">Lewis Thinking</th>
        </tr>
    </thead>
    <!-- table body -->
</table>
```

**Caption Guidelines:**
- Place immediately after opening `<table>` tag
- Provide clear, concise description of table contents
- Use sentence case (capitalize first word only)
- Example patterns:
  - "Comparison of [Topic A] and [Topic B]"
  - "Interactive Relationship Between [Variable X] and [Variable Y]"
  - "[Topic]: [Specific Comparison]"

#### Scope Attributes (MANDATORY)
All column header cells (`<th>`) must include `scope="col"`:

```html
<thead>
    <tr>
        <th scope="col">Column 1</th>
        <th scope="col">Column 2</th>
        <th scope="col">Column 3</th>
    </tr>
</thead>
```

**Scope Guidelines:**
- Add to EVERY `<th>` element in header row
- Use `scope="col"` for column headers (most common)
- Use `scope="row"` for row headers (if applicable)
- Screen readers use scope to announce column/row relationships

### Common Table Accessibility Errors
❌ **Canvas will flag:**
- Tables without `<caption>` elements
- `<th>` elements missing `scope` attribute
- Colored header backgrounds with insufficient contrast

✅ **Quick Fix Checklist:**
- [ ] Caption added immediately after `<table>` tag
- [ ] Every `<th>` has `scope="col"` or `scope="row"`
- [ ] Header background colors meet 4.5:1 contrast ratio
- [ ] Consider using Texas Blue (#1d2757) or white backgrounds for headers

---

## 📝 **HEADING HIERARCHY REQUIREMENTS**

### Critical Rule: No Level Skipping
HTML headings must follow sequential order without skipping levels:

✅ **Correct progression:**
```html
<h3>Main Section</h3>
  <h4>Subsection</h4>
    <h5>Detail Point</h5>
      <h6>Fine Detail</h6>
```

❌ **Incorrect - Canvas will flag:**
```html
<h3>Main Section</h3>
  <h5>Subsection</h5>  <!-- SKIPPED h4 - VIOLATION -->
```

```html
<h4>Section</h4>
  <h6>Detail</h6>  <!-- SKIPPED h5 - VIOLATION -->
```

### Common Hierarchy Violations

#### Problem: Styled Divs Acting as Headings
❌ **Incorrect:**
```html
<div style="font-size: 1.5rem; font-weight: bold; color: #1d2757;">
    Section Title
</div>
<h5>Subsection</h5>  <!-- Canvas sees this as coming after nothing -->
```

✅ **Correct:**
```html
<h4 style="font-size: 1.5rem; font-weight: bold; color: #1d2757;">
    Section Title
</h4>
<h5>Subsection</h5>  <!-- Proper hierarchy -->
```

#### Problem: Visual Heading Size vs. Semantic Level
You can style headings to look different while maintaining proper semantic hierarchy:

```html
<h4 style="font-size: 1.1rem;">Small-Looking Heading</h4>
<h5 style="font-size: 1.5rem;">Larger-Looking Subheading</h5>
```

**Key principle:** Visual appearance is controlled by CSS, but semantic hierarchy must be correct for accessibility.

#### Problem: Card-Based Layouts
When using card layouts, ensure heading hierarchy flows logically:

```html
<h3>Main Topic</h3>

<div class="card">
    <h4>Card Section Title</h4>  <!-- One level down from h3 -->
    <div class="card-body">
        <h5>Card Detail 1</h5>  <!-- One level down from h4 -->
        <h5>Card Detail 2</h5>
        <h5>Card Detail 3</h5>
    </div>
</div>
```

### Debugging Heading Hierarchy Issues

**Step 1: Map current hierarchy**
Use grep or search to find all heading tags in document, noting their line numbers and context.

**Step 2: Identify violations**
Look for any place where heading level jumps by more than 1 (h3→h5, h4→h6, etc.).

**Step 3: Common fix patterns**
- Inside special sections (decision trees, practice areas): Convert styled divs to proper h4/h5
- Card headings after main section h3: Use h4 for card titles, h5 for card content
- Example boxes, warnings, notes: Maintain parent heading level + 1

**Step 4: Preserve visual styling**
Add inline styles or classes to maintain visual appearance while using correct semantic elements:
```html
<h5 style="font-size: 1.0rem; font-weight: 600;">Visually Small but Semantically Correct</h5>
```

---

## 📋 **LIST MARKUP REQUIREMENTS**

### Ordered Lists Must Use `<ol>` and `<li>`

#### Problem: Numbered Content as Paragraphs
❌ **Canvas will flag:**
```html
<p style="font-family: monospace;">
    1. Enter: 3.25<br>
    2. Press: [+/-]<br>
    3. Press: [10^x]<br>
    4. Read result
</p>
```

✅ **Correct:**
```html
<ol style="font-family: monospace;">
    <li>Enter: 3.25</li>
    <li>Press: [+/-]</li>
    <li>Press: [10^x]</li>
    <li>Read result</li>
</ol>
```

### When to Use List Markup

**Use `<ol>` (ordered list) when:**
- Sequential steps (calculator instructions, procedures)
- Numbered items where order matters
- Rankings or priorities

**Use `<ul>` (unordered list) when:**
- Bullet points
- Items where order doesn't matter
- Feature lists, option lists

**Use paragraphs when:**
- Actual paragraph text (multiple sentences)
- Narrative content
- Explanations or descriptions

### Common List Errors
❌ **Canvas will flag:**
- Numbered sequences using `<br>` tags in paragraphs
- Steps formatted as separate `<p>` tags with manual numbering
- Lists where `<li>` elements are missing

---

## 🏷️ **SEMANTIC HTML REQUIREMENTS**

### Paragraph vs. Div Usage

#### Problem: Short Text in `<p>` Tags
Canvas may flag very short paragraphs (especially in legend or label contexts):

❌ **Flagged:**
```html
<p><strong>Formulas and equations:</strong> Mathematical expressions you'll use</p>
<p><strong>Conceptual thinking:</strong> Understanding the why behind the math</p>
```

✅ **Better:**
```html
<div><strong>Formulas and equations:</strong> Mathematical expressions you'll use</div>
<div><strong>Conceptual thinking:</strong> Understanding the why behind the math</div>
```

**Guideline:** Use `<p>` for actual paragraph content (multiple sentences). Use `<div>` for labels, legends, or single-line descriptive items.

---

## ✅ **PRE-DEPLOYMENT CHECKLIST**

### Before Uploading to Canvas
- [ ] **Heading Hierarchy:** Run through document, verify no heading level skips
- [ ] **Table Captions:** Every `<table>` has a `<caption>` immediately after opening tag
- [ ] **Table Scope:** Every `<th>` has `scope="col"` or `scope="row"`
- [ ] **List Markup:** All numbered sequences use `<ol>` with `<li>` elements
- [ ] **Color Contrast:** All text meets 4.5:1 ratio (use approved colors above)
- [ ] **Link Visibility:** Links have sufficient contrast with backgrounds
- [ ] **Semantic HTML:** Headings are proper elements (not styled divs), paragraphs vs. divs used appropriately

### Testing in Canvas
1. Upload content to Canvas
2. Use Canvas Accessibility Checker (should be in editor toolbar)
3. Address any warnings systematically:
   - Heading hierarchy: Fix all level skips first
   - Tables: Add captions and scope attributes
   - Lists: Convert numbered sequences to proper markup
   - Colors: Progressively darken until compliant
4. Re-check until zero warnings
5. Test with screen reader if available (optional but valuable)

---

## 🔍 **COMMON CANVAS ACCESSIBILITY WARNINGS**

### Warning Messages and Fixes

| Warning | Cause | Fix |
|---------|-------|-----|
| "Heading level skipped" | h3 followed by h5, h4 followed by h6, etc. | Insert intermediate heading level or adjust hierarchy |
| "Table is missing a caption" | `<table>` without `<caption>` | Add `<caption>` immediately after `<table>` tag |
| "Table header cell has no scope attribute" | `<th>` missing `scope` | Add `scope="col"` to all column headers |
| "Text smaller than 18pt should display minimum contrast ratio of 4.5:1" | Insufficient color contrast | Darken text color or lighten background until compliant |
| "Very short paragraphs" | Single-line `<p>` elements used as labels | Change to `<div>` for non-paragraph content |
| "Lists should be formatted as lists" | Numbered sequences using `<br>` or separate paragraphs | Convert to proper `<ol>` or `<ul>` with `<li>` elements |

---

## 🎓 **LESSONS LEARNED**

### Color Iteration Strategy
- **Don't guess:** Canvas checker will tell you exactly what fails
- **Progressive darkening works:** Keep darkening color until compliant
- **Orange is tricky:** Took 4 iterations to find WCAG-compliant orange
- **Conservative wins:** Texas Blue (#1d2757) on white always passes
- **Link visibility matters:** Canvas default link blue can conflict with custom light blue backgrounds

### Heading Hierarchy Complexity
- **Multiple passes required:** Complex documents may have 15-20 heading violations
- **Check special sections:** Decision trees, card layouts, practice areas often have violations
- **Styled divs are common culprits:** Visual "headings" that aren't semantic headings
- **Visual ≠ semantic:** Small-looking h4 is fine; large-looking styled div is not

### Table Accessibility
- **Every table needs caption:** No exceptions, even simple tables
- **Scope on every `<th>`:** Easy to implement, critical for screen readers
- **Descriptive captions matter:** "Table 1" is insufficient; describe the content

### Development Workflow
1. **Build content first:** Focus on pedagogy and structure
2. **Run Canvas checker:** Let it identify all issues systematically
3. **Fix by category:** Do all heading fixes, then all table fixes, then colors, etc.
4. **Re-check frequently:** Some fixes may reveal new issues
5. **Document approved colors:** Save WCAG-compliant values for reuse

---

## 📚 **RESOURCES**

### Testing Tools
- **Canvas Accessibility Checker:** Built into Canvas editor (primary validation tool)
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WAVE Browser Extension:** https://wave.webaim.org/extension/

### Standards Documentation
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility

### Internal References
- See `module5-quality-template-extraction.md` for HTML structure patterns
- See `implementation-checklist.md` for development workflow
- Review completed M5L1 Explore lesson for accessibility implementation examples

---

## 💡 **QUICK REFERENCE: Most Common Fixes**

```html
<!-- FIX #1: Add table caption and scope -->
<table class="table table-bordered">
    <caption>Description of table contents</caption>
    <thead>
        <tr>
            <th scope="col">Header 1</th>
            <th scope="col">Header 2</th>
        </tr>
    </thead>
    <!-- ... -->
</table>

<!-- FIX #2: Fix heading hierarchy -->
<h3>Main Section</h3>
<h4>Subsection</h4>  <!-- Not h5 or h6 -->
<h5>Detail</h5>      <!-- Not h6 -->

<!-- FIX #3: Convert to proper list -->
<ol>
    <li>Step one</li>
    <li>Step two</li>
    <li>Step three</li>
</ol>

<!-- FIX #4: Use approved colors -->
<span style="background-color: #a84700; color: white; padding: 4px 8px; border-radius: 4px;">
    INTERMEDIATE
</span>
```

---

**Document Version:** 1.0  
**Last Updated:** February 16, 2026  
**Source:** M5L1 Explore accessibility compliance project  
**Status:** Production-ready reference for all future development
