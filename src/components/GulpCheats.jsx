import React from "react";

export const GulpCheats = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">🛠️ Gulp Шпаргалка</h1>
        <p className="text-xl text-gray-400">
          Основні команди та приклади задач Gulp
        </p>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-xl px-6 py-2 border-b">Операція</th>
              <th className="text-xl px-6 py-2 border-b">Команда/код</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            <tr>
              <td className="text-xl px-6 py-2 border-b">Ініціалізація Gulp</td>
              <td className="text-xl px-6 py-2 border-b">
                npm install --save-dev gulp
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Створення Gulp-файлу
              </td>
              <td className="text-xl px-6 py-2 border-b">
                <code>gulpfile.js</code>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Компiляцiя SCSS</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});`}</pre>
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Мінімізація CSS</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'));
});`}</pre>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Мінімізація JavaScript
              </td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`const uglify = require('gulp-uglify');

gulp.task('minify-js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});`}</pre>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Оптимізація зображень
              </td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});`}</pre>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Автоматичне оновлення (BrowserSync)
              </td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('src/scss/**/*.scss', gulp.series('scss')).on('change', browserSync.reload);
});`}</pre>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Задача за замовчуванням (default)
              </td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">{`gulp.task('default', gulp.series('scss', 'minify-css', 'minify-js', 'images', 'serve'));`}</pre>
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Запуск задачі</td>
              <td className="text-xl px-6 py-2 border-b">npx gulp scss</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Запуск сервера</td>
              <td className="text-xl px-6 py-2 border-b">npx gulp serve</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Запуск задачі за замовчуванням
              </td>
              <td className="text-xl px-6 py-2 border-b">npx gulp</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Окремий watcher</td>
              <td className="text-xl px-6 py-2 border-b">
                gulp.task('watch', () => &#123; ... &#125;)
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Очищення папки dist
              </td>
              <td className="text-xl px-6 py-2 border-b">
                del(['dist/**', '!dist'])
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">
                Запуск задач серіями / паралельно
              </td>
              <td className="text-xl px-6 py-2 border-b">
                gulp.task('build', series('clean', parallel(...)))
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Корисні плагіни</td>
              <td className="text-xl px-6 py-2 border-b">
                gulp-sourcemaps, gulp-autoprefixer, gulp-rename, gulp-if
              </td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Структура проєкту</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">
                  {`├── src/
│   ├── scss/
│   ├── js/
│   └── images/
├── dist/
├── gulpfile.js
├── package.json`}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
