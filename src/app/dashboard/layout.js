import React from 'react';

export const metadata = {
    title: 'DashBoard',
    description: 'DashBoard',
  }
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <nav>
                SideBar
            </nav>
      {children}
        </div>
    );
};

export default DashboardLayout;