export function replaceSingle(key, string, replaceContent, flags) {
    flags = flags || 'g';
    let regex = new RegExp(key, flags);
    let res;
    let counter = 0;
    while ((res = regex.exec(string.slice(counter))) !== null) {
        string = string.replace(key, typeof replaceContent === 'function' ? replaceContent() : replaceContent);
        ++counter;
    }
    return string;
}
;
export function replaceComplex(complexKeys, string) {
    for (let complex of complexKeys) {
        if (complex.keys[1] === undefined) {
            string = complex.called !== true ? replaceSingle(complex.keys[0], string, complex.replacer, complex.flags) : string;
            complex.called = true;
        }
        else {
            let maxIndex = -1;
            for (let inComplex of complexKeys) {
                let regex = new RegExp(inComplex.keys[0], inComplex.flags);
                let res = regex.exec(string);
                if (res !== null) {
                    maxIndex = maxIndex < res.index ? res.index : maxIndex;
                }
            }
            if (maxIndex > 0) {
                string = string.slice(0, maxIndex) + replaceComplex(complexKeys, string.slice(maxIndex));
            }
            let regex = new RegExp(complex.keys[0], complex.flags);
            let res1 = regex.exec(string);
            if (res1 !== null) {
                regex = new RegExp(complex.keys[1], complex.flags);
                let res2 = regex.exec(string);
                let removeEscapesFromKeys = [complex.keys[0].replace((new RegExp('\\\\', '')), ''), complex.keys[1].replace((new RegExp('\\\\', '')), '')];
                if (res2 !== null) {
                    string = string.slice(0, res1.index) + complex.replacer(string.slice(res1.index + removeEscapesFromKeys[0].length, res2.index)) + string.slice(res2.index + removeEscapesFromKeys[1].length);
                }
            }
        }
    }
    return string;
}
//# sourceMappingURL=strplace.js.map