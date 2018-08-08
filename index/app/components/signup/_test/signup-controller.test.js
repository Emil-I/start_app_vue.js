import {
    shallow
}from 'vue-test-utils';

import jsdom from 'jsdom-global';
jsdom();


//import Vue from 'vue';
import SignUp from '../signup';

describe('SignUp controller test', () => {
    const wrapper = shallow(SignUp);

    it('has a created hook', () => {
        expect(typeof SignUp.data).toBe('function');
    });


    it('Не должен зафейлится', () => {
        expect(typeof 'emil').toBe('string');
    });

});