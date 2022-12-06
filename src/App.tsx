
import NavBarScroll from './components/AppBar';

// Log

import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppRootState } from './store';
import { Button } from 'react-bootstrap';
import { UserModel, setUser } from './store/userStore';
import { User } from 'firebase/auth';


//import './App.css'

const mapStateToProps = (state: AppRootState) => {
  return {
    appState: state
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setUser: (payload: UserModel) => dispatch(setUser(payload))
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface AppProps extends PropsFromRedux {
  appName: string,
}

class App extends React.Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      logs: []
    }
    this.DO_TEST_USER_CHANGE = this.DO_TEST_USER_CHANGE.bind(this)
  }

  componentDidMount(): void {
    //console.debug(`[I] USER_MODEL: ${JSON.stringify(this.props.appState.users)}`)
  }

  DO_TEST_USER_CHANGE() {
    try {
      let _userModel: UserModel = {
        emp_no: 'V00002',
        emp_name: 'DENG GUANG HUI',
        emp_permission: '[]',
        emp_role: 'ADMIN',
        emp_authed: true,
        refreshToken: '####'
      }

      this.props.setUser(_userModel);
    } catch (err) {
      console.error(err);
    }


  };

  render(): React.ReactNode {
    return (
      <>
        <NavBarScroll app_name={this.props.appName}></NavBarScroll>
        <Button variant='primary' onClick={this.DO_TEST_USER_CHANGE}>DO_TEST_USER_CHANGE</Button>
        <div>
          USER_MODEL: {JSON.stringify(this.props.appState.users)}
        </div>
        <Outlet></Outlet>
      </>
    )
  }
}

export default connector(App)

