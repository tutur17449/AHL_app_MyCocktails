import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import NavToggler from '../navToggler/index'
import './index.scss'

export default function Menu() {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="white" light expand="md">
            <NavbarBrand href="/">My Cocktails</NavbarBrand>
            <NavToggler 
                toggle={toggle} 
                open={isOpen}
            />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/alcoholic">Alcoholic</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/non-alcoholic">Non Alcoholic</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
    )
}


