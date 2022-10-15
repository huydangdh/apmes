import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
{/*images*/}
import reactLogo from '../assets/react.svg'


function doReg(event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps): void {

}

const SignupForm = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src={reactLogo} /> SignUp account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' id='email' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password' id='txtPass' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Re Password'
                            type='password' id='txtRePass'/>

                        <Button color='teal' fluid size='large' onClick={doReg}>
                            SignUp
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    <Link to='/login'>[Login]</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignupForm