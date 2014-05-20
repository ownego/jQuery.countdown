// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      // 'requirejs',
      'qunit',
      'sinon'
    ],
    files: [
      'test/*.config.js',
      'lib/jquery.js',
      'src/**/*.js',
      'test/unit/**/*test.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    reporters: [
      'dots',
      'coverage'
    ],
    preprocessors: {
      'src/**/*.js': 'coverage'
    },
    coverageReporter: {
      type: 'text',
      dir: 'test/coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: [
      'PhantomJS'
    ],
    autoWatch: false,
    singleRun: true
  });
};
