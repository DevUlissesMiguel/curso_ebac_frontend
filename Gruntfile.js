module.exports = function (grunt) {

    // 1. Inicializa a configuração do Grunt
    grunt.initConfig({
        // Lê o arquivo package.json
        pkg: grunt.file.readJSON('package.json'),

        // 2. Executar a compilação do LESS
        less: {
            build: { // Um "target" para a tarefa
                options: {
                    compress: true // Minifica o CSS resultante
                },
                files: {
                    // 'arquivo de destino': 'arquivo de origem'
                    'dist/css/main.css': 'src/less/main.less'
                }
            }
        },

        // 3. Executar a compressão de código JavaScript
        uglify: {
            build: { // Um "target" para a tarefa
                files: {
                    // 'arquivo de destino': 'arquivo de origem'
                    'dist/js/main.min.js': ['src/js/main.js']
                    // A origem é um array, caso você queira adicionar mais arquivos JS
                }
            }
        },

        // Tarefa Bônus: "Watch" (Opcional, mas muito recomendado)
        // Fica observando os arquivos e executa as tarefas automaticamente
        watch: {
            less: {
                files: ['src/less/**/*.less'], // Observa todos os arquivos .less
                tasks: ['less'] // Executa a tarefa 'less' ao salvar
            },
            js: {
                files: ['src/js/**/*.js'], // Observa todos os arquivos .js
                tasks: ['uglify'] // Executa a tarefa 'uglify' ao salvar
            }
        }
    });

    // Carrega os plugins do Grunt que instalamos
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch'); // Carrega o plugin 'watch'

    // Registra as tarefas que podem ser executadas

    // Tarefa 'default' (Executa ambas as tarefas)
    // Para rodar, digite no terminal: grunt
    grunt.registerTask('default', ['less', 'uglify']);

};