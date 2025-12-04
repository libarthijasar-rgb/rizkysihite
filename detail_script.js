// DATA PRODUK
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

// MENGAMBIL ID PRODUK DARI URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// MENCARI PRODUK BERDASARKAN ID
const product = products.find(p => p.id === productId);

// JIKA PRODUK TIDAK ADA → TAMPILKAN PESAN ERROR
if (!product) {
    document.getElementById("detailContainer").innerHTML = `
        <h2>Produk tidak ditemukan!</h2>
        <a href="produk.html">Kembali ke daftar produk</a>
    `;
    throw new Error("ID produk tidak valid");
}

// MENAMPILKAN DETAIL PRODUK
document.getElementById("detailContainer").innerHTML = `
    <div class="detail-box">
        <img src="${product.img}" class="detail-img">

        <h2>${product.name}</h2>
        <p class="detail-price">Rp ${product.price.toLocaleString()}</p>

        <label>Jumlah:</label>
        <input type="number" id="qty" min="1" value="1" class="qty-input">

        <button onclick="beli()" class="btn-buy">Beli Sekarang</button>
    </div>
`;

// FUNGSI BELI
function beli() {
    const qty = document.getElementById("qty").value;
    alert(`Pembeliam sukses! Anda membeli ${qty} x ${product.name}.`);
}