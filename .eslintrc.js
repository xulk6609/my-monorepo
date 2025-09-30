module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@nuxtjs/eslint-config-typescript',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser'
    },
    rules: {
        // Vue 相关规则
        'vue/multi-word-component-names': 'off', // 允许单单词组件名
        'vue/script-setup-uses-vars': 'error', // 确保 setup 中声明的变量被使用
        'vue/no-v-model-argument': 'off', // 允许 v-model 参数（如 v-model:value）

        // 基础代码规范
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
    }
};
