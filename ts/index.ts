/// <reference path="typings/tsd.d.ts" />
var plugins = {
    path: require("path"),
    beautylog: require("beautylog"),
    indentString: require("indent-string"),
    g: {
        wavethrough: require("gulp-wavethrough"),
    },
    through: require("through2")
}

var doNothing = function(){

};

module.exports = (activateArg:boolean = true) => {
    if (activateArg == true) {
        return plugins.through.obj((file, enc, cb) => {
            //do some string calculating
            var localFile = {
                contents: String(file.contents)
            };
            localFile.contents = plugins.indentString(localFile.contents, ' ', 2);
            localFile.contents = plugins.indentString(localFile.contents, '>'.red, 2);
            localFile.contents = '\n'.concat(localFile.contents);

            //form console output
            plugins.beautylog.info("file in your pipeline:")
            console.log("|| ".blue + "File.contents: ".yellow + localFile.contents.bold);
            console.log("|| ".blue + "File.path: ".yellow + String(file.path).bold.blue);
            console.log("|| ".blue + "File.base: ".yellow + String(file.base).bold.blue);
            console.log("|| ".blue + "File.relative: ".yellow + String(file.relative).bold.blue);
            console.log("|| ".blue + "File.data: ".yellow + String(JSON.stringify(file.data)).bold.blue);
            return cb(null, file); //run callback function to signal end of plugin process.
        });
    } else if (activateArg == false) {
        return plugins.g.wavethrough(); //wave through
    } else {
        plugins.beautylog.error("gulp-inspect: please provide a valid boolean value as argument");
        return plugins.g.wavethrough(); //wave through
    }
};
