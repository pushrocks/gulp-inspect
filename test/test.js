/// <reference path="../ts/typings/main.d.ts" />
var gulp = require("gulp");
var plugins = {
    beautylog: require("beautylog"),
    gulpInspect: require("../dist/index.js")
};
gulp.task("check1", function () {
    gulp.src("./test/test.md")
        .pipe(plugins.gulpInspect(true))
        .pipe(gulp.dest("./test/result/"));
});
gulp.task("check2", function () {
    gulp.src("./test/test.md")
        .pipe(plugins.gulpInspect(false))
        .pipe(gulp.dest("./test/result/"));
});
gulp.task("check3", function () {
    gulp.src("./test/test.md")
        .pipe(plugins.gulpInspect("hello"))
        .pipe(gulp.dest("./test/result/"));
});
gulp.task("default", ["check1", "check2", "check3"], function () {
    plugins.beautylog.success("Test passed!");
});
gulp.start.apply(gulp, ['default']);
//# sourceMappingURL=test.js.map