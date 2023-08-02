const day = document.querySelector('.day input');
const month = document.querySelector('.month input');
const year = document.querySelector('.year input');
const btn = document.querySelector('img');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

const p = document.querySelectorAll('.date-insert p');
const div = document.querySelectorAll('.date-insert div');
const errorSpan = document.querySelectorAll('.error');

function errorEmpty() {
  if (M === 2 && D > 28) {
    errorSpan[0].classList.remove('invisible');
    p[0].classList.add('red');
    console.log("error")
  }
  if (D === '' || D > 32) {
    errorSpan[0].classList.remove('invisible');
    p[0].classList.add('red');
    console.log('error in day');
  }
  if (M === '' || M > 12) {
    errorSpan[1].classList.remove('invisible');
    p[1].classList.add('red');
  }
  if (Y === '' || Y > new Date().getFullYear()) {
    errorSpan[2].classList.remove('invisible');
    p[2].classList.add('red');
  }
}
function errorOver(errorType) {
  const over = document.querySelectorAll('.over');
  over[errorType].classList.remove('invisible');
}

function NotEmpty(errorType, dateType) {
  if (
    !errorSpan[errorType].classList.contains('invisible') &&
    dateType !== ''
  ) {
    errorSpan[errorType].classList.add('invisible');
    console.log('error hidden!');
  }
}

function getDate() {
  let a;
  let b;
  let c;
  D = Number(day.value);
  M = Number(month.value);
  Y = Number(year.value);
  let today = new Date().getDate();
  let tomonth = new Date().getMonth() + 1;
  let toyear = new Date().getFullYear();

  if (M === 2 && D > 28) {
    errorSpan[0].classList.remove('invisible');
    p[0].classList.add('red');
    console.log("error")
    return;
  }

  if (D && M && Y && D <= 31 && M <= 12 && Y <= toyear) {
    a = today - D;

    if (a < 0) {
      today += 30;
      a = today - D;
      aSubtracted = true;
    } else {
      a = today - D;
      aSubtracted = false;
    }
    if (aSubtracted === true) {
      console.log(M);
      b = tomonth - M - 1;
      if (b < 0) {
        tomonth += 12;
        b = tomonth - M - 1;
        bSubtracted = true;
      } else {
        bSubtracted = false;
        b = tomonth - M - 1;
      }
    } else {
      b = tomonth - M;
      bSubtracted = false;
    }
    if (b < 0) {
      bSubtracted = true;
      console.log(`b < 0`);
      tomonth = tomonth + 12;
      b = tomonth - M;
    }
    if (bSubtracted === true) {
      c = toyear - Y - 1;
    } else {
      cSubtracted = false;
      c = toyear - Y;
      console.log(`c is ${c}`);
    }

    let counterDay = 0;
    function timeHandlerA() {
      third.textContent = counterDay;
      if (counterDay === a) {
        clearInterval(animationDay);
      }
      counterDay++;
    }
    let animationDay = setInterval(timeHandlerA, 20);

    let counterMonth = 0;
    function timeHandlerB() {
      second.textContent = counterMonth;
      if (counterMonth === b) {
        clearInterval(animationMonth);
      }
      counterMonth++;
    }
    let animationMonth = setInterval(timeHandlerB, 20);

    let counterYear = 0;
    function timeHandlerC() {
      first.textContent = counterYear;
      if (counterYear === c) {
        clearInterval(animationYear);
      }
      counterYear++;
    }
    let animationYear = setInterval(timeHandlerC, 20);
  }

  if (!D || D > 31) {
    errorSpan[0].classList.remove('invisible');
    p[0].classList.add('red');
  } else {
    errorSpan[0].classList.add('invisible');
    console.log('no error in days');
    p[0].classList.remove('red');
  }
  if (!M || M > 12) {
    errorSpan[1].classList.remove('invisible');
    p[1].classList.add('red');
  } else {
    errorSpan[1].classList.add('invisible');
    console.log('no error in months');
    p[1].classList.remove('red');
  }
  if (!Y || Y > toyear) {
    errorSpan[2].classList.remove('invisible');
    p[2].classList.add('red');
  } else {
    errorSpan[2].classList.add('invisible');
    console.log('no error in years');
    p[2].classList.remove('red');
  }
  
}

btn.addEventListener('click', getDate);

// alternative solution work with months lower than this month !!

// D = day.value;
// M = month.value;
// Y = year.value;
// let today = new Date().getDate();
// let tomonth = new Date().getMonth() + 1;
// let toyear = new Date().getFullYear();

// function getDate(D, M, Y) {
//   if (D !== '' && M !== '' && Y !== '' && D < 32 && M < 13 && Y < toyear + 1) {
//     let userYear = toyear - Y;
//     first.innerHTML = userYear;

//     let userMonth = +(tomonth - M);
//     second.innerHTML = userMonth;

//     let userDay = today - D;
//     third.innerHTML = userDay;
//     p.forEach((element) => {
//       element.classList.remove('red');
//     });
//   } else if (Y > toyear || M > 12 || D > 30) {
//   }
//   if (D > 31) {
//     p[0].classList.add('red');
//     errorOver(0);
//     console.log('error');
//   }

//   if (M > 12) {
//     p[1].classList.add('red');
//     errorOver(1);
//     console.log('error');
//   }

//   if (Y > toyear) {
//     p[2].classList.add('red');
//     errorOver(2);
//     console.log('error');
//   }

//   if (D === '') {
//     errorEmpty(0);
//     p[0].classList.add('red');
//   }
//   // NotEmpty(0, D);

//   if (M === '') {
//     errorEmpty(1);
//     p[1].classList.add('red');
//   }
//   NotEmpty(1, M);

//   if (Y === '') {
//     errorEmpty(2);
//     p[2].classList.add('red');
//   }
//   NotEmpty(2, Y);

//   if (
//     tomonth < M &&
//     D !== '' &&
//     M !== '' &&
//     Y !== '' &&
//     D <= 30 &&
//     M <= 12 &&
//     Y <= toyear
//   ) {
//     console.log(tomonth, +M);
//     second.innerHTML = 12 - (+M - tomonth);
//     console.log('diffrence');
//     // +12 - diffrence
//   }
//   if (Y === toyear && M !== '') {
//     first.innerHTML = 0;
//   }
// }
