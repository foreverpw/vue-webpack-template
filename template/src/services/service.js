import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    if(response.status === 401){
    }
    else if(response.status===404||response.status===400||response.status===500||response.status===405){
    }
  });
});

const service = {
  get (url,options = {}) {
    return Vue.http.get(url,options);
  },
  post (url,data = {},options = {}) {
    return Vue.http.post(url,data,options);
  }
}

export default service