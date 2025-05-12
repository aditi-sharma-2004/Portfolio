/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // important for static export
  basePath: isGithubPages ? '/Portfolio' : '',
  assetPrefix: isGithubPages ? '/Portfolio/' : '',
}

module.exports = nextConfig
