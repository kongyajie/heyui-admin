import Vue from 'vue';
import SubMenu from 'components/common/SubMenu';
import SearchFilter from 'components/common/SearchFilter';

Vue.component('SubMenu', SubMenu);
Vue.component('SearchFilter', SearchFilter);
Vue.component('Qiniu', (resolve) => require(['components/common/Qiniu'], resolve));
Vue.component('Chart', (resolve) => require(['components/common/Chart'], resolve));
Vue.component('CodeEditor', (resolve) => require(['components/common/CodeEditor'], resolve));
Vue.component('RichTextEditor', (resolve) => require(['components/common/RichTextEditor'], resolve));
Vue.component('MarkdownEditor', (resolve) => require(['components/common/MarkdownEditor'], resolve));