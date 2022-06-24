import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileResultsSection from '../../components/ProfileResultsSection/ProfileResultsSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';

export default function MyProfile() {



  return (
    <div>
      <Container>


        <Row className="">
          <Col>

            {/* Profile */}
            <ProfileSection />

            <ProfileResultsSection />

          </Col>
        </Row>

      </Container>
    </div>
  )
}
