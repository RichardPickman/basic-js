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
  constructor(type = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type
  }
  
  encrypt(message, key, value) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')

    const messageArr = this.getIndexes(message);
    const keysArr = this.getIndexesKey(message, key);
    const encryptedArr = [];

    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (typeof messageArr[i] === 'string') {
        encryptedArr.push(messageArr[i])
      } else if (this.alphabet.includes(this.alphabet[messageArr[i]])) {
        const enc = (messageArr[i] + keysArr[j]) % 26;
        const dec = (messageArr[i] - keysArr[j]) < 0 ? ((messageArr[i] - keysArr[j]) + 26) % 26 : (messageArr[i] - keysArr[j]) % 26;
  
        encryptedArr.push(value === 'decrypt' ? this.alphabet[dec] : this.alphabet[enc])

        j++
      }
    }
    
    return this.type ? encryptedArr.join('') : encryptedArr.reverse().join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, 'decrypt')
  }

  getIndexes(word) {
    const arrayOfWord = [...word.toUpperCase()];
    const messageArr = [];

    arrayOfWord.forEach(letter => {
      if (!this.alphabet.includes(letter)) {
        messageArr.push(letter)
      } else {
        const item = this.alphabet.indexOf(letter)
        messageArr.push(item);
      }
    })

    return messageArr;
  }

  getIndexesKey(word, key) {
    const keys = [];
    let lastIndex = 0;
    const keysArr = [...key]

    while (keys.length !== word.length) {
      if (lastIndex === keysArr.length) {
        lastIndex = 0;
        continue;
      }
      
      keys.push(keysArr[lastIndex])

      lastIndex++
    }

    return this.getIndexes(keys.join(''))
  }
}

module.exports = {
  VigenereCipheringMachine
};
