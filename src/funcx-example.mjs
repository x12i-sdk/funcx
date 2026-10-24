import assert from 'node:assert/strict';
import { normalizeAndParseJsonObjectResponse } from '@x12i/funcx';
const normalized = normalizeAndParseJsonObjectResponse('{"label":"example","score":7}', undefined);
assert.deepEqual(normalized.parsed, { label: 'example', score: 7 });
assert.equal(typeof normalized.parsed.score, 'number');
assert.throws(() => normalizeAndParseJsonObjectResponse('not JSON', undefined));
console.log(normalized.parsed);
// This consumes response normalization only. A model or function is not invoked.
