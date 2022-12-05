import * as React from "react";

import './App.css'

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store";

import { doTestLogin, selectUserStore } from "./store/UserSlice";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { LogsContainer } from "./util/Console";
import { Console, Decode, Hook } from "console-feed";
import { appIsBusy } from "./store/appSlice";
import authService from "./services/authService";
import { firebaseAuth } from "./constants/firebaseConfig";
import { Message } from "console-feed/lib/definitions/Component";


export default class App extends React.Component<{},{logs: Message[]}> {
  constructor(props:any){
    super(props)
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    Hook(window.console, (log, payload) => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })

    console.log(`Hooked...`)

    // firebase

  }

  componentWillUnmount() {

  }

  render(): React.ReactNode {

    return (
      <div>
        <div style={{ backgroundColor: '#242424' }}>
          <Console logs={this.state.logs} variant="dark" />
        </div>
        <h1>Basic Example</h1>
        <p>

        </p>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    )
  }
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

const Home = () => {
  var userModel = useAppSelector(selectUserStore);
  const appDispatch = useAppDispatch();
  var docs: QueryDocumentSnapshot<DocumentData>[] = [];


  // signInWithEmailAndPassword(firebaseAuth,'v0001@lhf.vn','123456').then((res)=>{
  //   console.log(res.user);
  // }).catch((err)=>{
  //   console.log(err);
  // })
  // getDocs(collection(lhfDB,"lhf_db")).then((snapshot) =>{
  //     docs = snapshot.docs;
  //     docs.forEach((item)=>{console.log(item.data())});
  // })

  //console.log(counterDispatch(incrementByAmount('xxx')));

  function doTestClick(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    appDispatch(doTestLogin())
    return
  }



  return (
    <div>
      <h3>HOME</h3>
      <p>LHF_User : {JSON.stringify(userModel)}</p>
      <button onClick={doTestClick}>onClick</button>
    </div>
  )
}

class Login extends React.Component<{},{isLoading: boolean, email: string, password: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: false,
      email: '',
      password: ''
    }
  }

  doSubmit() {

  }

  render(): React.ReactNode {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            disabled={this.state.isLoading}
            onClick={this.doSubmit}
          >
            {this.state.isLoading ? 'Loading…' : 'Login'}
          </Button>
        </Form>
      </>
    )
  }
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}