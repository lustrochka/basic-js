const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let bigMsg = message.toUpperCase();
    let bigKey = key.toUpperCase();
    let res = '';
    let index = 0;
    for (let i = 0; i < bigMsg.length; i++) {
      if (alpha.includes(bigMsg[i])) {
        let j = alpha.indexOf(bigKey[index]) + alpha.indexOf(bigMsg[i]);
        if (j >= alpha.length) j = j - alpha.length;
        res += alpha[j];
        index++;
        if (index == bigKey.length) index = 0;
      } else res += message[i]
    }
    return this.direct == true ? res : res.split('').reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let bigKey = key.toUpperCase();
    let res = '';
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (alpha.includes(message[i])) {
        let j = alpha.indexOf(message[i]) - alpha.indexOf(bigKey[index]);
        if (j < 0) j = alpha.length + j;
        res += alpha[j];
        index++;
        if (index == bigKey.length) index = 0;
      } else res += message[i]
    }
    return this.direct == true ? res : res.split('').reverse().join('')
  }
}


module.exports = {
  VigenereCipheringMachine
};
