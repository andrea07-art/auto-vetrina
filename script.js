document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category-select");
    const productList = document.getElementById("product-list");

    async function loadProductData(category) {
      
        const data = {
           
            automobile: [
                { name: "Auto 1", description: "Sedan, 150CV", price: "20000", image: "https://via.placeholder.com/150" },
                { name: "Auto 2", description: "SUV, 250CV", price: "30000", image: "https://via.placeholder.com/150" }
            ],
           
        };

       
        productList.innerHTML = "";

        
        data[category].forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price} €</div>
            `;

            productList.appendChild(productItem);
        });
    }

    
    loadProductData("smartphone");

    categorySelect.addEventListener("change", function() {
        loadProductData(categorySelect.value);
    });
});
