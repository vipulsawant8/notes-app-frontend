import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../utils/BackButton.jsx"; 
import { PasswordChangeForm } from "@/components/auth";
import { passwordChange } from "@/app/features/auth/authSlice.js";

import notify from "@/utils/notify.js";
// import { logoutUser } from "../../app/features/auth/authSlice.js";

const PasswordChangePage = () => {

    const formRef = useRef();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector(state => state.auth);

    const handlePasswordChange = async (data) => {
        try {
            await dispatch(passwordChange(data)).unwrap();
            setTimeout(() => {
                navigate('/login');
            }, 1000);
            
            notify.success("Password changed login again");
        } catch (error) {
            
            const msg = error || "Password change Failed";
            notify.error(msg);
        }
    };

    const handleError = (errors) => {
        if (import.meta.env.DEV) console.log("Password Change Form errors :", errors);
    };

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={6} lg={4}>
                    <Card className="p-3" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", borderRadius: "8px" }}>
                        <CardBody>
                            <CardTitle className="text-center h1"> <h2> Password Change </h2> </CardTitle>
                            <PasswordChangeForm 
                                ref={formRef}
                                onSubmit={handlePasswordChange}
                                onError={handleError}
                                loading={loading} />
                            <div className="mt-4"> <BackButton /> </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PasswordChangePage;