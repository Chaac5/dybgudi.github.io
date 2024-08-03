const mostrarPantallaListaBotana = () => {
    productsGUDI.botana.forEach(productBotanas => {
        const containerBotanas = document.createElement('div');
        containerBotanas.classList.add('container-info-product');
        containerBotanas.innerHTML = `
                <div class="name-product">          
                    <h2>${productBotanas.nameP}</h2>              
                </div>                              
                <div class="price-product">         
                    <h2>$${productBotanas.priceKG}</h2>
                    <button class='btn1-button'>°°°</button>                    
                </div>
                <h1 class='category-product'>botana001</h1>
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
                    <button class='btn1-button'>...</button>                    
                </div>                              
            </div>
    */

const mostrarPantallaListaDulces = () => {
    productsGUDI.dulces.forEach(productDulces => {
        const containerDulces = document.createElement('div');
        containerDulces.classList.add('container-info-product');
        containerDulces.innerHTML = `
                <div class="name-product">          
                    <h2>${productDulces.nameP}</h2>              
                </div>                              
                <div class="price-product">         
                    <h2>$${productDulces.priceKG}</h2>
                    <button class='btn1-button'>°°°</button>                    
                </div> 
                <h1 class='category-product'>dulces001</h1>
        `
        var containerBodyDulces = document.querySelector('.container-body-dulces');
        containerBodyDulces.appendChild(containerDulces);
    });
}
mostrarPantallaListaDulces()


const mostrarPantallaListaOtros = () => {
    productsGUDI.otros.forEach(productOtros => {
        const containerOtros = document.createElement('div');
        containerOtros.classList.add('container-info-product');
        containerOtros.innerHTML = `
                <div class="name-product">          
                    <h2>${productOtros.nameP}</h2>              
                </div>                              
                <div class="price-product-otros">         
                    <h2>$${productOtros.priceKG}</h2>
                    <button class='btn1-button'>°°°</button>                     
                </div> 
                <h1 class='category-product'>otros001</h1>
        `
        let containerBodyOtros = document.querySelector('.container-body-otros');
        containerBodyOtros.appendChild(containerOtros);
    });
}
mostrarPantallaListaOtros()


const mostrarPantallaListaBolsas = () => {
    productsGUDI.bolsas.forEach(productBolsas => {
        let containerBolsas = document.createElement('div');
        containerBolsas.classList.add('container-info-product');
        containerBolsas.innerHTML = `
                <div class="name-product-bolsas">          
                    <h2>${productBolsas.tamaño}</h2>              
                </div>                              
                <div class="price-product-bolsas">         
                    <h2>$${productBolsas.priceKG}</h2>
                    <button class='btn1-button'>°°°</button>                     
                </div> 
                <h1 class='category-product'>bolsas001</h1>
        `
        let containerBodyBolsas = document.querySelector('.container-body-bolsas');
        containerBodyBolsas.appendChild(containerBolsas);
    })
}
mostrarPantallaListaBolsas()


let categoryState = {
    current: 'botana001'
};

let updateCategory = (element) => {
    let newCategory = 'botana001'

    if (element.closest('.container-body-botanas')) {
        newCategory = 'botana001';
    } else if (element.closest('.container-body-dulces')) {
        newCategory = 'dulces001';
    } else if (element.closest('.container-body-otros')) {
        newCategory = 'otros001';
    } else if (element.closest('.container-body-bolsas')) {
        newCategory = 'bolsas001';
    }

if (categoryState.current !== newCategory) {
    categoryState.current = newCategory;
    console.log('Categoria actualizada a: ', categoryState);
    return true;
}
return false;
}


/*logica click mostrar/ocultar contenedor del producto*/

let containerAllProducts = document.getElementById('container-all-products');
let popMostrarInfo = document.getElementById('pop-container-info');

const categorySelector = document.querySelector('.category-product');
categorySelector.addEventListener('change', (e) => {
    let category001 = 'botana001';
    console.log('categoria actualizada: ', category001)
})
const category001 = 'botana001' /*categorySelector.textContent.trim();*/
let selectedList;


console.log('category001 antes del click:', categoryState.current);

containerAllProducts.addEventListener('click', e => {
    console.log('category001 en el momento del click:', categoryState.current)

    if (e.target.classList.contains('btn1-button')){
        const categoryChanged = updateCategory(e.target);
        console.log('categoria actual: ', categoryState.current)

        if (categoryChanged) {
            iterateList(categoryState.current);
        }

        updateCategory(e.target);
        console.log('categoria actual: ', category001);
        iterateList(categoryState.current);
        viewProduct(e.target.closest('.container-info-product'), selectedList);
        console.log('event click popContainer')
    };
}); 


let iterateList = (listName) => {
    console.log('IterateList llamado con:', listName);
    switch (listName) {
        case 'botana001':
            selectedList = productsGUDI.botana;
            break;
        case 'dulces001':
            selectedList = productsGUDI.dulces;
            break;
        case 'otros001':
            selectedList = productsGUDI.otros;
            break;
        case 'bolsas001':
            selectedList = productsGUDI.bolsas;
            break;
        default:
            console.log(`List "${listName}" not found`);
            selectedList = [];
    };
};


/*container pop products*/

let viewProduct = (productContainer, selectedList) => {
    console.log(`ViewProduct llamado con: `, selectedList);
    if (!selectedList || selectedList.length === 0) {
        console.log('La lista deleccionada esta vaica o no definida');
        return;
    }

    const titleElement = productContainer.querySelector(`.name-product`);
    if ( !titleElement ) {
        console.log('Elemento de titulo no encontrado');
        return;
    }
    
    const productName = titleElement.textContent.trim();
    console.log('Buscando producto: ', productName);


    productPop = selectedList.find(p => p.nameP === productName);

    

    if (productPop) {
        console.log('Producto encontrado:', productPop)

        const containerInfoPop = document.createElement('div');
        containerInfoPop.classList.add('container-btn1-button');

        containerInfoPop.innerHTML = `
            <div class="title-container-btn1-button">
                <h1>${productPop.nameP}</h1>
            </div>
            <div class="price-container-btn1-button">
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

        const popMostrarInfo = document.getElementById('pop-container-info')
        popMostrarInfo.innerHTML = '';
        popMostrarInfo.appendChild(containerInfoPop);
        popMostrarInfo.style.display = 'block';

        containerInfoPop.querySelector('.btn-cerrar').addEventListener('click', () => {
        popMostrarInfo.style.display = 'none';
        })
    } else {
        console.log('Producto no encontrado en la lista')
    }
    
}

