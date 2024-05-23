import { defineType } from '@sanity/types';

export default defineType({
  name: 'gridItem',
  title: 'Grid Item',
  type: 'document',
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'gridItemLayout'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'gridItemType'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
    {
      name: 'buttonTitle',
      title: 'Button Title',
      type: 'string'
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url'
    },
    {
      name: 'buttonSecondaryText',
      title: 'Button Secondary Text',
      type: 'string'
    },
    {
      name: 'promotion',
      title: 'Promotion',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'string'
    },
    {
      name: 'stars',
      title: 'Stars',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
});
