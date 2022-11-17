import { integer, select, text, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const FormQuery = list({
    access: allowAll,                                                           //updating access only to admin
    fields: {
      name: text({ validation: { isRequired: true } }),                         //  name of client
      type: select({                                                             //  Query-Type
        options: [
          { label: 'Buisness', value: 'Buisness'},
          { label:'General',value:'General'},
          { label: 'other', value: 'other' },
        ],
        defaultValue: 'Buisness',
        ui: {
          displayMode: 'select',
        },
      }),
      description: text({                                                       //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      buisnessCategory:text({defaultValue:""}),                                                  //--toreconfirm if select or text                 
      email: text({validation:{ isRequired: true }, isIndexed: 'unique'}),
      packagesCount: text({defaultValue:""}),                                                  //no of packages may vary
      subject:text({}),
      phone: integer({validation:{ isRequired: true },defaultValue:0})                                                 //to ask for normal queries we have this subject not used in buisness queries
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