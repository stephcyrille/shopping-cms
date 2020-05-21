export const saveSession = session => {
  localStorage.setItem("session", session);
};

export const getSession = () => {
  let session = JSON.parse(localStorage.getItem("session"));
  return session;
};

export const clearSession = () => {
  return localStorage.removeItem("session");
};
  
export const sessionExpired = (session) => {
  if(session !== null){
    
    var current_date = new Date() 
    var end_date = new Date(session.expire_at)

    var delta = end_date - current_date
    console.log('DDDDDDDDDEEEEEEEEEEEELLLLLLLLLLTTTTTTTTTTTA', delta)
    if(delta < 0){
      // Session expired, procedd
      return true
    }
  }

  return false
};

export const saveCartSession = cart_session => {
  localStorage.setItem("cart_session", cart_session);
};

export const getCartSession = () => {
  let cart_session = JSON.parse(localStorage.getItem("cart_session"));
  return cart_session;
};

export const clearCartSession = () => {
  return localStorage.removeItem("cart_session");
};


  