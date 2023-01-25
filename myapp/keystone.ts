// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';
import * as fs from 'fs';
// to keep this file tidy, we define our schema in a different file
import { User } from './Schemas/User';
import { Booking } from './Schemas/Booking';
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
      // for more information on what database might be appropriate for you
      // see https://keystonejs.com/docs/guides/choosing-a-database#title
      // provider: 'sqlite',
      // url: 'file:./keystone.db',
      provider: 'mysql',
      url: 'mysql://root:root!234@localhost:3306/Meetingroom',
    },
    server: {
      cors: { origin:'*'},
      extendExpressApp: (app) => {
        app.post("/download",async (req,res)=>{
          console.log("request body")
          console.log(req.body)
          let file='./tempfile.txt'
          try{
            fs.writeFileSync(file,JSON.stringify(req.body))
          }catch(e){
            console.log(e);
          }
          res.download(file);
        })
      }
    },
    lists:{
      User,
      Booking
    },
    storage:{localstorage,filestorage},
    session,
  })
);
