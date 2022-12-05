// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { Client } from './Schemas/Client'; 
import { Content } from './Schemas/Content';
import { Faq } from './Schemas/Faq';
import { JobApplication } from './Schemas/JobApplication';
import { JobRole } from './Schemas/JobRole';
import { FormQuery } from './Schemas/FormQuery';
import { User } from './Schemas/User';
import { StorageConfig } from '@keystone-6/core/types';
// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';

const baseUrl = 'http://localhost:3000'

const localstorage : StorageConfig={
    // Images that use this store will be stored on the local machine
    kind: 'local',
    // This store is used for the image field type
    type: 'image',
    // The URL that is returned in the Keystone GraphQL API
    generateUrl: path => `${baseUrl}/images${path}`,
    // The route that will be created in Keystone's backend to serve the images
    serverRoute: {
      path: '/images',
    },
    // Set serverRoute to null if you don't want a route to be created in Keystone
    // serverRoute: null
    storagePath: 'public/images',
  }
  /** more storage */
  const filestorage : StorageConfig={
    // Images that use this store will be stored on the local machine
    kind: 'local',
    // This store is used for the image field type
    type: 'file',
    // The URL that is returned in the Keystone GraphQL API
    generateUrl: path => `${baseUrl}/files${path}`,
    // The route that will be created in Keystone's backend to serve the images
    serverRoute: {
      path: '/files',
    },
    // Set serverRoute to null if you don't want a route to be created in Keystone
    // serverRoute: null
    storagePath: 'public/files',
  }

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      // provider: 'sqlite',
      // url: 'file:./keystone.db',
      provider: 'mysql',
      url: 'mysql://root:root@localhost:3306/keystone',
    },
    server: {
      cors: { origin:'*'}
    },
    lists:{
      Client,
      Faq,
      Content,
      FormQuery,
      JobRole,
      JobApplication,
      User
    },
    storage:{localstorage,filestorage},
    session,
  })
);
