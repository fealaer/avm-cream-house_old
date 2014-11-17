'use strict';
module.exports = function (grunt) {
  var pkg = grunt.file.readJSON('./package.json');
  var bower = grunt.file.readJSON('./bower.json');

  return {
    version: pkg.version,
    debug: false,
    appURL: 'http://localhost:9005',
    publicSiteURL: 'http://localhost:3000',
    apiURL: 'http://api.convertiser.it',
    clientID: '3c64135fde5c807e6063',

    // Locale
    projectLocale: 'en-US',
    defaultLocale: 'pl-PL',

    dependencies: bower.dependencies,
    appPath: 'app',
    distPath: 'dist',
    assetsPath: 'assets',
    packagesPath: '{components,modules}',
    componentsPath: 'lib',
    testsPath: 'tests',
    localesPath: 'locales',

    cachePath: '.cache',
    tmpPath: '.tmp',
    outputPath: '.build'
  };
};
