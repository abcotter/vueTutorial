var app = new Vue({
    el: '#app',
    data: {
        Product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        variants: [
            {
              variantId: 2234,
              variantColor: 'green'    
            },
            {
              variantId: 2235,
              variantColor: 'blue'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    }
})