import React from 'react';  // Full React import
import { useState } from 'react'; 

const AIOutputPanel = () => {
  const [output, setOutput] = useState<string>('AI output goes here.');

  return (
    <div className="ai-output-panel">
      <h2>AI Output</h2>
      <p>{output}</p>  {/* Ensure there's content here */}
    </div>
  );
};

export default AIOutputPanel;
