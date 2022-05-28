import { App } from './app';
import * as M from 'materialize-css';
import { typeHelperTexts } from './constants';


export class Type {

    app = new App;
    constructor() {
        this.init();

    }
    init() {
        const elem = document.querySelector(".type");
        const options = {
        }
        const opts = elem.querySelectorAll('option');
        opts[1].setAttribute('selected', 'selected');
        M.FormSelect.init(elem, options);
        elem.addEventListener('change', () => this.onTypeChange());
        this.onTypeChange();
    }

    onTypeChange() {
        const type = document.querySelector(".type");
        const customCharacters = document.querySelector('#customCharacters');
        const customCharactersInputField = customCharacters.closest('.input-field');
        customCharactersInputField.style.display = 'none';
        customCharacters.value = '';
        if (type.value === 'custom') {
            customCharactersInputField.style.display = 'block';
            setTimeout(() => {
                customCharacters.focus();
            })
        }
        this.app.setGeneratedRandomString();
    }


}