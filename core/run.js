const parseConfig = require('./parse-config.js');
const compile = require('./compile.js');

module.exports = function run(mode, userConfig) {
  // ① parseConfig
  const config = parseConfig(mode, userConfig);

  // ② 执行webpack
  compile(mode, config);

  // ③ TODO 上传
}
