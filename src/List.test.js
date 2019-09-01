import React from 'react'
import { List } from './List'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('List', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<List />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe('working correctlly', () => {
        const wrapper = shallow(<List />);
        const item = 'someItem';
    
        it('add item', () => {
          const input = wrapper.find('.input');
    
          input.simulate('change', { target: { value: item } });
          wrapper.find('.addButton').simulate('click');
          expect(wrapper.find('.list').contains(item)).toEqual(true);
        });
    
        it('clear input', () => {
          const input = wrapper.find('.input');
          const value = input.prop('value');
    
          expect(value).toEqual('');
        });
    
        it('remove item', () => {
          wrapper.find('.removeLi').first().simulate('click');
          expect(wrapper.find('.removeLi').length).toEqual(0);
        })
      })
})