import { sample} from './sample';

describe('Probando sample', () => {
    it('sin argumentos devuelve 0', () => {
        expect(sample()).toEqual(0);
    });
});