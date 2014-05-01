# gulp-bailey
[![Build Status](https://travis-ci.org/relekang/gulp-bailey.svg?branch=master)](https://travis-ci.org/relekang/gulp-bailey)
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

### Options
#### `bare` - boolean
This will make the Javascript file without the wrapper function.

#### `node` - boolean
This will result in a version with node imports instead of requirejs-imports

#### `removeComments` - boolean  
This will remove all comments in the compiled version.

### License
MIT © Rolf Erik Lekang
