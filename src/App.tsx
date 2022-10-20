import React, {  } from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'
import { connect, useSelector } from 'react-redux';
import { doLogin,doLogout, userSelector } from 'store/userSlice';
import { TAppDispatch, TRootState, useAppDispatch } from 'store';

interface MyState {
  isLoggedIn : boolean,
  logs: any
}

const mapStateToProps = (state: TRootState) => ({
  userState: state.userStore
})

const mapDispatchtoProps = {doLogin, doLogout}

type MainAppProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchtoProps

class MainApp extends React.Component<MainAppProps,{}> {
  constructor(props: MainAppProps){
    super(props)

  }
  private doClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: ButtonProps) => {
    if (this.props.userState.isAuthed) {
      this.props.doLogout()
    } else{
      this.props.doLogin('user_name&pass_word')
    }
  }

  render(): React.ReactNode {
      return (
        <>
        <div className="App">
          <Button onClick={this.doClick}>Click Here</Button>
          <p>UserState: {this.props.userState.isAuthed.toString()}</p>
        </div>
      </>
    )
  }
}

export default connect(mapStateToProps,mapDispatchtoProps, )(MainApp)