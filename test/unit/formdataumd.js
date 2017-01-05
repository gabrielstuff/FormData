import FormData from '../../src/formDataUMD.js';

describe('FormData', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(FormData, 'greet');
      FormData.greet();
    });

    it('should have been run once', () => {
      expect(FormData.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(FormData.greet).to.have.always.returned('hello');
    });
  });
});
