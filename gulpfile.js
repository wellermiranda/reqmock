var gulp = require('gulp');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

var testable = [
    './tests/**/*.js',
    './src/**/*.js'
];

function unitTests(){
	gulp.src(testable, { 
		read: false 
	}).pipe(mocha({ 
		reporter: 'spec'
	})).on('error', function(erro) {
		return console.log(erro);
	});
};

gulp.task('default', function () {
    unitTests();
    return watch(testable, unitTests);
});