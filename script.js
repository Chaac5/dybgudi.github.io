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
                    <button class='btn1-button'>...</button>                    
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
                    <button class='btn1-button'>...</button>                    
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
                    <button class='btn1-button'>...</button>                    
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
                    <button class='btn1-button'>...</button>                    
                </div> 
        `
        let containerBodyBolsas = document.querySelector('.container-body-bolsas');
        containerBodyBolsas.appendChild(containerBolsas);
    })
}
mostrarPantallaListaBolsas()

/*Logica addEventListener*/
let containerAllProducts = document.getElementById('container-all-products');
let popMostrarInfo = document.getElementById('pop-container-info');




containerAllProducts.addEventListener('click', e => {
    if (e.target.classList.contains('btn1-button')){
        viewProduct(e.target.closest('.container-info-product'))
        console.log('active')
    };
})




let viewProduct = (productContainer) => {
    const titleElement = productContainer.querySelector('.name-product');
    const productName = titleElement.textContent.trim();
    
    let productPop = botanas.find (p => p.nameP === productName);

    const containerInfoPop = document.createElement('div');
    containerInfoPop.classList.add('container-toggle-button');

    containerInfoPop.innerHTML = `
        <div class="title-container-toggle-button">
            <h1>${productPop.nameP}</h1>
        </div>
        <div class="price-container-toggle-button">
            <div class="price5-container">
                <h2>$5</h2>
                <p>${productPop.cost5}grs</p>
            </div>
            <div class="price10-container">
                <h2>$10</h2>
                <p>${productPop.cost10}grs</p>
            </div>
            <div class="price20-container">
                <h2>$20</h2>
                <p>${productPop.cost20}grs</p>
            </div>
        </div>
        <div class="kilograms-price-container">
            <div class="container-kg">
                <h2>KG</h2>
                <p>$${productPop.priceKG}</p>
            </div>
            <div class="container-34">
                <h2>3/4K</h2>
                <p>$${productPop.price34}</p>
            </div>
            <div class="container-12">
                <h2>1/2K</h2>
                <p>$${productPop.price12}</p>
            </div>
            <div class="container-14">
                <h2>1/4K</h2>
                <p>$${productPop.price14}</p>
            </div>
            <div class="container-100">
                <h2>100grs</h2>
                <p>$${productPop.priceGRS}</p>
            </div>
        </div>
        <div class="btn-cerrar-container">
            <button class="btn-cerrar">cerrar</button>
        </div>
    `

    popMostrarInfo.innerHTML = '';
    popMostrarInfo.appendChild(containerInfoPop);
    popMostrarInfo.style.display = 'block';

    containerInfoPop.querySelector('.btn-cerrar').addEventListener('click', () => {
        popMostrarInfo.style.display = 'none';
    })
 }

