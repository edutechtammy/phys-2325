# Module 5 Quality Template Extraction - "The Essence"

## 🎯 MODULE 5 QUALITY ARCHITECTURE PATTERNS

This document captures the essential structural and pedagogical patterns that make Module 5 superior quality, creating reusable templates for standardizing all modules.

---

## 📋 **TEMPLATE 1: COMPLETE HTML DOCUMENT STRUCTURE**

### Essential Head Section
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[MODULE] [TYPE]: [TOPIC]</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    
    <!-- Bootstrap 5.3.2 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <!-- Canvas Complete CSS -->
    <link rel="stylesheet" href="../css/canvas-complete.css">

    <!-- CidiLabs Activities CSS -->
    <link rel="stylesheet" href="../css/cidilabs-activities.css">
    
    <!-- Font Awesome 6.0.0 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>

<p>&nbsp;</p>

<!-- Back Button -->
<div class="container-fluid mb-3">
    <div class="row">
        <div class="col-12">
            <a href="../index.html" class="btn btn-outline-primary">
                <i class="fas fa-arrow-left"></i> Back to Course Overview
            </a>
        </div>
    </div>
</div>

<!-- ============================================= -->
<!-- COPY/PASTE TO CANVAS ENVIRONMENT BEGINS HERE -->
<!-- ============================================= -->
```

### Essential Footer Section
```html
<!-- ============================================ -->
<!-- COPY/PASTE TO CANVAS ENVIRONMENT ENDS HERE -->
<!-- ============================================ -->

<!-- Bootstrap 5.3.2 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

<!-- Custom JavaScript -->
<script src="../js/canvas-complete.js"></script>

</body>
</html>
```

---

## 📋 **TEMPLATE 2: MODULE INTRODUCTION PAGE STRUCTURE**

### Header Pattern
```html
<div id="dp-wrapper" class="dp-wrapper dp-flat-sections" style="padding-top: 20px;">
    <header class="dp-header dp-flat-sections ">
        <p style="text-align: center;">Module [X] [MODULE TITLE]</p>
        <div class="dp-content-block kl_custom_block_1">
            <p class="dp-progress-placeholder dp-module-progress-completion" style="display: none;">Module Item Completion (built in browser, hidden in app)</p>
        </div>
        <p>&nbsp;</p>
        <h2 class="dp-heading"><span class="dp-header-pre">CHEM-1312</span><span class="dp-header-title">M[X] Introduction to [MODULE TOPIC]</span></h2>
    </header>
    
    <!-- Rich Introduction with Real-World Context -->
    <div class="dp-content-block kl_introduction">
        <p class="lead">[COMPREHENSIVE INTRODUCTION explaining module importance, real-world applications, and learning journey. Should be 2-3 sentences minimum with specific examples.]</p>
    </div>
```

### Module Competencies Pattern
```html
    <div class="dp-content-block" style="background: #f5f5f5;">
        <div class="dp-panels-wrapper dp-expander-default dp-panel-active-color-dp-primary dp-no-expander-controls">
            <div class="dp-panel-group">
                <h3 class="dp-panel-heading">Module Competencies</h3>
                <div class="dp-panel-content">
                    <p><strong>CC[X].[Y] [COMPETENCY STATEMENT]</strong></p>
                    <p style="padding-left: 40px;">LO[X].[Y].1 [Learning Objective with specific action verbs]</p>
                    <p style="padding-left: 40px;">LO[X].[Y].2 [Learning Objective with specific action verbs]</p>
                    <!-- Continue for all LOs -->
                </div>
            </div>
        </div>
    </div>
```

### Standard Assessment Sections
```html
    <!-- Check for Understanding -->
    <div class="dp-content-block kl_content_block_6" style="background: #f5f5f5;">
        <h3 class="dp-has-icon" style="border-color: #1d2757;"><i class="fas fa-clipboard-check" style="border-color: #1d2757;" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i> Check for Understanding</h3>
        <p>Your check for understanding will be taken in ALEKS. You can retake it multiple times for practice.<br />Please don't hesitate to email me if you have any questions. If you need help with a specific problem, please screenshot and attach it to the email.</p>
    </div>

    <!-- Mastery Assessment -->
    <div class="dp-content-block kl_content_block_5" style="background: #f5f5f5;">
        <h3 class="dp-has-icon" style="border-color: #1d2757;"><i class="fas fa-vote-yea" style="border-color: #1d2757;" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i> Mastery Assessment</h3>
        <ul>
            <li>In this module, you will demonstrate your understanding of the content by solving problems.</li>
            <li>All Mastery Assessments must be completed with a minimum passing grade of 70%, in order to complete this course.</li>
        </ul>
    </div>

    <!-- Module Details -->
    <div class="dp-content-block" style="background: #f5f5f5;">
        <h3 class="dp-has-icon" style="border-color: #1d2757;"><i class="fas fa-map" style="border-color: #1d2757;" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i> Module Details</h3>
        <p class="dp-progress-placeholder dp-module-progress-details" style="display: none;">Module Details (built in browser, hidden in app)</p>
    </div>
