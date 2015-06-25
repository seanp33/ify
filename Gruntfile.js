module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      all: {
        files: {
          'static/ifybundle.js': [
            'static/ifybundle.js'
          ]
        }
      }
    },
    cssmin: {
      all: {
        files: {
          'static/fybundle.css': [
            'css/**/*.css'
          ]
        }
      }
    },
    clean: {
      dist: ['static/']
    },
    browserify: {
      dist: {
        files: {
          'static/ifybundle.js': ['browser.js'],
        }
      },
      debug: {
        files: {
          'static/ifybundle.js': ['browser.js'],
        },
        options:{
          browserifyOptions:{
            debug:true
          },
          watch:true,
          keepAlive:true,
          watchifyOptions:{
            verbose:true
          }
        }
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 9001,
          base: '.'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'clean:dist',
    'browserify:dist',
    'uglify:all',
    'cssmin:all'
  ]);

  grunt.registerTask('debug', [
    'clean:dist',
    'cssmin:all',
    'browserify:debug'
  ]);

};

