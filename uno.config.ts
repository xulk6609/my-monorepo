import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography
} from 'unocss'

export default defineConfig({
  // 预设配置
  presets: [
    presetUno(), // 默认预设，包含Tailwind CSS兼容性
    presetAttributify({
      prefix: 'u-',
      prefixedOnly: true,
    }), // 属性化模式支持
    presetTypography(), // 排版预设
  ],
  blocklist: [
    /__proto__/,
    /constructor/,
    /\$oe\(/,
    /Object\.prototype/,
    /function Object/
  ],
  safelist: [
    'u-class', 'u-mt-1', 'u-p-2'
  ],
  // 自定义主题
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1a1a1a',
        50: '#1a1a1a',
        100: '#1890ff',
        200: '#1890ff',
        300: '#1890ff',
        400: '#1890ff',
        500: '#1890ff',
        600: '#1890ff',
        700: '#1890ff',
        800: '#1890ff',
        900: '#1890ff',
      },
      'primary-hover': {
        DEFAULT: '#1890ff',
        50: '#1890ff',
        100: '#1890ff',
        200: '#1890ff',
        300: '#1890ff',
        400: '#1890ff',
        500: '#1890ff',
        600: '#1890ff',
        700: '#1890ff',
        800: '#1890ff',
        900: '#1890ff',
      },
      secondary: {
        DEFAULT: '#505259',
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    }
  },

  // 简化的快捷方式
  shortcuts: {
    'container': 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    'btn-primary': 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700',
    'btn-secondary': 'px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded hover:bg-gray-50',
    'news-card': 'bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300',
    'responsive-img': 'w-full h-auto object-cover'
  },

  // 内容源配置
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx?|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'app.vue'
      ]
    }
  }
})