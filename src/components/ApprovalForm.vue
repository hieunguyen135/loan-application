<template>
  <div class="mx-8 text-center" v-if="!isApprove">
    <h2 class="text-gray-600 mb-8">
      Anyone has summited a request ${{ loan.amount }} in {{ loan.week }} weeks,
      do you want to approve it?
    </h2>
    <div>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mx-2"
        @click="decline"
      >
        Decline
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2"
        @click="approve"
      >
        Approve
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      loan: state => state.loan,
      isApprove: state => state.isApprove
    })
  },
  methods: {
    ...mapActions(["loanApproval"]),
    decline() {
      this.loanApproval(false);
    },
    approve() {
      this.loanApproval(true);
    }
  }
};
</script>
