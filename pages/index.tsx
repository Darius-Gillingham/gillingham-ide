import React from 'react';
import Head from "next/head";
import PanelLayout from "@components/PanelLayout";
import AIOutputPanel from "@components/AIOutputPanel";
import CommitControls from "@components/CommitControls";
import DiffViewer from "@components/DiffViewer";
import CodeEditor from "@components/CodeEditor";  // Imported CodeEditor component

export default function Home() {
  return (
    <>
      <Head>
        <title>Gillingham IDE</title>
      </Head>
      <main style={{ padding: "2rem" }}>
        <h1>🧠 Gillingham IDE</h1>
        <PanelLayout>
          <AIOutputPanel />
          <CommitControls />
          <DiffViewer />
          <CodeEditor />  {/* Rendered the CodeEditor component */}
        </PanelLayout>
      </main>
    </>
  );
}
