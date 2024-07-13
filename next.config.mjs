import withTM from 'next-transpile-modules';

// Transpile modules configuration
const withTranspiledModules = withTM(['@ant-design/icons']);

// Export Next.js configuration
export default withTranspiledModules({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader'
      ],
    });

    return config;
  },
});
