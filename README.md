# gulp-inspect
makes it easy to inspect gulp pipelines. Can be easily turned on and off.

### Buildstatus/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/gulp-inspect.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-inspect)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gulp-inspect/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-inspect/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-inspect/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-inspect)

### Usage

```javascript
gulp.task("inspection",function(){
    gulp.src("./test/test.md")
        .pipe(plugins.gulpInspect(true))
        .pipe(gulp.dest("./test/result/"));
});
```
