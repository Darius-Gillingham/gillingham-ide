import React from 'react';

interface PanelLayoutProps {
  children: React.ReactNode;  // Add this line to define the expected type for children
}

const PanelLayout: React.FC<PanelLayoutProps> = ({ children }) => {
  return (
    <div className="panel-layout">
      {children}  {/* Render the children passed to this component */}
    </div>
  );
};

export default PanelLayout;
