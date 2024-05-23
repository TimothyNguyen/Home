import { defineType } from '@sanity/types';

export default defineType({
  name: 'gridItemType',
  title: 'Grid Item Type',
  type: 'string',
  options: {
    list: [
      { title: 'Social', value: 'social' },
      { title: 'Mentor', value: 'mentor' },
    ]
  }
});