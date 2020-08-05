import React from "react";
import { connect } from "react-redux";




export default
@connect((state, props) => ({
  homeCStore: state.homeCStore
}))
class Banner extends React.Component {



  render() {
    const { banner } = this.props.homeCStore


    return (
      <div className="row">
        {
          banner ? 
          (
            <a href={`${banner.linkUrl}`} className='home_top_banner'> 
              <div
                style={{ 
                    backgroundImage: `url(${banner.picture})`, 
                    width: '100%', 
                    height: '100%', 
                    backgroundSize: 'cover'
                }}
              >
                <div className="banner-wrapper">
                  <div className="row" style={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
                    <div className="col-sm-4" style={{ paddingLeft: 0, paddingRight: 0 }}></div>
                    <div className="col-sm-2" style={{ paddingLeft: 0, paddingRight: 0 }}></div>
                    <div className="col-sm-6 baner-text" style={{ paddingTop: 30, paddingRight: 20 }}>
                      <h4 className='display-4 baner-main-title'>{ banner.title }</h4>
                      <p className=''>
                        { banner.subTitle }
                      </p>
                      <span className="">
                        { banner.linkText }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
          :
          null
        }
      </div>

    );
  }
}
