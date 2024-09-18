import React, {useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addUserAction} from "../redux/actions";


const UserRegisterPage = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');



    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const addUser = async (event) => {
        setLoading(true);
        setError('')
        setSuccess(false)
        event.preventDefault()
        try {
            await dispatch(addUserAction(user));
            setSuccess(true)
        } catch (error) {
            setError('не удалось зарегистрировать пользователя')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        {
                            loading ? (
                               <button className="btn btn-primary" type="button" disabled>
                                   <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                   <span role="status">Loading...</span>
                               </button>
                        ) : (
                            <Button  type="submit" variant="success" className="w-100">
                                register user
                            </Button>
                            )
                        }


                    </Col>
                </Row>
            </Form>
            {loading && (<div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>)}
            {success && ( <div className="alert alert-success" role="alert">Пользователь успешно зарегистрирован!</div>
            )}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
        </Container>
    )
}

export default UserRegisterPage;
