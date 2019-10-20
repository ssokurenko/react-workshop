import React from 'react'
import AppTitle from './components/AppTitle'
import Copyright from './components/Copyright'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='lin-card'>
              <AppTitle title='Todo App' />
            </div>
          </div>
          <div className='col-12'>
            <Copyright text='Google Inc.' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
