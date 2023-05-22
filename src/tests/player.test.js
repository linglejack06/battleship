import Player from '../modules/player';

const player = new Player('', true);
it('Generates random set of coordinates between 0 and 9.', () => {
  const hit = player.generateHit();
  expect(hit[0]).toBeGreaterThanOrEqual(0);
  expect(hit[0]).toBeLessThanOrEqual(9);
  expect(hit[1]).toBeGreaterThanOrEqual(0);
  expect(hit[1]).toBeLessThanOrEqual(9);
});
it('Rejects value that has already been tried', () => {
  const hit = player.generateHit();
  expect(player.checkHit(hit)).toBeFalsy();
});
