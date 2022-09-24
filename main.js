/* MENU DESKTOP */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/* MENU MOBILE */
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
/* SHOPPING CART */
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart= document.querySelector("#shoppingCartContainer");
/* CARDS CONTAINER */
const cardsContainer= document.querySelector(".cards-container");
/* PRODUCT DETAIL ASIDE*/ 
const productDetailContainer= document.querySelector("#productDetail");
const productDetailIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
shoppingCartIcon.addEventListener("click",toggleShoppingCart);
productDetailIcon.addEventListener("click",closeProductDetailAside);

function toggleDesktopMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains("inactive")
    const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");
    if(isShoppingCartOpen){
        shoppingCart.classList.add("inactive")
    }
    if(isProductDetailOpen){
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
    const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");
    if(isShoppingCartOpen){
        shoppingCart.classList.add("inactive")
    }
    if(isProductDetailOpen){
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isdesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    if(isdesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    }
    if(isProductDetailOpen){
        productDetailContainer.classList.add("inactive");
    }
    shoppingCart.classList.toggle("inactive");
}
function openProductDetailAside(){
    const isShoppingCartOpen = !shoppingCart.classList.contains("inactive")
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isdesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    if(isShoppingCartOpen){
        shoppingCart.classList.add("inactive")
    }
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    if(isdesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    }
    productDetailContainer.classList.remove("inactive");
} 
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({

    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({

    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({

    name: "PC",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({

    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({

    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});
productList.push({

    name: "PC",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

});

/*          <div class="products-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> 
*/

function renderProducts(arr){
    for (product of productList){

        const productCard = document.createElement("div");
        productCard.classList.add("products-card")
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
        productImg.addEventListener("click",openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
