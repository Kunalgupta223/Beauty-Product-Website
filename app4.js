const products = [
    { name: "Essence Mascara", price: 9.99, img: "https://imgs.search.brave.com/YnqXgWpmBPIP3IheCO4WcUS7SDDwcvO9nGusgF5R0QA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/anVzdG15bG9vay5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvMjcy/ODMxOTIwXzEzODcz/Mzc1NDUwNTIyNTRf/Mjc4NTMyNDI3OTY4/MzEyMzQzNF9uLTEu/anBnP3Y9MTcyNTM1/MDA5OCZ3aWR0aD0x/MTYw" },
    { name: "Eyeshadow Palette", price: 19.99, img: "https://imgs.search.brave.com/XHjxBCcBQx_f7cGMTFRTeK6sSbjE3WFGUdN_Gr-hLMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LWV5ZXNoYWRv/dy1wYWxldHRlLXdp/dGgtYnJ1c2gtYXBw/bGljYXRvcl8yMy0y/MTUwMjYwODk4Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ" },
    { name: "Powder Canister", price: 14.99, img: "https://imgs.search.brave.com/PyAYobQqkMa16joBdo_uYjr0GgF9m3rJUzxCTkKOGxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE0N3JXTXIyOEwu/anBn" },
    { name: "Lipstick", price: 19.99, img: "https://imgs.search.brave.com/bqDI_G0TVilLOgL9-w3oKJ0Ca810qlaBZuqGc3FLGxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/ODYzOTQwMS9waG90/by9yZWQtbGlwc3Rp/Y2stY2xvc2UtdXAt/b24tcGluay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz14QS11/bVFBN2wyQkY5V25X/ODE3anAzNTBlWkpG/YjFrUWE4ZWlTRnlE/S1lFPQ" },
    { name: "Perfume Bottle", price: 29.99, img: "https://imgs.search.brave.com/FMDptcgfbBaLhgbn92-aoZO03Sc37PAo3MU8QV9nWHo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzc2LzM0Lzk5/LzM2MF9GXzE3NjM0/OTkwNF96WXZmQUpu/c2w5VWhBdUFrWUxU/aW1ncE15dkg3cjZh/Zy5qcGc" },
    { name: "Makeup Brush Set", price: 24.99, img: "https://imgs.search.brave.com/4N7UhccIn4umF3T2wuSrIY33ukTNGfyB5MHBxyeBiu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzEwL21ha2V1/cGJydXNoZXMtMjA0/OHB4LWFuYXN0YXNp/YWJyb3dicnVzaC0x/MDI0eDY4My5qcGc" }
];

function displayProducts(filterText = "") {
    const list = document.getElementById("productList");
    list.innerHTML = "";
    const filtered = products.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));
    document.getElementById("productCount").innerText = `${filtered.length} products`;
    filtered.forEach(p => {
        list.innerHTML += `
          <div class="col-6">
            <div class="product-card p-2">
              <img src="${p.img}" alt="${p.name}">
              <div class="mt-2">
                <p class="product-title mb-1">${p.name}</p>
                <p class="product-price mb-1">$${p.price.toFixed(2)}</p>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        `;
    });
}

document.getElementById("searchBar").addEventListener("input", (e) => {
    displayProducts(e.target.value);
});

displayProducts();