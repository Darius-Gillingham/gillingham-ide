export interface CommitNode {
  id: string;
  message: string;
  timestamp: string;
  diff: string;
  file: string;
  next?: CommitNode;
  prev?: CommitNode;
}

export class CommitLinkedList {
  head: CommitNode | null = null;
  tail: CommitNode | null = null;

  addNode(node: CommitNode) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }
  }

  log() {
    let current = this.head;
    while (current) {
      console.log(`[${current.timestamp}] ${current.message}`);
      current = current.next!;
    }
  }
}
