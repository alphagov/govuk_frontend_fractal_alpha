'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'GOV.UK Frontend');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Register the Nunjucks adapter for your components.
 */
fractal.components.engine('@frctl/nunjucks'); 

/*
 * Look for files with a .nunj file extension.
 */
fractal.components.set('ext', '.nunj'); 

/*
 * Set the default preview layout
 */
fractal.components.set('default.preview', '@preview');

/*
 * Set the build directory for the static HTML
 */
fractal.web.set('builder.dest', __dirname + '/build');

/*
 * Variants are collated on the same page
 */
fractal.components.set('default.collated', true);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Require the Mandelbrot theme module
 */
const mandelbrot = require('@frctl/mandelbrot');

/*
 * Create a new instance with custom config options
 */
const myCustomisedTheme = mandelbrot({
    "skin": "black",
    "format": "json",
    "nav": ["docs", "components"],
    "panels": ["notes", "html", "view", "context", "resources", "info"],
});

/*
 * Specify a directory to hold the theme override templates
 */
myCustomisedTheme.addLoadPath(__dirname + '/govuk_theme'); 

/*
 * Tell Fractal to use the configured theme by default
 */
fractal.web.theme(myCustomisedTheme);


