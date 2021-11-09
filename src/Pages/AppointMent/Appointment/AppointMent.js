import React from 'react';
import AppointMentHeader from '../AppointMentHeader/AppointMentHeader'
import AvailableAppointments from '../AvailableAppointMents/AvailableAppointments';
import Navigation from '../../Shared/Navigation/Navigation'

const AppointMent = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation/>
            <AppointMentHeader date={date} setDate={setDate} ></AppointMentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
            
        </div>
    );
};

export default AppointMent;