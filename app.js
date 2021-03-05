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

window.addEventListener('DOMContentLoaded', () => {
    let displayMenu = menu.map(item => {
        return `<article class="menu-item">
       <img src=${item.img} class="photo" alt="toast">

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

    console.log(displayMenu);
})