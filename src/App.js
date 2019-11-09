import React from 'react'
import AppTitle from './components/AppTitle'
import Copyright from './components/Copyright'
import ExpandBox from './components/ExpandBox'

class App extends React.Component {

  titles = ['Todo', 'Welcome']

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='lin-card'>
              {this.titles.map((title, index) => <AppTitle title={title} key={index} />)}
            </div>
          </div>
          <div className='col-12'>
            <div className='lin-card'>
              <ExpandBox
                title='Lorem ipsum'
                text='Welcome to React. Welcome to React. Welcome to React. Welcome to React. ' />
              <ExpandBox
                title='Lorem ipsum 2'
                text='Welcome to React. Second component' />
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
