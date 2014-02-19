# gulp-bailey

```javascript
var bailey = require('gulp-bailey');

gulp.task('default', function() {
  gulp.src('src/*.bs')
    .pipe(bailey())
    .pipe(gulp.dest('dist/'))
});
```
