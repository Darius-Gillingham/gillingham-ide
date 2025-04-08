import type { NextApiRequest, NextApiResponse } from 'next';
import { CommitLinkedList, CommitNode } from '@/backend/linkedList';
import { generateFileDiff } from '@/backend/diffGenerator';

const commitChain = new CommitLinkedList();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { file, content, message } = req.body;

  const diff = generateFileDiff(file, content);
  if (!diff) return res.status(200).json({ status: 'No change' });

  const node: CommitNode = {
    id: Date.now().toString(),
    message,
    timestamp: new Date().toISOString(),
    diff,
    file,
  };

  commitChain.addNode(node);
  return res.status(200).json({ status: 'Committed', node });
}
