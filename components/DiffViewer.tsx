import React, { useState } from 'react';

const DiffViewer = () => {
    const [diff, setDiff] = useState<string>('');

    return (
        <div className="diff-viewer">
            <h2>Diff Viewer</h2>
            <pre>{diff}</pre>
        </div>
    );
};

export default DiffViewer;
