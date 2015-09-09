module.exports = function(grunt){


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
            },
            release: {
                files: {
                    'dist/jquery.gesture.password.min.js': ['src/jquery.gesture.password.js']
                }
            }
        }
        
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['uglify:release']);

};

