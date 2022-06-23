import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function TagSection() {
    return (
        <div>
            <Row>
                <Col>
                    <span class="badge bg-primary me-1">Vegan</span>
                    <span class="badge bg-primary me-1">Peanut allergy</span>
                </Col>
                <Col>
                    <span class="badge bg-primary me-1">Plant based</span>
                    <span class="badge bg-primary me-1">Gluten free</span>
                    <span class="badge bg-primary me-1">Indian cuisine</span>
            </Col>
            </Row>
        </div>
    )
}
