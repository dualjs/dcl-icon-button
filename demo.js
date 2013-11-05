/*jshint browser:true*/
var D = require('dual');
var IconButton = require('./');

var demo = D.fromJSON([
    'div', [
        ['IconButton', {
            'ui:asset': 'open',
            caption: 'Open',
            iconPrimary: 'open',
            look: 'primary'
        }],
        ' ',
        ['IconButton', {
            'ui:asset': 'save',
            caption: 'Save',
            iconPrimary: 'save'
        }],
        ' ',
        ['IconButton', {
            'ui:asset': 'delete',
            caption: 'Delete',
            look: 'danger',
            iconPrimary: 'remove',
            iconSecondary: 'warning-sign'
        }]
    ]

], {
    'IconButton': IconButton
});

// var assets = D.utils.indexBy(demo, false, 'ui:asset');

document.body.appendChild(demo.domify());