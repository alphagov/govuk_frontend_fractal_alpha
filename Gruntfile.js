module.exports = function(grunt){
  grunt.initConfig({

    // Builds Sass
    sass: {
      dev: {
        options: {
          style: "expanded",
          sourcemap: true,
          includePaths: [
            'govuk_modules/govuk_template/assets/stylesheets',
            'govuk_modules/govuk_frontend_toolkit/stylesheets'
          ],
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: "app/assets/sass",
          src: ["*.scss"],
          dest: "public/stylesheets/",
          ext: ".css"
        }]
      }
    },

    // Copies templates and assets from external modules and dirs
    sync: {
      assets: {
        files: [{
          expand: true,
          cwd: 'app/assets/',
          src: ['**/*', '!sass/**'],
          dest: 'public/'
        }],
        ignoreInDest: "**/stylesheets/**",
        updateAndDelete: true
      },
      govuk: {
        files: [{
          cwd: 'node_modules/govuk_frontend_toolkit/',
          src: '**',
          dest: 'govuk_modules/govuk_frontend_toolkit/'
        },
        {
          cwd: 'node_modules/govuk_template_jinja/assets/',
          src: '**',
          dest: 'govuk_modules/govuk_template/assets/'
        },
        {
          cwd: 'node_modules/govuk_template_jinja/views/layouts/',
          src: '**',
          dest: 'govuk_modules/govuk_template_jinja/views/layouts/'
        },
        {
          cwd: 'node_modules/govuk-elements-sass/public/sass/',
          src: ['**', '!node_modules', '!elements-page.scss', '!elements-page-ie6.scss', '!elements-page-ie7.scss', '!elements-page-ie8.scss', '!main.scss', '!main-ie6.scss', '!main-ie7.scss', '!main-ie8.scss', '!prism.scss'],
          dest: 'govuk_modules/govuk-elements-sass/'
        },
        {
          cwd: 'node_modules/govuk_template_jinja/assets/',
          src: '**',
          dest: 'public/'
        }]
      },
      govuk_template_jinja: {
        files: [{
          cwd: 'govuk_modules/govuk_template_jinja/views/layouts/',
          src: '**',
          dest: 'lib/'
        }]
      },
      govuk_elements: {
        files: [{
          cwd: 'govuk_modules/govuk-elements-sass',
          src: ['**'],
          dest: 'app/assets/sass/'
        }]
      },
    },

    // Watches assets and sass for changes
    watch: {
      css: {
        files: ['app/assets/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      assets:{
        files: ['app/assets/**/*', '!app/assets/sass/**'],
        tasks: ['sync:assets'],
        options: {
          spawn: false,
        }
      }
    }
  });

  [
    'grunt-sync',
    'grunt-contrib-watch',
    'grunt-sass'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('generate-assets', [
    'sync',
    'sass'
  ]);

  grunt.registerTask('default', [
    'generate-assets'
  ]);

  grunt.registerTask(
    'test',
    'default',
    function () {
      grunt.log.writeln('Test that the app runs');
    }
  );
};
