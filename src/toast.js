import * as M from 'materialize-css';

export class Toast{


    success(html){
        const options = {
            html: html,
            displayLength:2000,
            classes:'teal darken-1 white-text'
        }
        M.toast(options)
    }
}