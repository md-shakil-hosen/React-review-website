import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AllService.css'
const AllService = (props) => {
  const { name, img, description } = props.service
  return (
    <Col>
      <Card style={{
        margin: '2px',
        width: '18rem',
        borderRadius: '10px'
      }}>
        <Card.Img style={{
          height: '10rem',
          width: '15rem',
          margin: '0 auto',
          paddingTop: '5px',
          marginTop: '10px',
          borderRadius: '10px'
        }} variant="top" src={img} />
        {/* Card Body  */}
        <Card.Body className="cBody">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllService;