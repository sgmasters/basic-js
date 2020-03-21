class VigenereCipheringMachine {
    square = [];
    direct = true;
    l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    constructor(isDirect) {
        if (isDirect === false) {
            this.direct = isDirect;
        }
        this.genSqViz();
    }

    genSqViz() {
        for (let i = 0; i < this.l.length; i++) {
            this.square[i] = this.l.slice(i).concat(this.l.slice(0, i));
        }
    }

    fillKeyByTextLength(key, text) {
        let mas = Array();
        let str = '';

        let i = 0;
        let j = 0;
        while (i < text.length) {
            if (j >= key.length) {
                j = 0;
            }
            if (!this.l.includes(text[i])) {
                str = str + ' ';
                j--;
            } else {
                str = str + '' + key[j];
            }
            j++;
            i++;
        }
        return str;
    };

    encrypt(message, key) {
        this.checkNotNull(message);
        this.checkNotNull(key);

        let s = '';
        message = message.toUpperCase();
        let filledKey = this.fillKeyByTextLength(key, message).toUpperCase();
        for (let i = 0; i < message.length; i++) {
            if (!this.l.includes(message[i])) {
                s += message[i];
            } else {
                if ('undefined' !== typeof this.l.indexOf(message[i]) && 'undefined' !== typeof this.l.indexOf(filledKey[i])) {
                    if ('undefined' !== typeof this.square[this.l.indexOf(message[i])] &&
                        'undefined' !== typeof this.square[this.l.indexOf(message[i])][this.l.indexOf(filledKey[i])]) {
                        s += this.square[this.l.indexOf(message[i])][this.l.indexOf(filledKey[i])];
                    } else {
                        //console.log('this.square[this.l.indexOf(text[i])] ', this.square[this.l.indexOf(text[i])]);
                        //console.log('key[i] ', key[i]);
                    }
                } else {
                    console.log('text[i] ', message[i]);
                    //console.log('key[i] ', key[i]);
                }
            }
        }
        return this.reverseIfNotDirect(s);
    }

    decrypt(encryptedMessage, key) {
        this.checkNotNull(encryptedMessage);
        this.checkNotNull(key);

        let s = '';
        encryptedMessage = encryptedMessage.toUpperCase();
        let filledKey = this.fillKeyByTextLength(key, encryptedMessage).toUpperCase();
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!this.l.includes(encryptedMessage[i])) {
                s += encryptedMessage[i];
            } else {
                if ('undefined' !== typeof this.l.indexOf(filledKey[i])) {
                    let row = this.l.indexOf(filledKey[i]);
                    if (row >= 0) {
                        if ('undefined' !== typeof this.square[row].indexOf(encryptedMessage[i])) {
                            let coll = this.square[row].indexOf(encryptedMessage[i]);
                            s += this.l[coll];
                        } else {
                            //console.log('this.square[row].indexOf(cipher[i]) ', this.square[row].indexOf(cipher[i]));
                            //console.log('cipher[i] ', cipher[i]);
                        }
                    }
                } else {
                    //console.log('this.l.indexOf(key[i]) ', this.l.indexOf(key[i]));
                    //console.log('key[i] ', key[i]);
                }
            }
        }
        return this.reverseIfNotDirect(s);
    }

    checkNotNull(object) {
        if (object == null) {
            throw 'Error';
        }
    }

    reverseIfNotDirect(message) {
        if (this.direct) {
            return message;
        } else {
            return message.split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
