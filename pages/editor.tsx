import dynamic from "next/dynamic";
import { useState } from "react";

const MonacoEditor = dynamic(() => import("../components/MonacoLoader"), {
  ssr: false,
});

export default function EditorPage() {
  const [errorOutput, setErrorOutput] = useState("// AI console output will appear here");

  return (
    <div style={{ height: "100vh", display: "grid", gridTemplateRows: "1fr 200px", gridTemplateColumns: "250px 1fr", gridTemplateAreas: `'sidebar editor' 'console console'` }}>
      
      {/* Sidebar - File Tree Placeholder */}
      <div style={{ gridArea: "sidebar", borderRight: "1px solid #ccc", padding: "10px", background: "#f9f9f9" }}>
        <h4>Files</h4>
        <ul>
          <li>main.ts</li>
          <li>config.json</li>
          <li>index.html</li>
        </ul>
      </div>

      {/* Main Editor */}
      <div style={{ gridArea: "editor" }}>
        <MonacoEditor />
      </div>

      {/* AI Console (Error Log Placeholder) */}
      <div style={{ gridArea: "console", borderTop: "1px solid #ccc", backgroundColor: "#1e1e1e", color: "#d4d4d4", padding: "10px", fontFamily: "monospace", fontSize: "14px", overflow: "auto" }}>
        <h4>🧠 AI Console</h4>
        <pre>{errorOutput}</pre>
      </div>
    </div>
  );
}
