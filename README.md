# reqmock
Simple way to mock require packages

## Install

```
npm i reqmock
```

## Usage

```
const reqmock = require('reqmock');
const mock = function myMock() {}

reqmock(path.resolve('./myMockablePackage'), mock);

require('./myPackageThatRequireMyMockablePackage');
```