```

---

## 📋 **TEMPLATE 3: LESSON PAGE STRUCTURE**

### Lesson Header Pattern
```html
<div id="dp-wrapper" class="dp-wrapper dp-flat-sections variation">
    <header class="dp-header dp-flat-sections ">
        <p style="text-align: center;">Module [X] [MODULE TITLE]</p>
        <div class="dp-content-block kl_custom_block_1">
            <p class="dp-progress-placeholder dp-module-progress-completion" style="display: none;">Module Item Completion (built in browser, hidden in app)</p>
        </div>
        <p>&nbsp;</p>
        <h2 class="dp-heading"><span class="dp-header-pre"><span class="dp-header-pre-1">CHEM-1312</span> </span> <span class="dp-header-title">M[X]L[Y] Explore: [LESSON TOPIC]</span></h2>
    </header>
    
    <!-- Rich Lesson Introduction -->
    <div class="dp-content-block kl_introduction">
        <p class="lead">[COMPREHENSIVE LESSON INTRODUCTION explaining lesson purpose, connections to previous learning, and real-world relevance. Include specific applications and examples.]</p>
    </div>
```

### Competency Tracking with Stars
```html
    <div class="dp-content-block" style="background: #f5f5f5;">
        <div class="dp-panels-wrapper dp-expander-default dp-panel-active-color-dp-primary dp-no-expander-controls">
            <div class="dp-panel-group">
                <h3 class="dp-panel-heading">Module Competencies</h3>
                <div class="dp-panel-content">
                    <p style="text-align: center; border: 1px solid black; padding: 20px; border-radius: 10px; margin: 30px; background: #ededc2;">A ★ indicates that this page contains an activity related to that LO.</p>
                    <p><strong>CC[X].[Y] [COMPETENCY STATEMENT]</strong></p>
                    <p style="padding-left: 40px;">★ LO[X].[Y].[Z] [Active Learning Objective for this lesson]</p>
                    <p style="padding-left: 40px;">★ LO[X].[Y].[Z] [Active Learning Objective for this lesson]</p>
                    <p style="padding-left: 40px;">LO[X].[Y].[Z] [Future Learning Objective]</p>
                    <!-- Continue with all LOs, marking active ones with ★ -->
                </div>
            </div>
        </div>
    </div>
```

---

## 📋 **TEMPLATE 4: COMPREHENSIVE OVERVIEW SECTION**

### What You Will Learn Pattern
```html
    <div class="dp-content-block kl_readings2" style="background: #f5f5f5;">
        <h3 class="dp-has-icon" style="border-top-color: #1d2757;"><i class="fa-book fas" style="border-color: #1d2757;" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i> Overview</h3>

        <div class="dp-panels-wrapper dp-accordion-default dp-panel-active-color-dp-primary">
            <div class="dp-panel-group">
                <h3 class="dp-panel-heading">What You Will Learn</h3>
                <div class="dp-panel-content">
                    <p>In this lesson, you'll master [NUMBER] essential learning objectives:</p>
                    <ul>
                        <li><strong>LO[X].[Y].[Z]:</strong> [Detailed explanation of what students will accomplish]</li>
                        <li><strong>LO[X].[Y].[Z]:</strong> [Detailed explanation of what students will accomplish]</li>
                    </ul>
                    <p>[DETAILED EXPLANATION of lesson flow, starting concepts, progression, and connections between topics]</p>
                    <p><strong>Why This Matters:</strong> [REAL-WORLD APPLICATIONS with specific examples from healthcare, industry, environment, etc.]</p>
                    <p><strong>How to Succeed:</strong> [SPECIFIC STUDY STRATEGIES and guidance for mastering the content]</p>
                </div>
            </div>
        </div>
