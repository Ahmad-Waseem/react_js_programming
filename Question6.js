const Cart = {
    items: [],          //object

    addItem(item) {
        // if exists
        const exists = this.items.find(cartItem => cartItem.name === item.name && cartItem.size === item.size);
        
        if (exists) {   //add repeating
            exists.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    },

    calculateTotal() {  //reduce to sum
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem(name, size) {
        const index = this.items.findIndex(cartItem => cartItem.name === name && cartItem.size === size);
        
        if (index !== -1) {
            this.items.splice(index, 1);
        } else {
            return 'Item si not found';
        }
    },


    displayCart() { //object
        return this.items.map(item => ({
            name: item.name,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity
        }));
    }
};


Cart.addItem({ name: 'ECS', size: '32', price: 2, quantity: 2 });

Cart.addItem({ name: 'ECS', size: '33', price: 1, quantity: 1 });
console.log("before repeating:", Cart.displayCart());
Cart.addItem({ name: 'ECS', size: '32', price: 2, quantity: 1 });
console.log("after repeating:", Cart.displayCart());
Cart.addItem({ name: 'NIKE', size: 'T2', price: 50, quantity: 1 });
console.log("before Removal:", Cart.displayCart());
Cart.removeItem('ECS', '32');
console.log("after Removal:", Cart.displayCart());
console.log("Total Price of Cart (x1000): ",Cart.calculateTotal());
