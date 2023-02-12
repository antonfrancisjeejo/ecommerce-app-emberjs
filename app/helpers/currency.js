import Helper from '@ember/component/helper';

//functional implementation
// import { helper } from '@ember/component/helper';
// export default helper(function currency(positional, named = {}) {
//   // {{currency 25}}
//   const [number] = positional;
//   const { sign = '$' } = named;

//   const dollars = Math.floor(number);
//   let cents = Math.floor((number * 100) % 100);

//   if (cents.toString().length === 1) {
//     cents = '0' + cents;
//   }
//   return `${sign}${dollars}.${cents}`;
// });

export default class currency extends Helper {
  compute(positional, named = {}) {
    // {{currency 25}}
    const [number] = positional;
    const { sign = '$' } = named;

    const dollars = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }
    return `${sign}${dollars}.${cents}`;
  }
}
