module.exports = {
  presets: [
    [
      '@babel/env',
      {
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
      },
    ],
  ],
  plugins: [],
};