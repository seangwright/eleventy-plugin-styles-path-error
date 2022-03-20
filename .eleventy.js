const pluginRss = require('@11ty/eleventy-plugin-rss'); // needed for absoluteUrl feature
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const { styles } = require('eleventy-plugin-styles');

module.exports = function (eleventyConfig) {
  // Site title
  eleventyConfig.addGlobalData('siteTitle', 'Plain Bootstrap5');

  // Add plugins
  eleventyConfig.addPlugin(styles, {
    inputDirectory: 'src/styles',
    publicDirectory: 'styles',
  });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // copy bootstrap js files
  // See: https://getbootstrap.com/docs/5.0/getting-started/contents/#js-files
  eleventyConfig.addPassthroughCopy({
    'node_modules/bootstrap/dist/js/': '/scripts/bootstrap/',
  });

  // // Pass-through files (copy them into to _site/ to make them available)
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/favicons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/scripts');

  // Watch target for local dev
  eleventyConfig.addWatchTarget('./src/robots.txt');
  eleventyConfig.addWatchTarget('./src/site.webmanifest');
  eleventyConfig.addWatchTarget('./src/favicons');
  eleventyConfig.addWatchTarget('./src/images');
  eleventyConfig.addWatchTarget('./src/fonts');
  eleventyConfig.addWatchTarget('./src/scripts');

  // RandomId function for IDs used by labelled-by
  eleventyConfig.addNunjucksGlobal('generateRandomIdString', function (prefix) {
    return prefix + '-' + Math.floor(Math.random() * 1000000);
  });

  // Base Config
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes', // this path is releative to input-path (src/)
      layouts: 'layouts', // this path is releative to input-path (src/)
      data: 'data', // this path is releative to input-path (src/)
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
