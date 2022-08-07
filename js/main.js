var allProducts; // lazm yt3rf bra

if (localStorage.getItem("productsData") == null) {
  // da m3nah n l ragel md5l4 7aga fe l localstorage lsa
  allProducts = [];
} else {
  allProducts = JSON.parse(localStorage.getItem("productsData")); // 34an arg3 tany l data ly gyaly ly object
  displayProducts();
}

function addProduct() {
  let productName = document.getElementById("productNameInp").value;
  let productPrice = document.getElementById("productPriceInp").value;
  let productCategory = document.getElementById("productCatInp").value;
  let productTitle = document.getElementById("productTitleInp").value;
  let productCode = document.getElementById("productCodeInp").value;
  let productDescription = document.getElementById("productDescInp").value;

  let dashPlace = productTitle.search("-");
  let productBrand = productTitle.slice(0, dashPlace);
  let productModel = productTitle.slice(dashPlace + 1, productTitle.length); // aw bdl l productName.length mmkn aktb -1

  let products = {
    Name: productName,
    price: productPrice,
    category: productCategory,
    brand: productBrand,
    model: productModel,
    code: productCode,
    desc: productDescription,
  };

  allProducts.push(products);

  localStorage.setItem("productsData", JSON.stringify(allProducts)); //34an arg3 tany l data ly gyaly ly object
  displayProducts();

  console.log(allProducts);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(
    "#productNameInp, #productPriceInp ,#productCatInp ,#productTitleInp ,#productCodeInp ,#productDescInp "
  );

  inputs.forEach((input) => {
    input.value = "";
  });
}); // d 34an afdy l inputs b3d ma a3ml add product
function displayProducts() {
  var temp = "";

  for (let i = 0; i < allProducts.length; i++) {
    temp += `  <div class="col-md-3">
    <div class="product">
        <img src="imges/rachit-tank-2cFZ_FB08UM-unsplash.jpg" class="img-fluid" alt="">
        <h3>
           ${allProducts[i].Name} <span class="badge badge-info"> ${allProducts[i].brand}</span>
        </h3>
        <p> ${allProducts[i].desc}</p>
        <div class="price p-2"> ${allProducts[i].price}</div>
        <button onclick="deleteProduct(${i})" class= "btn-outline-danger btn  mb-2">delete</button> 
        <button onclick="updateProduct()" class= "btn-outline-warning btn  mb-2">update</button>

    </div>
</div>
`;

    //hdelo l i fe l delete 34an a2olo lma ados 3la l zorar nfz l function deleteProduct w ab3t rkm l montg ly atdas 3leh

    document.getElementById("product_container").innerHTML = temp;
  }
  if (temp == []) {
    document.getElementById("emptyDiv").style.display = "block";

    console.log(allProducts);
  } else {
    document.getElementById("emptyDiv").style.display = "none";
  }
}
function searchProduct(term) {
  // l term d 4ayla l this.value ly hwa l 7aga ly htktb fe l search bar ly l most5dm byb7s 3nha
  var temp = ``;

  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].Name.toLowerCase().includes(term.toLowerCase())) {
      //h7wl l atnen l lowerCase 34an lw feh 7aga bsr4 3leha upperCase bnfs l asm ytl3haly
      //method includes d bt4of hl l term ly ana bd5lo mwgod fe l name bta3 l product wla l2
      temp += `<div class="col-md-3">
<div class="product">
    <img src="imges/rachit-tank-2cFZ_FB08UM-unsplash.jpg" class="img-fluid" alt="">
    <h3>
       ${allProducts[i].Name} <span class="badge badge-info"> ${allProducts[i].brand}</span>
    </h3>
    <p> ${allProducts[i].desc}</p>
    <div class="price p-2"> ${allProducts[i].price}</div>
</div>
</div>
`;
      document.getElementById("product_container").innerHTML = temp;
    }
  }
}

function deleteProduct(indx) {
  //l indx d hya l I ly adethalo fo2 lma ydos 3la l zorar

  var deletedItem = allProducts.splice(indx, 1);

  localStorage.setItem("productsData", JSON.stringify(allProducts));
  displayProducts();
}

function validateForm(userName) {
  var userNameRegex = /^[\u0621-\u064A\u0660-\u0669 ]+$/;
  if (userNameRegex.test(userName) == false) {
    // inputs.forEach((input) => {
    //   input.value == "";
    // })
    //method test bst5dmha m3 l regular expression bs
    document.getElementById("btn").disabled = "true";
  } else {
    document.getElementById("btn").removeAttribute("disabled");
  }
}
