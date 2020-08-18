// this file contains urls
const urls = {
  HOME: "/shop",
  LOGIN: "/shop/login",
  REGISTRATION: "/shop/registration",
  NOTFOUND: "/shop/404",
  
  // EACH CATALOG GROUO CORRESPOND OF BACKEND GROUP
  NEWS_PRODUCTS: "/shop/catalog/news-products",
  CLOTHING: "/shop/catalog/clothing",
  SHOE: "/shop/catalog/shoe",
  BAG: "/shop/catalog/bag",
  ACCESSORIE: "/shop/catalog/accessories",
  JEWELLRIE: "/shop/catalog/jewellrie",
  LINGERIE: "/shop/catalog/lingerie",
  BEAUTY: "/shop/catalog/lingerie",
  TO_WARE: "/shop/catalog/what-to-ware",

  ORDERS: "/shop/my-orders",
  MYBOX: "/shop/my-box",
  
  SINGLE_PRODUCT: "/shop/products/:slug", // We will change this url like that /category/product-name or /collection/product-name
  CART: "/shop/sopping-cart",
  CHECKOUT: "/shop/checkout",
  EDITORIAL: "/shop/editorial",
  SERVICE: "/shop/ayd/services",

  ALL_PRODUCT: "/shop/:catalog/:category?sort=:sort",
};


export default urls;
