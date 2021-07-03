# Principles of TDD

- write test first
- write code to pass test
- re-factor

Scenarios when testing - ZOMbies
Handle - zero one multiple

## Adding intellisense for JEST.

Create file named jsconfig.json and paste below code.
https://humanwhocodes.com/snippets/2019/05/jest-globals-intellisense-visual-studio-code/

{
"typeAcquisition": {
"include": [
"jest"
]
}
}

enzyme: Built for testing react

1. npm i -D enzyme
2. npm i -D enzyme-adapter-react-16 <<==jest is the test runner. This apapter package is used for enzyme, so that it can connect itself to Jest

3. Add an Adapter to file: setupTests.js
   import { configure } from "enzyme";
   import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
