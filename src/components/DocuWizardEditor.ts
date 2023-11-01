import { defineComponent, onMounted, ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import './DocuWizardEditor.css'
export default defineComponent({
  components: {
    Editor
  },
  setup(props, ctx) {
    const editorInit = ref({
      toolbar_mode: 'sliding',
      width: '80%',
      height: '100vh',
      browser_spellcheck: true,
      promotion: false,
      branding: false,
      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
      content_style:
    "@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); body { font-family: Oswald; }",
      font_size_formats:
    "8px 9px 10px 12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px", 
    line_height_formats: "0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5", 
      menu: {
        file: {
          title: 'File',
          items: 'newdocument restoredraft | preview | export print | deleteallconversations'
        },
        edit: {
          title: 'Edit',
          items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'
        },
        view: {
          title: 'View',
          items:
            'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments'
        },
        insert: {
          title: 'Insert',
          items:
            'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime'
        },
        format: {
          title: 'Format',
          items:
            'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat'
        },
        tools: {
          title: 'Tools',
          items: 'browserspellcheck spellchecker spellcheckerlanguage | a11ycheck code wordcount'
        },
        table: {
          title: 'Table',
          items: 'inserttable | cell row column | advtablesort | tableprops deletetable'
        },
        help: { title: 'Help', items: 'help' },
        custom: { title: 'Custom menu', items: 'basicitem nesteditem toggleitem' }
      },
      plugins: [
        'advlist',
        'autolink',
        'link',
        'image',
        'lists',
        'charmap',
        'preview',
        'anchor',
        'pagebreak',
        'searchreplace',
        'wordcount',
        'visualblocks',
        'visualchars',
        'code',
        'fullscreen',
        'insertdatetime',
        'media',
        'table',
        'emoticons',
        'template',
        'help'
      ],
      toolbar1:
        'undo redo | styles fontfamily fontsize align lineheight | bold italic underline strikethrough superscript subscript | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullscreen ',
      toolbar2: 'forecolor backcolor emoticons | help',
    })
    onMounted(() => {
      try {
        /* todo */
        tinymce.init({})
      } catch (error) {
        console.log(error)
      }
    })
    return {
      editorInit
    }
  }
})
