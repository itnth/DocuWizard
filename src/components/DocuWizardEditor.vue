<template>
    <main id="sample">
        <Editor :init="editorInit" />
    </main>
</template>
<script src="./DocuWizardEditor.ts" lang="ts"/>
<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>