import { act, create } from 'react-test-renderer';
import { ProfileStatus } from '../../Components/Main/Pages/ProfilePage/ProfileStatus/ProfileStatus';

const createComponent = (status, mockCallback) => {
  return create(<ProfileStatus status={status} updateStatus={mockCallback} />).root;
};

describe('ProfileStatus Component tests', () => {
  it(`After creation element 'statusText' should be displayed`, async () => {
    const root = createComponent('My logic is undeniable', null);

    const statusText = await root.findByProps({className: 'statusText'});
    expect(statusText).not.toBeNull();
  });

  it(`After creation element 'inputStatus' should not be displayed`, async () => {
    const root = createComponent('My logic is undeniable', null);

    await expect(async () => {
      await root.findByProps({className: 'inputStatus'});
    }).rejects.toThrow();
  });

  it(`After creation element 'statusText' should contains 'status'`, async () => {
    const root = createComponent('My logic is undeniable', null);

    const statusText = await root.findByProps({className: 'statusText'});
    expect(statusText.props.children).toBe('My logic is undeniable');
  });

  it(`After double click element 'inputStatus' should contains 'status'`, async () => {
    const root = createComponent('My logic is undeniable', null);

    const statusText = await root.findByProps({className: 'statusText'});
    act(() => statusText.props.onDoubleClick());

    const inputStatus = await root.findByProps({className: 'inputStatus'});
    expect(inputStatus.props.value).toBe('My logic is undeniable');
  });

  it('Callback should be called', async () => {
    const mockCallback = jest.fn();
    const root = createComponent(null, mockCallback);

    const statusText = await root.findByProps({className: 'statusText'});
    act(() => statusText.props.onDoubleClick());

    const inputStatus = await root.findByProps({className: 'inputStatus'});
    act(() => inputStatus.props.onBlur());

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
