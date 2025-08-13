const products = [
    {
        id: 1,
        image: "./image/burgerImg.jpeg",
        title: "Burger1",
        description: "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
        price: 200,
        category: "Burger",
        rating: 2,
    },
    {
        id: 15,
        image: "./image/biryaniImg.jpeg",
        title: "Biryani3",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 900,
        category: "Biryani",
        rating: 5,
    },
    {
        id: 10,
        image: "./image/tikkaImg.jpg",
        title: "Tikka1",
        description: "Spicy chicken tikka grilled to perfection",
        price: 250,
        category: "Tikka",
        rating: 2,
    },

    {
        id: 4,
        image: "./image/broastImg.jpeg",
        title: "Broast1",
        description: "Crispy fried broast chicken with fries and coleslaw",
        price: 350,
        category: "Broast",
        rating: 2,
    },
    {
        id: 2,
        image: "./image/burgerImg.jpeg",
        title: "Burger2",
        description: "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
        price: 500,
        category: "Burger",
        rating: 3,
    },
    {
        id: 9,
        image: "./image/pizzaImg.jpeg",
        title: "Pizza3",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 1500,
        category: "Pizza",
        rating: 5,
    },
    {
        id: 5,
        image: "./image/broastImg.jpeg",
        title: "Broast2",
        description: "Juicy broast leg piece with signature spices",
        price: 450,
        category: "Broast",
        rating: 3,
    },
    {
        id: 3,
        image: "./image/burgerImg.jpeg",
        title: "Burger3",
        description: "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
        price: 800,
        category: "Burger",
        rating: 5,
    },
    {
        id: 13,
        image: "./image/biryaniImg.jpeg",
        title: "Biryani1",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 400,
        category: "Biryani",
        rating: 3,
    },
    {
        id: 6,
        image: "./image/broastImg.jpeg",
        title: "Broast3",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 550,
        category: "Broast",
        rating: 5,
    },
    {
        id: 7,
        image: "./image/pizzaImg.jpeg",
        title: "Pizza1",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 600,
        category: "Pizza",
        rating: 3,
    },
    {
        id: 14,
        image: "./image/biryaniImg.jpeg",
        title: "Biryani2",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 700,
        category: "Biryani",
        rating: 4,
    },
    {
        id: 11,
        image: "./image/tikkaImg.jpg",
        title: "Tikka2",
        description: "Juicy chicken tikka leg piece with chutney",
        price: 400,
        category: "Tikka",
        rating: 4,
    },
    {
        id: 8,
        image: "./image/pizzaImg.jpeg",
        title: "Pizza2",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 1000,
        category: "Pizza",
        rating: 4,
    },
    {
        id: 12,
        image: "./image/tikkaImg.jpg",
        title: "Tikka3",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 650,
        category: "Tikka",
        rating: 5,
    },

];

const categoriesShow = [
    { id: 1, title: "Burger" },
    { id: 2, title: "Biryani" },
    { id: 3, title: "Pizza" },
    { id: 4, title: "Broast" },
    { id: 4, title: "Tikka" },
]

///renderCategory//////

const filProductStore = [];

const categories = [...new Set(categoriesShow.map(p => p.title))];

const categoryDisplay = document.getElementById("category");

const renderCategories = () => {
    category.innerHTML += `<h1 class="text-white text-2xl">Category</h1>`;
    categories.forEach(product => {
        categoryDisplay.innerHTML +=
            `<div>
                    <label for="${product}" class="flex items-center gap-2 cursor-pointer">
                        <input class="cursor-pointer" type="checkbox" id="${product}"  onchange="toggleChip('${product}')">
                        ${product}
                    </label>
         </div> `

    });
};

function toggleChip(categoryName) {

    const chip = document.getElementById(`${categoryName.toLowerCase()}Chip`);

    if (chip) {
        chip.style.display = chip.style.display === "flex" ? "none" : "flex";
    }

    const index = filProductStore.indexOf(categoryName);

    if (index > -1) {
        filProductStore.splice(index, 1);
    } else {
        filProductStore.push(categoryName);
    }

    renderProduct();
};

renderCategories();

////=========////



///renderProduct//////

const displayProduct = document.getElementById("displayProduct");

