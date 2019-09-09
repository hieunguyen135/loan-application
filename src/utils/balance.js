export const balance = (amount, term) => {
  let origin_pay_monthly = amount / term;

  let balanceArr = [];

  var temp_balance = amount;

  for (var i = 0; i < term; i++) {
    temp_balance = temp_balance - origin_pay_monthly;
    balanceArr.push(Math.abs(temp_balance.toFixed(2)));
  }

  return balanceArr;
};
