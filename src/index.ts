import * as fs from "fs";
import {Lex} from "./Lex";

fs.readFile("./code", function (err, buff) {
    console.log(buff.toString());
    new Lex(buff.toString());
});