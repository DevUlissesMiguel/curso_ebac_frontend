// Importa os pacotes do Gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Importa os plugins
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin'); // ATENÇÃO: Veja a nota de instalação abaixo

/*
 * TAREFAS INDIVIDUAIS (PRIVADAS)
 */

// Tarefa 1: Compilação do SASS
// Pega os arquivos .scss, compila para .css e minifica
function compilaSass() {
    return src('./src/styles/main.scss') // Arquivo de origem
        .pipe(sass({
            outputStyle: 'compressed' // Minifica o CSS resultante
        }))
        .pipe(dest('./dist/css')); // Pasta de destino
}

// Tarefa 2: Compressão de Imagens
// Pega as imagens, otimiza e salva no destino
function comprimeImagens() {
    return src('./src/images/*') // Pega todas as imagens na pasta
        .pipe(imagemin())
        .pipe(dest('./dist/images')); // Pasta de destino
}

// Tarefa 3: Compressão de JavaScript
// Pega os arquivos .js, minifica (uglify) e salva no destino
function comprimeJS() {
    return src('./src/scripts/*.js') // Pega todos os arquivos .js
        .pipe(uglify())
        .pipe(dest('./dist/js')); // Pasta de destino
}

/*
 * TAREFAS PÚBLICAS (EXPORTADAS)
 */

// Tarefa 'build': Executa todas as tarefas em paralelo
// Usamos 'parallel' porque nenhuma tarefa depende da outra
const build = parallel(compilaSass, comprimeJS, comprimeImagens);

// Tarefa 'watch': Fica observando os arquivos
// Se houver mudança, executa a tarefa correspondente
function watchFiles() {
    watch('./src/styles/**/*.scss', compilaSass); // Observa SASS
    watch('./src/scripts/*.js', comprimeJS); // Observa JS
    watch('./src/images/*', comprimeImagens); // Observa Imagens
}

// Exporta as tarefas para que possam ser chamadas no terminal
exports.default = build; // Comando: gulp
exports.watch = watchFiles; // Comando: gulp watch
exports.build = build; // Comando: gulp build
exports.sass = compilaSass;
exports.images = comprimeImagens;
exports.js = comprimeJS;