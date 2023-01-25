import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Product01 from '../img/0101.png'
import Product02 from '../img/0102.png'
import Product03 from '../img/0103.png'
import Product04 from '../img/0104.png'
import Product05 from '../img/0105.png'
import Product06 from '../img/0106.png'

const Showboot = () => {
    return (
        <Container>
            <div className='col-xl-12'>
                <div className="row">
                    <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={Product01} width="262" height="176"/>
                        <Card.Body>
                            <Card.Title>Nike-Air-zoom-mercurial</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                    <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Product02} width="262" height="176" />
                        <Card.Body>
                            <Card.Title>Nike-Vapor-mercurial</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                    <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={Product03} width="262" height="176"/>
                        <Card.Body>
                            <Card.Title>Nike-Air-zoom-mercurial</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='col-xl-12'>
                <div className="row">
                <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={Product04} width="262" height="176"/>
                        <Card.Body>
                            <Card.Title>Nike-Air-zoom-mercurial</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                    <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={Product05} width="262" height="176"/>
                        <Card.Body>
                            <Card.Title>Puma-Ultra-One</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                    <Card className='m-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top"  src={Product06} width="262" height="176"/>
                        <Card.Body>
                            <Card.Title>umbro-tocco-pro</Card.Title>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur corrupti inventore voluptate atque! Ratione, cum?
                            </Card.Text>
                            <Button variant="primary">Detail of Product</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Showboot;