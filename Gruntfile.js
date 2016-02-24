module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        watch: {
            sass: {
                files: ['edx-capa.scss'],
                tasks: ['sass']
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: false,
                relativeAssets: false,
                outputStyle: 'expanded'
            },
            build: {
                files: [{
                    expand: true,
                    src: ['edx-capa.scss'],
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');
};
