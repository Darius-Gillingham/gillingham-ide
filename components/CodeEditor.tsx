import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';  // Monaco Editor

const CodeEditor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);  // To hold the editor container

  useEffect(() => {
    if (containerRef.current) {
      monaco.editor.create(containerRef.current, {
        value: `// Type your code here\nfunction helloWorld() {\n  console.log("Hello, world!");\n}`,
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
      });
    }

    return () => {
      // Cleanup editor instance on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '500px' }}  // Style for the editor container
    ></div>
  );
};

export default CodeEditor;