```

### What You Will Read Pattern
```html
        <div class="dp-panels-wrapper dp-accordion-default dp-panel-active-color-dp-primary">
            <div class="dp-panel-group">
                <h3 class="dp-panel-heading">What You Will Read</h3>
                <div class="dp-panel-content">
                    <p>Overby/Chang: Chemistry, 14th Ed. - Chapter [X]: [Specific sections]</p>
                    
                    <p><strong>[Topic Category 1]</strong></p>
                    <ul>
                        <li aria-level="1"><span>[Main Topic] ([Section])</span>
                            <ul>
                                <li aria-level="2"><span>[Specific learning point with clear connection to LO]</span></li>
                                <li aria-level="2"><span>[Specific learning point with clear connection to LO]</span></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <p><strong>[Topic Category 2]</strong></p>
                    <ul>
                        <!-- Continue structured reading outline -->
                    </ul>
                    
                    <div class="dp-content-block" style="background: #fff3cd; border-left: 4px solid #ffc107; margin-top: 20px;">
                        <p><strong>📖 Reading Strategy:</strong> [Specific guidance for how to approach the reading material]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

---

## 📋 **TEMPLATE 5: VIDEO-FIRST LEARNING ARCHITECTURE**

### Video Section Pattern
```html
    <div class="dp-content-block kl_lectures2" style="background: #f5f5f5;">
        <h3 class="dp-has-icon" style="border-color: #1d2757;"><i class="fa-play fas" style="border-color: #1d2757;" aria-hidden="true"><span class="dp-icon-content" style="display: none;">&nbsp;</span></i> [SECTION TITLE] Videos</h3>
        <p>[Brief description of video content and progression]</p>
        
        <div class="dp-panels-wrapper dp-tabs-buttons-vertical dp-panel-color-dp-primary">
            
            <div class="dp-panel-group">
                <h4 class="dp-panel-heading">[Video Title]</h4>
                <div class="dp-panel-content">
                    <p><strong>[Video Title]</strong></p>
                    <p>[Brief description of video content and key concepts]</p>
                    <p>Time: [Duration] min.</p>
                    <p>Topics: [Comma-separated list of specific topics covered]</p>
                    <div class="dp-embed-wrapper">
                        <iframe title="[Video Title]" aria-label="Video: [Description]" src="[VIDEO_URL]" width="560" height="315" loading="lazy" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen"></iframe>
                    </div>
                    <p>&nbsp;</p>
                </div>
            </div>
            
            <!-- Repeat for additional videos -->
        </div>
    </div>
```

---

## 📋 **TEMPLATE 6: CIDILABS INTERACTIVE COMPONENTS**

### Available CidiLabs Components (in `/00-cidilabs-ai-training/`)
Each component includes detailed usage documentation in comments and TSTC brand customization:

#### **1. Flip Cards (`cidilabs-flipcards.html`)**
```html
<!-- Purpose: Active recall, vocabulary, concept review
     Features: Question mark icon, TSTC blue branding, keyboard accessible
     Usage: Memory aids, definitions, concept pairs -->
<div class="dp-flip-card dp-flip-card-fast dp-flip-card-show-both">
    <!-- [See full template in component file] -->
</div>
```

#### **2. Match Items (`cidilabs-match-items.html`)**
```html
<!-- Purpose: Connecting related concepts, pairing activities
     Features: Texas Blue background, red borders, automatic scoring
     Usage: Conjugate pairs, concept relationships, definitions -->
<div class="dp-match-items dp-match-pairing dp-si-rounded dp-si-outline">
    <!-- [See full template in component file] -->
</div>
```

#### **3. Vertical Button Tabs (`cidilabs-button-tabs-vertical.html`)**
```html
<!-- Purpose: Content organization, video sections, progressive disclosure
     Features: WCAG compliant, customizable styling, space-saving
     Usage: Video collections, step-by-step processes, organized content -->
<div class="dp-panels-wrapper dp-tabs-buttons-vertical dp-panel-color-dp-primary">
    <!-- [See full template in component file] -->
</div>
```

#### **4. Sort/Order Items (`cidilabs-sort-items.html`)**
```html
<!-- Purpose: Sequencing, categorization, process ordering
     Features: Drag-and-drop, immediate feedback, TSTC branding
     Usage: Process steps, chronological ordering, categorization -->
<div class="dp-si-sort-pool dp-si-sort-type-text">
    <!-- [See full template in component file] -->
</div>
```

#### **5. Select All (`cidilabs-select-all.html`)**
```html
<!-- Purpose: Multiple correct answers, comprehensive understanding
     Features: Beta component, critical thinking promotion
     Usage: Properties identification, characteristics selection -->
<div class="dp-si-sa">
    <!-- [See full template in component file] -->
</div>
```

