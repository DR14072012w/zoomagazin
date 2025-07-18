let korm = document.querySelector('.korm')
let igrashka = document.querySelector('.igrashka')
let klitka = document.querySelector('.klitka')
let vsi = document.querySelector('.vsi')
let korzinaImg = document.querySelector('.korzinaImg')
let basketList = document.querySelector('.korzinaItem')
let korzinaBlock = document.querySelector('.korzinaBlock')
let deleteItem = document.querySelector('.delete')

deleteItem.addEventListener("click", function(){
  localStorage.clear()
  countPrice.innerHTML = ""
  add_basket_buy()
})

const korzina = []

const products = [
    {
      name: "Корм для котів",
      image: "https://zoolove.com.ua/components/com_jshopping/files/img_products/full_brit-premium-bn-cat-adult-chicken-2022-zoolove.jpg",
      price: 200,
      category: "Корм",
      classB: "kormB"
    },
    {
      name: "Іграшка для собак",
      image: "https://zoo-club.com.ua/image/catalog/natafoto/igryshki/akdjidn.jpg",
      price: 150, 
      category: "Іграшка",
      classB: "igrashkaB"
    },
    {
      name: "Клітка для хом'яка",
      image: "https://murchyk.com.ua/img/10/734/1286/1286-4159-lg.jpg",
      price: 700,
      category: "Клітка",
      classB: "klitkaB"
    }
  ];
  
  const container = document.getElementById('products');
  
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price} грн</p>
      <button>Додати до корзини</button>
    `;
    container.appendChild(div);
  });

  function addCategory(button) {

    container.innerHTML = ''

    products.forEach(product => {
      if (product.category==button.innerHTML) {
        const divN = document.createElement('div');
        divN.className = 'product';
        divN.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">${product.price} грн</p>
          <button>Додати до корзини</button>
        `;
        container.appendChild(divN);
      }
    });

  }

  korm.addEventListener("click", function() {
    addCategory(korm)
  })

  igrashka.addEventListener("click", function() {
    addCategory(igrashka)
  })

  klitka.addEventListener("click", function() {
    addCategory(klitka)
  })

  vsi.addEventListener("click", function() {
    const container = document.getElementById('products');
    container.innerHTML = ''

    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} грн</p>
        <button>Додати до корзини</button>
      `;
      container.appendChild(div);
    });
  })

let productList = document.querySelectorAll('.product')
for (let i=0; i<productList.length; i++) {
  let tempButton = productList[i].querySelector('button')
  tempButton.addEventListener('click', function(){
    if (!localStorage.getItem(productList[i].querySelector('h3').innerHTML)){
    localStorage.setItem(productList[i].querySelector('h3').innerHTML, JSON.stringify({
      name: productList[i].querySelector('h3').innerHTML,
      image: productList[i].querySelector('img').innerHTML,
      price: productList[i].querySelector('.price').innerHTML,
      count: 1}))
    } else{
      let temp = JSON.parse(localStorage.getItem(productList[i].querySelector('h3').innerHTML) || "{}")
      temp["count"]+=1
      localStorage.setItem(productList[i].querySelector('h3').innerHTML, JSON.stringify(temp))
    }
    
  })
}
let check = 0

korzinaImg.addEventListener("click", function(){
  console.log("123")
  if (check==0){
    check = 1
    korzinaBlock.style.display = "flex"
    add_basket_buy()
  }else{
    check = 0
    korzinaBlock.style.display = "none"
  }
})

let countPrice = document.querySelector(".countPrice")

function add_basket_buy(){
  basketList.innerHTML = ""
  let countPrice = 0
  if (localStorage.length = 0){
    basketList.innerHTML = "<h1>У вашому кошику пусто</h1>"
  }else{
    for(let key in localStorage){
      if (localStorage.hasOwnProperty(key)){
        let tempData = JSON.parse(localStorage.getItem(key) || "{}")
        basketList.innerHTML += `<article class="basket-item">
        <img src="${tempData["img"]}">
        <div class="basket-name-item">${tempData["name"]}</div>
        <div class="basket-count-item">${tempData["count"]}</div>
        <div class="basket-count-price">${tempData["price"]}</div>
        </article>`
        countPrice.innerText = +countPrice.innerText+tempData["price"]
      }}
    basketList.innerHTML += `<div class="countPrice">${countPrice}</div>`
  }
}