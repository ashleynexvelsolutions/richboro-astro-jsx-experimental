const homeURL = import.meta.env.WORDPRESS_URL // Ensure this is defined correctly

const transformURLs = originalData => {
  if (typeof originalData === 'string') {
    // Initialize with the original data
    let data = originalData
    // Check if the string contains the URL to image resources and should not be transformed
    if (!data.includes(`${homeURL}/wp-content/uploads/`)) {
      // General regex to replace all occurrences of homeURL in the string
      const regex = new RegExp(`${homeURL}`, 'g')
      data = data.replace(regex, '')
    }
    return data
  }

  if (Array.isArray(originalData)) {
    // Apply transformation recursively for arrays
    return originalData.map(item => transformURLs(item))
  }

  if (typeof originalData === 'object' && originalData !== null) {
    // Apply transformation recursively for object values
    return Object.entries(originalData).reduce((acc, [key, value]) => {
      acc[key] = transformURLs(value)
      return acc
    }, {})
  }

  return originalData
}

export { transformURLs }
