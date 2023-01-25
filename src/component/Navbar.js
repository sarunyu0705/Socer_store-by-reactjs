import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiFootball } from "react-icons/bi";


const ColorSchemesExample = () => {
    return (
        <section>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href=".">
                            <h3><BiFootball size={30} />
                                Socer Store
                            </h3>
                        </Navbar.Brand>
                        <Nav className="mt-auto">
                            <Nav.Link className='text-white m-2' href="."> HOME</Nav.Link>
                            <Nav.Link className='text-white m-2' href="#features">NEW !!!</Nav.Link>
                            <Nav.Link className='text-white m-2' href="#pricing">SALE</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </section>
    );
}

export default ColorSchemesExample;