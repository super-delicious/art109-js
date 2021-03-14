// this script is not one of the required but you
// can see the it runs when the page is loaded this
// is because I loaded "script.js" in the <head> of
// index.html

let mark = '';
let trig = 0;
for (let i = 0; i <= 10; i++) {
  if (i <= 5) {
    mark += '@';
  } else if (i > 5) {
    let cut = mark.slice(0, mark.length-1);
    mark = cut;
  }
  console.log(mark);
  if (i === 10 && trig === 0) {
    mark = '';
    i = 0;
    trig = 1;
  }
}
console.log('End');
