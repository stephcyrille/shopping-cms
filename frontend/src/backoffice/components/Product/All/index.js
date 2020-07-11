import React from "react";
import { connect } from "react-redux";

import Table from '../../Snippets/SimpleTable/index'


export default
@connect((state, props) => ({
}))
class AllProduct extends React.Component {
  constructor(props){
    super(props)
    document.title = 'Produits | Afro Yaca Drum'
  }


  render() {


    return (
      <div>
        <section>
          <Table />
        </section>
      </div>
    );
  }
}
