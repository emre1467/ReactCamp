import React, {useState} from 'react'
import { Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)


    function handleSignedOut(params){
        setIsAuthenticated(false)
    }
    function handleSignedIn(params){
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item 
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated?<SignedIn signOut={handleSignedOut} />:<SignedOut signIn={handleSignedIn}/>}  
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
