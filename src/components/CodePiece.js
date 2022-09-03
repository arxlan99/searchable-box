import React from 'react';

const CodePiece = () => {
  return (
    <div className="codepiece__container">
      <div className="code__block">
        <button title="copy code" className="code__copy">
          <img src="/assets/copy.svg" alt="" width={20} />
        </button>
        <div>{`import { Command } from 'cmdk';`}</div>
        <div>{`<Command.Dialog open={open} onOpenChange={setOpen}>`}</div>
        <div>{`<Command.Input />`}</div>

        <div>{`<Command.List>`}</div>
        <div>
          {` {loading && <Command.Loading>Hang on…</Command.Loading>}
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Fruits">
                <Command.Item>Apple</Command.Item>
                <Command.Item>Orange</Command.Item>
                <Command.Separator />
                <Command.Item>Pear</Command.Item>
                <Command.Item>Blueberry</Command.Item>
                </Command.Group>
                <Command.Item>Fish</Command.Item>`}
        </div>
        <div>{` </Command.List>`}</div>
        <div>{` </Command.Dialog>`}</div>
      </div>
    </div>
  );
};

export default CodePiece;
