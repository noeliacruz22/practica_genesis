const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

function getGiftsToRefill (a1, a2, a3) {
    let faltantes = [];
    for(let i = 0; i< a1.length; i++){
        const elemento = a1[i];
        if(a2.includes(elemento) && al3.includes(elemento) && faltantes.includes(elemento)){
            faltantes.push(elemento)
        }
    };

    for(let i = 0; i< a2.length; i++){
        const elemento = a2[i];
        if(a1.includes(elemento) && a3.includes(elemento) && faltantes.includes(elemento)){
            faltantes.push(elemento)
        }
    };

    for(let i = 0; i< a3.length; i++){
        const elemento = a3[i];
        if(a2.includes(elemento) && a1.includes(elemento) && faltantes.includes(elemento)){
            faltantes.push(elemento)
        }
    };

    return faltantes;
};

const gifts = getGiftsToRefill(a1, a2, a3);