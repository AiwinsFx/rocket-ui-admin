import { createTest, destroyVM } from '../util';
import Lhb from 'packages/lhb';

describe('Lhb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Lhb, true);
    expect(vm.$el).to.exist;
  });
});

