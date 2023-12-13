const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;


let products = [
  {
    id: 1,
    name: "Alma",
    price: 5,
    info: "Quba Almasi",
    image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg",
  },
  {
    id: 2,
    name: "Nar",
    price: 5,
    info: "Göyçay narı",
    image: "https://images.heb.com/is/image/HEBGrocery/000886114-1",
  },
  {
    id: 3,
    name: "Mandarin",
    price: 1,
    info: "Lənkaran Mandarini",
    image:
      "https://bazarstore.az/cdn/shop/products/30107459_8874cc02-ff2f-490c-8e15-6d786025a185.jpg?v=1693787819",
  },
  {
    id: 4,
    name: "Şaftalı",
    price: 5,
    info: "Xaçmaz Şaftalısı",
    image:
      "https://www.flushinghospital.org/newsletter/wp-content/uploads/2021/07/GettyImages-1200767905.jpg",
  },
];

let count = 5;

//get all products
app.get("/products", (req, res) => {
  res.send(products);
});

//get product by id
app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const findedProduct = products.find((x) => x.id === +id);
  res.send(findedProduct);
});

//create product
app.post("/products", (req, res) => {
  products.push({ id: count++, ...req.body });
  res.send(products);
});

//delete product
app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  const selectedProduct = products.find((x) => x.id === +id);
  if (selectedProduct) {
    products = products.filter((x) => x.id !== +id);
    res.send(products);
  }
});

//update product
app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((x => x.id === +id));
  products[productIndex] = {
    id: +id,
    ...req.body
  };
  res.send(products)
   
});

app.listen(PORT, () => {
  console.log("server is running");
});
