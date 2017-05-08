/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sweetalert',

  included: function included(app) {
    this._super.included.apply(this, arguments);
    if (!process.env.EMBER_CLI_FASTBOOT) {
    	app.import(app.bowerDirectory + '/sweetalert2/dist/sweetalert2.js');
    	app.import(app.bowerDirectory + '/sweetalert2/dist/sweetalert2.css');
    }
  }
};
