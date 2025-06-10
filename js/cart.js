document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Ensure all item IDs in the cart are numbers
        cart = cart.map(item => ({
            ...item,
            id: parseInt(item.id)
        }));
    } catch (e) {
        console.error("Error parsing cart from localStorage", e);
    }

    const cartList = document.querySelector('.cart-list');
    const emptyCartMessage = '<p class="empty-cart-message">Giỏ hàng của bạn hiện đang trống.</p>';
    function renderCart() {
        if (cart.length > 0 && cartList) {
            cartList.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-info">
            <h4>${item.name}</h4>
            <p>Size: ${item.size}</p>
            <span class="cart-price">${item.price.toLocaleString('vi-VN')}₫</span>
            <div class="cart-qty">
              <button class="qty-btn" data-action="decrease">-</button>
              <input type="number" value="${item.qty}" min="1" readonly>
              <button class="qty-btn" data-action="increase">+</button>
            </div>
            <button class="cart-remove"><i class="fa fa-trash"></i> Xoá</button>
          </div>
        </div>
      `).join('');
        } else if (cartList) {
            cartList.innerHTML = emptyCartMessage;
        }
        updateTotal();
    }

    const totalSpan = document.querySelectorAll('.cart-total-row span:last-child');
    const finalSpan = document.querySelector('.cart-total-final span:last-child b');

    function parsePrice(str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    }

    function formatPrice(num) {
        return num.toLocaleString('vi-VN') + '₫';
    }

    function updateTotal() {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.qty;
        });

        if (totalSpan.length > 0) totalSpan[0].textContent = formatPrice(total);
        if (finalSpan) finalSpan.textContent = formatPrice(total);
        const checkoutButton = document.querySelector('.cart-checkout-btn');
        if (checkoutButton) {
            checkoutButton.disabled = cart.length === 0;
        }
    }

    // Event delegation for quantity and remove buttons
    if (cartList) {
        cartList.addEventListener('click', function(event) {
            const target = event.target;
            const cartItem = target.closest('.cart-item');

            if (!cartItem) return; // Not a cart item interaction

            const itemId = parseInt(cartItem.dataset.id);
            let currentItem = cart.find(p => p.id === itemId);
            if (!currentItem) return; // Item not found in cart

            const qtyBtn = target.closest('.qty-btn');
            const removeBtn = target.closest('.cart-remove');

            if (qtyBtn) {
                const action = qtyBtn.dataset.action;
                const qtyInput = cartItem.querySelector('input[type="number"]');

                if (action === 'increase') {
                    currentItem.qty++;
                } else if (action === 'decrease' && currentItem.qty > 1) {
                    currentItem.qty--;
                }
                qtyInput.value = currentItem.qty;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateTotal();
            } else if (removeBtn) {
                cart = cart.filter(product => product.id !== itemId);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        });
    }

    const checkoutForm = document.querySelector('.cart-checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi đặt hàng.');
                return;
            }
            const customerName = checkoutForm.querySelector('input[placeholder="Họ và tên"]').value;
            const phone = checkoutForm.querySelector('input[placeholder="Số điện thoại"]').value;
            const address = checkoutForm.querySelector('input[placeholder="Địa chỉ nhận hàng"]').value;
            const total = finalSpan ? finalSpan.textContent : 'N/A';
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const newOrder = {
                id: Date.now(), 
                customerName,
                phone,
                address,
                total,
                status: 'Chờ xử lý' 
            };

            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));

            localStorage.removeItem('cart');

            alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được gửi đến hệ thống.');
            window.location.href = 'index.html';
        });
    }

    renderCart();
});