import { createAction } from '@reduxjs/toolkit';

const filter = createAction<string>('filter');

const trigerLightTags = createAction<Array<string>>('trigerLighTags');

const appActions = {
  filter,
  trigerLightTags,
};

export default appActions;
