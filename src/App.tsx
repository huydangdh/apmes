import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from 'semantic-ui-react'
import { Component } from 'react';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render(): ReactNode {
    return (
      <div className="App">
        <Button>Click Here</Button>
      </div>
    )

  }
}