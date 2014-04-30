var es = require('event-stream'),
    gutil = require('gulp-util'),
    Buffer = require('buffer').Buffer,
    path = require('path'),
    bailey = require('bailey');

module.exports = function (opt) {
  function modifyFile(file) {
    if (file.isNull()) return this.emit('data', file); // pass along
    if (file.isStream()) return this.emit('error', new Error("gulp-bailey: Streaming not supported"));

    var str = file.contents.toString('utf8'),
        dest = gutil.replaceExtension(file.path, ".js");

    var data = bailey.parseString(str, opt);

    file.contents = new Buffer(data);
    file.path = dest;
    this.emit('data', file);
  }

  return es.through(modifyFile);
};
