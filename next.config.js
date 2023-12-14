/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports ={
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'w0.peakpx.com'
            }
        ]
    }
}; nextConfig
