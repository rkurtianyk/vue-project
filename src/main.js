import { createApp } from 'vue'
import App from './App.vue'
import SuperButton from './components/SuperButton.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faAt)

createApp(App)
    .directive(
        'focus', {
            mounted(element) {
                element.focus();
            }
        }
    )
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("SuperButton", SuperButton)
    .mount('#app')
