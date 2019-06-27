module.exports = {
  name: 'books',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/books',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
