export const calculateCartTotals = (cartItems, quantities) => {
    const subtotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0);
  const shipping = subtotal > 0 ? 10 : 0; // Flat rate shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
    
};


// const subtotal = cartItems.reduce((acc, item) => {
//         const quantity = quantities[item.id] || 0;
//         return acc + item.price * quantity;
//     }, 0);
//     const shipping = subtotal > 0 ? 10 : 0; // Flat rate shipping
//     const tax = subtotal * 0.1; // 10% tax
//     const total = subtotal + shipping + tax;    
//     return { subtotal, shipping, tax, total };