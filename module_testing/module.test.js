import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(4, 2);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 120;
  const got = mut.div(240, 2);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("astesasdf243445asdr");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("astesasdasdr");
  expect(got).toBeFalsy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers(" ");
  expect(got).toBeFalsy();
});
