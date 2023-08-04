/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['**/*.scss']
  },
  env: {
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    WEATHER_API_ACCESS_TOKEN: process.env.WEATHER_API_ACCESS_TOKEN,
  }
}

module.exports = nextConfig
 