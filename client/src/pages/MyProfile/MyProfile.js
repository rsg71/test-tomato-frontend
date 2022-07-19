import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileResultsSection from '../../components/ProfileResultsSection/ProfileResultsSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import SearchResultsSection from '../../components/SearchResultsSection/SearchResultsSection';

export default function MyProfile() {



  return (
    <div>
      <Container>


        <Row className="">
          <Col>

            {/* Profile */}
            <ProfileSection />

            {/* <ProfileResultsSection /> */}

          </Col>
        </Row>



        <Row>
          <Col>
            <SearchResultsSection />
          </Col>
        </Row>

      </Container>
    </div>
  )
}
