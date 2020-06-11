/**
 * Mocking client-server processing
 */
// const _products = [
//   {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//   {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//   {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
// ]
const _products = [
  {
    id: 1,
    title: 'Beads my Sammy - 05X-XXX_XXXX',
    price: 20.00,
    category: 'Art_Shop',
    sale: false,
    img: 'art shop 1.jpg',
    inventory: 2
  },
  {
    id: 2,
    title: 'Necklaces by Ama - 05X-XXX-XXXX',
    price: 35.99,
    category: 'Art_Shop',
    sale: true,
    img: 'art shop 2.jpg',
    inventory: 20
  },
  {
    id: 3,
    title: 'Handbeads by Serwaa - 05X-XXX-XXXX',
    price: 25.00,
    category: 'Art_Shop',
    sale: false,
    img: 'art shop 3.jpg',
    inventory: 0
  },
  {
    id: 4,
    title: 'Door mats by Kwesi - 02X-XXX-XXXX',
    price: 129.99,
    category: 'Art_Shop',
    sale: false,
    img: 'art shop 4.jpg',
    inventory: 20
  },
  {
    id: 5,
    title: 'Painting by free-arts - 05X-XXX-XXXX',
    price: 80.99,
    category: 'Art_Shop',
    sale: false,
    img: 'art shop 5.jpg',
    inventory: 20
  },
  {
    id: 6,
    title: 'Chairs by Sammy',
    price: 1119.99,
    category: 'furniture',
    sale: false,
    img: 'furniture set 1.jpg',
    inventory: 20
  },
  {
    id: 7,
    title: 'Chairs by Wild Gecko',
    price: 179.99,
    category: 'furniture',
    sale: true,
    img: 'furniture set 2.jpg',
    inventory: 20
  },
  {
    id: 8,
    title: 'Chairs by Kofi',
    price: 549.00,
    category: 'furniture',
    sale: true,
    img: 'furniture set 3.jpeg',
    inventory: 20
  },
  {
    id: 9,
    title: 'Chairs by Kofi - 02X-XXX-XXXX',
    price: 650.00,
    category: 'furniture',
    sale: false,
    img: 'furniture set 4.jpg',
    inventory: 20
  },
  {
    id: 10,
    title: 'Chairs by Kofi - 02X-XXX-XXXX',
    price: 690.00,
    category: 'furniture',
    sale: false,
    img: 'furniture set 5.jpg',
    inventory: 20
  },
  {
    id: 11,
    title: 'Kente Back Pack',
    price: 70.00,
    category: 'bags',
    sale: false,
    img: 'Kente Back Pack.jpg',
    inventory: 20
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
