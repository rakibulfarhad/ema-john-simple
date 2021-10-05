// purpose user wants to add a product
// 1. find the place to store the data
const addToDb = id => {
    const stored_Cart = getStoredCart();
    if (id in stored_Cart){
      stored_Cart[id] =stored_Cart[id] +1;
    }
    else{
      stored_Cart[id] = 1;
    }
     updateDb(stored_Cart);
}

const removeFromDb = id => {
    const storedCart = getStoredCart();
    delete storedCart[id];
    updateDb(storedCart);
}

const updateDb = cart => {
    localStorage.setItem ('shopping_cart', JSON.stringify(cart))
}

const getStoredCart = () => {
  const exists = localStorage.getItem('shopping_cart');
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => localStorage.removeItem('shopping_cart');

export {addToDb, getStoredCart, removeFromDb, clearTheCart}