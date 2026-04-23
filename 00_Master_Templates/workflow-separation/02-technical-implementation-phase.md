# Technical Implementation Phase - AI Workflow

## 🎯 Purpose
This phase focuses EXCLUSIVELY on technical construction of pre-planned content. NO content or pedagogical decisions are made in this phase.

---

## 📋 Phase 2: Technical Implementation Only

### ✅ **Input Requirements**
- [ ] **Completed Content Plan:** From Phase 1 (`m[X]l[Y]-content-plan.md`)
- [ ] **Technical Specifications:** Template requirements, Canvas constraints, component needs
- [ ] **Implementation Standards:** File naming, accessibility requirements, structural patterns

### ✅ **Technical Construction Tasks**
- [ ] **Template Selection:** Choose appropriate lesson template based on content plan
- [ ] **Structural Implementation:** Apply Canvas-compliant HTML structure
- [ ] **Content Integration:** Transform content plan into template format
- [ ] **Component Integration:** Add CidiLabs activities based on interaction specifications
- [ ] **Accessibility Implementation:** Ensure ARIA labels, alt text, proper heading structure
- [ ] **Canvas Optimization:** Apply proper copy/paste markers, responsive design, link formatting

### ✅ **Implementation Workflow**

#### **Step 1: Technical Setup**
```checklist
- [ ] Create new file: `m[X]l[Y]-[type]-[topic].html` in `26-2su-redesign/` folder
- [ ] Copy base template from `00-development-templates/lesson-templates/`
- [ ] Update meta information (title, module, lesson identifiers)
- [ ] **CRITICAL:** Verify repository root CSS/JS links for GitHub Pages compatibility:
  - [ ] Use `/tstc-chem-1312/css/canvas-complete.css` (GitHub Pages compatible)
  - [ ] Use `/tstc-chem-1312/css/cidilabs-activities.css` (GitHub Pages compatible)
  - [ ] Use `/tstc-chem-1312/js/canvas-complete.js` (GitHub Pages compatible)
  - [ ] Use `/tstc-chem-1312/js/cidilabs-scripts.js` (GitHub Pages compatible)
```

#### **Step 2: Header Implementation**
```checklist
- [ ] Replace `[MODULE]` placeholders with actual module information
- [ ] Update page title and heading structure
- [ ] Implement learning objectives from content plan
- [ ] Add appropriate icons and visual hierarchy
```

#### **Step 3: Content Section Construction**
```checklist
- [ ] Transform content plan sections into HTML structure
- [ ] Apply appropriate DesignPLUS component classes
- [ ] Implement responsive column layouts
- [ ] Add proper semantic markup (headings, lists, emphasis)
```

#### **Step 4: Interactive Element Implementation**
```checklist
- [ ] Select appropriate CidiLabs components based on content plan specifications
- [ ] Configure component parameters (card content, matching pairs, sort categories)
- [ ] Test component accessibility and functionality
- [ ] Ensure proper component spacing and visual hierarchy
```

#### **Step 5: Media Integration**
```checklist
- [ ] Implement video embeds with proper iframe parameters
- [ ] Add video descriptions and time specifications from content plan
- [ ] Include supplemental resources and links
- [ ] Verify all external links and media sources
```

#### **Step 6: Canvas Optimization**
```checklist
- [ ] Add copy/paste markers for Canvas deployment
- [ ] Verify responsive design across device sizes
- [ ] Test all interactive elements for Canvas compatibility
- [ ] Validate HTML structure and accessibility compliance
```

### ✅ **Component Selection Guide**

Based on content plan interaction specifications:

| Content Plan Specification | Technical Implementation |
|----------------------------|------------------------|
| "Concept review flashcards" | CidiLabs Flip Cards |
| "Matching concepts to definitions" | CidiLabs Match Items |
| "Categorizing reaction types" | CidiLabs Sort Items |
| "Multiple selection knowledge check" | CidiLabs Select All |
| "Organized media content" | CidiLabs Button Tabs Vertical |
| "Pop-up reference information" | CidiLabs Modals |
| "Sequencing steps" | CidiLabs Order Items |

