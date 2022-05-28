export class Close{

    constructor(){
        this.init();
    }

    init(){
        const closeBtns = document.querySelectorAll('.btn-close');
        closeBtns.forEach((closeBtn)=>{
            closeBtn.addEventListener('click', ()=>{
                const eleRef = closeBtn.getAttribute('data-close');
                if(eleRef){
                    closeBtn.closest(eleRef).style.display = 'none';
                }
            });
        });
    }
}