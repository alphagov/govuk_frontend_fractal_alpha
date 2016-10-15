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


