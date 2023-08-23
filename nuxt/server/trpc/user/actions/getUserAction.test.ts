import { expect, test } from 'vitest'
import { appRouter } from '../../routes';

test('getUserAciton', async () => {
  const ctx = {}
  const caller = appRouter.createCaller(ctx);
  const user = await caller.user.getUser({ id: 1 });
  expect(user.id).toBe(1);
})