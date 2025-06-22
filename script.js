const products = [
    {
      name: "Корм для котів",
      image: "https://zoolove.com.ua/components/com_jshopping/files/img_products/full_brit-premium-bn-cat-adult-chicken-2022-zoolove.jpg",
      price: "200 грн"
    },
    {
      name: "Іграшка для собак",
      image: "https://zoo-club.com.ua/image/catalog/natafoto/igryshki/akdjidn.jpg",
      price: "150 грн"
    },
    {
      name: "Клітка для хом'яка",
      image: "https://murchyk.com.ua/img/10/734/1286/1286-4159-lg.jpg",
      price: "700 грн"
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
      <button onclick="alert('Додано до кошика: ${product.name}')">Купити</button>
    `;
    container.appendChild(div);
  });