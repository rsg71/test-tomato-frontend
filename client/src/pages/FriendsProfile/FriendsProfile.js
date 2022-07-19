import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileResultsSection from '../../components/ProfileResultsSection/ProfileResultsSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import SearchResultsSection from '../../components/SearchResultsSection/SearchResultsSection';
import TagSection from '../../components/TagSection/TagSection';
import UserIcon from '../../components/UserIcon/UserIcon';

export default function FriendsProfile() {
  return (
    <div>
      <Container>

        {/* Profile */}
        <ProfileSection />


        {/* <ProfileResultsSection /> */}


        <Row>
          <Col>
            <SearchResultsSection />
          </Col>
        </Row>

      </Container>
    </div>
  )
}
