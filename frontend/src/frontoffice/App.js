import React, { Component } from "react";
import { connect } from "react-redux";

import Routes from "./routes/routes";

import { clearUser, initAxios } from "./utils/auth_utils";
import { getSession, saveSession, sessionExpired, clearSession } from "./utils/session_utils";

// import "url"


initAxios()
export default
@connect((state, props) => ({
}))
class App extends Component {
  componentWillMount(){
    if (localStorage.getItem("session")) {
      var session = getSession()
      
      // Check if the session is present on the server (Wer will find the session by the ID)
      if(sessionExpired(session)){
        clearSession()
        clearUser()
        window.location.href = "/shop"; 
      }

      // Here we will check if the session is not expired
      // Then pass
    }
    else{
      // Call the core for getting the new session now
      // this.start_session()
      this.create_new_session()
      
    }
  }


  create_new_session(){
    window.axios
    .post(`/apis/core/session/create`, {})
    .then(response => {

      var session = {
        uuid: response.data.uuid,
        start_at: response.data.created_date,
        expire_at: response.data.expiration_date,
        user_id: response.data.profile,
        cart_id: response.data.cart,
      }

      console.log('Session response-------', session),

      saveSession(JSON.stringify(session))
      
    })
  }



  render() {

    return (
        <div>
            <Routes />
        </div>

    );
  }

}
