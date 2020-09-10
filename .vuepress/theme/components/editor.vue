<template>
    <div id="app">
        <jodit-editor v-model="content" :config="config" />
    </div>
</template>
 
<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'
 
export default {
    name: 'app',
 
    components: { JoditEditor },
 
    data () {
        return {
            config: {
              height: 500,
              width:1000
            }
        }
    }
}
</script>