const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const product =[
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors:[
            {
                code: "white",
                img: "./image/air1.png",
            },
            {
                code: "black",
                img: "./image/air1.1.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 109,
        colors:[
            {
                code: "red",
                img: "./image/air2.png",
            },
            {
                code: "darkgreen",
                img: "./image/air2.1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 149,
        colors:[
            {
                code: "white",
                img: "./image/air3.png",
            },
            {
                code: "yellow",
                img: "./image/air3.1.png",
            },
        ],
    },
    {
        id: 4,
        title: "Creter",
        price: 129,
        colors:[
            {
                code: "lightgray",
                img: "./image/air4.png",
            },
            {
                code: "black",
                img: "./image/air4.1.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors:[
            {
                code: "white",
                img: "./image/air5.png",
            },
            {
                code: "gold",
                img: "./image/air5.1.png",
            },
        ],
    },
];

let choosenProduct= product[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click",() => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = product[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

        currentProductColors.forEach((color,index) => {
            color.addEventListener("click" ,()=>{
                currentProductImg.src=choosenProduct.colors[index].img
            });
        });
    });
});


currentProductSizes.forEach((size,index) => {
    size.addEventListener("click",() => {
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () =>{
    payment.style.display="flex";
});

close.addEventListener("click", () =>{
    payment.style.display="none";
});