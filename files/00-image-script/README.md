# Canvas Image Mapper — PHYS-2325 University Physics I

## Overview

This script enables lesson HTML files to display images correctly in two environments:

1. **Local / GitHub** — uses local files from the `files/` directory for offline review and development
2. **Canvas LMS** — the lesson files imported into Canvas carry live `/files/{id}` URLs; if the script is included, it maps those IDs back to local paths so the GitHub copy stays in sync

The JSON mapping file acts as the bridge between the two environments.

---

## Workflow: Adding a New Image

### Step 1 — Place the local file
Put the image in the correct lesson subfolder under `files/`:
```
files/M1/M1L1/Mars_Climate_Orbiter_2.jpg
files/M1/M1L2/Speedometer.jpg
```

### Step 2 — Reference it in the lesson HTML (local placeholder)
In the lesson `.html` file, use `CANVAS_IMAGE_URL` as the `src` during local development:
```html
<img src="CANVAS_IMAGE_URL"
     data-local-src="../../../files/M1/M1L1/Mars_Climate_Orbiter_2.jpg"
     alt="Mars Climate Orbiter" />
```
The script will swap `CANVAS_IMAGE_URL` for the `data-local-src` value when viewed locally.

### Step 3 — Upload to Canvas and get the file ID
1. In the Canvas course, go to **Files** and upload the image to the matching module folder
2. Click the uploaded file — the browser URL will show:
   ```
   https://tstc.instructure.com/courses/{courseId}/files/12345678
   ```
3. The number `12345678` is the Canvas file ID

### Step 4 — Update the JSON
Open `canvas-file-mapping.json` and replace the `REPLACE_M{N}L{N}` placeholder key with the real Canvas file ID:
```json
"12345678": "M1/M1L1/Mars_Climate_Orbiter_2.jpg"
```

### Step 5 — Update the lesson HTML
Replace `CANVAS_IMAGE_URL` in the lesson file with the real Canvas URL:
```
https://tstc.instructure.com/courses/{courseId}/files/12345678/preview
```

---

## Adding the Script to Lesson HTML Files

Lesson files sit three levels deep (`module{N}/m{N}l{N}-{slug}/new-lesson-output/`).
Add this line before `</body>`:

```html
<script src="../../../files/00-image-script/canvas-image-mapper.js"></script>
```

---

## Current Module 1 Images

| Lesson | Local File | Canvas ID Status |
|--------|-----------|-----------------|
| M1L1 Measurement | `M1/M1L1/Mars_Climate_Orbiter_2.jpg` | PENDING |
| M1L2 Instantaneous Velocity | `M1/M1L2/Speedometer.jpg` | PENDING |
| M1L3 Acceleration | `M1/M1L3/Comair_5191_crash_site_3.jpg` | PENDING |
| M1L4 Constant Acceleration | `M1/M1L4/Car-highway-driver.jpg` | PENDING |
| M1L5 Free Fall | `M1/M1L5/Firefly An apple falling from a tree...jpg` | PENDING |
| M1L6 Graphical Integration | `M1/M1L6/Velocity_Time_physics_graph.svg.png` | PENDING |

Update this table and the JSON as each image is uploaded to Canvas.

---

## File Structure

```
files/
├── 00-image-script/
│   ├── canvas-image-mapper.js     ← the script
│   ├── canvas-file-mapping.json   ← ID → local path mapping
│   └── README.md                  ← this file
├── M1/
│   ├── M1L1/Mars_Climate_Orbiter_2.jpg
│   ├── M1L2/Speedometer.jpg
│   ├── M1L3/Comair_5191_crash_site_3.jpg
│   ├── M1L4/Car-highway-driver.jpg
│   ├── M1L5/Firefly An apple falling...jpg
│   └── M1L6/Velocity_Time_physics_graph.svg.png
├── M2/   ← images TBD
├── M3/   ← images TBD
├── M4/   ← images TBD
└── M5/   ← images TBD
```

---

## Troubleshooting

**Images not showing locally?**
- Check that the `data-local-src` path in the HTML is correct relative to the lesson file
- Verify the file exists at the path shown in the table above
- Open browser console — the script logs mapping hits and misses

**Images not showing on GitHub?**
- Confirm the JSON has the correct Canvas file ID for that image
- Confirm the local file is committed to the repo (check `.gitignore` — image files should not be excluded)

**Script not running?**
- Verify the `<script>` tag path: lesson files are 3 levels deep, so the path must start with `../../../`
- Check browser console for 404 errors on the script or JSON file

## File Organization

```
Files/
├── 00_image_script/
│   ├── canvas-image-mapper.js
│   ├── canvas-file-mapping.json
│   └── README.md (this file)
├── M0/
├── M1/
├── M2/
│   ├── electronegativity-chart.png
│   └── lewis-structures-diagram.pdf
└── ...
```

## Features

- ✅ **No HTML changes required** - Works with existing Canvas-formatted content
- ✅ **Dual environment support** - Works both in Canvas and offline
- ✅ **Error handling** - Falls back to Canvas URL if local file missing
- ✅ **Console logging** - Reports mapping success/failures for debugging
- ✅ **Data preservation** - Stores original Canvas URL in `data-canvas-src` attribute

## Troubleshooting

**Images not loading?**
1. Check browser console for error messages
2. Verify file exists at the specified path in Files folder
3. Ensure JSON mapping syntax is correct (no trailing commas)
4. Check that script is loaded after DOM content

**Script not running?**
1. Verify script path is correct in HTML
2. Check browser console for JavaScript errors
3. Ensure `canvas-file-mapping.json` is accessible

## Notes

- The script runs automatically on page load
- Works with both `<img>` tags and file download links
- Preserves Canvas functionality when running in Canvas LMS
- Compatible with GitHub Pages static hosting
