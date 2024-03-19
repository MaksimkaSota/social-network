import { act, create } from 'react-test-renderer';
import { ProfileStatus } from '../../Components/Main/Pages/ProfilePage/ProfileStatus/ProfileStatus';

const createComponent = (status: string, mockCallback: any) => {
  return create(
    <ProfileStatus isOwner status={status} updateStatus={mockCallback} isFetchingStatus={false} statusError={null} />
  ).root;
};

describe('ProfileStatus Component tests', (): void => {
  it(`After creation element 'statusText' should be displayed`, (): void => {
    const root = createComponent('My logic is undeniable', null);

    const statusText = root.findByProps({ className: 'statusText' });
    expect(statusText).not.toBeNull();
  });

  it(`After creation element 'inputStatus' should not be displayed`, async (): Promise<void> => {
    const root = createComponent('My logic is undeniable', null);

    await expect(async () => {
      root.findByProps({ className: 'inputStatus' });
    }).rejects.toThrow();
  });

  it(`After creation element 'statusText' should contains 'status'`, (): void => {
    const root = createComponent('My logic is undeniable', null);

    const statusText = root.findByProps({ className: 'statusText' });
    expect(statusText.props.children).toBe('My logic is undeniable');
  });

  it(`After click element 'statusButton' should contains 'status'`, async (): Promise<void> => {
    const root = createComponent('My logic is undeniable', null);

    const statusButton = root.findByProps({ className: 'statusButton' });
    await act(() => statusButton.props.onClick());

    const inputStatus = root.findByProps({ className: 'inputStatus' });
    expect(inputStatus.props.value).toBe('My logic is undeniable');
  });

  it('Callback should be called', async (): Promise<void> => {
    const mockCallback = jest.fn();
    const root = createComponent('', mockCallback);

    const saveStatusButton = root.findByProps({ className: 'statusButton' });
    await act(() => saveStatusButton.props.onClick());

    const editStatusButton = root.findByProps({ className: 'statusButton' });
    await act(() => editStatusButton.props.onClick());

    expect(mockCallback.mock.calls.length).toBe(1);

    mockCallback.mockClear();
  });
});
