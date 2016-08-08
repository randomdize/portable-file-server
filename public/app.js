import VueMdl from 'vue-mdl/dist/vue-mdl.min';
import Mdl from 'material-design-lite/material.min';

Vue.use(VueMdl);

new Vue({
  el: '#list',
  data: {
    fileList: [],
  },
  ready() {
    this.$http.get('/file').then((response) => {
      this.fileList = response.data;
    }, (response) => {
      console.log(response);
    });
  },
});
