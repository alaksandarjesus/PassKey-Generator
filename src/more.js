import * as M from 'materialize-css';
export class More{
    instance = null;
    constructor(){
        this.init();
    }

    init(){
        const moreBtn = document.querySelector(".btn-more");
        moreBtn.addEventListener('click', ()=>{
            const moreModal = document.querySelector('.modal.more');
            if(!this.instance){
                this.instance = M.Modal.init(moreModal, {});
            }
            this.instance.open();
      
        })
    }

}