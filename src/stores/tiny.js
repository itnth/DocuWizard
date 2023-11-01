import { defineStore } from 'pinia'

export const useTiny = defineStore('tiny', {
  state: () => ({
    content: { html: '' },
    autoSave: false,
    id: '',
    fnSetContentTiny: () => {}
  }),

  actions: {
    setFnSetContentTiny(fn) {
      this.fnSetContentTiny = fn
    },
    setContent(content) {
      this.content.html = content
    },
    setAutoSave(autoSave) {
      this.autoSave = autoSave
    },
    autoSaveContent() {
      this.id = setInterval(() => {
        localStorage.setItem('old-content', this.content.html)
      }, 5000)
    },
    unAutoSaveContent() {
      clearInterval(this.id)
    }
  }
})
