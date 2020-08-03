module.exports = function (grunt) {
    'use strict';
    // Project configuration
    var autoprefixer = require('autoprefixer');

    const sass = require('node-sass');

    var pkgInfo = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                implementation: sass,
                sourcemap: 'none',
                outputStyle: 'expanded',
                linefeed: 'lf',
                indentType: 'tab',
                indentWidth: 1
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['style.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['main.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['font-icons.scss'],
                        dest: 'assets/css/components',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['comments.scss'],
                        dest: 'assets/css/components',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['mobile.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'sass/',
                        src: ['widget-areas.scss'],
                        dest: 'assets/css/components',
                        ext: '.css'
					},
					{
                        expand: true,
                        cwd: 'sass/',
                        src: ['all.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    },
					{
                        expand: true,
                        cwd: 'sass/',
                        src: ['style-rtl.scss'],
                        dest: 'assets/css',
                        ext: '.css'
                    },
					{
                        expand: true,
                        cwd: 'sass/',
                        src: ['main-rtl.scss'],
                        dest: 'assets/css',
                        ext: '.css'
					},
					{
                        expand: true,
                        cwd: 'sass/',
                        src: ['classic-gallery.scss'],
                        dest: 'assets/css/components',
                        ext: '.css'
                    }
                ]
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    autoprefixer({
                        cascade: false
                    })
                ]
            },
            style: {
                expand: true,
                src: [
                    'assets/css/*.css',
                    '!assets/css/*.min.css',
                    '!assets/css/font-awesome.css',
                ]
            }
        },

        uglify: {
            js: {
                files: [
                    {
                        src: 'assets/js/a11y.js',
                        dest: 'assets/js/a11y.min.js',
                    },
                    {
                        src: 'assets/js/back-to-top.js',
                        dest: 'assets/js/back-to-top.min.js',
                    },
                    {
                        src: 'assets/js/dropdown-click.js',
                        dest: 'assets/js/dropdown-click.min.js',
                    },
                    {
                        src: 'assets/js/menu.js',
                        dest: 'assets/js/menu.min.js',
                    },
                    {
                        src: 'assets/js/navigation-search.js',
                        dest: 'assets/js/navigation-search.min.js',
					},
					{
                        src: 'assets/js/main.js',
                        dest: 'assets/js/main.min.js',
                    },
                ]
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            css: {
                files: [
                    {
                        src: 'assets/css/style.css',
                        dest: 'assets/css/style.min.css',
                    },
                    {
                        src: 'assets/css/all.css',
                        dest: 'assets/css/all.min.css',
                    },
                    {
                        src: 'assets/css/mobile.css',
                        dest: 'assets/css/mobile.min.css',
                    },
                    {
                        src: 'assets/css/components/font-icons.css',
                        dest: 'assets/css/components/font-icons.min.css',
                    },
                    {
                        src: 'assets/css/components/comments.css',
                        dest: 'assets/css/components/comments.min.css',
                    },
                    {
                        src: 'assets/css/mobile.css',
                        dest: 'assets/css/mobile.min.css',
                    },
                    {
                        src: 'assets/css/main.css',
                        dest: 'assets/css/main.min.css',
                    },
                    {
                        src: 'assets/css/components/widget-areas.css',
                        dest: 'assets/css/components/widget-areas.min.css',
					},
					{
                        src: 'assets/css/style-rtl.css',
                        dest: 'assets/css/style-rtl.min.css',
					},
					{
                        src: 'assets/css/main-rtl.css',
                        dest: 'assets/css/main-rtl.min.css',
					},
					{
                        src: 'assets/css/components/classic-gallery.css',
                        dest: 'assets/css/components/classic-gallery.min.css',
                    },
                ]
            }
        },

        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                files: [
					{
                        src: [
                            'assets/js/menu.js',
                            'assets/js/a11y.js',
                        ],
                        dest: 'assets/js/main.js',
                    },
                ]
            }
        },

        copy: {
            main: {
                options: {
                    mode: true
                },
                src: [
                    '**',
                    '!node_modules/**',
                    '!build/**',
                    '!css/sourcemap/**',
                    '!.git/**',
                    '!.github/**',
                    '!bin/**',
                    '!.gitlab-ci.yml',
                    '!cghooks.lock',
                    '!tests/**',
                    '!*.sh',
                    '!*.map',
                    '!Gruntfile.js',
                    '!package.json',
                    '!.gitignore',
                    '!phpunit.xml',
                    '!README.md',
                    '!sass/**',
                    '!vendor/**',
                    '!composer.json',
                    '!composer.lock',
                    '!package-lock.json',
                    '!phpcs.xml.dist',
                ],
                dest: 'generatepress/'
            }
        },

        compress: {
            main: {
                options: {
                    archive: 'generatepress-' + pkgInfo.version + '.zip',
                    mode: 'zip',
                    level: 5
                },
                files: [
                    {
                        src: [
                            './generatepress/**'
                        ]

                    }
                ]
            }
        },

        clean: {
            main: ["generatepress"],
            zip: ["*.zip"]
        },
    });

    // Load grunt tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // SASS compile
    grunt.registerTask('scss', ['sass']);

    // Style
    grunt.registerTask('style', ['scss', 'postcss:style']);

    // Style and min
    grunt.registerTask('build', ['style', 'concat', 'uglify:js', 'cssmin:css']);

    // Grunt release - Create installable package of the local files
	grunt.registerTask('package', ['clean:zip', 'copy:main', 'compress:main', 'clean:main']);

    grunt.util.linefeed = '\n';
};
