const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
const productCards = document.querySelectorAll('.nike-product-card');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

function filterProducts() {
    const colorFilters = Array.from(document.querySelectorAll('.filter-group:first-child input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim());
    const collectionFilters = Array.from(document.querySelectorAll('.filter-group:nth-child(2) input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim());
    const soleFilters = Array.from(document.querySelectorAll('.filter-group:nth-child(3) input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim());
    const surfaceFilters = Array.from(document.querySelectorAll('.filter-group:nth-child(4) input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim());
    productCards.forEach(card => {
        const productInfo = card.querySelector('.nike-product-info');
        const productText = productInfo ? productInfo.textContent.toLowerCase() : '';
        const matchesColor = colorFilters.length === 0 || colorFilters.some(color => 
            productText.includes(color.toLowerCase()));
        const matchesCollection = collectionFilters.length === 0 || collectionFilters.some(collection => 
            productText.includes(collection.toLowerCase()));
        const matchesSole = soleFilters.length === 0 || soleFilters.some(sole => 
            productText.includes(sole.toLowerCase()));
        const matchesSurface = surfaceFilters.length === 0 || surfaceFilters.some(surface => 
            productText.includes(surface.toLowerCase()));
        if (matchesColor && matchesCollection && matchesSole && matchesSurface) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
    updateProductCount();
}

function updateProductCount() {
    const visibleProducts = document.querySelectorAll('.nike-product-card[style=""]').length;
    const totalProducts = productCards.length;
    const countElement = document.querySelector('.product-count');
    
    if (countElement) {
        countElement.textContent = `${visibleProducts} sản phẩm`;
    }
}
document.addEventListener('DOMContentLoaded', updateProductCount); 