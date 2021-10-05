import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Cards.css"

const Cards = (props) => {
    const history = useHistory()

    const { name, description, img } = props.card
    const detailsService = () => {
        history.push('/services')
    }
    return (
        <Col>
            <Card className='card'>
                <Card.Img style={{
                    height: '10rem'
                }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 55)}</Card.Text>
                    <Button style={{
                        backgroundColor: '#ff294f',
                        border: '0',
                        padding: '5px 30px',
                        textAlign: 'center'
                    }} onClick={detailsService}>More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;