#### **6. Modals (`cidilabs-modals.html`)**
```html
<!-- Purpose: Additional information, definitions, detailed explanations
     Features: Popup overlays, focused content delivery -->
<!-- [Component details available in file] -->
```

---

## 📋 **TEMPLATE 7: INTERACTIVE PRACTICE ACTIVITIES**

### Practice Section Pattern
```html
    <div class="dp-content-block">
        <h4 class="dp-has-icon" style="color: #1d2757;"><i class="fas fa-[ICON]" style="color: #1d2757;" aria-hidden="true"></i> Practice & Apply: [Activity Title]</h4>
        <p style="margin-bottom: 15px;"><strong>Apply LO[X].[Y].[Z]:</strong> [Clear connection to learning objective and instructions]. <em>[Additional guidance or context]</em></p>
        
        <!-- Activity Content -->
        [SPECIFIC INTERACTIVE ELEMENT - matching, calculations, flip cards, etc.]
        
        <!-- Key Concepts Summary -->
        <div style="background-color: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-top: 15px;">
            <h6 style="color: #ffeaa7; margin-bottom: 10px;"><i class="fas fa-lightbulb"></i> Key Concepts to Remember:</h6>
            <ul style="color: white; margin-bottom: 0;">
                <li><strong>[Concept]:</strong> [Clear explanation]</li>
                <li><strong>[Concept]:</strong> [Clear explanation]</li>
                <!-- Continue for key concepts -->
            </ul>
        </div>
    </div>
```

### Problem-Solving Pattern (for calculations)
```html
        <!-- Problem with Progressive Difficulty -->
        <div style="background-color: #ffffff; border: 2px solid #1d2757; border-radius: 10px; padding: 20px; margin: 15px 0;">
            <p><span style="color: white; background-color: [COLOR]; padding: 8px 15px; border-radius: 5px; font-weight: bold;">PROBLEM [N] - [DIFFICULTY]</span><strong> [Problem Statement]</strong></p>
            <div class="dp-panels-wrapper dp-accordion-default dp-panel-active-color-dp-primary">
                <div class="dp-panel-group">
                    <p class="dp-panel-heading" style="color: white !important; background: #1D2757;">Answer & Step-by-Step Solution</p>
                    <div class="dp-panel-content">
                        <p><strong>Answer: [ANSWER]</strong></p>
                        <p><em>Not what you got? Study this walk-through to understand where you went wrong.</em></p>
                        <p><strong>Step 1:</strong> [Clear step]</p>
                        <p><strong>Step 2:</strong> [Clear step]</p>
                        <!-- Continue with all steps -->
                    </div>
                </div>
            </div>
        </div>
```

---

## 📋 **TEMPLATE 8: CIDILABS INTEGRATION STRATEGY**

### Component Selection Guide
**Based on Learning Objective Types:**

| Learning Objective Type | Recommended CidiLabs Component | Example Usage |
|-------------------------|--------------------------------|---------------|
| **Memorization/Recall** | Flip Cards | Strong acids, formulas, definitions |
| **Concept Relationships** | Match Items | Conjugate pairs, acid-base theories |
| **Process/Sequence** | Sort Items | Calculation steps, experimental procedures |
| **Content Organization** | Vertical Tabs | Video collections, multi-part concepts |
| **Comprehensive Understanding** | Select All | Properties identification, characteristics |
| **Additional Information** | Modals | Detailed explanations, safety notes |

### TSTC Brand Customization Standards
All components include:
- **Texas Blue background** (`#1d2757`)
- **Red accent borders** (`#d13138`) 
- **White text for contrast** on colored backgrounds
- **Accessibility compliance** (keyboard navigation, WCAG standards)
- **Responsive Bootstrap integration**

### Implementation Workflow
1. **Identify Learning Need** - What type of interaction supports the LO?
2. **Select Component** - Use the guide above to choose appropriate CidiLabs tool
3. **Copy Template** - Start with the template from `/00-cidilabs-ai-training/`
4. **Customize Content** - Replace placeholder content with lesson-specific material
5. **Verify Branding** - Ensure TSTC colors and styling are maintained
6. **Test Accessibility** - Confirm keyboard navigation and screen reader compatibility

---

## 🎨 **ENHANCED DESIGN STANDARDS**

### Color Palette
- **Primary Brand:** #1d2757 (headers, icons)
- **Secondary Brand:** #d13138 (accents, highlights)
- **Background Sections:** #f5f5f5
- **Warning/Tips:** #fff3cd with #ffc107 border
- **Success/Completed:** #d4edda with #28a745 elements

