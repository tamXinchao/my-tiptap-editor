/**
 * my-tiptap-editor
 * Minimal Tiptap 3 + Vue 3 rich-text editor package
 */

// Core Editor
export { default as TiptapProEditor } from './core/TiptapProEditor.vue'
export type * from './core/editorTypes'
export * from './core/editorConfig'

// Themes
export * from './themes'

// Locales
export * from './locales'

// Adapters
export * from './adapters'

// AI Module
export * from './ai'

// Styles - users import separately:
// import 'my-tiptap-editor/style.css'
