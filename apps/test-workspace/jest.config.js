module.exports = {
  name: 'test-workspace',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-workspace',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
