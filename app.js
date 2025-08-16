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
];


///renderCategory//////

const filProductStore = [];

const categories = [...new Set(categoriesShow.map(p => p.title))];

const categoryDisplay = document.getElementById("category");

const renderCategories = () => {
    categoryDisplay.innerHTML += `<h1 class="text-white text-2xl">Category</h1>`;
    categories.forEach(product => {
        categoryDisplay.innerHTML +=
            `<div>
                    <label for="${product}" class="flex items-center gap-2 cursor-pointer ">
                        <input class="cursor-pointer" type="checkbox" id="${product}"  onchange="toggleChip('${product}')">
                        ${product}
                    </label>
         </div> `

    });
};

function toggleChip(categoryName) {

    const chip = document.getElementById(`${categoryName.toLowerCase()}Chip`);
    const productCheckBox = document.getElementById(categoryName);

    if (chip) {
        chip.style.display = chip.style.display === "flex" ? "none" : "flex";
    };
    if (chip.style.display === "none") {
        productCheckBox.checked = false;
    };

    const index = filProductStore.indexOf(categoryName);

    if (index > -1) {
        filProductStore.splice(index, 1);
    } else {
        filProductStore.push(categoryName);
    };

    renderProduct();


    // if (filProductStore.length > 0) {
    //     currentProducts = products.filter(p => filProductStore.includes(p.category));
    // } else {
    //     currentProducts = [...products];
    // }

    // renderProduct(currentProducts,currentProducts);
};

renderCategories();

////=========////


///renderProduct//////

const displayProduct = document.getElementById("displayProduct");

const renderProduct = (itemsCat) => {

    let filteredProducts = itemsCat || products;

    if (filProductStore.length > 0) {
        filteredProducts = filteredProducts.filter(p => filProductStore.includes(p.category));
    };


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

////////==========//////////

///Price Range/////

const priceSlide = document.getElementById("priceSlide");

let priceMax = Math.max(...products.map(p => p.price));

let priceMin = Math.min(...products.map(p => p.price));



priceSlide.innerHTML = ` <div class="flex flex-col">
                        <input class="cursor-pointer" type="range" id="rangeInput" value="${priceMax}"   min="${priceMin}" max="${priceMax}">
                        <div class="flex justify-between items-center">
                            <span>${priceMin}</span>
                            <span>${priceMax}</span>
                        </div>
                       </div>`
const rangeInput = document.getElementById("rangeInput");

rangeInput.addEventListener("change", () => {
    const selectedPriceRange = +rangeInput.value;

    let filtered = [...products];

    filtered = filtered.filter(p => p.price <= selectedPriceRange);

    renderProduct(filtered);

});

//////====//////

/////Rating Filter////

const ratingCategory = document.getElementById("ratingCategory");
let selectedRating = "";


ratingCategory.innerHTML = [5, 4, 3, 2, 1]
    .map(
        (rating) => `
        <div class="flex items-center gap-2 cursor-pointer" onclick="onChangeRatingHandler(${rating})">
            <div class="flex justify-start">
                ${Array(5)
                .fill()
                .map(
                    (_, i) => `<i class="fa-solid fa-star w-3 h-3 ${i < rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-500"
                        }"></i>
                `
                )
                .join("")}
            </div>
            <p class="text-white font-bold">
                ${rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
            </p>
        </div>
    `
    )
    .join("");

function onChangeRatingHandler(rating) {
    selectedRating = rating;
    const filtered = products.filter(r => r.rating >= rating);
    renderProduct(filtered);
    updateRatingStars()
};

/////------//////

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
























// <svg
//     aria-hidden="true"
// class="w-5 h-5 ${i < rating
//     ? "text-yellow-400"
//     : "text-gray-300 dark:text-gray-500"
//   } ${rating == selectedRating ? "!text-[#ff3d47]" : ""}"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>