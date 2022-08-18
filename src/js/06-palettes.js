'use strict';



function handlerRadio(ev) {
    const palette = parseInt(ev.currentTarget.value);
    data.palette = palette;
    previewCard.classList.remove('palette-1','palette-2','palette-3');
    previewCard.classList.add(`palette-${palette}`);
}

for (const oneRadio of allRadios){
    oneRadio.addEventListener('click', handlerRadio);
}