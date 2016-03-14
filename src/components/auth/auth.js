import { module } from 'angular';
import router from 'angular-ui-router';
import AuthTemplate from './auth.html';

import SignUp from './signup/signup';
import SignIn from './signin/signin';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('auth', {
    url: '/auth',
    abstract: true,
    template: AuthTemplate,
    controllerAs: 'auth',
  });
};

const Auth = module('auth', [
  router,

  SignUp,
  SignIn,
])
.config(route);

export default Auth.name;
