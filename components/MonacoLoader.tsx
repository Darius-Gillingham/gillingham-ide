import Editor from "@monaco-editor/react";

export default function MonacoLoader() {
  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// DFA Editor Ready"
      theme="vs-dark"
    />
  );
}
