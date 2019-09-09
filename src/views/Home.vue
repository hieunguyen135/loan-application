<template>
  <div class="flex" style="height: 100vh">
    <div class="w-1/2 border-gray-400 border-r-2">
      <h4
        class="w-full bg-gray-500 text-center text-white py-2 uppercase font-bold"
      >
        User zone
      </h4>
      <div>
        <loan-term-form v-if="!isApprove"></loan-term-form>
        <loan-term-plan v-else></loan-term-plan>
      </div>
    </div>
    <div class="w-1/2 border-gray-400 border-l-2">
      <h4
        class="w-full bg-gray-500 text-center text-white py-2 uppercase font-bold"
      >
        Admin zone
      </h4>
      <div class="mt-8">
        <p class="text-center italic mt-8 text-gray-600" v-if="!pending">
          Not yet tasks ;)
        </p>
        <approval-form v-else></approval-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    LoanTermForm: () => import("@/components/LoanTermForm"),
    LoanTermPlan: () => import("@/components/LoanTermPlan"),
    ApprovalForm: () => import("@/components/ApprovalForm")
  },
  computed: {
    ...mapState({
      pending: state => state.isPending,
      isApprove: state => state.isApprove
    })
  }
};
</script>
