import { replaceComplex, ComplexKey } from './strplace';

let str = '{{str(this is a text)}}';
let keys = [
	{
		flags: 'g',
		keys: ['\\{\\{str\\(', '\\)\\}\\}'],
		replacer: (args: string) => { return args }
	}
]

console.log(replaceComplex(keys, str));
