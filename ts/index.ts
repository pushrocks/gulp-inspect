/// <reference path="typings/tsd.d.ts" />
var plugins = {
    through: require("through2"),
    path: require("path"),
    beautylog: require("beautylog"),
    gulpWT: require("gulp-wavethrough")
}

var doNothing = function(){

};

module.exports = (activateArg:boolean = true) => {
    if (activateArg == true) {
        return plugins.through.obj((file, enc, cb) => {
            plugins.beautylog.info("file in your pipeline:")
            console.log("|| ".blue + "File.contents: ".yellow + String(file.contents).bold);
            console.log("|| ".blue + "File.path: ".yellow + String(file.path).bold);
            console.log("|| ".blue + "File.base: ".yellow + String(file.base).bold);
            console.log("|| ".blue + "File.relative: ".yellow + String(file.relative).bold);
            console.log("|| ".blue + "File.data: ".yellow + String(JSON.stringify(file.data)).bold);
            return cb(null, file); //run callback function to signal end of plugin process.
        });
    } else if (activateArg == false) {
        return plugins.gulpWT(); //wave through
    } else {
        plugins.beautylog.error("gulp-inspect: please provide a valid boolean value as argument");
        return plugins.gulpWT(); //wave through
    }
};
