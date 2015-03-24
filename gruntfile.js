module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'public/**/*.js', 'routes/*.js', 'test/**.js']
    },

    watch: {
      tasks: ['jshint'],
      files: ['<%= jshint.files %>']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'watch']); 
};