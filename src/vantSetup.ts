// https://develop365.gitlab.io/vant/zh-CN/button/#/zh-CN
// https://develop365.gitlab.io/vant/zh-CN/button/#/zh-CN
import type { App } from 'vue';
import {
  Button,
  Image,
  Form,
  Field,
  Cell,
  SwipeCell,
  CellGroup,
  List,
  PullRefresh,
  Card,
  Tag
} from 'vant';

import 'vant/lib/index.css';

function vantSetup(app: App) {
  const compList = [
    Button,
    Image,
    Form,
    Field,
    CellGroup,
    List,
    PullRefresh,
    Cell,
    SwipeCell,
    Card,
    Tag
  ];
  compList.map(com => {
    app.use(com);
  });
}

export default vantSetup;
