'use strict';

// Include Gulp & tools we'll use
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

// Load tasks from the `tasks` directory
try { require('require-dir')('gulp'); } catch (err) { console.error(err); }


// Clean output directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git'], {dot: true}));


// Build production files, the default task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['jshint', 'html', 'scripts', 'images', 'fonts', 'copy'], cb);
});
