require('mocha');
var bailey = require('../'),
    should = require('should'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    path = require('path'),
    bs = require('bailey');

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
      should.exist(newFile);
      should.exist(newFile.path);
      String(newFile.contents).should.equal(expected);
    };
  },
  testCompile = function (filepath, opt, done) {
    var contents = new Buffer(fs.readFileSync(filepath)),
        expected = bs.parseString(contents.toString(), opt);

    bailey(opt)
      .on('error', done)
      .on('data', testData(expected.toString(), filepath.replace('bs', 'js'), done))
      .write(createFile(filepath, contents));
      done();
  };
  

describe('gulp-bailey', function() {
  describe('bailey()', function() {
    it('should compile a file', function(done) {
      testCompile('test/fixtures/example.bs', {}, done); 
    }); 

    it('should compile a file without comments', function(done) {
      testCompile('test/fixtures/example.bs', {removeComments: true}, done); 
    });

    it('should compile a file with node imports', function(done) {
      testCompile('test/fixtures/example.bs', {node: true}, done); 
    });

    it('should compile a file with node imports without comments', function(done) {
      testCompile('test/fixtures/example.bs', {node: true}, done); 
    });

    it('should compile a bare file', function(done) {
      testCompile('test/fixtures/example.bs', {bare: true}, done); 
    });
  });
});
