document.addEventListener("DOMContentLoaded", function() {
    const categorySelect = document.getElementById("category-select");
    const productList = document.getElementById("product-list");

    async function loadProductData(category) {
      
        const data = {
            smartphone: [
                { name: "Smartphone 1", description: "Display 6.5", price: "599", image: "https://via.placeholder.com/150" },
                { name: "Smartphone 2", description: "Camera 12MP", price: "699", image: "https://via.placeholder.com/150" }
            ],
            automobile: [
                { name: "Auto 1", description: "Sedan, 150CV", price: "20000", image: "https://via.placeholder.com/150" },
                { name: "Auto 2", description: "SUV, 250CV", price: "30000", image: "https://via.placeholder.com/150" }
            ],
            computer: [
                { name: "Laptop 1", description: "16GB RAM, 512GB SSD", price: "1200", image: "https://via.placeholder.com/150" },
                { name: "Laptop 2", description: "8GB RAM, 256GB SSD", price: "800", image: "https://via.placeholder.com/150" }
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
