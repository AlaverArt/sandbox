const item_labels = document.querySelectorAll('.accordion__label');
item_labels.forEach( (el) => {
    el.addEventListener('click', (e) => {
        const elem = e.target;
        const parent = elem.parentNode;
        const body = parent.querySelector('.accordion__body');

        parent.classList.toggle('accordion__item_active');
        
        if(parent.classList.contains('accordion__item_active')){
            body.style.maxHeight = body.scrollHeight + 'px';
        }    
        else{
            body.style.maxHeight = '0';
        }
    });
});