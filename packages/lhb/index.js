import Lhb from './src/main';

/* istanbul ignore next */
Lhb.install = function(Vue) {
  Vue.component(Lhb.name, Lhb);
};

export default Lhb;
