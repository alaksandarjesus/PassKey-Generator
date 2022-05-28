import { App } from './app';
import * as M from 'materialize-css';
import { strengthHelperTexts} from './constants';


export class Strength{

    app = new App;
    constructor(){
        this.init();
    }

    init() {
        const elem = document.querySelector(".strength");
        const options = {
        }
        const opts = elem.querySelectorAll('option');
        opts[1].setAttribute('selected', 'selected');
        M.FormSelect.init(elem, options);
        elem.addEventListener('change', () => this.onStrengthChange());
        this.onStrengthChange();
    }

    onStrengthChange() {
        const elem = document.querySelector(".strength");
        const inputField = elem.closest('.input-field');
        const strengthValue = elem.value;
        const strengthHelperText = inputField.querySelector(".helper-text");
        strengthHelperText.innerText = strengthHelperTexts[strengthValue];
        this.toggleCustomLengthField();
    }
    toggleCustomLengthField() {
        const strength = document.querySelector(".strength");
        const customLength = document.querySelector('#customLength');
        const customLengthInputField = customLength.closest('.input-field');
        customLengthInputField.style.display = 'none';
        customLength.value = '';
        if (strength.value === 'custom') {
            customLengthInputField.style.display = 'block';
            setTimeout(()=>{
                customLength.focus();
            })
        }
        this.app.setGeneratedRandomString();

    }
}