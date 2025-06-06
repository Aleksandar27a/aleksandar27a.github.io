const loop = document.querySelector('.loop');
const search = document.getElementById('search')
let isSearch = false
loop.addEventListener('click', ()=>{
   activateLoop()
})
function activateLoop(){
    if(!isSearch){
        search.style.display = 'flex'
        return isSearch = true
    }else{
        search.style.display = 'none'
        return isSearch = false
    }
}

                                                // Search filter

function handleEnter(e){
    if (e.key === "Enter"){
        searchProdukt();
    }
}

function searchProdukt(){
    const searching = document.getElementById('search').value.toLowerCase();



    const produkti = [
        {
            ime: "iphone 10",
            url: "proizvodi/iphone10.html"
        },
        {
            ime: "iphone 11",
            url: "proizvodi/iphone11.html"
        },
        {
            ime:"iphone 12",
            url: "proizvodi/iphone12.html"
        },
        {
            ime:"iphone 14",
            url:"proizvodi/iphone14.html"
        },
        {
            ime:"samsung carribian",
            url:'proizvodi/carribian.html'
        },
        {
            ime:"Xiaomi Redmi 12",
            url:'proizvodi/redmi12.html'
        },
        {
            ime:"Xiaomi 14T",
            url:'proizvodi/Xiaomi14.html'
        },
        {
            ime:"Huawei Nova 10SE",
            url:'proizvodi/Huawei.html'
        },
        {
            ime:"Huawei Nova 10SE",
            url:'proizvodi/Huawei.html'
        },
        {
            ime:"Galaxy Watch FE 2024",
            url:'proizvodi/galaxywatch.html'
        },
        {
            ime:"SmartWatch FE 2020",
            url:'proizvodi/smartwatch.html'
        },
        {
            ime:"RoseGold SmartWatch",
            url:'proizvodi/rosegoldwatch.html'
        },
        {
            ime:"SmartWatch Fit3",
            url:'proizvodi/fit3.html'
        },
    ]
        
    
    const proizvod = produkti.find(produkt => produkt.ime.toLowerCase().includes(searching));

    if (proizvod) {
        window.location.href = proizvod.url;
        // console.log("bravo")
    } else {
        alert("Nije pronađen proizvod!");
        console.log('lose')
    }
}

                                                        // cart

const cartBag = document.querySelector('.cart-icon');
const insideCart = document.querySelector('.inside-cart')
const body = document.querySelector('body');

let closeCart = false;
cartBag.addEventListener('click', ()=>{
    if(!closeCart){
        
        insideCart.style.display = 'block';
        insideCart.style.opacity = 1;
        body.classList.add('body-overlay')
       return  closeCart = true
    }
   
else{
    insideCart.style.display = 'none';
    
    return closeCart = false
}
})


 

    






