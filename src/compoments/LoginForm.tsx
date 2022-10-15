import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import reactLogo from '../assets/react.svg'

function doLogin(event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) {
    
}

export default class LoginForm extends Component {

    render() {

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src={reactLogo} /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password' />

                            <Button color='teal' fluid size='large' onClick={doLogin}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        <Link to='/reg'>[SignUp]</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

