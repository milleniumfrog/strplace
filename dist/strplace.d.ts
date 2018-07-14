export declare function replaceSingle(key: string, string: string, replaceContent: any, flags?: string): string;
export interface ComplexKey {
    keys: Array<string>;
    replacer: (args: any) => string;
    flags: string;
    called?: boolean;
}
export declare function replaceComplex(complexKeys: Array<ComplexKey>, string: string): string;
