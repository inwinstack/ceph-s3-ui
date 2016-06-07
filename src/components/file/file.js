import { module } from 'angular';
import router from 'angular-ui-router';

import FileController from './file.controller';
import FileService from './file.service';
import FileTemplate from './file.html';
import UploadService from './upload/upload.servce';
import FolderService from './folder/folder.service';
import './file.css';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('file', {
    url: '/bucket/*path',
    parent: 'root',
    controller: FileController,
    controllerAs: 'file',
    template: FileTemplate,
    onEnter: $nav => $nav.setTypeToFile(),
  });
};

const File = module('file', [
  router,
])
.service('$file', FileService)
.service('$upload', UploadService)
.service('$folder', FolderService)
.config(route);

export default File.name;
