import {
    mount
} from '@vue/test-utils';

import SignUp from '../signup.controller';

describe('SignUp', () => {

    // it('signup registration', () => {
    //     // expect(vm.$el.querySelector('modal-frame-form__title').textContent).toBe('Sign up');
    //     expect(wrapper.contains('div')).toBe(true);
    // });

    // it('is data method', () => {
    //     const wrapper = mount(SignUp, {
    //         propsData: {
    //             titleO: 'titletest'
    //         }
    //     });
    //     expect(typeof wrapper.props().titleO).toBe('titletest');
    // });

    it('Должен зафейлится', () => {
        expect(typeof 'emil').toBe('string');
    });

});