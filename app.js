const menu = [

    {
        id: 1,
        title: 'French Croissant',
        img: './img/croissant.jpg',
        price: '8.99$',
        category: 'breakfast',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'


    },
    {
        id: 2,
        title: 'Berry Cupcake',
        img: './img/cupcake.jpg',
        price: '5.69$',
        category: 'breakfast',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },
    {
        id: 3,
        title: 'Italian Pasta',
        img: './img/pasta.jpg',
        price: '17.99$',
        category: 'dinner',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },
    {
        id: 4,
        title: 'Fresh Salad',
        img: './img/salad.jpg',
        price: '10.29$',
        category: 'lunch',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'


    },
    {
        id: 5,
        title: 'Cesar Salad',
        img: './img/salad2.jpg',
        price: '12.59$',
        category: 'lunch',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },
    {
        id: 6,
        title: 'Tom Yum Soup',
        img: './img/soup.jpg',
        price: '4.99$',
        category: 'lunch',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },

    {
        id: 7,
        title: 'Beef Steak',
        img: './img/steak.jpg',
        price: '20.99$',
        category: 'dinner',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },
    {
        id: 8,
        title: 'Breakfast Toast',
        img: './img/toast.jpg',
        price: '4.99$',
        category: 'breakfast',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },
    {
        id: 9,
        title: 'Lunch Bowl',
        img: './img/bowl.jpg',
        price: '11.99$',
        category: 'lunch',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse autem dolorum exercitationem'

    },

]

const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.btn-filter');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    filterMenu(menu);
});

function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(item => {
        return `<article class="menu-item">
       <img src=${item.img} class="photo" alt="${item.img}">

       <div class="item-info">
           <header>
               <h4>${item.title}</h4>
               <h4 class="price">${item.price}</h4>
           </header>
           <p class="item-text">${item.info}         
           </p>
       </div>
   </article>`
    })

    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}


function filterMenu(menuItems) {
    filterBtn.forEach(btn => btn.addEventListener('click', () => {
        if (btn.innerText === "Breakfast") {
            let result = menuItems.filter(item => item.category === 'breakfast');
            displayMenuItems(result);
        } else if (btn.innerText === 'Lunch') {
            let result = menuItems.filter(item => item.category === 'lunch');
            displayMenuItems(result);
        } else if (btn.innerText === 'Dinner') {
            let result = menuItems.filter(item => item.category === 'dinner');
            displayMenuItems(result);
        } else {
            displayMenuItems(menu);
        }
    }))
}