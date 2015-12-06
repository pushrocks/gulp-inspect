/// <reference path="typings/tsd.d.ts" />
var plugins = {
    through: require("through2"),
    path: require("path"),
    beautylog: require("beautylog")("os"),
    gulpWT: require("gulp-wavethrough")
}

var doNothing = function(){

};

module.exports = (activateArg:boolean = true) => {
    if (activateArg == true) {
        return plugins.through.obj((file, enc, cb) => {
            plugins.beautylog.info("file in your pipeline:")
            console.log("|| ".blue + String(file.contents));
            console.log("|| ".blue + file.path);
            console.log("|| ".blue + file.base);
            console.log("|| ".blue + file.relative);
            return cb(null, file); //run callback function to signal end of plugin process.
        });
    } else if (activateArg == false) {
        return plugins.gulpWT(); //wave through
    } else {
        plugins.beautylog.error("gulp-inspect: please provide a valid boolean value as argument");
        return plugins.gulpWT(); //wave through
    }
};
