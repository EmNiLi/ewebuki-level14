module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

//        concat: {
//            // 2. Configuration for concatinating files goes here.
//            dist: {
//                src: [
//                    'js/concat/*.js'
//                ],
//                dest: 'js/production.js',
//            }
//        },
//
//        uglify: {
//            build: {
//                src: 'js/production.js',
//                dest: 'js/production.min.js'
//            }
//        },

        sass: {
            dist: {
                // options: {
                //     style: 'compressed'
                // },
                // files: {
                //     'css/build/global.css': 'css/global.scss'
                // }
                files: [{
                    expand: true,
                    cwd: 'css/scss',
                    src: ['*.scss'],
                    dest: 'css/css',
                    ext: '.css'
                }]
            } 
        },

        cssmin: {
          minify: {
            expand: true,
            cwd: 'css/css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/css-min/',
            ext: '.css'
          }
        },

        watch: {
//            options: {
//                livereload: true,
//            },
//            scripts: {
//                files: ['js/concat/*.js'],
//                tasks: ['concat', 'uglify'],
//                options: {
//                    spawn: false,
//                },
//            },
            css: {
                files: ['css/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
            cssmin: {
                files: ['css/css/*'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            } 
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['concat', 'uglify','sass','cssmin','watch']);
    grunt.registerTask('default', [ 'sass','cssmin','watch']);

};
