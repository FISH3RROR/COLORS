




class Products {

    render() {
        htmlCatalog += `
            
            <li class="products-element">

                 <span class="products-element__name">${name}</span>
                 <img  class="products-element__img" src="${img}" />
                 <span class="products-element__price">
                 📘 ${price.toLocaleString()} RUB
                 </span>
    
        <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                 ${activeText}
               </button>
            </li>
            
            
            
            `;

    });

        ROOT_PRODUCTS.innerHTML = html;
}


const productsPage = new Products();
productsPage.render();