import React, { useState } from 'react';

const CommitControls = () => {
    const [commitMessage, setCommitMessage] = useState<string>('');

    return (
        <div className="commit-controls">
            <h2>Commit Controls</h2>
            <input
                type="text"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                placeholder="Enter commit message"
            />
            <button onClick={() => alert(`Committed: ${commitMessage}`)}>Commit</button>
        </div>
    );
};

export default CommitControls;
