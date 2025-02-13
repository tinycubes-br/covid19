/**
 * Essa estrutura também conta com campos para bairros.
 * Utilizada em:
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 *   ~/js/form/support.js
 */  
let global = {
  key: "schema_info",
  value: {
    estados: {
      items: []
    },
    dimensions: [],
    terminal: {
      contents: []
    }
  }
};

setGlobal(global);

/**
 * Serve para recuperar o item selecionado na combobox resultOptions.
 * Podendo ser hc (Antenas Usadas) ou hsum (Chamadas Ativas).
 * Utilizada em:
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 */
global = {
  key: "selected_channel",
  value: "hsum"
};

setGlobal(global);

/**
 * Serve para compor a legenda do eixo y do gráfico.
 * Podendo ser Antenas usadas ou Chamadas ativas.
 * Utilizada em:
 *   ~/js/api/request.js
 *   ~/js/form/control.js
 */
global = {
  key: "result_title",
  value: "Active calls"
};

setGlobal(global);

/**
 * Serve para compor a legenda do eixo y do gráfico.
 * Podendo ser Antenas ou Chamada.
 * Utilizada em:
 *   ~/js/api/request.js
 *   ~/js/form/control.js
 */
global = {
  key: "result_unity",
  value: "Call"
};

setGlobal(global);

/**
 * Estabelece uma constante para um valor de zoom no mapa.
 * Utilizada em:
 *   ~/js/api/response.js
 *   ~/js/api/support.js
 */
global = {
  key: "geo_extra_zoom",
  value: 5
};

setGlobal(global);

/**
 * Estabelece uma constante para nome do campo time.
 * Utilizada em:
 *   ~/js/api/request.js
 *   ~/js/api/response.js
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 *   ~/js/form/support.js
 */
global = {
  key: "ts_fieldname",
  value: "time"
};

setGlobal(global);

/**
 * Guarda o time inicial.
 * Utilizada em:
 *   ~/js/api/response.js
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 */
global = {
  key: "ts_t0",
  value: 1589673600 //1565101800
};

setGlobal(global);

/**
 * Guarda o time final.
 * Utilizada em:
 *   ~/js/api/response.js
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 */
global = {
  key: "ts_t1",
  value: 1589756400 //1565102130
};

setGlobal(global);

/**
 * Serve para recuperar o item selecionado na combobox trace.
 * Podendo ser Trace, Queries ou All.
 * Utilizada em:
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 */
global = {
  key: "trace_mode",
  value: 0
};

setGlobal(global);

/**
 * Estabelece uma constante com uma lista de cores.
 * Utilizada em:
 *   ~/js/map/control.js
 *   ~/js/map/support.js
 */
global = {
  key: "draw_colors",
  value: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#8dd3c7', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#bc80bd', '#ccebc5','#b15928']
};

setGlobal(global);

/**
 * Guarda a cor atual.
 * Utilizada em:
 *   ~/js/map/control.js
 *   ~/js/map/support.js
 */
global = {
  key: "draw_color_index",
  value: 0
};

setGlobal(global);

/**
 * Guarda lista de bairros.
 * Utilizada em:
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 *   ~/js/form/support.js
 */
global = {
  key: "list_bairro",
  value: []
};

setGlobal(global);

global = {
  key: "schema",
  value: false
};

setGlobal(global);

global = {
  key: "bounds_time",
  value: false
};

setGlobal(global);

global = {
  key: "bounds_geo",
  value: false
};

setGlobal(global);

/**
 * Recupera a variavél global gravada na sessão.
 * @param {*} key 
 */
function getGlobal(key) {
  return JSON.parse(sessionStorage.getItem(key)); 
}

/**
 * Grava a varavél global na sessão.
 * @param {*} object 
 */
function setGlobal(object) {
  sessionStorage.setItem(object.key, JSON.stringify(object));
}