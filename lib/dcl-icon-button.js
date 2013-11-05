/*
 * dcl-icon-button
 * https://github.com/dualjs/dcl-icon-button
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
var Button = require('dcl-button');
var Icon = require('dcl-glyphicon');


module.exports = Button.extend({
    ATTRS: {
        caption: {
            textAsset: 'caption'
        },
        iconPrimary: {},
        iconSecondary: {}
    },

    initStructure: function() {
        this.$ = D.fromJSON([
            'button', {
                'ui:asset': 'button',
                'class:btn': true
            },
            [
                ['icon', {
                    'ui:asset': 'icon1',
                    'hidden': true
                }],
                ' ',
                ['span', {
                    'ui:asset': 'caption'
                }],
                ' ',
                ['icon', {
                    'ui:asset': 'icon2',
                    'hidden': true
                }]
            ]
        ], {
            'icon': Icon
        });
    },

    applyAttribute_iconPrimary: function(value) {
        this.assets.icon1.setHidden(!value);
        this.assets.icon1.setGlyph(value);
    },
    applyAttribute_iconSecondary: function(value) {
        this.assets.icon2.setHidden(!value);
        this.assets.icon2.setGlyph(value);
    }   
});