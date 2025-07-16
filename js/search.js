const products = [
    { name: "Nike Phantom Gx 2 Pro Tf - Fj2583-800 - Hồng/Cam", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao1.jpg", url: "nike.html" },
    { name: "Nike Tiempo Legend 10 Tf - Dv4342-401 - Xanh/Hồng", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao2.jpg", url: "nike.html" },
    { name: "Nike Phantom Tf - Hf1596-500 - Tím Khoai Môn", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao3.jpg", url: "nike.html" },
    { name: "Nike Phantom Academy Tf - Hv4069-400 - Tím Than", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao4.jpg", url: "nike.html" },
    { name: "Nike Zoom Mercurial Tf - Fq8687-800 - Đỏ/Trắng", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao5.jpg", url: "nike.html" },
    { name: "Nike React Phantom Tf - Fj2583-300 - Xanh Mint", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao6.jpg", url: "nike.html" },
    { name: "Nike Tiempo Legend Tf - Dv4336-800 - Đỏ/Trắng", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao7.jpg", url: "nike.html" },
    { name: "Nike Phantom Gx 2 Pro Tf - Fj2583-400 - Xanh Biển", category: "giay_co_nhan_tao", brand: "nike", image: "img/nike_giayconhantao8.jpg", url: "nike.html" },

    { name: "Adidas F50 Pro Tf - Jh6416 - Hồng", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao1.jpg", url: "adidas.html" },
    { name: "Adidas F50 Pro Tf - Ie1219 - Xanh/Hồng", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao2.jpg", url: "adidas.html" },
    { name: "Adidas Predator 25 Pro Tf - Jh6468 - Trắng/Hồng", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao3.jpg", url: "adidas.html" },
    { name: "Adidas F50 League Messi Tf - Ih0919 - Xám Bạc", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao4.jpg", url: "adidas.html" },
    { name: "Adidas F50 Pro Tf - Ie1220 - Trắng/Đỏ", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao5.jpg", url: "adidas.html" },
    { name: "Adidas F50 Pro Tf - Ih5815 - Trắng/Vàng", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao6.jpg", url: "adidas.html" },
    { name: "Adidas F50 League Tf - If1335 - Đỏ/Cam", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao7.jpg", url: "adidas.html" },
    { name: "Adidas F50 Pro Tf - If1323 - Trắng/Xanh", category: "giay_co_nhan_tao", brand: "adidas", image: "img/adidas_giayconhantao8.jpg", url: "adidas.html" },

    { name: "Puma Future 8 - 108366-03 - Xanh Dạ Quang/Đen", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao1.jpg", url: "puma.html" },
    { name: "Puma Ultra 5 Pro Cage - 108173-03 - Bạc/Vàng", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao2.jpg", url: "puma.html" },
    { name: "Puma Ultra 5 Pro Cage - 108173-01 - Trắng/Cam", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao3.jpg", url: "puma.html" },
    { name: "Puma Future 8 Match Tt - 108370-01 - Đen/Tím", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao4.jpg", url: "puma.html" },
    { name: "Puma King Pro Tt - 107255-03 - Vàng/Đen", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao5.jpg", url: "puma.html" },
    { name: "Puma Ultra 3.4 Tt - 106730-01 - Xám/Cam", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao6.jpg", url: "puma.html" },
    { name: "Puma Ultra Match Tt - 107757-01 - Hồng/Đen", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao7.jpg", url: "puma.html" },
    { name: "Puma Ultra Match Tt - 107521-04 - Vàng/Trắng", category: "giay_co_nhan_tao", brand: "puma", image: "img/puma_giayconhantao8.jpg", url: "puma.html" },

    { name: "Kamito Artista Kl Tf - Kmtf240255 - Trắng/Đỏ", category: "giay_co_nhan_tao", brand: "kamito", image: "img/kamito_giayconhantao1.jpg", url: "kamito.html" },
    { name: "Kamito Artista Kl Tf - Kmtf240414 - Đỏ", category: "giay_co_nhan_tao", brand: "kamito", image: "img/kamito_giayconhantao2.jpg", url: "kamito.html" },
    { name: "Kamito Artista Tf - Kmtf240420 - Xanh Dương", category: "giay_co_nhan_tao", brand: "kamito", image: "img/kamito_giayconhantao3.jpg", url: "kamito.html" },
    { name: "Kamito Artista Pro Tf - Kmtf240356 - Trắng/Xanh", category: "giay_co_nhan_tao", brand: "kamito", image: "img/kamito_giayconhantao4.jpg", url: "kamito.html" },

    { name: "Joma Top Flex In 2432 - Trắng/Đen", category: "giay_futsal", brand: "joma", image: "img/joma_giayconhantao1.jpg", url: "joma.html" },
    { name: "Joma Top Flex In 2404 - Xanh Hoàng Gia", category: "giay_futsal", brand: "joma", image: "img/joma_giayconhantao2.jpg", url: "joma.html" },
    { name: "Joma Top Flex In 2402 - Trắng/Đỏ", category: "giay_futsal", brand: "joma", image: "img/joma_giayconhantao3.jpg", url: "joma.html" },
    { name: "Joma Top Flex In 2527 - Xanh/Trắng/Đen", category: "giay_futsal", brand: "joma", image: "img/joma_giayconhantao4.jpg", url: "joma.html" }
];

function searchProducts(query) {
    query = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().replace(/_/g, ' ').includes(query)
    );
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value;
            if (query.length > 1) { 
                const results = searchProducts(query);
                displaySearchResults(results);
            } else {
                clearSearchResults();
            }
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#button_search')) {
                clearSearchResults();
            }
        });
    }
});
function displaySearchResults(results) {
    clearSearchResults();

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results';
    resultsContainer.style.cssText = `
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        width: 300px; /* Tăng chiều rộng để có không gian cho ảnh */
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        z-index: 1000;
        max-height: 400px;
        overflow-y: auto;
    `;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 15px; text-align: center; color: #777;">Không tìm thấy sản phẩm nào.</div>';
    } else {
        results.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.style.cssText = `
                display: flex;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid #eee;
                cursor: pointer;
            `;
            // Thêm hình ảnh
            const img = document.createElement('img');
            img.src = product.image;
            img.style.cssText = 'width: 50px; height: 50px; object-fit: cover; margin-right: 10px; border-radius: 4px;';
            
            // Thêm tên sản phẩm
            const text = document.createElement('span');
            text.textContent = product.name;
            text.style.fontSize = '14px';

            resultItem.appendChild(img);
            resultItem.appendChild(text);

            resultItem.addEventListener('mouseover', () => resultItem.style.backgroundColor = '#f5f5f5');
            resultItem.addEventListener('mouseout', () => resultItem.style.backgroundColor = 'white');
            
            resultItem.addEventListener('click', () => {
                // Chuyển hướng đến trang thương hiệu tương ứng
                window.location.href = product.url;
            });
            resultsContainer.appendChild(resultItem);
        });
    }

    const searchContainer = document.getElementById('button_search');
    if (searchContainer) {
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(resultsContainer);
    }
}

function clearSearchResults() {
    const existingResults = document.getElementById('search-results');
    if (existingResults) {
        existingResults.remove();
    }
}