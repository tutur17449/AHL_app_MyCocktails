import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                        <NavLink className="custom-border" href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="custom-border" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
    )
}


