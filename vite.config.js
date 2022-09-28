import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { getThemeVariables } from 'antd/dist/theme'

/*Colors

black      #222222
teal       #3FA796
error      #FA445E
warning    #F7FA44
white      #E4E4E4

*/

// https://stackoverflow.com/questions/69039093/how-to-change-antd-theme-in-vite-config
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions:{ 
      less: {
        modifyVars: {
          'primary-color': '#3FA796',
          'link-color': '#3FA796', 
          'success-color': '#52c41a',
          'warning-color': '#F7FA44',
          'error-color': '#FA445E',
          'font-size-base': '22px',
          'heading-color': '#E4E4E4',
          'text-color': '#E4E4E4',
          'text-color-secondary': '#3FA796',
          'disabled-color': '#8C8C8C',
          'border-radius-base': '2px',
          'border-color-base': '#E4E4E4',
          'box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          'body-background': '#222222',
          'component-background': '#222222',// Base background color for most components
          'border-color-base': '#D9D9D9', // base border outline a component
          'border-color-split': '#60606F', // borde del navbar
        },
        javascriptEnabled: true,
      },
    },
  },
});
