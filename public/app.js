new Vue({
  el: '#list',
  data: {
    fileList: [],
  },
  ready() {
    this.$http.get('/file').then(function (response) {
      this.fileList = response.data;
      console.log(response.data);
    }, function (response) {
      console.log(response);
    });
  }
});
