import { App } from './app';
import * as downloadjs from 'downloadjs';
import { Toast } from './toast';

export class Download {

    app = new App;
    toast = new Toast;
    constructor() {
        this.init();
    }

    init() {
        this.watchBtnClick();
        this.watchQuantity();
    }

    watchBtnClick() {
        const btnCsv = document.querySelector('.btn-csv');
        const btnTxt = document.querySelector('.btn-txt');
        const btnJson = document.querySelector('.btn-json');

        btnCsv.addEventListener('click', () => this.setDownload('csv'));
        btnTxt.addEventListener('click', () => this.setDownload('txt'));
        btnJson.addEventListener('click', () => this.setDownload('json'));
    }

    watchQuantity() {
        const quantityEle = document.getElementById("quantity");
        this.setQuantityError(false);
        quantityEle.addEventListener('keyup', () => {
            this.getQuantity();
        })
    }

    setQuantityError(show) {
        const quantityEle = document.getElementById("quantity");
        const inputField = quantityEle.closest('.input-field');
        const errorEle = inputField.querySelector(".error-text");
        errorEle.style.display = show ? 'block' : 'none';
    }

    setDownload(format) {
        const qty = this.getQuantity();
        if (!qty) {
            return;
        }
        const output = [];
        for (let i = 0; i < qty; i++) {
            output.push(this.app.getRandomString())
        }
        if (format === 'json') {
            this.toast.success('JSON file created');
            downloadjs(JSON.stringify(output), 'seeds.json', 'json');
        }
        if (format === 'csv') {
            this.toast.success('CSV file created');
            const out = output.join(',\r\n');
            downloadjs(out, 'seeds.csv', 'csv');
        }
        if (format === 'txt') {
            this.toast.success('Text file created');
            const out = output.join('\r\n');
            downloadjs(out, 'seeds.txt', 'txt');
        }
    }

    getQuantity() {
        this.setQuantityError(false);
        const quantityEle = document.getElementById("quantity");
        const value = quantityEle.value;
        if (value && !isNaN(value) && parseInt(value)) {
            return parseInt(value);
        }
                this.setQuantityError(true);
        return 0;
    }

}
