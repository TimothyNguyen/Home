import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: "Timothy Nguyen",
  projectId: projectId,
  dataset: dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
