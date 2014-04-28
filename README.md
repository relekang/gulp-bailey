# gulp-bailey
This gulp-plugin compiles [bailey.js](https://github.com/haeric/bailey.js) to javascript.

### Install

    $ npm install --save-dev gulp-bailey

### Usage
```javascript
var bailey = require('gulp-bailey');

gulp.task('default', function() {
  gulp.src('src/*.bs')
    .pipe(bailey())
    .pipe(gulp.dest('dist/'))
});
```

### License
MIT © Rolf Erik Lekang 
