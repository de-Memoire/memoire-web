import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'], // 스토리 파일 경로
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],

  // Webpack 설정을 커스터마이징
  webpackFinal: (config) => {
    // 플러그인 추가
    config.plugins?.push(
      new VanillaExtractPlugin(), // Vanilla Extract 플러그인
      new MiniCssExtractPlugin(), // CSS 추출 플러그인
    );

    // .vanilla.css 파일 전용 로더 설정
    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false, // URL 비활성화
          },
        },
      ],
    });

    // .css 파일 처리에서 .vanilla.css 제외
    config.module?.rules?.forEach((rule: any) => {
      if (
        typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('test.css')
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    // 기존의 SVG 처리 rule 제거
    if (config.module?.rules) {
      config.module.rules = config.module.rules.filter((rule: any) => {
        return !(rule?.test instanceof RegExp && rule.test.test('.svg'));
      });
    }

    // SVG 파일을 React 컴포넌트로 처리
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.[jt]sx?$/,
    });

    return config;
  },

  // TypeScript 설정
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