document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 0, productName: "Iphone 10", img: "/E-Commerce/proizvodi/image/D_759471-MLA71782897602_092023-C.jpg", price: "1200$" },
        { id: 1, productName: "Iphone 11", img: "/E-Commerce/proizvodi/image/apple_iphone_11_white_1_7.jpg", price: "1300$" },
        { id: 2, productName: "Iphone 12", img: "/E-Commerce/proizvodi/image/iphone-12-blue.jpg", price: "1400$" },
        { id: 3, productName: "Iphone 14", img: "/E-Commerce/proizvodi/image/czcs_iphone14_q422_purple_pdp_image_position-1a_t_4_3.jpg", price: "1650$" },
        
        { id: 4, productName: "Galaxy Watch FE", img: "/E-Commerce/proizvodi/image/ph-galaxy-watch-fe-r861-sm-r861nzkaasa-542490468.avif", price: "1450$"},
        { id: 5, productName: "Blue SmartWatch", img: "/E-Commerce/proizvodi/image/uk-galaxy-watch-fe-r861-sm-r861nzsaeua-542493242.avif", price: "1150$"},
        { id: 6, productName: "Galaxy Rose", img: "/E-Commerce/proizvodi/image/ph-galaxy-watch-fe-r861-sm-r861nidaasa-542490440.avif", price: "1450$"},
        { id: 7, productName: "Galaxy Fit3", img: "/E-Commerce/proizvodi/image/ph-galaxy-fit3-r390-sm-r390nzaaaaaaaaaaaaaaaaasa-539943985.avif", price: "2150$"},
        
    ];

    // Učitaj korpu iz localStorage ili postavi praznu korpu ako nema podataka
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const addButton = document.querySelectorAll('.add-to-cart');
    const data = document.querySelector('.cart-data');
    const amount = document.querySelector('.cart-items');

    // Kreiraj totalPriceProduct element i dodaj ga u DOM
    const totalPriceProduct = document.createElement('div');
    totalPriceProduct.classList.add('all-price');
    data.appendChild(totalPriceProduct);

    // Funkcija za prikazivanje svih proizvoda iz korpe pri učitavanju stranice
    cart.forEach(product => displayItems(product));
    updateCartCount();
    totalPrice();

    addButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            if (!isProductInCart(product.id)) {
                addToCart(product);
                displayItems(product);
                totalPrice(product);
            }
        });
    });

    function addToCart(product) {
        cart.push({ ...product, quantity: 1 });
        saveCart();
        updateCartCount();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function isProductInCart(productId) {
        return cart.some(item => item.id === productId);
    }

    function updateCartCount() {
        amount.innerText = "Number of products" + ": " + cart.length;
    }

    function displayItems(product) {
        updateCartCount();
        const cartItem = document.createElement('div');
        cartItem.classList.add('data-item');
        cartItem.setAttribute('data-id', product.id);
        cartItem.innerHTML = `
            <img src="${product.img}"/>
            <p>${product.productName}</p>
            <span>${product.price}</span>
            <p id="remove">remove</p>
            <span class="plus"><i class="fa-solid fa-plus"></i></span>
            <p class="number">${product.quantity}</p>
            <span class="minus"><i class="fa-solid fa-minus"></i></span>
        `;
        data.appendChild(cartItem);

        const valueItem = cartItem.querySelector('.number');
        const plus = cartItem.querySelector('.plus');
        const minus = cartItem.querySelector('.minus');
        const remove = cartItem.querySelector('#remove');
        let currentAmount = cart.find(item => item.id === product.id);

        plus.addEventListener('click', () => {
            currentAmount.quantity += 1;
            valueItem.innerText = currentAmount.quantity;
            totalPrice();
            saveCart();
        });
        
        minus.addEventListener('click', () => {
            if (currentAmount.quantity > 1) {
                currentAmount.quantity -= 1;
                valueItem.innerText = currentAmount.quantity;
                totalPrice();
                saveCart();
            }
        });

        remove.addEventListener('click', () => {
            removeItem(product.id);
            cartItem.remove();
            updateCartCount();
            totalPrice();
            saveCart();
        });

        function removeItem(productId) {
            cart = cart.filter(product => product.id !== productId);
        }
    }

    function totalPrice() {
        const total = cart.reduce((acc, product) => {
            const price = parseFloat(product.price.replace('$', ''));
            return acc + price * product.quantity;
        }, 0);
        totalPriceProduct.innerHTML = `<p class="total">Total price: $${total}</p>`;
    }
    
});



                                            // Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Koristi querySelectorAll da selektuješ sve odgovarajuće elemente
const blogs = document.querySelectorAll('.about-blog'); 

// Primeni observer na svaki od tih elemenata
blogs.forEach((el) => {
    observer.observe(el);
});

const blogTechnology = document.querySelectorAll('.blog-technology')
blogTechnology.forEach((els)=>{
    observer.observe(els);
})






 

                                                            // Hamburger menu
const menu = document.querySelector('.hamburger-menu')
const links = document.querySelectorAll('.middle');
let isOpen = false
menu.addEventListener('click', ()=>{
     isOpenedMenu()
})



function isOpenedMenu(){
    if(!isOpen){
        links.forEach((link)=>{
    link.style.display = 'flex'
     
        })
       return isOpen = true
     }else{
        links.forEach((link)=>{
    link.style.display = 'none'
        })
        
        return isOpen = false
     }
}