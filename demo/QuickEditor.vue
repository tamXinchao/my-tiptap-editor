<template>
  <div class="quick-editor-root">
    <div class="editor-shell">
      <TiptapProEditor
        ref="editorRef"
        :initial-content="initialContent"
        :locale="'en-US'"
        :version="'advanced'"
        :features="features"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TiptapProEditor from '../src/core/TiptapProEditor.vue'
import { ref } from 'vue'
import { PRESET_CONFIGS } from '../src/core/editorConfig'

const initialContent = `
<h1>Welcome — Quick Editor</h1>
<p>This is the standalone editor view for embedding.</p>
<p>Start typing to test the editor.</p>
`
const editorRef = ref(null)

// Use full preset features so toolbar and formatting tools are enabled
const features = PRESET_CONFIGS.full.features
</script>

<style scoped>
.quick-editor-root {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f3f4f8 0%, #e9eef6 100%);
}

.editor-shell {
  width: 100%;
  max-width: 1100px;
  height: 90vh;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
</style>
