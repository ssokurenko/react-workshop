import React from 'react'
import AppTitle from './components/AppTitle'
import Copyright from './components/Copyright'
import ExpandBox from './components/ExpandBox'

class App extends React.Component {

  titles = ['Todo', 'Welcome']

  boxExpanded = eventData => console.log(eventData)

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
                text='Welcome to React. Welcome to React. Welcome to React. Welcome to React. '
                onExpanded={this.boxExpanded.bind(this)} />
  
              <ExpandBox
                title='Lorem ipsum Two'
                text='Welcome to React. Second component'
                onExpanded={this.boxExpanded.bind(this)} />
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
