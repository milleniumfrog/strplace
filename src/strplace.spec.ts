import { replaceSingle, replaceComplex, ComplexKey } from './strplace';
import { expect } from 'chai';

describe('replaceSingle', () => {
	it('simple', () => {
		let str: string = '{{repl}} is replaced';
		expect(replaceSingle('{{repl}}', str, 'This')).to.eql('This is replaced');
		expect(replaceSingle('{{repl} }', str, 'This')).to.eql('{{repl}} is replaced');
	});
});

describe('replace Complex', () => {
	it( 'complex', () => {
		let str: string = '<str><hello/> <a>this is a referrer<a>this is a referrer</a></a></str>';
		let keys: ComplexKey[] = [
			{
				flags: 'g',
				keys: ['<hello/>'],
				replacer: (args?: string, passArg?: any) => { return 'hello' }
			},
			{
				flags: 'g',
				keys: ['<a>', '</a>'],
				replacer: (args?: string, passArg?: any) => { return `<l>${args}</l>` }
			},
        ];
		expect( replaceComplex( keys, str )).to.eql( '<str>hello <l>this is a referrer<l>this is a referrer</l></l></str>' );
		str = '{{str(this is a text)}}';
		keys = [
			{
				flags: 'g',
				keys: ['\\{\\{str\\(', '\\)\\}\\}'],
				replacer: (args?: string, passArg?: any) => {return `${args || "none"}`}
			},
			{
				flags: 'g',
				keys: ['\\{\\{service\\}\\}'],
				replacer: ( args?: string, toPass?: any ) => {
					toPass = toPass || {service: "LOGS"};
					return `[${toPass.service}]`;
				}
			},
		]
		expect( replaceComplex( keys, str )).to.eql( 'this is a text' );
		let toPassArg: any = {
			service: 'LOG'
		};
		expect( replaceComplex( keys, '{{service}}', toPassArg )).to.eql( '[LOG]' ); 
	})
});