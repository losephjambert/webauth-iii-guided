const { validateUser } = require('./users-helpers.js');

// sent an empty object; we verified it fail
// sent an object with a username < 2 characters; we verified it fail
// sent an object with a username > 2 characters, but no password; we verified it fail

// let's automate this process

// Thing about testing in this way:
// Arrange -- set up the world
// Act -- execute the system under test (SUT)
// Assert -- check the result of Act

describe('users helpers', () => {
  describe('validateUsers', () => {
    it('should fail when missing username and password', () => {
      // Arrange: setup the world for the test
      const invalidUser = {};
      const expected = false;
      // Act: execute the system under test (SUT) => validateUser method
      const actual = validateUser(invalidUser);
      // Assert: check the result of Act
      expect(actual.isSuccessful).toBe(expected);
      expect(actual.errors).toHaveLength(2);
    });

    it('should fail if missing password', () => {
      const result = validateUser({ username: 'valid user name' });
      expect(result.isSuccessful).toBe(false);
      expect(result.errors).toHaveLength(1);
    });

    it.todo('should fail if username is an object');
    it.todo('should fail if username is an array');
    it.todo('should fail if username is NaN');
    it.todo('should fail if username is null');
  });
});
