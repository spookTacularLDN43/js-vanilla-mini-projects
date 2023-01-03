const menu = [
    {
        id: 1, 
        title: "Pancakes", 
        category: "pancakes", 
        price: 10,
        img: "./images/pancakes.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    },
    {
        id: 2, 
        title: "Creme brulee", 
        category: "creams", 
        price: 15,
        img: "./images/creme-brulee.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    },
    {
        id: 3, 
        title: "Ice-cream", 
        category: "creams", 
        price: 10,
        img: "./images/ice-cream.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    },
    {
        id: 4, 
        title: "Pancakes with nuts", 
        category: "pancakes", 
        price: 12,
        img: "./images/pancakes-nuts.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    },
    {
        id: 5, 
        title: "Muffin", 
        category: "cakes", 
        price: 8,
        img: "./images/muffin.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    },
    {
        id: 6, 
        title: "Red velvet cake", 
        category: "cakes", 
        price: 17,
        img: "./images/red-velvet-cake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem eum voluptatum exercitationem hic dolores, facere labore temporibus sint tenetur!",
    }
]; 

const sectionCenter = document.querySelector('.section-center'); 

const filterBtns = document.querySelectorAll(".filter-btn"); 

window.addEventListener('DOMContentLoaded', function(){
   displayMenuItems(menu); 
})

function displayMenuItems (menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<article class="menu-item">
        <div class="img-container">
        <img src=${item.img} class= "photo" alt=${item.title}>
        </div>
        <div class="item-info">
       <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
       </header>
       <p class="item-text">${item.desc}</p>
    </div>
    </article>`; 
    }); 
    displayMenu = displayMenu.join(''); 
    sectionCenter.innerHTML = displayMenu; 
}