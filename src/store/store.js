import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Store of NVC",
  },
  getters: {},
  mutations: {},
  actions: {},
});
console.log("state", store.state);

export default store;
