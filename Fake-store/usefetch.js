const div = document.getElementById("container");
const button = document.getElementById("btn");
const h2 = document.createElement("h2");
h2.innerText = "Data is loading.....";
let cart = [];
async function display() {
    div.innerHTML = "";
    div.appendChild(h2);

    try {
        const serverdata = await fetch("https://fakestoreapi.com/products");
        const jsonData = await serverdata.json();

        let table = `
            <table border="1">
                <tr>
                    <th>Item_Id</th>
                    <th>Item_Image</th>
                    <th>Item_Title</th>
                    <th>Item_Price</th>
                    <th>Cart</th>
                </tr>
                ${
                    jsonData.map((ele) => `
                        <tr>
                            <td>${ele.id}</td>
                            <td>
                                <img
                                    src="${ele.image}"
                                    alt="${ele.title}"
                                    height="100"
                                    width="100"
                                >
                            </td>
                            <td>${ele.title}</td>
                            <td>${ele.price}</td>
                            <td>
                                <button onclick="addToCart(${ele.id})">
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    `).join("")
                }
            </table>
        `;
        div.innerHTML = table;
    } catch (e) {
        console.log("Error is: " + e);
        div.innerHTML = "<h2>Error loading data</h2>";
    }
}
function addToCart(id) {
    cart.push(id);
    console.log("Product added to cart:", id);
    console.log("Cart:", cart);
}
button.addEventListener("click", display);