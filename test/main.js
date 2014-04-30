require('mocha');
var bailey = require('../'),
    should = require('should'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    path = require('path');

var createFile = function (filepath, contents) {
    var base = path.dirname(filepath);
    return new gutil.File({
      path: filepath,
      base: base,
      cwd: path.dirname(base),
      contents: contents
    });
  },
  testData = function (expected, newPath, done) {
    return function (newFile) {
      console.log(newFile);
      should.exist(newFile);
      should.exist(newFile.path);
      String(newFile.contents).should.equal(expected);
    };
  };
  

describe('gulp-bailey', function() {
  describe('bailey()', function() {
    it('should compile a file', function(done) {
      var filepath = "test/fixtures/example.bs",
          contents = new Buffer(fs.readFileSync(filepath)),
          expected = new Buffer(fs.readFileSync('test/expected/example.js'));


      bailey()
        .on('error', done)
        .on('data', testData(expected.toString(), filepath.replace('bs', 'js'), done))
        .write(createFile(filepath, contents));
    });
    it('should compile a file without comments', function(done) {
        var filepath = "test/fixtures/example.bs",
            contents = new Buffer(fs.readFileSync(filepath)),
            expected = new Buffer(fs.readFileSync('test/expected/example.js'));


        bailey({removeComments: true})
          .on('error', done)
          .on('data', testData(expected.toString(), filepath.replace('bs', 'js'), done))
          .write(createFile(filepath, contents));
    });
  });
});
