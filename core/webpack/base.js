const webpack = require('webpack');
const path = require('path');
const utils = require('./lib/utils.js');

const { VueLoaderPlugin } = require(utils.isVue3() ? 'vue-loader' : 'vue-loader15');

module.exports = {
  // entry: {
  //   index: utils.resolve('src/index.js'),
  // },
  output: {
    path: utils.resolve('build'),
    libraryTarget: 'umd',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(process.cwd(), 'node_modules/.cache/cva'),
    buildDependencies: {
      config: [
        'package.json',
        // TODO 判断
        'yarn.lock',
      ].map((item) => path.resolve(process.cwd(), item))
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.jsx']
  },
  resolveLoader: {
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },

  stats: {
    errorDetails: true
  },
  module: {
    rules: [{
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: 'asset',
    }, {
      test: /\.(png|gif|jpg|jpeg|svg)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4kb
        }
      }
    }, {
      test: /\.(m?js|jsx)$/,
      exclude: [
        /\bcore-js\b/,
        /\bwebpack\/buildin\b/,
        /\bvue-loader\b/
      ],
      resolve: {
        fullySpecified: false
      },
      use: {
        loader: 'babel-loader',
        // 使用业务配置！！

        // options: {
        //   presets: [
        //     ['@babel/preset-env', {
        //       useBuiltIns: 'usage',
        //       corejs: 3.8,
        //       targets: '> 0.25%, last 2 versions, not dead'
        //     }],
        //   ],
        //   plugins: [
        //     '@vue/babel-plugin-jsx',
        //     ['@babel/plugin-transform-runtime', {
        //       helpers: false,
        //       regenerator: true,
        //       useESModules: false,
        //     }],
        //     '@babel/plugin-proposal-export-default-from',
        //     '@babel/plugin-proposal-export-namespace-from',
        //     '@babel/proposal-class-properties',
        //     '@babel/plugin-proposal-nullish-coalescing-operator',
        //     '@babel/plugin-proposal-optional-chaining',
        //     '@babel/plugin-syntax-dynamic-import',
        //     '@babel/plugin-transform-spread',
        //     '@babel/plugin-transform-modules-commonjs',
        //     '@babel/proposal-object-rest-spread',
        //   ],
        //   sourceType: 'unambiguous',
        //   comments: false,
        // }
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20480,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          priority: 100,
        },
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
};
