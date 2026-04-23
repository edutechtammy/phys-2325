# Canvas Image Mapper

## Overview
This script enables Canvas LMS course content to display images and files in offline environments (local development, GitHub Pages) by mapping Canvas file IDs to local file paths.

## How It Works

1. **Canvas URLs** - Canvas uses URLs like:
   ```
   https://tstc.instructure.com/courses/2649/files/11536042/preview
   ```

2. **Script Detection** - The JavaScript detects these URLs and extracts the file ID (`11536042`)

3. **Mapping Lookup** - Checks `canvas-file-mapping.json` for the corresponding local path

4. **URL Replacement** - Replaces Canvas URL with local path like:
   ```
   ../Files/M2/electronegativity-chart.png
   ```

## Files

- **canvas-image-mapper.js** - JavaScript that performs URL replacement
- **canvas-file-mapping.json** - Maps Canvas file IDs to local file paths

## Usage

### Adding the Script to HTML Pages

Add this line to your HTML files after the other script tags, typically before `</body>`:

```html
<script src="../Files/00_image_script/canvas-image-mapper.js"></script>
```

### Adding New File Mappings

1. Find the Canvas file ID from the Canvas URL
2. Add entry to `canvas-file-mapping.json`:
   ```json
   {
     "11536042": "M2/electronegativity-chart.png",
     "11536043": "M3/phase-diagram.jpg"
   }
   ```
3. Ensure the actual file exists in `Files/M2/` or appropriate folder

## Finding Canvas File IDs

**Method 1: From HTML Source**
1. Right-click image in Canvas → Inspect
2. Look at `src` attribute: `...files/11536042/preview`
3. The number `11536042` is the file ID

**Method 2: From Canvas File Manager**
1. Go to Course → Files
2. Click on a file
3. URL will show: `.../files/11536042`

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
