<script setup lang="ts">
import { onMounted } from 'vue';
import DocuWizardEditor from '../components/DocuWizardEditor.vue'
import { useDialog } from '../stores/dialog.js';
import { useTiny } from '../stores/tiny.js';
const dialog = useDialog();
const tiny = useTiny()
onMounted(() => {
  const valueAutoSave = localStorage.getItem('old-content')
  if (valueAutoSave) {
    setTimeout(() => {
      dialog.open({
        content: 'Bạn có muốn giữ lại bản vừa rồi không',
        action: 'Có',
        buttonSec: 'Không',
        type: 'pri',
        icon: 'question-dialog',
        loading: false
      })
      dialog.setMethod(2);
      dialog.setFunction(setContentTiny);
    }, 3000);
  }
})
const setContentTiny = () => {
  const valueAutoSave = localStorage.getItem('old-content')
  tiny.setContent(valueAutoSave)
  dialog.close()
}
</script>

<template>
  <main>
    <DocuWizardEditor />
    <MISADialog v-if="dialog.isShow"></MISADialog>
  </main>
</template>
