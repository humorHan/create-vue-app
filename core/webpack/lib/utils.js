const path = require('path');

const cwd = path.resolve(process.cwd());

module.exports = {
  cwd,
  resolve() {
    return path.resolve(cwd, ...arguments);
  },
  isVue3() {
    const packageInfo = require(path.resolve(cwd, 'node_modules', 'vue', 'package.json'))
    const vueVersion = packageInfo.version || '';
    return vueVersion.startsWith('3');
  }
};
