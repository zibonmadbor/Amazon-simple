import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
    // fetch('products.json')
    // .then(res => res.json())
    // .then(data => {return data} )
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();
    
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;
    

}
export default cardProductLoader;