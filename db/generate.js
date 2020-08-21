/* eslint-disable prettier/prettier */
module.exports = function() {
  const faker = require("faker");
  const _ = require("lodash");

  return {
    people: _.times(100, function(n) {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        department: _.sample(["Customer Support", "Engineering", "Sales"]),
      };
    }),
  };
};
