import { module } from 'angular';

import './index.css';
import './templates';
import Vendor from './vendor';
import Config from './config';
import Services from './services';
import Directives from './directives';
import Filters from './filters';
import Components from './components';

module('app', [
  Vendor,
  Config,
  Services,
  Directives,
  Filters,
  Components,
]);
