
import copy from 'copy-to-clipboard';
import { App } from './app';
import { Toast } from './toast';
import * as M from 'materialize-css';

export class Watch{

    app = new App;
    toast = new Toast;

    constructor(){
        this.init();
    }

    init(){
        this.watchInputChanges();
        this.watchBtnCopy();
        this.watchBtnRefresh();
    }

    watchBtnCopy(){
        const btnCopy = document.querySelector(".btn-copy");
        M.FloatingActionButton.init(btnCopy, {})
        btnCopy.addEventListener('click', ()=>{
        const generatedStringEle = document.querySelector(".generated-string");
            copy(generatedStringEle.innerText);
            this.toast.success('Copied');
        })
    }
    watchBtnRefresh(){
        const btnRefresh = document.querySelector(".btn-refresh");
        M.FloatingActionButton.init(btnRefresh, {})
        btnRefresh.addEventListener('click', ()=>{
        this.app.setGeneratedRandomString();
        this.toast.success('New Created');
        })
    }
   

    watchInputChanges(){
        const customLength = document.querySelector("#customLength");
        customLength.addEventListener('keyup',() => this.app.setGeneratedRandomString())
        const customCharacters = document.querySelector("#customCharacters");
        customCharacters.addEventListener('keyup',() => this.app.setGeneratedRandomString())
        const prefix = document.querySelector("#prefix");
        prefix.addEventListener('keyup',() => this.app.setGeneratedRandomString())
        const suffix = document.querySelector("#suffix");
        suffix.addEventListener('keyup',() => this.app.setGeneratedRandomString())
    }
}