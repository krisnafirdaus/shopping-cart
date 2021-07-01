document.getElementById("add_button").addEventListener("click", checkInput);
document
  .querySelectorAll(".remove")
  .forEach((removebtn) => removebtn.addEventListener("click", removeProduct));
document
  .querySelectorAll(".quantity")
  .forEach((qty) => qty.addEventListener("change", changeSubtotal));
total();

// Check if input is empty
function checkInput() {
  var nameProduct = document.getElementById("name_product");
  var priceProduct = document.getElementById("price_product");
  if (nameProduct.value != "" && priceProduct.value != "") {
    addProduct();
    total();
  }
}

// Add a product
function addProduct() {
  var nameProduct = document.getElementById("name_product");
  var priceProduct = document.getElementById("price_product");

  var tbody = document.getElementById("all_products");
  var tr = tbody.insertRow();
  var td1 = tr.insertCell(0);
  var td2 = tr.insertCell(1);
  var td3 = tr.insertCell(2);
  var td4 = tr.insertCell(3);
  var td5 = tr.insertCell(4);

  td1.innerHTML = nameProduct.value;
  td2.innerHTML = priceProduct.value;
  td3.innerHTML = '<input type="number" class="quantity" value="1" min="0">';
  td4.innerHTML = priceProduct.value;
  td5.innerHTML = '<button type="button" class="remove">Remove</i></button>';

  td3.addEventListener("change", changeSubtotal);
  td5.addEventListener("click", removeProduct);

  nameProduct.value = "";
  priceProduct.value = "";
}

// Change subtotal
function changeSubtotal(element) {
  var price = this.previousElementSibling.innerHTML;
  var quantity = element.target.value;
  var subtotal = parseFloat(price * quantity).toFixed(2);
  this.nextElementSibling.innerHTML = subtotal;
  total();
}

// Remove a product
function removeProduct() {
  this.parentElement.parentElement.removeChild(this.parentElement);
  total();
}

// Sum total
function total() {
  var totalDisplay = document.getElementById("total_display");
  var sum = 0;
  var tbody = document.getElementById("all_products");
  for (var i = 0; i < tbody.rows.length; i++) {
    sum = sum + parseFloat(tbody.rows[i].cells[3].innerHTML);
  }
  var total = sum.toFixed(2);
  totalDisplay.innerHTML = total;
}
