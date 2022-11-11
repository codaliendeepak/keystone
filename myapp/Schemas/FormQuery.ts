import { integer, select, text, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const FormQuery = list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),                         //  name of client
      type:select({                                                             //  Query-Type
        options: [
          { label: 'Buisness', value: 'Buisness' },
          { label: 'other', value: 'other' },
        ],
        defaultValue: 'CURRENT',
        ui: {
          displayMode: 'segmented-control',
          createView: { fieldMode: 'hidden' },
        },
      }),
      description: text({                                                       //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      buisnessCategory:text({}),                                                  //--toreconfirm if select or text                 
      email: text({validation:{ isRequired: true }, isIndexed: 'unique'}),
      packagesCount: text({}),                                                  //no of packages may vary
      subject:text({})                                                      //to ask for normal queries we have this subject not used in buisness queries
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