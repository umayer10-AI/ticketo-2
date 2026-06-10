import OrganizerOrganization from '@/component/organizerDashbaord/OrganizerOrganization';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>Hello Organization</h2>
            <OrganizerOrganization></OrganizerOrganization>
        </div>
    );
};

export default page;