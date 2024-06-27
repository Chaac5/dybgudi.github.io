function mostrarPantallaListaBotana() {
    for ( productBotana of botanas) {

    /*  mapa del dom container-info-product
           <div class="container-info-product">    
                <div class="name-product">          
                    <h2>Americano</h2>              
                </div>                              
                <div class="price-product">         
                    <h2>$56</h2>                    
                </div>                              
            </div>
    */

        let containerProduct = document.createElement('div');
        containerProduct.classList.add('container-info-product');

        let nameProduct = document.createElement('div');
        nameProduct.classList.add('name-product');
        let nP = document.createElement('h2');
        nP.innerHTML = productBotana.nameP
        nameProduct.appendChild(nP);

        let priceProduct = document.createElement('div');
        priceProduct.classList.add('price-product');
        let pP = document.createElement('h2');
        pP.innerHTML = '$' + productBotana.priceKG
        priceProduct.appendChild(pP);



        containerProduct.appendChild(nameProduct);
        containerProduct.appendChild(priceProduct);


        let containerBody = document.querySelector('.container-body-botanas');
        containerBody.appendChild(containerProduct);

    }
}

function mostrarPantallaListaDulces() {
    for ( productDulces of dulces) {

        let containerDulces = document.createElement('div');
        containerDulces.classList.add('container-info-product-dulces');

        let nameProductDulces = document.createElement('div');
        nameProductDulces.classList.add('name-product-dulces');
        let nPD = document.createElement('h2');
        nPD.innerHTML = productDulces.nameP
        nameProductDulces.appendChild(nPD);

        let priceProductDulces = document.createElement('div');
        priceProductDulces.classList.add('price-product-dulces');
        let pPD = document.createElement('h2');
        pPD.innerHTML = '$' + productDulces.priceKG
        priceProductDulces.appendChild(pPD);



        containerDulces.appendChild(nameProductDulces);
        containerDulces.appendChild(priceProductDulces);


        let containerBodyDulces = document.querySelector('.container-body-dulces');
        containerBodyDulces.appendChild(containerDulces);

    }
}

function mostrarPantallaListaOtros() {
    for ( productOtros of otros) {

        let containerOtros = document.createElement('div');
        containerOtros.classList.add('container-info-product-otros');

        let nameProductOtros = document.createElement('div');
        nameProductOtros.classList.add('name-product-otros');
        let nPO = document.createElement('h2');
        nPO.innerHTML = productOtros.nameP
        nameProductOtros.appendChild(nPO);

        let priceProductOtros = document.createElement('div');
        priceProductOtros.classList.add('price-product-otros');
        let pPO = document.createElement('h2');
        pPO.innerHTML = '$' + productOtros.priceKG
        priceProductOtros.appendChild(pPO);



        containerOtros.appendChild(nameProductOtros);
        containerOtros.appendChild(priceProductOtros);


        let containerBodyOtros = document.querySelector('.container-body-otros');
        containerBodyOtros.appendChild(containerOtros);

    }
}

function mostrarPantallaListaBolsas() {
    for ( productBolsas of bolsas) {

        let containerBolsas = document.createElement('div');
        containerBolsas.classList.add('container-info-product-bolsas');

        let nameProductBolsas = document.createElement('div');
        nameProductBolsas.classList.add('name-product-bolsas');
        let nPB = document.createElement('h2');
        nPB.innerHTML = productBolsas.tamaño
        nameProductBolsas.appendChild(nPB);

        let priceProductBolsas = document.createElement('div');
        priceProductBolsas.classList.add('price-product-bolsas');
        let pPB = document.createElement('h2');
        pPB.innerHTML = '$' + productBolsas.priceKG
        priceProductBolsas.appendChild(pPB);



        containerBolsas.appendChild(nameProductBolsas);
        containerBolsas.appendChild(priceProductBolsas);


        let containerBodyBolsas = document.querySelector('.container-body-bolsas');
        containerBodyBolsas.appendChild(containerBolsas);

    }
}

mostrarPantallaListaBotana()
mostrarPantallaListaDulces()
mostrarPantallaListaOtros()
mostrarPantallaListaBolsas()
