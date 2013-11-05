'use strict';

var Widget = require('../lib/dcl-icon-button.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['dcl-icon-button'] = {
    setUp: function(done) {
        // setup here
        done();
    },

    'basic': function(test) {
        test.expect(1);

        var w = new Widget();

        console.log(w.ATTRS.caption);

        w.setCaption('hello');
        test.equal(w.stringify(), '<button class="btn btn-default">' +
            '<span class="glyphicon hidden"></span>' +
            ' <span>hello</span> ' +
            '<span class="glyphicon hidden"></span>' +
            '</button>');

        test.done();
    },

    'icons': function(test) {
        test.expect(2);

        var w = new Widget();

        w.setCaption('hello');
        w.setIconPrimary('save');
        w.setIconSecondary('open');
        test.equal(w.stringify(), '<button class="btn btn-default">' +
            '<span class="glyphicon glyphicon-save"></span>' +
            ' <span>hello</span> ' +
            '<span class="glyphicon glyphicon-open"></span>' +
            '</button>');


        // console.log('BEFORE:', w.assets.icon2.$.stringify());
        w.setIconSecondary(false);
        // console.log('AFTER:', w.assets.icon2.$.stringify());

        test.equal(w.stringify(), '<button class="btn btn-default">' +
            '<span class="glyphicon glyphicon-save"></span>' +
            ' <span>hello</span> ' +
            '<span class="glyphicon hidden"></span>' +
            '</button>');

        test.done();
    }
};