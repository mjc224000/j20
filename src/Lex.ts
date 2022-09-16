import {Token,Float,Integer,Literal} from "./token";

const idPreReg = /[a-zA-Z_$]/;

export class Lex {
    constructor(str: string) {
        let i = 0;
        const tokens:Token[]=[];
        while (i < str.length) {
            const cur = str[i];
            let text='';
            if (idPreReg.test(cur)) {

            }
            i++;
        }
    }
}

for (let i = 0; i <10 ; i++) {
    function foo(){
            console.log(i);
    }
}
