import React from 'react';

import { addons, types } from '@storybook/manager-api';

addons.register('usage', () => {
  addons.add('realworld/usage', {
    type: types.TAB,
    title: 'Usage',
    //👇 Checks the current route for the story
    route: ({ storyId, refId }) => (refId ? `/usage/${refId}_${storyId}` : `/usage/${storyId}`),
    //👇 Shows the Tab UI element in mytab view mode
    match: ({ viewMode }) => viewMode === 'usage',
    render: () => (
      <div>
        <h2>I'm a tabbed addon in Storybook</h2>
      </div>
    ),
  });
});
