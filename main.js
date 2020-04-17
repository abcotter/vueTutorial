var app = new Vue({
    el: '#app',
    data: {
        Product: 'Socks',
        inventory: 0,
        image: './assets/vmSocks-green-onWhite.jpg',
        onSale: true,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: './assets/vmSocks-green-onWhite.jpg'    
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateImage(currentImage) {
        this.image = currentImage
      },
      removeFromCart() {
        this.cart -=1
      }
    }
})