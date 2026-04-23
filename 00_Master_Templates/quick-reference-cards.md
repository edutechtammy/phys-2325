# Quick Reference Cards - CHEM-1312 Development

## 📋 **File Naming Quick Reference**

### ✅ **Correct Patterns**
- Module intro: `m7-introduction-to-electrochemistry-and-nuclear-chemistry.html`
- Lesson pages: `m7l1-explore-redox-reactions.html`
- All lowercase, hyphens for spaces, **NO UNDERSCORES**

### ❌ **Common Mistakes**
- ❌ `m7l1-explore_redox-reactions.html` (underscore)
- ❌ `M7L1-Explore-Redox-Reactions.html` (mixed case)
- ❌ `m7l1_redox_reactions.html` (underscores everywhere)

---

## 🎨 **CidiLabs Component Decision Tree**

| **Need** | **Use Component** | **When NOT to Use** |
|----------|------------------|---------------------|
| Vocabulary/Definitions | **Flip Cards** | Less than 3 terms |
| Connecting Concepts | **Match Items** | Simple true/false |
| Multiple Correct Answers | **Select All** | Single correct answer |
| Process Ordering | **Order Items** | No sequence required |
| Content Organization | **Vertical Tabs** | Less than 4 sections |
| Extra Resources | **Modals** | Essential information |
| Categorizing Items | **Sort Items** | Only 2 categories |

### 🔧 **Standard Components for Common Needs**
- **Solutions/Explanations:** Standard Accordions (`dp-accordion-default`)
- **Learning Objectives:** Standard Content Blocks (`kl_introduction`)
- **Video Sections:** Standard Content Blocks (`kl_lectures2`)

---

## ♿ **Accessibility Quick Patterns**

### **Video Accessibility**
```html
aria-label="Video: [Title] - [Brief description of content and learning value]"
title="Video: [Title]"
```

### **Image Accessibility**  
```html
alt="[Descriptive text explaining image content and context]"
```

### **Heading Structure**
- ✅ h1 → h2 → h3 → h4 (proper hierarchy)
- ❌ h1 → h3 (skipping levels)

---

## 🚨 **Critical Constraints Reminder**

### **NEVER DO:**
- ❌ Create custom CSS or JavaScript files
- ❌ Modify files in `26-1sp-originals/` folders
- ❌ Change Canvas video URLs (even slightly)
- ❌ Change Canvas image URLs or file references
- ❌ Use generic reading assignments ("read chapter X")
- ❌ **Use relative paths for CSS/JS links** (breaks GitHub Pages)

### **ALWAYS DO:**
- ✅ Use exact video URLs from original files
- ✅ Use exact image URLs from original files  
- ✅ Create new files in `26-2su-redesign/` folders
- ✅ Use existing CSS classes only
- ✅ Include specific reading guidance with section numbers
- ✅ **Use repository root paths for CSS/JS links** (GitHub Pages compatible)

### **🔗 GitHub Pages Link Requirements**
```html
✅ CORRECT (Repository Root Paths):
<link rel="stylesheet" href="/tstc-chem-1312/css/canvas-complete.css">
<link rel="stylesheet" href="/tstc-chem-1312/css/cidilabs-activities.css">
<script src="/tstc-chem-1312/js/canvas-complete.js"></script>
<script src="/tstc-chem-1312/js/cidilabs-scripts.js"></script>

❌ WRONG (Relative Paths):
<link rel="stylesheet" href="../../../css/canvas-complete.css">
<script src="../../../js/canvas-complete.js">
```

**Why:** Repository root paths (starting with `/tstc-chem-1312/`) work correctly with GitHub Pages deployment. Relative paths (`../../../`) can break depending on the deployment structure.

---

## 🎯 **Module 5 Excellence Patterns (Quality Standards)**

### **1. Video-First Architecture**
- Rich video content with enhanced context
- Detailed descriptions and topic lists
- Time stamps and accessibility labels

### **2. Progressive Practice Structure**
- **Level 1:** Basic concept application
- **Level 2:** Multi-step integration problems  
- **Level 3:** Advanced real-world scenarios

### **3. Comprehensive Applications**
- Medical/healthcare scenarios
- Industrial/technological contexts
- Environmental applications

### **4. Hierarchical Reading Guidance**
- Specific section numbers (not "read chapter X")
- Clear learning outcomes for each section
- Proper nested structure with aria-level attributes

---

## 📊 **Module Priority Levels**

| Priority | Modules | Status |
|----------|---------|--------|
| **URGENT** | Module 5 (Acids & Bases) | Academic crisis |
| **HIGH** | Module 1 (Bonding), Module 4 (Kinetics) | Major gaps |
| **MEDIUM** | Module 2, 3, 6 | Enhancement needed |
| **LOW** | Module 7 (Electrochemistry) | Good foundation |

---

## 🔍 **Common Critical Gaps to Address**

### **Pattern 1: Objective-Content Mismatch**
- Learning objective says "Calculate" → Need practice problems
- Learning objective says "Apply" → Need interactive activities
- Learning objective says "Identify" → Need identification exercises

### **Pattern 2: Missing Interactive Elements**
- Video content present but no hands-on application
- Theoretical knowledge without practical application
- No formative assessments or knowledge checks

### **Pattern 3: Structural Issues**
- Missing lesson files entirely
- Content in wrong lessons relative to objectives
- Naming discrepancies between folders and content

---

## 📹 **Video Transcript Integration (When Available)**

### **High-Value Resource Status**
- **Location:** `[module]/video-transcripts/` folder
- **Cross-Reference:** `video-naming-cross-reference.json` (coordinates SME names with lesson titles)
- **Confirmed Availability:** Module 1, Module 5 (check other modules)

### **Primary Uses for Development**
| **Use Case** | **Extract From Transcripts** | **Apply To Lesson** |
|--------------|------------------------------|---------------------|
| **Rich Video Descriptions** | SME's explanations, teaching context | Enhanced video introductions |
| **Topic Lists** | Specific concepts covered | Comprehensive topic coverage |
| **Problem Development** | Calculation examples, methods | Practice problem creation |
| **Real-World Applications** | SME's practical examples | Application problem scenarios |
| **Teaching Analogies** | SME's memory aids, explanations | Content enhancement |
| **Concept Connections** | Natural topic progressions | Lesson flow and structure |

### **Quality Impact Evidence**
- ✅ **Module 5 Success:** Video transcripts were key factor in achieving excellence standards
- ✅ **SME Teaching Voice:** Authentic explanations vs. generic content
- ✅ **Natural Progressions:** SME's logical concept flow vs. artificial structure
- ✅ **Technical Accuracy:** Correct terminology in proper teaching context

### **Integration Workflow**
1. **Check Availability:** Look for `video-transcripts/` folder in module directory
2. **Review Cross-Reference:** Use JSON file to match transcript names with lesson videos
3. **Extract Teaching Content:** Mine SME language, explanations, examples
4. **Enhance Video Sections:** Create rich descriptions and comprehensive topic lists
5. **Develop Practice Problems:** Use SME examples as basis for calculation practice
6. **Build Applications:** Extract real-world connections and practical examples