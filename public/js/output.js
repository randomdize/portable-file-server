'use strict';

var _vueMdl = require('vue-mdl/dist/vue-mdl.min');

var _vueMdl2 = _interopRequireDefault(_vueMdl);

var _material = require('material-design-lite/material.min');

var _material2 = _interopRequireDefault(_material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueMdl2.default);

new Vue({
  el: '#list',
  data: {
    fileList: []
  },
  ready: function ready() {
    var _this = this;

    this.$http.get('/file').then(function (response) {
      _this.fileList = response.data;
    }, function (response) {
      console.log(response);
    });
  }
});
