/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dgyuwphgedvnfymiqzga.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //*** (SSG Static Site Generation)***
  // we can only do this output cause our entire app is now static, it will give us an "out" folder,
  // and that folder is what we can use to deploy in some service like Netlify or render.com
  //output: "export",
};

export default nextConfig;
