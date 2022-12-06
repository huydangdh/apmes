import { User, UserCredential } from "firebase/auth"
import React from "react"
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import { connect, ConnectedProps } from "react-redux"
import login_bg from "./assets/login_bg.svg"

import { DoLogin } from "./services/auth"
import { AppRootState, AppDispatch } from "./store"
import { setAppIsBusy } from "./store/AppSlice"
import { setUser, UserModel } from "./store/userStore"

import { Navigate, redirect } from 'react-router-dom'


const mapStateToProps = (state: AppRootState) => {
    return {
        isAppBusy: state.appState.app_busy,
        userIsAuth: state.users.emp_authed
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setAppBusy: (payload: boolean) => dispatch(setAppIsBusy(payload)),
        setUser: (payload: UserModel) => dispatch(setUser(payload))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface LoginProps extends PropsFromRedux { }

function ShowSpinner() {
    return (
        <>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </>
    )
}

class Login extends React.Component<LoginProps, { query: { email: string, password: string } }> {
    constructor(props: LoginProps) {
        super(props)
        this.state = {
            query: {
                email: 'v0001@lhf.vn',
                password: '123456'
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            query: {
                ...this.state.query,
                [name]: value
            }
        })
    }

    async handleSubmit(event: React.FormEvent) {
        this.props.setAppBusy(true);
        try {
            event.preventDefault();
            console.log(JSON.stringify(this.state.query));
            let _res: UserCredential = await DoLogin(this.state.query);
            if (_res.user) {
                let _user: UserModel = {
                    emp_name: _res.user.displayName,
                    refreshToken: _res.user.refreshToken,
                    emp_no: "V0001",
                    emp_permission: "",
                    emp_role: "",
                    emp_authed: true
                }
                this.props.setUser(_user);
                console.debug(`[D] User_name ${_res.user.uid}`)
                redirect("/home")
            }
        } catch (err) {
            alert(err);
        }
        this.props.setAppBusy(false);

    }

    render(): React.ReactNode {
        return (
            <>
                {this.props.userIsAuth ? <Navigate replace to="/" /> : ""}
                <Container>
                    <Row>
                        <Col md="6"><img src={login_bg} alt="Image" className="img-fluid" /></Col>
                        <Col md="6">
                            <Row className="justify-content-center">
                                <Col md="8">
                                    <div className="mb-4">
                                        <h3>Sign In</h3>

                                        <p className="mb-4"></p>
                                    </div>
                                </Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={this.state.query.email} placeholder="Enter email" name="email" onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={this.state.query.password} name="password" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        className="mb-3"
                                        style={{ width: '100%' }}
                                        disabled={this.props.isAppBusy}
                                        type="submit">
                                        {this.props.isAppBusy ? <ShowSpinner /> : 'Login'}

                                    </Button>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default connector(Login)