### Typography Hierarchy
- **Module Headers:** `<h2 class="dp-heading">`
- **Section Headers:** `<h3 class="dp-has-icon">`
- **Subsection Headers:** `<h4 class="dp-panel-heading">`
- **Lead Text:** `<p class="lead">`

### Iconography Standards
- **Reading:** `fas fa-book`
- **Videos:** `fas fa-play`
- **Practice:** `fas fa-hands-helping` or `fas fa-brain`
- **Calculations:** `fas fa-calculator`
- **Tips/Lightbulb:** `fas fa-lightbulb`
- **Navigation:** `fas fa-arrow-left`

---

## 📊 **CONTENT QUALITY STANDARDS**

### Essential Elements Every Page Must Have:
1. **Complete HTML document structure**
2. **Rich, contextual introductions** (minimum 2-3 sentences)
3. **Clear learning objective alignment** with ★ indicators
4. **Real-world applications and relevance**
5. **Structured reading guidance**
6. **Video-first learning progression**
7. **Interactive practice activities** using appropriate CidiLabs components
8. **Progressive problem difficulty**
9. **Comprehensive step-by-step solutions**
10. **Professional visual design consistency**
11. **TSTC brand compliance** in all interactive elements

### Content Depth Requirements:
- **Module Introduction:** 100+ lines minimum
- **Lesson Files:** 700+ lines minimum for full content
- **SME Consultation Guides:** 1000+ lines for comprehensive planning

---

## 🚀 **ENHANCED IMPLEMENTATION STRATEGY**

### Phase 1: CidiLabs Component Integration
1. **Inventory existing activities** in Module 5 for component mapping
2. **Apply templates** from `/00-cidilabs-ai-training/` folder
3. **Ensure TSTC brand consistency** across all components

### Phase 2: Template Application
1. Use structural templates as skeleton for new content
2. Apply pedagogical patterns consistently
3. Integrate appropriate CidiLabs components for each learning objective

### Phase 3: Content Enhancement
1. Expand introductions with real-world context
2. Add comprehensive learning guidance
3. Select optimal interactive activities using component guide

### Phase 4: Quality Assurance
1. Verify all templates match Module 5 standards
2. Check content depth and pedagogical richness
3. Ensure consistent visual design and TSTC branding
4. Test CidiLabs component functionality and accessibility
5. **Verify Key Takeaways section:** Must use `fas fa-key` icon with "Key Takeaways" heading (CME/DA mandate, Feb 2026)

---

## 🔑 **REQUIRED LESSON CONCLUSION STANDARD**

### Key Takeaways Section (MANDATORY)
**Institutional Requirement:** All lessons MUST end with standardized "Key Takeaways" section per CME and Dean of Academics directive (February 20, 2026)

**Required Format:**
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
    <p><strong>Next:</strong> [Preview of upcoming content]</p>
    <p><strong>Study Tip:</strong> [Specific recommendation]</p>
</div>
```

**Non-Negotiable Requirements:**
- ✅ Heading text MUST be "Key Takeaways" (not "Summary", "Conclusion", or variations)
- ✅ Icon MUST be `fas fa-key` (key icon)
- ✅ Section appears at end of every lesson before closing tags
- ❌ Do NOT use `fa-check-circle` or other icons
- ❌ Do NOT use alternative heading text

**Rationale:** Standardization supports student navigation, institutional consistency, and CME/administrative requirements.

---

## 💡 **CONTEXT OPTIMIZATION INSIGHTS**

### Discovered Resources That Improve Efficiency:
1. **CidiLabs Component Library** - Pre-built, documented, branded interactive elements
2. **Detailed Usage Documentation** - Each component includes purpose, features, and use cases
3. **TSTC Brand Customization** - Consistent Texas Blue and red accent styling
4. **Accessibility Compliance** - WCAG standards built into components
5. **Copy-Paste Ready Templates** - No need to recreate interactive elements from scratch

This discovery significantly enhances the template extraction by providing:
- **Rapid Development** - Use pre-built components instead of custom HTML
- **Consistent Interactions** - Standardized activity patterns across modules  
- **Professional Quality** - Thoroughly tested, accessible components
- **Brand Alignment** - TSTC-customized styling maintained automatically

The `/00-cidilabs-ai-training/` folder is a crucial resource for maintaining quality and efficiency in future chat sessions focused on content development.