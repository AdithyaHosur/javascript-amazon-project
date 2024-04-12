import {formatCurrency} from '../scripts/utils/money.js';


console.log("give each test case a name: ")
if(formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}//basic test case

if(formatCurrency(0) === '0.00'){
    console.log('passed');
} else {
    console.log('failed');
}//edge case

if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
} else {
    console.log('failed');
}//edge case

//group of related tests - test suite with a name
// test suite - formatCurrency