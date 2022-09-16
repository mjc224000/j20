import {Float, Literal, Token} from "./token";

const idPreReg = /[a-zA-Z_$]/;
const idNumReg = /\d/;

export class Lex {
    tokens: [] = []

    constructor(str: string) {
        let i = 0;
        const tokens: Token[] = [];
        while (i < str.length) {
            let text = '';
            if (idPreReg.test(str[i])) {
                text += str[i];
                while (/\w/.test(str[++i])) {
                    text += str[i];
                }
                tokens.push(new Literal(text));
            }
            if (idNumReg.test(str[i])) {
                text = str[i];
                while (idNumReg.test(str[++i])) {
                    text += str[i];
                }
                if (str[i] === '.') {
                    text += str[i];
                    while (idNumReg.test(str[++i])) {
                        text += str[i];
                    }
                    tokens.push(new Float(text));
                }

            }

            i++;
        }

    }
}

for (let i = 0; i < 10; i++) {
    function foo() {
        console.log(i);
    }
}
