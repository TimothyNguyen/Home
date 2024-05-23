import { defineType } from '@sanity/types';

export default defineType({
  name: 'gridItemLayout',
  title: 'Grid Item Layout',
  type: 'string',
  options: {
    list: [
      { title: '1x2', value: '1x2' },
      { title: '2x1', value: '2x1' },
      { title: '2x2', value: '2x2' },
      { title: '2x4', value: '2x4' }
    ]
  }
});
