import { DurationInput } from '@/components/duration/DurationInput'
import { defineField } from 'sanity'


export default defineField({
  type: 'object',
  name: 'duration',
  title: 'Duration',
  components: {
    input: DurationInput,
  },
  fields: [
    defineField({
      type: 'datetime',
      name: 'start',
      title: 'Start',
    }),
    defineField({
      type: 'datetime',
      name: 'end',
      title: 'End',
    }),
  ],
})