let korm = document.querySelector('.korm')
let igrashka = document.querySelector('.igrashka')
let klitka = document.querySelector('.klitka')
let vsi = document.querySelector('.vsi')

let patrik = "https://images.steamusercontent.com/ugc/2505772116923985863/396AB6C3F473740BCEF284E1C2C2817422E23E74/?imw=1024&imh=636&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"

const products = [
    {
      name: "Корм для котів",
      image: "https://zoolove.com.ua/components/com_jshopping/files/img_products/full_brit-premium-bn-cat-adult-chicken-2022-zoolove.jpg",
      price: "200 грн",
      category: "Корм",
    },
    {
      name: "Іграшка для собак",
      image: "https://zoo-club.com.ua/image/catalog/natafoto/igryshki/akdjidn.jpg",
      price: "150 грн",
      category: "Іграшка"
    },
    {
      name: "Клітка для хом'яка",
      image: "https://murchyk.com.ua/img/10/734/1286/1286-4159-lg.jpg",
      price: "700 грн",
      category: "Клітка"
    }
  ];
  
  const container = document.getElementById('products');
  
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <form action="https://images.steamusercontent.com/ugc/2505772116923985863/396AB6C3F473740BCEF284E1C2C2817422E23E74/?imw=1024&imh=636&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" target="_blank">
        <button type="submit">Купити</button>
      </form>

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
          <p>${product.price}</p>
          <form action="https://images.steamusercontent.com/ugc/2505772116923985863/396AB6C3F473740BCEF284E1C2C2817422E23E74/?imw=1024&imh=636&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" target="_blank">
            <button type="submit">Купити</button>
          </form>
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
        <p>${product.price}</p>
        <form action="https://images.steamusercontent.com/ugc/2505772116923985863/396AB6C3F473740BCEF284E1C2C2817422E23E74/?imw=1024&imh=636&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" target="_blank">
          <button type="submit">Купити</button>
        </form>
      `;
      container.appendChild(div);
    });
  })