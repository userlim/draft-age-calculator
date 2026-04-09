import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Draft Age Calculator',
    short_name: 'Draft',
    description: 'Military Selective Service Calculator',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
