const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');
console.log(new Potion());

test('create a player object', () => {
  const player = new Player('Kevin');

  expect(player.name).toBe('Kevin');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});