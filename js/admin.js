document.addEventListener('DOMContentLoaded', () => {
    const initProducts = () => {
        const products = [
            { id: 1, name: 'Nike Phantom Luna II', price: 2500000, image: 'img/nike1.jpg' },
            { id: 2, name: 'Adidas Predator 24', price: 2800000, image: 'img/nike2.webp' },
            { id: 3, name: 'Puma Future 7', price: 2200000, image: 'img/nike3.jpg' }
        ];
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify(products));
        }
    };
    
    initProducts();
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const productsTableBody = document.querySelector('#products-table tbody');
    const ordersTableBody = document.querySelector('#orders-table tbody');
    const customersTableBody = document.querySelector('#customers-table tbody');
    const modal = document.getElementById('product-modal');
    const addProductBtn = document.getElementById('add-product-btn');
    const closeModalBtn = document.querySelector('.close-btn');
    const productForm = document.getElementById('product-form');

    const modalTitle = document.getElementById('modal-title');
    const getProducts = () => JSON.parse(localStorage.getItem('products')) || [];
    const getOrders = () => JSON.parse(localStorage.getItem('orders')) || [];
    const getCustomers = () => JSON.parse(localStorage.getItem('customers')) || [];
    
    const saveProducts = (products) => localStorage.setItem('products', JSON.stringify(products));
    const saveOrders = (orders) => localStorage.setItem('orders', JSON.stringify(orders));
    const saveCustomers = (customers) => localStorage.setItem('customers', JSON.stringify(customers));

const renderProducts = () => {
    const products = getProducts();
    productsTableBody.innerHTML = '';
    products.forEach(p => {
        const row = `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString('vi-VN')}₫</td>
                <td>
                    <img src="${p.image}" alt="${p.name}">
                </td>
                <td>
                    <button class="edit-btn" data-id="${p.id}">Sửa</button>
                    <button class="delete-btn" data-id="${p.id}">Xóa</button>
                </td>
            </tr>`;
        productsTableBody.innerHTML += row;
    });
};
    const renderOrders = () => {
        const orders = getOrders();
        ordersTableBody.innerHTML = '';
        orders.forEach(o => {
            const row = `
                <tr>
                    <td>${o.id}</td>
                    <td>${o.customerName}</td>
                    <td>${o.phone}</td>
                    <td>${o.address}</td>
                    <td>${o.total}</td>
                    <td>${o.status}</td>
                    <td>
                        <button class="delete-btn" data-id="${o.id}">Xóa</button>
                    </td>
                </tr>`;
            ordersTableBody.innerHTML += row;
        });
    };

    const renderCustomers = () => {
        const customers = getCustomers();
        customersTableBody.innerHTML = '';
        customers.forEach(c => {
            const row = `
                <tr>
                    <td>${c.id}</td>
                    <td>${c.name}</td>
                    <td>${c.email}</td>
                    <td>${c.phone}</td>
                    <td>
                        <button class="delete-btn" data-id="${c.id}">Xóa</button>
                    </td>
                </tr>`;
            customersTableBody.innerHTML += row;
        });
    };
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            contentSections.forEach(section => {
                if (section.id === `${targetId}-content`) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
    const openModal = () => modal.style.display = 'block';
    const closeModal = () => modal.style.display = 'none';

    addProductBtn.addEventListener('click', () => {
        productForm.reset();
        document.getElementById('product-id').value = '';
        modalTitle.textContent = 'Thêm Sản Phẩm Mới';
        openModal();
    });
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const image = document.getElementById('product-image').value;
        
        let products = getProducts();
        if (id) { 
            products = products.map(p => p.id == id ? { ...p, name, price, image } : p);
        } else { 
            const newProduct = { id: Date.now(), name, price, image };
            products.push(newProduct);
        }
        
        saveProducts(products);
        renderProducts();
        closeModal();
    });

    productsTableBody.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('edit-btn')) {
            const products = getProducts();
            const product = products.find(p => p.id == id);
            if (product) {
                document.getElementById('product-id').value = product.id;
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-image').value = product.image;
                modalTitle.textContent = 'Sửa Sản Phẩm';
                openModal();
            }
        }
        if (e.target.classList.contains('delete-btn')) {
            if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
                let products = getProducts();
                products = products.filter(p => p.id != id);
                saveProducts(products);
                renderProducts();
            }
        }
    });
    ordersTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
             if (confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
                const id = e.target.dataset.id;
                let orders = getOrders();
                orders = orders.filter(o => o.id != id);
                saveOrders(orders);
                renderOrders();
            }
        }
    });
    
    customersTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
             if (confirm('Bạn có chắc muốn xóa khách hàng này?')) {
                const id = e.target.dataset.id;
                let customers = getCustomers();
                customers = customers.filter(c => c.id != id);
                saveCustomers(customers);
                renderCustomers();
            }
        }
    });
    renderProducts();
    renderOrders();
    renderCustomers();
});