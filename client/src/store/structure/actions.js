import { createAction } from '@reduxjs/toolkit';

const filter = createAction('filter');

const trigerLightTags = createAction('trigerLighTags');

const appActions = {
  filter,
  trigerLightTags,
};

export default appActions;
