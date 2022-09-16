export class Token {
    text

    constructor(text) {
        this.text = text;
    }
}

export class Integer extends Token {

}

export class String extends Token {
}

export class Float extends Token {

}

export class Literal extends Token {

}

