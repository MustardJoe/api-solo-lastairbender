const test = QUnit.test;

QUnit.module('html equal');



test('DUMMY test', (assert) => {
    // Arrange
    const var1 = 4 + 3;

    const expected = 7;

    // Act
    // now built in as custom assert

    // Assert
    assert.equal(var1, expected);
});