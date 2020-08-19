export function getMetaTags(title, description, image) {
  return [
    {
      key: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      key: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      key: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      key: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: image,
    },
    {
      key: 'twitter:image',
      name: 'twitter:image',
      content: image,
    },
  ]
}
