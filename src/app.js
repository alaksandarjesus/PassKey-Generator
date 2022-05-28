import cryptoRandomString from 'crypto-random-string';
import * as randomNum from 'random-number-between';
import { typeHelperTexts, strengthHelperTexts} from './constants';

export class App {

    
    constructor() {

       
    }

    setGeneratedRandomString(){
        const generated = this.getRandomString();
        const generatedStringEle = document.querySelector(".generated-string");
        generatedStringEle.innerText = generated;
    }


    getRandomString(){
        const strengthEle = document.querySelector(".strength");
        const typeEle = document.querySelector(".type");
        const prefixEle = document.querySelector("#prefix");
        const suffixEle = document.querySelector("#suffix");
        const allowedStrengthOptions = Object.keys(strengthHelperTexts);
        const allowedTypeOptions = Object.keys(typeHelperTexts);
        let strength = allowedStrengthOptions[0];
        if(allowedStrengthOptions.indexOf(strengthEle.value) !== -1){
            strength = strengthEle.value;
        }
        let length = this.getStringLength(strength);
        let type = allowedTypeOptions[0];
        if(allowedTypeOptions.indexOf(typeEle.value) !== -1){
            type = typeEle.value;
        }
        let generated;
        if(type === 'custom'){
            let characters =  this.getCharacters(type);
            generated = cryptoRandomString({length: length, characters:characters});
        }else{
            generated = cryptoRandomString({length: length, type:type});
        }
        if(prefixEle.value){
            generated = prefixEle.value + generated;
        }
        if(suffixEle.value){
            generated = generated + suffixEle.value;
        }

        return generated;
    }

    getStringLength(strength){
        const customLengthEle = document.querySelector("#customLength");
        let length = randomNum(6, 15)[0];
        if(strength === 'strong'){
            length = randomNum(16, 255)[0];
        }
        if(strength === 'secure'){
            length = randomNum(255, 2048)[0];
        }
        if(strength === 'custom'){
            const value = customLengthEle.value;
            if(value && !isNaN(value)){
                const parsed = parseInt(value);
                if(parsed && (parsed >= 6 && parsed <= 2048)){
                    length = parsed;
                }
            }
        }
        return length;
    }

    getCharacters(){
        const customCharactersEle = document.querySelector("#customCharacters");
        let characters = cryptoRandomString({length:10});
        if(customCharactersEle.value){
            characters = customCharactersEle.value.slice(0, 255);
        }

        return characters;
    }

}
