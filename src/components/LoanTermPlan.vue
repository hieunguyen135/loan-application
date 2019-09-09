<template>
  <div class="mt-8 px-8">
    <table class="table-auto w-full text-gray-700">
      <tr class="font-bold">
        <td class="py-2" style="width: 50px">Week.</td>
        <td class="text-right" style="width: 400px">Payment Amount</td>
        <td></td>
      </tr>
      <tr v-for="(row, key) in planing" :key="key" class="border-t">
        <td>{{ row.week }}</td>
        <td class="text-right py-4">{{ row.amount }}</td>
        <td class="text-right">
          <button
            v-if="!row.paid"
            class="text-blue-600 hover:text-blue-700 font-bold py-2 px-6 text-center text-sm"
            @click="pay(row.week)"
          >
            Pay
          </button>
          <p v-else class="text-green-400 text-center">Paid</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      planing: state => state.planing
    })
  },
  methods: {
    ...mapActions(["updateLoan"]),
    pay(week) {
      this.updateLoan(week);
    }
  }
};
</script>
