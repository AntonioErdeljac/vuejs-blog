import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('rainbow', {
  bind(element, binding, virtualNode) {
    element.style.color = `#${Math.random().toString().slice(2, 8)}`
  },
});

Vue.directive('theme', {
  bind(element, binding, virtualNode) {
    const valueFactory = {
      'wide': () => element.style.maxWidth = '1200px',
      'narrow': () => element.style.maxWidth = '560px',
    };

    const argFactory = {
      'column': () => {
        element.style.background = '#ddd';
        element.style.padding = '20px';
      },
    }

    const value = valueFactory[binding.value];
    const arg = argFactory[binding.arg];

    if (value) {
      value()
    }

    if (arg) {
      arg();
    }
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
