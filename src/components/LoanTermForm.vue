<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="!pending">
      <h1 class="text-5xl font-bold uppercase text-blue-600 text-center mt-8">
        Loan Term
      </h1>
      <h5 class="text-gray-600 text-center mb-12">Flat rate 1% / week</h5>
      <div class="mb-8">
        <label for="loan-amount" class="mb-2 text-xs capitalize text-gray-600"
          >Loan Amount ( > 0)</label
        >
        <money
          id="loan-amount"
          v-model="amount"
          v-bind="moneyMask"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-4 px-4 block w-full appearance-none leading-normal text-right text-gray-700 text-4xl"
        ></money>
      </div>
      <div class="mb-10">
        <label for="week" class="mb-2 text-xs capitalize text-gray-600"
          >How many week (1 - 60)?</label
        >
        <money
          id="week"
          v-model="week"
          v-bind="weekMask"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-4 px-4 block w-full appearance-none leading-normal text-right text-gray-700 text-4xl"
        ></money>
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-4 w-full text-center uppercase text-lg"
        :class="loading ? 'opacity-50 cursor-not-allowed' : ''"
        @click="submit"
      >
        <span v-if="!loading">Loan</span>
        <div v-if="loading" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <p class="text-red-600 text-xs text-center mt-6">{{ error }}</p>
    </div>
    <div class="mt-8" v-else>
      <p class="text-center text-gray-600 italic">
        We can approve your loan within 24 hours, please wait ...
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Money } from "v-money";

export default {
  components: {
    Money
  },
  data() {
    return {
      amount: 0,
      week: 0,
      error: "",
      moneyMask: {
        decimal: ",",
        thousands: ".",
        prefix: "$ ",
        suffix: "",
        precision: 0,
        masked: false
      },
      weekMask: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        precision: 0,
        masked: false
      }
    };
  },
  computed: {
    ...mapState({
      loading: state => state.isLoading,
      pending: state => state.isPending
    })
  },
  methods: {
    ...mapActions(["loanSubmit"]),
    submit: function() {
      if (this.amount == 0 || this.week == 0) {
        this.error = "Amount and week must to != 0";
        return;
      }
      if (this.week > 60) {
        this.error = "Only from 1- 60 weeks";
        return;
      }
      const loanTerm = {
        amount: this.amount,
        week: this.week
      };
      this.loanSubmit(loanTerm);
    }
  }
};
</script>
