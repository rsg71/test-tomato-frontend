import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <div>
            <Container className="mt-3">


                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <div className="text-center">
                            <img src="https://webstockreview.net/images/tomatoes-clipart-logo-4.png" alt="tomato" style={{ width: "30%" }} />
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <label>Email</label>
                        <input className="form-control" value={email} name="email" onChange={e => setEmail(e.target.value)} />

                        <label>Name</label>
                        <input className="form-control" value={name} name="name" onChange={e => setName(e.target.value)} />

                        <label>Password</label>
                        <input className="form-control" value={password} name="password" onChange={e => setPassword(e.target.value)} type="password" />

                        <label>Confirm Password</label>
                        <input className="form-control" value={confirmPassword} name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} type="password" />

                    </Col>
                </Row>

                <Row className="justify-content-md-center mt-3">
                    <Col lg={4}>
                        <div className="mb-2">
                            <button className="btn btn-danger text-white">Register</button>
                        </div>
                        <div className='mb-2'>
                            <button className="btn btn-danger text-white">Back</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
