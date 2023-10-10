import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "./assets/css/index.less";
import "@/utils/rem";
import {
  Image,
  Table,
  Empty,
  Modal,
  FloatButtonGroup,
  FloatButton,
} from "ant-design-vue";

// 1. 引入你需要的组件
import {
  Button,
  Swipe,
  SwipeItem,
  Popup,
  Tabs,
  Tab,
  FloatingBubble,
} from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
import { createPinia } from "pinia";
import { PiniaLogger } from "pinia-logger";

const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
  }),
);

const app = createApp(App);
app.use(pinia);
app.use(Button);
app.use(Swipe);
app.use(SwipeItem);
app.use(Popup);
app.use(Tabs);
app.use(Tab);
app.use(FloatingBubble);

app.use(Image);
app.use(Empty);
app.use(Modal);
app.use(Table);
app.use(FloatButtonGroup);
app.use(FloatButton);
app.use(router);
app
  .mount("#app")
  .$nextTick(() => postMessage({ payload: "removeLoading" }, "*"));
