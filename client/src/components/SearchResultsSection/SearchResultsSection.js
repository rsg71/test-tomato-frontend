import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function SearchResultsSection() {
    return (
        <div>
            <Container>
                <Row>
                    <Col >
                        <img src="/images/Tomato/bowl_green.jpg" alt="bowl green" />
                    </Col>

                    <Col>
                        <img src="/images/Tomato/fruits.jpg" alt="fruits" />
                    </Col>

                    <Col>
                        <img src="/images/Tomato/ice_cream.jpg" alt="ice_cream" />
                    </Col>
                </Row>



            </Container>

            <img src="/images/Tomato/pancakes.jpg" alt="pancakes" />
            <img src="/images/Tomato/pasta_salad.jpg" alt="pasta_salad" />
            <img src="/images/Tomato/salad.jpg" alt="salad" />
            <img src="/images/Tomato/steak.jpg" alt="steak" />
        </div>
    )
}
