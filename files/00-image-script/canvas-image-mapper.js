/**
 * Canvas Image Mapper
 * 
 * Automatically replaces Canvas file URLs with local file paths for offline viewing.
 * This script intercepts Canvas instructure.com image URLs and maps them to local files
 * using a JSON mapping file, enabling the course to function both in Canvas LMS and
 * offline environments (local development, GitHub Pages, etc.).
 * 
 * Usage: Include this script in your HTML pages after the DOM content.
 * The script will automatically run on page load.
 */

(function () {
    'use strict';

    // Configuration
    const MAPPING_FILE = '../Files/00_image_script/canvas-file-mapping.json';
    const FILES_BASE_PATH = '../Files/';

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
