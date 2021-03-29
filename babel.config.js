const loose = true

module.exports = {
  presets: [['@babel/preset-env', { loose }], '@babel/preset-typescript'],
  plugins: [['@babel/plugin-proposal-class-properties', { loose }]]
}
