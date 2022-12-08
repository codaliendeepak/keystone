import { integer, select, text, relationship, image, calendarDay, timestamp } from '../core/src/fields';
import { document } from '../fields-document/src';
import { list } from '../core/src';
import { allowAll } from '../core/src/access';
import { DateTime } from '../core/src/types/schema/graphql-ts-schema'  // /dist/declarations/src/types/schema/graphql-ts-schema';

let now: Date = new Date("2019-01-16");
export const Content = list({
    access: allowAll,
    fields: {
      pagename: select( { options: [                                                 //  name of page
        {label:"About us", value:"AboutUs"},
        {label:"Buisness", value:"Buisness"},
        {label:"Home",value:"Home"},
        {label:"Careers", value:"Careers"},
        {label:"SME", value:"SME"},
        {label:"News And Update", value:"NewsAndUpdate"},
        {label:"Driver", value:"Driver"}
      ]
      }), 
      image:image({storage:'localstorage'}),                                                                       
      type:select({                                                                 //  Query-Type
        options: [
          { label: 'Cards', value: 'Cards' },
          { label: 'Image', value:'Image'},
          { label: 'ClientLogo' ,value:'ClientLogo'},
          { label: 'Banner', value:'Banner'}
        ],
        defaultValue: 'Cards',
        ui: {
          displayMode: 'select'
        },
      }),
      description: text({                                                       //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      content:document({
        formatting: true,
        links: true,
        dividers: true,
        
      }),
      link: text({}),
      heading:text({}),
      Section:select({
          options: [
            { label:'Whats new', value: 'Whatsnew' },
            { label:'Clients', value:'Clients'},
            { label:'What they say', value:'WhatTheySay'},
            { label:'What media say about us', value:'WhatMediaSayAboutUs'},
            { label:'Why we are the Best', value:'BestSolution'},
            { label:'Company Milestone',value:'CompanyMilestone'},
            { label:'What Our Driver Says',value:'DriverSays'},
            { label:'Advanced features',value:'AdvancedFeature'},
            { label:'Banner', value:'banner'},
            { label:'Find Us', value:'FindUsHere'},
            { label:'Multicard Slider', value:'MulticardSlider'}
          ],
          defaultValue: 'SelectSection',
          ui: {
            displayMode: 'select',
          },
      }),
      publishedAt: timestamp({defaultValue:{kind:'now'} }),
      DisplayEnabled:select({
        options:[
          {label:'Enable',value:'Enable'},
          {label:'Disable',value:'Disable'}
        ],
        ui: {
          displayMode: 'radio',
        }
      })
    //   user: relationship({                                                   TODO--RELATIONSHIP WITH CLIENTS
    //     ref: 'User.products',
    //     hooks: {
    //       resolveInput({ operation, resolvedData, context }) {
    //         // Default to the currently logged in user on create.
    //         if (operation === 'create' && !resolvedData.user && context.session?.itemId) {
    //           return { connect: { id: context.session?.itemId } };
    //         }
    //         return resolvedData.user;
    //       },
    //     },
    //   }),
    },
  });