import './styles.css';
import { add, PI } from './utils';
console.log('Ready to Party');

console.log(add(10, 18));

console.log(PI);

window["add"] = add; // window is the global object - so adding "add" globally