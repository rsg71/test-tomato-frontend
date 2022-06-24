import React from 'react';
import TagSection from '../TagSection/TagSection';
import UserIcon from '../UserIcon/UserIcon';
import { Row, Col } from 'react-bootstrap';

export default function ProfileSection() {
    return (
        <div>
            <Row className="mb-3 bg-light mt-3 p-3">
                <Col sm={4}>
                    <UserIcon />
                    <div>Some ranking</div>
                </Col>

                <Col sm={8} className="d-flex justify-content-end">
                    <TagSection />
                </Col>
            </Row>

        </div>
    )
}