### ✅ **Technical Standards Validation**

#### **File Structure Compliance**
- [ ] File naming follows exact convention: `m[#]l[#]-explore-[topic-with-hyphens].html`
- [ ] File placed in correct folder: `26-2su-redesign/`
- [ ] All links use proper relative path structure
- [ ] Canvas copy/paste markers properly positioned

#### **Accessibility Compliance**
- [ ] All images have appropriate alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3 → h4)
- [ ] Interactive elements have aria-labels
- [ ] Color contrast meets accessibility standards
- [ ] Keyboard navigation functions properly

#### **Canvas Integration Compliance**
- [ ] Uses repository root CSS/JS paths for GitHub Pages compatibility:
  - [ ] CSS links: `/tstc-chem-1312/css/canvas-complete.css` and `/tstc-chem-1312/css/cidilabs-activities.css`
  - [ ] JS links: `/tstc-chem-1312/js/canvas-complete.js` and `/tstc-chem-1312/js/cidilabs-scripts.js`
- [ ] No custom CSS or JavaScript beyond standard templates
- [ ] Responsive design works within Canvas iframe constraints

---

## 🚫 **Phase 2 Restrictions**
**DO NOT modify in Phase 2:**
- Content sequence or pedagogical approach
- Learning objectives or assessment strategy
- Concept explanations or teaching methods
- Real-world application examples
- Practice problem difficulty levels

**Focus ONLY on:**
- Technical implementation of planned content
- Template application and component integration
- Canvas compliance and accessibility
- HTML structure and responsive design
- **CRITICAL:** Repository root link implementation for GitHub Pages compatibility

**GitHub Pages Link Requirements:**
- **ALWAYS use repository root paths** like `/tstc-chem-1312/css/` and `/tstc-chem-1312/js/`
- **NEVER use relative paths** like `../../../css/` or `../../../js/`
- This ensures compatibility with GitHub Pages deployment while working in development environment

---

## ✅ **Phase 2 Completion Checklist**

### **Technical Quality Assurance**
- [ ] **HTML Validation:** Code validates without errors
- [ ] **Accessibility Testing:** All accessibility requirements met
- [ ] **Responsive Design:** Layout works on mobile, tablet, desktop
- [ ] **Canvas Testing:** Copy/paste functionality verified
- [ ] **Link Verification:** All internal and external links function properly
- [ ] **Component Testing:** All CidiLabs interactions work as intended

### **Content Fidelity Verification**
- [ ] **Plan Alignment:** Technical implementation matches content plan exactly
- [ ] **No Content Drift:** No unauthorized content additions or modifications
- [ ] **Learning Objective Preservation:** All planned LOs addressed as specified
- [ ] **Assessment Integrity:** Planned assessment approach implemented correctly

### **File Management**
- [ ] **Proper Location:** File saved in correct `26-2su-redesign/` folder
- [ ] **Naming Convention:** File name follows exact naming standards
- [ ] **Version Control:** Ready for integration into development workflow

---

## 📋 **Quality Control Validation**

Before marking Phase 2 complete:
- [ ] **Technical Review:** All implementation standards met
- [ ] **Content Fidelity:** Implementation matches content plan without deviation
- [ ] **Accessibility Audit:** Full accessibility compliance verified
- [ ] **Canvas Compatibility:** Content ready for Canvas deployment
- [ ] **Performance Check:** Page loads efficiently with all components functional

---

## ✅ **Handoff Protocol**

Phase 2 completion delivers:
1. **Production-Ready HTML File:** Fully implemented lesson page
2. **Technical Documentation:** Any special implementation notes
3. **Testing Verification:** Confirmation of quality control completion
4. **Integration Readiness:** File ready for Canvas deployment workflow