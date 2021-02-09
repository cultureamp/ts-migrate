import { Plugin } from 'ts-migrate-server';

const findAndReplacePlugin: Plugin = {
  name: 'find-and-replace',
  run({ text }) {
    return text.replace("React.Node", "React.ReactNode")
  }
};

export default findAndReplacePlugin;
