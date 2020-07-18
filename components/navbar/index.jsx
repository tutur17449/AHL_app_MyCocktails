import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import NavToggler from '../navToggler/index'

export default function Menu() {

    const style = {
        fontWeight: "bold",
        backgroundColor: '#fcca4c',
        padding: '.35rem 2rem',
        borderRadius: '20px'
    }

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
                <a style={style} href="https://github.com/tutur17449" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Collapse>
        </Navbar>
    )
}


