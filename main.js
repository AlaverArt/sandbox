const item_labels = document.querySelectorAll('.accordion__label');
item_labels.forEach( (el) => {
    el.addEventListener('click', (e) => {
        const elem = e.target;
        let parent = elem.parentNode;
        const body = parent.querySelector('.accordion__body');

        parent.classList.toggle('accordion__item_active');
        
        if(parent.classList.contains('accordion__item_active')){
            body.style.maxHeight = body.scrollHeight + 'px';

            while(!parent.classList.contains('accordion')){
                parent = parent.parentNode;
                const tempBody = parent.querySelector('.accordion__body');
                if(tempBody && parent.classList.contains('accordion__item'))
                    tempBody.style.maxHeight = tempBody.scrollHeight + parent.style.height + 'px';
            }

        }    
        else{
            body.style.maxHeight = '0';
        }
    });
});