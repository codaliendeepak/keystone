import { integer, select, text, relationship, image } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const Content = list({
    access: allowAll,
    fields: {
      pagename: select( { options: [                                                 //  name of page
        { label: "about us", value:"AboutUs"  }
      ]
      }), 
      image:image({storage:'localstorage'}),                                                                       
      type:select({                                                                 //  Query-Type
        options: [
          { label: 'Cards', value: 'Cards' },
          { label: 'Image', value:'Image'}
        ],
        defaultValue: 'Cards',
        ui: {
          displayMode: 'select',
          createView: { fieldMode: 'hidden' },
        },
      }),
      description: text({                                                       //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      heading:text({}),
      Section:select({
        options: [
            { label: 'section1', value: 'Section1' },
            { label: 'section2', value:'Section2'}
          ],
          defaultValue: 'Section1',
          ui: {
            displayMode: 'select',
            createView: { fieldMode: 'hidden' },
          },
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