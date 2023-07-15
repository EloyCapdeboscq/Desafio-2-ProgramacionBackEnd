import ProductManager from "./manager/ProductManager.js";

const manager = new ProductManager('./files/product.json');

const producto1 = {
    title: 'Cafe',
    decription: 'Taza de cafe',
    price: 600,
    thumbnail: 'url imagen',
    code : 75357,
    stock: 60
}

const producto2 = {
    title: 'Cafe con torta',
    decription: 'Taza de cafe con una procion de torta',
    price: 1200,
    thumbnail: 'url imagen',
    code : 94730,
    stock: 60
}

const producto3 = {
    title: 'Cafe con leche',
    decription: 'Taza de cafe con leche',
    price: 700,
    thumbnail: 'url imagen',
    code : 9203,
    stock: 60
}

const nuevosProductos = async() => {

    await manager.addProduct(producto1);
    await manager.addProduct(producto2);
    await manager.addProduct(producto3);

    console.log(await manager.getProducts());

    console.log(await manager.getProductsById(1));

    console.log(await manager.updateProduct({id: 1, stock:200}));

    console.log(await manager.deleteProduct(1));

    await manager.addProduct(producto1);
}

nuevosProductos ()