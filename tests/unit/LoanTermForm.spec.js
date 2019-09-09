import LoanTermForm from "@/components/LoanTermForm.vue";

describe("LoanTermForm.vue", () => {
  it("sets the correct default data", () => {
    expect(typeof LoanTermForm.data).toBe("function");
    const defaultData = LoanTermForm.data();
    expect(defaultData.amount).toBe(0);
    expect(defaultData.week).toBe(0);
    expect(defaultData.error).toBe("");
  });
});
