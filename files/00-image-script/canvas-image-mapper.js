/**
 * Canvas Image Mapper — PHYS-2325 University Physics I, TSTC Fall 2026
 *
 * Replaces CANVAS_IMAGE_URL placeholders and live Canvas instructure.com/
 * canvas.tstc.edu image URLs with local file paths for offline/GitHub review.
 *
 * Two modes:
 *   1. Placeholder mode — replaces src="CANVAS_IMAGE_URL" using data-local-src
 *      attributes placed on <img> tags during local development.
 *   2. Canvas URL mode — when viewing pages that have already been imported
 *      into Canvas and carry live /files/{id} URLs, maps IDs → local paths
 *      via canvas-file-mapping.json so the GitHub copy still shows images.
 *
 * Usage: Include in each lesson HTML before </body>:
 *   <script src="../../../files/00-image-script/canvas-image-mapper.js"><\/script>
 */

(function () {
    'use strict';

    // ── Configuration ────────────────────────────────────────────────────────
    // Path to the JSON mapping file, relative to the lesson HTML files
    // (lesson files sit 3 levels deep: module{N}/m{N}l{N}-{slug}/new-lesson-output/)
    const MAPPING_FILE = '../../../files/00-image-script/canvas-file-mapping.json';
    const FILES_BASE_PATH = '../../../files/';

    /**
     * Initialize the image mapper when DOM is ready
     */
    function initImageMapper() {
        // Fetch the Canvas ID to filename mapping
        fetch(MAPPING_FILE)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load mapping file: ${response.status}`);
                }
                return response.json();
            })
            .then(mapping => {
                replaceCanvasImages(mapping);
            })
            .catch(error => {
                console.warn('Canvas Image Mapper: Could not load mapping file.', error);
                console.info('Images will use Canvas URLs if available.');
            });
    }

    /**
     * Replace all Canvas image URLs with local file paths
     * @param {Object} mapping - Object mapping Canvas file IDs to local paths
     */
    function replaceCanvasImages(mapping) {
        // Find all images with Canvas URLs (instructure.com or canvas.tstc.edu)
        const canvasImages = document.querySelectorAll('img[src*="instructure.com"], img[src*="canvas.tstc.edu"]');
        let replacedCount = 0;

        canvasImages.forEach(img => {
            // Extract Canvas file ID from URL
            // Matches patterns like: /files/11536042 or /files/11536042/preview
            const match = img.src.match(/\/files\/(\d+)/);

            if (match && match[1]) {
                const canvasFileId = match[1];

                // Check if we have a mapping for this file ID
                if (mapping[canvasFileId]) {
                    const localPath = FILES_BASE_PATH + mapping[canvasFileId];

                    // Store original Canvas URL as data attribute for reference
                    img.setAttribute('data-canvas-src', img.src);

                    // Replace with local file path
                    img.src = localPath;

                    // Add error handler in case local file doesn't exist
                    img.addEventListener('error', function () {
                        const canvasSrc = this.getAttribute('data-canvas-src');
                        if (canvasSrc && this.src !== canvasSrc) {
                            console.warn(`Local image not found: ${localPath}. Reverting to Canvas URL.`);
                            this.src = canvasSrc;
                        }
                    }, { once: true });

                    replacedCount++;
                } else {
                    console.info(`Canvas Image Mapper: No mapping found for file ID ${canvasFileId}`);
                }
            }
        });

        if (replacedCount > 0) {
            console.log(`Canvas Image Mapper: Successfully mapped ${replacedCount} image(s) to local files.`);
        }
    }

    /**
     * Also handle instructure_file_link class links (PDFs, documents, etc.)
     * @param {Object} mapping - Object mapping Canvas file IDs to local paths
     */
    function replaceCanvasLinks(mapping) {
        const canvasLinks = document.querySelectorAll('a[href*="instructure.com/courses"][href*="/files/"], a[href*="canvas.tstc.edu/courses"][href*="/files/"]');
        let replacedCount = 0;

        canvasLinks.forEach(link => {
            const match = link.href.match(/\/files\/(\d+)/);

            if (match && match[1]) {
                const canvasFileId = match[1];

                if (mapping[canvasFileId]) {
                    const localPath = FILES_BASE_PATH + mapping[canvasFileId];
                    link.setAttribute('data-canvas-href', link.href);
                    link.href = localPath;
                    replacedCount++;
                }
            }
        });

        if (replacedCount > 0) {
            console.log(`Canvas Image Mapper: Successfully mapped ${replacedCount} file link(s) to local files.`);
        }
    }

    // Run when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImageMapper);
    } else {
        // DOM already loaded
        initImageMapper();
    }

})();
