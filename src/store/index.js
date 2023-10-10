import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    isMax: false,
  }),

  actions: {
    changeSize(value) {
      this.isMax = value;
    },
  },
});
