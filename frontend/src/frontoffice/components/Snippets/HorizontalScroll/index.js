import React from "react";
import { connect } from "react-redux";
import debounce from 'lodash.debounce'

import './style.local.css';

export default
@connect((state, props) => ({
}))
class HorizontalScroll extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [...Array(10).keys()],
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }

    this.handleClickAddItem = this.handleClickAddItem.bind(this)
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)

    this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
  }

  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }

  handleClickAddItem() {
    this.setState(state => {
      return {
        items: [...state.items, state.items.length]
      }
    })
  }

  handleClickRemoveItem() {
    this.setState(state => {
      return {
        items: state.items.slice(0, -1)
      }
    })
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    return this.state.items.map(item => {
      return (
        <li className="item" key={item}>
          <div className='showcase-whole-content'>
            <div className='showcase-pic-wrapper'>
              <a href='#'>
                <img src='/static/images/dress1.jpg' className='' />
              </a>
            </div>
            <div className='showcase-pic-legend'>
              <h4 style={{ marginBottom: 5 }}>Robe tendance</h4>
              <p>
                {/* The call list of products in the specific place */}
                <a href="" className="horizontal_scroll_country">Cameroun</a><br />
                <a href="" className="horizontal_scroll_add_to_cart">Ajouter au panier</a>
              </p>
            </div>
          </div>
        </li>
      )
    })
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state
    return (
      <div className="item-controls">
        <i className="fa fa-chevron-left fa-2x chevron-lft"
          onClick={() => {
            this.scrollContainerBy(-200)
          }}
        ></i>
      

        <i className="fa fa-chevron-right fa-2x chevron-rgt"
          onClick={() => {
            this.scrollContainerBy(200)
          }}
        ></i>
      </div>
    )
  }


  render() {
    
    return (
      //<!-- Document Wrapper -->
      <div className="scroll-body">
        <div className="scroll-wrapper">
          {this.buildControls()}
          <ul
            className="item-container"
            ref={node => {
              this.container = node
            }}
          >
            {this.buildItems()}
          </ul>
        </div>
      </div>
    );
  }
}
