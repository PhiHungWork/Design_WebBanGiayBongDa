document.querySelectorAll('.add-to-cart').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const product = {
      name: btn.getAttribute('data-name'),
      price: parseInt(btn.getAttribute('data-price')),
      img: btn.getAttribute('data-img'),
      size: btn.getAttribute('data-size') || '41',
      qty: 1
    };
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch(e) {}
    const existingProductIndex = cart.findIndex(item => 
      item.name === product.name && item.size === product.size
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].qty += 1;
    } else {
      product.id = Date.now();
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm sản phẩm vào giỏ hàng!');
  });
}); 