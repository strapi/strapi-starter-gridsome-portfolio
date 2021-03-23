export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    const strapiUrl = process.env.GRIDSOME_STRAPI_URL || 'http://localhost:1337'
    return strapiUrl + url
  }
  // Otherwise return full URL
  return url
}
