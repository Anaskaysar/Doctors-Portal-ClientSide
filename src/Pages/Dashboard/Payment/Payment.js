import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JvxVkA7SrCtWr6ukQkMvfrpNWenNkkeJTJAa79P1R1xYthJMc3dPqLtSUiP1bMRfYqHCJ6XYdCaGQfIuFBft6sh00nDUTLq1a')


const Payment = () => {
    
    const {appointmentId}=useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appoinments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);

    const {price,patientName,serviceName}=appointment;
    return (

        <div>
            <h2>Please Pay for: {patientName} for {serviceName} </h2>
            <h4>Pay: ${price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}

        </div>
    );
};

export default Payment;