document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Capucino', img:'produk4.jpg', price: 20000},
            {id: 2, name: 'Arabica', img:'produk 2.jpg', price: 25000},
            {id: 3, name: 'Americano', img:'produk 3.jpg', price: 15000},
            {id: 4, name: 'Coffe Milk', img:'produk 5.jpg', price: 20000},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek ada barang yg sama tidak
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada/cart kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            }else {
                // jika barang sudah ada maka cek sama apa tidak
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barangnya sudah ada
                        item.quantity++;
                        item.total  = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            };
        },
        remove(id) {
            // mengambil item yang mau diremove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);

            // jika barang lebih darii satu
            if(cartItem.quantity > 1) {
                // telusuri 1/1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if(cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
}); 

// konversi rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}