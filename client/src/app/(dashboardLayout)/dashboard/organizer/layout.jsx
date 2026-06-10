import OrganizerSidebar from '@/component/organizerDashbaord/OrganizerSidebar';
import React from 'react';

const layout = ({children}) => {
    
    return (
        <div className='flex'>
            <OrganizerSidebar></OrganizerSidebar>
            
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};
















export default layout;