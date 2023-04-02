const Adsense = {
    install(Vue) {
      (adsbygoogle = window.adsbygoogle || []).push({});
      Vue.directive('adsense', {
        inserted(el) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    }
  };
  export default Adsense;
  