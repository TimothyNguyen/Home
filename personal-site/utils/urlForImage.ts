import { dataset, projectId } from '@/sanity/env'
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

export const urlForImage = (source: Image | undefined) => {
    // Ensure that source image contains a valid reference
    if (!source?.asset?._ref) {
      return undefined
    }
  
    return imageBuilder?.image(source).auto('format').fit('max')
}

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})