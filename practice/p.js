let name = "";
let i = 0;
let j = name.length - 1;
let checkIsvalidPlan = (name, i, j) => {
  if (i > j) {
    return true;
  }
  if (name[i] !== name[j]) {
    return false;
  }
  return checkIsvalidPlan(name, ++i, --j);
};
console.log(checkIsvalidPlan(name, i, j));
