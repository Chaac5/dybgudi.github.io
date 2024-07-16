const mostrarPantallaListaBotana = () => {
    botanas.forEach(productBotanas => {
        const containerBotanas = document.createElement('div');
        containerBotanas.classList.add('container-info-product');
        containerBotanas.innerHTML = `
                <div class="name-product">          
                    <h2>${productBotanas.nameP}</h2>              
                </div>                              
                <div class="price-product">         
                    <h2>$${productBotanas.priceKG}</h2>
                    <button class='toggle-button'><p>...</p></button>                    
                </div>  
        `

        const containerBodyBotanas = document.querySelector('.container-body-botanas');
        containerBodyBotanas.appendChild(containerBotanas);
    })
}
mostrarPantallaListaBotana()
    /*  mapa del dom container-info-product
           <div class="container-info-product">    
                <div class="name-product">          
                    <h2>Americano</h2>              
                </div>                              
                <div class="price-product">         
                    <h2>$56</h2>
                    <button class='toggle-button'>...</button>                    
                </div>                              
            </div>
    */

const mostrarPantallaListaDulces = () => {
    dulces.forEach(productDulces => {
        const containerDulces = document.createElement('div');
        containerDulces.classList.add('container-info-product-dulces');
        containerDulces.innerHTML = `
                <div class="name-product-dulces">          
                    <h2>${productDulces.nameP}</h2>              
                </div>                              
                <div class="price-product-dulces">         
                    <h2>$${productDulces.priceKG}</h2>
                    <button class='toggle-button'>...</button>                    
                </div> 
        `
        var containerBodyDulces = document.querySelector('.container-body-dulces');
        containerBodyDulces.appendChild(containerDulces);
    });
}
mostrarPantallaListaDulces()


const mostrarPantallaListaOtros = () => {
    otros.forEach(productOtros => {
        const containerOtros = document.createElement('div');
        containerOtros.classList.add('container-info-product-otros');
        containerOtros.innerHTML = `
                <div class="name-product-otros">          
                    <h2>${productOtros.nameP}</h2>              
                </div>                              
                <div class="price-product-otros">         
                    <h2>$${productOtros.priceKG}</h2>
                    <button class='toggle-button'>...</button>                    
                </div> 
        `
        let containerBodyOtros = document.querySelector('.container-body-otros');
        containerBodyOtros.appendChild(containerOtros);
    });
};
mostrarPantallaListaOtros()


const mostrarPantallaListaBolsas = () => {
    bolsas.forEach(productBolsas => {
        let containerBolsas = document.createElement('div');
        containerBolsas.classList.add('container-info-product-bolsas');
        containerBolsas.innerHTML = `
                <div class="name-product-otros">          
                    <h2>${productBolsas.tamaño}</h2>              
                </div>                              
                <div class="price-product-otros">         
                    <h2>$${productBolsas.priceKG}</h2>
                    <button class='toggle-button'>...</button>                    
                </div> 
        `
        let containerBodyBolsas = document.querySelector('.container-body-bolsas');
        containerBodyBolsas.appendChild(containerBolsas);
    })
}
mostrarPantallaListaBolsas()


