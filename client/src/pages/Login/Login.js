import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';

export default function Login() {


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const navigate = useNavigate();


    const handleChange = (e) => {
        let { name, value } = e;
        setFormData({ ...formData, [name]: value })
    }

    const handleLogin = () => {
        API.login(formData)
            .then(res => {
                console.log(res);
                let userData = res.data;
                // handleSetUser(userData);
                console.log("logged in")
                navigate("/user-home")
            })
            .catch(err => {
                console.log("login error: ", err);
            })
    }




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
                        <input className="form-control" value={formData.email} name="email" onChange={e => handleChange(e.target)} />

                        <label>Password</label>
                        <input className="form-control" value={formData.password} name="password" onChange={e => handleChange(e.target)} type="password" />

                    </Col>
                </Row>

                <Row className="justify-content-md-center mt-3">
                    <Col lg={4}>
                        <div className='mb-2'>
                            <button className="btn btn-danger text-white" onClick={handleLogin}>Login</button>
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
