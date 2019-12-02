import svgJS from "svg.js";
import panZoom from "svg.panzoom.js";

export default {
  install: Vue => {
    Vue.prototype.$svg = svgJS;
  }
};
