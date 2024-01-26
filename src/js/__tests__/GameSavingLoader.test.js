import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

describe('load()', () => {
  test('correct', async () => {
    const result = await GameSavingLoader.load();
    expect(result instanceof GameSaving).toBeTruthy();
  });
});
