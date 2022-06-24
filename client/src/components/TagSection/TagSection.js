import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function TagSection() {

    const badgeStyle = "badge bg-danger text-white me-1";

    return (
        <div>
            <Row>
                <Col>
                    <span className={badgeStyle}>Vegan</span>
                    <span className={badgeStyle}>Peanut allergy</span>
                    <span className={badgeStyle}>Plant based</span>
                    <span className={badgeStyle}>Gluten free</span>
                    <span className={badgeStyle}>Indian cuisine</span>
                </Col>
            </Row>
        </div>
    )
}
