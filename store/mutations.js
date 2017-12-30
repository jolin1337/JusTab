// define the possible changes that can be applied to our state
import * as types from 'store/mutation-types';

export default {
  [types.LOAD_SERVICES] (state, { services }) {
    state.services = services;
    this.commit(types.RELOAD_SERVICEORDER);
  },

  [types.RELOAD_SERVICEORDER] (state) {
    const serviceIds = state.services.map((s) => s.id);
    state.serviceOrder = localStorage.getItem('serviceOrder').split(',').map(s => parseInt(s)) || serviceIds;
  },

  [types.TOGGLE_STATIC_START_PAGE] (state) {
    state.isStaticStartPage = !state.isStaticStartPage;
    localStorage.isStaticStartPage = state.isStaticStartPage ? 'true' : '';
  },

  [types.RELOAD_SERVICE] (state, { service }) {
    const serviceIds = state.services.map((s) => s.id);
    const serviceIndex = serviceIds.indexOf(service.id);
    Object.assign(state.services[serviceIndex], service);
  }
};
