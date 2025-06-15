import { render } from '@testing-library/react';

import MyAwesomeNxRepoSharedUi from './shared-ui';

describe('MyAwesomeNxRepoSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAwesomeNxRepoSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