const renderProduct = () => {

    let filteredProducts = products;

    if (filProductStore.length > 0) {
        filteredProducts = products.filter(p => filProductStore.includes(p.category));
    }
    let htmlCode = `<div class="grid grid-cols-12 gap-2">`;

    filteredProducts.forEach(product => {

        htmlCode += `
               <div class="h-[430px] lg:col-span-4 md:col-span-6 col-span-12 border-2 rounded-2xl overflow-hidden">
                <img class="object-cover w-full h-60" src="${product.image}" alt="${product.title}">
                <div class="p-4 flex flex-col justify-between h-50 bg-black text-white">
                    <h1 class="text-2xl">${product.title}</h1>
                    <h1>Rating : ${product.rating}</h1>
                    <p>${product.description}</p>
                    <div class="flex justify-between items-center">
                        <p>$${product.price}</p>
                        <i class="fa-solid fa-cart-shopping cursor-pointer"></i>
                    </div>
                </div>
                </div>
`
    });

    htmlCode += `</div>`;

    displayProduct.innerHTML = htmlCode;

};

renderProduct();

////////==========///////////





// function updateChips(selectedCategories) {
//     const chipContainer = document.getElementById('chip');
//     chipContainer.innerHTML = ''; // clear pehle

//     selectedCategories.forEach(category => {
//         const button = document.createElement('button');
//         button.className = "flex items-center justify-center gap-x-1 bg-black rounded-full px-2 py-1";
//         button.textContent = category;

//         const icon = document.createElement('i');
//         icon.className = "fa-solid fa-xmark cursor-pointer opacity-80 text-sm";
//         icon.style.marginLeft = '4px';
//         icon.onclick = () => {
//             // jab chip ke cross pe click ho toh us checkbox ko uncheck karo aur chips update karo
//             document.querySelector(`input[value="${category}"]`).checked = false;
//             filterProducts();  // fir se filterProducts call karo taake chips and products update ho
//         };

//         button.appendChild(icon);
//         chipContainer.appendChild(button);
//     });
// }

// function filterProducts() {
//     const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);

//     // update chips dynamically
//     updateChips(checkedCategories);

//     if (checkedCategories.length === 0) {
//         renderProducts(products);
//     } else {
//         const filtered = products.filter(p => checkedCategories.includes(p.category));
//         renderProducts(filtered);
//     }
// }

////=========////






////sortALLProduct//////

const listSort = document.getElementById("listSort");

const showMenu = () => {
    listSort.classList.toggle("hidden");
};


const sortHighToLowPrice = () => {
    const sortingPrice = [...products].sort((a, b) => b.price - a.price);
    renderProduct(sortingPrice);
};
const sortLowToHighPrice = () => {
    const sortingPrice = [...products].sort((a, b) => a.price - b.price);
    renderProduct(sortingPrice);
};
const sortHighToLowRating = () => {
    const sortingRating = [...products].sort((a, b) => b.rating - a.rating);
    renderProduct(sortingRating);
};
const sortLowToHighRating = () => {
    const sortingRating = [...products].sort((a, b) => a.rating - b.rating);
    renderProduct(sortingRating);
};

document.getElementById("sortingHightoLowPrice").addEventListener("click", sortHighToLowPrice);
document.getElementById("sortinglowtoHighPrice").addEventListener("click", sortLowToHighPrice);
document.getElementById("sortingHightoLowRating").addEventListener("click", sortHighToLowRating);
document.getElementById("sortingLowtoHighRating").addEventListener("click", sortLowToHighRating);

////==========////
























// displayProduct.innerHTML += `
//          <div class="grid grid-cols-12 gap-2">
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12 border-2 rounded-2xl overflow-hidden">
//                         <img class="object-cover w-100" src="./image/pizzaImg.jpeg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12  border-2 rounded-2xl overflow-hidden">
//                         <img class="w-100 h-55 object-fill" src="./image/biryaniImg.jpeg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12  border-2 rounded-2xl overflow-hidden">
//                         <img class="w-100 object-cover" src="./image/burgerImg.jpeg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12 border-2 rounded-2xl overflow-hidden">
//                         <img class="w-100 object-cover" src="./image/broastImg.jpeg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12 border-2 rounded-2xl overflow-hidden">
//                         <img class="w-100 object-cover" src="./image/tikkaImg.jpg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         class="h-[420px] lg:col-span-4 md:col-span-6 col-span-12  border-2 rounded-2xl overflow-hidden ">
//                         <img class="w-100 object-cover " src="./image/tikkaImg.jpg">
//                         <div class="p-3 flex flex-col justify-between h-50 bg-black text-white">
//                             <h1 class="text-2xl">Pizza</h1>
//                             <h1>rating = 5</h1>
//                             <p>Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce
//                             </p>
//                             <div class="flex justify-between items-center">
//                                 <p>$300</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
// `;
// });