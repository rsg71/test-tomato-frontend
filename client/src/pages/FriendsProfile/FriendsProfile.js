import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileResultsSection from '../../components/ProfileResultsSection/ProfileResultsSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TagSection from '../../components/TagSection/TagSection';
import UserIcon from '../../components/UserIcon/UserIcon';

export default function FriendsProfile() {
  return (
    <div>
      <Container>

        {/* Profile */}
        <ProfileSection />


        <ProfileResultsSection />

      </Container>
    </div>
  )
}
