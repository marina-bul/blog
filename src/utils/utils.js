// function format post's date for sort
// expected date type === string
export const formateDate = function (date) {
  const dateArr = date.split(".").reverse();
  return dateArr.join("-");
};
