import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");


    return (
        <div>
            <Container className="mt-3">


                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <div>
                            <img src="https://webstockreview.net/images/tomatoes-clipart-logo-4.png" alt="tomato" style={{ width: "30%" }} />
                        </div>
                    </Col>
                </Row>


                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <label>Email</label>
                        <input className="form-control" value={email} name="email" onChange={e => setEmail(e.target.value)} />

                        <label>Password</label>
                        <input className="form-control" value={password} name="password" onChange={e => setPassword(e.target.value)} />

                    </Col>
                </Row>

                <Row className="justify-content-md-center mt-3">
                    <Col lg={4}>
                        <div className='mb-2'>
                            <button className="btn btn-danger text-white">Login</button>
                        </div>
                        <div>
                            <button className="btn btn-danger text-white">Register</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
