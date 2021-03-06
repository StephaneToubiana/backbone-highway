module.exports = {
  options: {
    configFile: 'karma.conf.js'
  },
  watch: {
    reporters: ['mocha'],
    background: true,
    captureTimeout: 6000
  },
  once: {
    reporters: ['mocha'],
    singleRun: true,
    captureTimeout: 6000
  },
  coverage: {
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'],
    captureTimeout: 5000,
    singleRun: true,
    preprocessors: {
      '<%= config.src %>/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      includeAllSources: true,
      dir: 'coverage',
      subdir: function (browser) {
        // jshint strict: false
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    }
  },
  ci: {
    reporters: 'dots',
    browsers: ['PhantomJS'],
    captureTimeout: 5000,
    singleRun: true
  }
};
