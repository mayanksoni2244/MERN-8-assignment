const container = document.querySelector(".container");


async function fetchdata() {
  try {
    const res = await fetch('https://fakestoreapi.in/api/products');
    if (!res.ok) {
      throw new Error("404 not found");
    }
    const data = await res.json();
    console.log(data);
    if (data && data.products && Array.isArray(data.products)) {
      data.products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" />
                <h5>${product.title}</h5>
                <p>Price : $${product.price}</p>
                
                <div class='btn'>
                <button>Buy now</button>
                </div>
            `;
        container.appendChild(card);
      });
    }
  } catch (err) {
    console.log(err);
  }
}
fetchdata();
