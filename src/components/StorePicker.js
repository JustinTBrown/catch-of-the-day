import React from 'react'

import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  constructor() {
    super()
    this.goToStore = this.goToStore.bind(this)
  }
  goToStore(event) {
    event.preventDefault()
    console.log('You changed the URL')
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`)
    this.context.router.transitionTo(`/store/${storeId}`)
    // console.log(this.storeInput.value)
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker