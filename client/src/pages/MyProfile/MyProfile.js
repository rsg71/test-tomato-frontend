import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TagSection from '../../components/TagSection/TagSection';
import UserIcon from '../../components/UserIcon/UserIcon';

export default function MyProfile() {
  return (
    <div>
      <Container>

        {/* Profile */}
        <Row className="mb-3 bg-light mt-3">
          <Col lg={3}>
            <UserIcon />
            <div>Some ranking</div>
          </Col>

          <Col>
            <TagSection />
          </Col>
        </Row>



        {/* Row 1 */}
        <Row>
          <Col sm={9} className="bg-success">
            A
          </Col>
          <Col sm={3}>
            B
          </Col>
        </Row>


        {/* Row 2 */}
        <Row>
          <Col sm={3}>
            A
          </Col>
          <Col sm={3}>
            B
          </Col>
          <Col sm={3}>
            C
          </Col>
        </Row>

        {/* Row 3 */}
        <Row>
          <Col sm={3}>
            A
          </Col>
          <Col sm={9}>
            B
          </Col>
        </Row>

      </Container>
    </div>
  )
}
