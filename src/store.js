import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loan: {
      amount: 0,
      week: 0
    },
    planing: [],
    paid: null,
    isLoan: false,
    isApprove: false,
    isLoading: false,
    isPending: false
  },
  mutations: {
    loading(state, payload) {
      state.isLoading = payload;
    },
    setLoan(state, payload) {
      state.loan = payload;
    },
    setPending(state, payload) {
      state.isPending = payload;
    },
    setApprove(state, payload) {
      state.isApprove = payload;
    },
    setPlaning(state, payload) {
      state.planing = payload;
    },
    setPaid(state, id) {
      state.planing[id].paid = true;
    }
  },
  actions: {
    loanSubmit(context, terms) {
      context.commit("loading", true);

      setTimeout(getData, 1000);

      function getData() {
        context.commit("setLoan", terms);
        context.commit("setPending", true);
        context.commit("loading", false);
      }
    },
    loanApproval(context, payload) {
      if (payload) {
        let arr = [];
        let amountRate = context.state.loan.week / 100;
        let paidEveryWeek =
          (context.state.loan.amount * amountRate + context.state.loan.amount) /
          context.state.loan.week;

        for (var i = 1; i <= context.state.loan.week; i++) {
          arr.push({
            week: i,
            amount: paidEveryWeek,
            paid: false
          });
        }

        context.commit("setApprove", true);
        context.commit("setPlaning", arr);
      } else {
        console.log("cancel");
      }
    },
    updateLoan(context, id) {
      const objIndex = context.state.planing.findIndex(obj => obj.week == id);
      context.commit("setPaid", objIndex);
    }
  }
});
