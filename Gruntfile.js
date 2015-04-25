module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                sourceMap: true
            },
            js: {
                src: [  'Hyphenator.js', 'patterns/en-us.js' ],
                dest: 'dist/hyphenate.js'
            }
        },
        uglify: {
            build: {
                files: {
                    "dist/Hyphenator.min.js": [ "Hyphenator.js" ],
                    "dist/hyphenate.min.js": [ "dist/hyphenate.js" ]
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['build']);
};