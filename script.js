const products = [
    { id: 1, name: "Beras Premium 5 Kg", price: 65000, img: "images/beras.png" },
    { id: 2, name: "Minyak Goreng 1 Liter", price: 20000, img: "images/minyak.png" },
    { id: 3, name: "Susu UHT 1 Liter", price: 18000, img: "images/susu.png" },
    { id: 4, name: "Roti Tawar 600gr", price: 12000, img: "images/roti.png" },
    { id: 5, name: "Kopi Bubuk 200gr", price: 22000, img: "images/kopi.png" },
    { id: 6, name: "Sabun Cuci Piring", price: 11000, img: "images/sabun.png" },
    { id: 7, name: "Kecap Manis", price: 10000, img: "images/kecap.png" },
    { id: 8, name: "Saos Extra Pedas", price: 10500, img: "images/saos.png" }
];

const productList = document.getElementById("productList");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3 class="product-title">${product.name}</h3>
        <p class="price">Rp ${product.price.toLocaleString()}</p>
    `;

    // ketika kartu diklik → pindah ke halaman detail
    card.onclick = () => {
        window.location.href = `detail_produk.html?id=${product.id}`;
    };

    productList.appendChild(card);
});