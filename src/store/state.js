var cart_local = JSON.parse(localStorage.getItem('cart') || '[]')

export default{
  cart: cart_local
}