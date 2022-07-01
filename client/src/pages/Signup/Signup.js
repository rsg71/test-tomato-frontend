import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e;
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUp = () => {
        console.log("formData: ", formData);

        let { email, name, password } = formData;
        let relevantData = {
            email, name, password
        }
        API.signup(relevantData)
            .then(res => {
                console.log(res);
                navigate("/login")
            })
            .catch(err => {
                console.log(err);
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
                        <input className="form-control" value={formData.email} name="email" onChange={e => handleInputChange(e.target)} />

                        <label>Name</label>
                        <input className="form-control" value={formData.name} name="name" onChange={e => handleInputChange(e.target)} />

                        <label>Password</label>
                        <input className="form-control" value={formData.password} name="password" onChange={e => handleInputChange(e.target)} type="password" />

                        <label>Confirm Password</label>
                        <input className="form-control" value={formData.confirmPassword} name="confirmPassword" onChange={e => handleInputChange(e.target)} type="password" />

                    </Col>
                </Row>

                <Row className="justify-content-md-center mt-3">
                    <Col lg={4}>
                        <div className="mb-2">
                            <button className="btn btn-danger text-white" onClick={handleSignUp}>Register</button>
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
