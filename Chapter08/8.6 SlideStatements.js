const pricingPlan = retrivePricingPlan();
// const order = retriveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;

// 코드 모으기
const order = retriveOrder();
const units = order.units;

// let discount;
charge = baseCharge + units * chargePerUnit;
let discounttableUnits = Math.max(units - pricingPlan. discountThreshold, 0);

// 코드 모으기
let discount;
discount = discountableUnits * pricingPlan.discountFactor;

if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);