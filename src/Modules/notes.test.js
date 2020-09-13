const { TestScheduler } = require('jest');
const note = require('./notes');

test('instantiated note setters and getters work', () => {
    const testNote = note('test 1', 'This is a test!');
    testNote.setText('The test succeeded!');
    expect(testNote.getText()).toEqual('The test succeeded!');
})