import AppBar from '../AppBar/AppBar';
import React, { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <AppBar />
      {/* <Suspense fallback={null}>{children}</Suspense> */}
    </div>
  );
};

export default Layout;
