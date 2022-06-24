import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function ProfileResultsSection() {

    const rowDivider = "mb-2";

    const columnStyle = "p-4"

    return (
        <div>

            {/* Row 1 */}
            <Row className={rowDivider}>
                <Col sm={8} className={`${columnStyle} bg-success`}>
                    A
                </Col>
                <Col sm={4} className={`${columnStyle} bg-info`}>
                    B
                </Col>
            </Row>


            {/* Row 2 */}
            <Row className={rowDivider}>
                <Col sm={4} className={`${columnStyle} bg-success`}>
                    A
                </Col>
                <Col sm={4} className={`${columnStyle} bg-info`}>
                    B
                </Col>
                <Col sm={4} className={`${columnStyle} bg-warning`}>
                    C
                </Col>
            </Row>

            {/* Row 3 */}
            <Row className={rowDivider}>
                <Col sm={4} className={`${columnStyle} bg-danger`}>
                    A
                </Col>
                <Col sm={8} className={`${columnStyle} bg-secondary`}>
                    B
                </Col>
            </Row>


        </div>
    )
}
