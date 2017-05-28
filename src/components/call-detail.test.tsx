import * as React from 'react';
import { mount } from 'enzyme';
import CallDetail from './call-detail';
import {IIssue} from '../model';

describe('CallDetail Component', () => {
  it('should show Welcome component when issue name is missing', () => {
    const issue: IIssue = { id: 1234, name: '' };
    const wrapper = mount(
      <CallDetail issue={issue} />
    );
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe('MAKE YOUR VOICE HEARD');
  });

  it('should show Contacts component when issue name exists', () => {
    const issueName = 'Throw the bums out!';
    const issue: IIssue = { id: 1234, name: issueName };
    const wrapper = mount(
      <CallDetail issue={issue} />
    );
    const h3 = wrapper.find('h3');
    expect(h3.text()).toBe(issueName);
  });
});
