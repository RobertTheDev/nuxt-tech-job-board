import { library, config } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBookmark,
  faEye,
  faEyeSlash,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faBookmark, faEye, faEyeSlash, faCircleXmark, faCircleCheck);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});