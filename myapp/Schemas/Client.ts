import { integer, select, text, relationship,image } from '../core/src/fields';
import { list } from '../core/src';
import { allowAll } from '../core/src/access';

export const Client = list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),                         //  name of client
      description: text({                                                       //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: image({                                                     //IMAGE OF CLIENT COMPANy
        storage:'localstorage'
      }),
      status: select({
        options: [
          { label: 'Current', value: 'CURRENT' },
          { label: 'Past', value: 'PAST' },
        ],
        defaultValue: 'CURRENT',
        ui: {
          displayMode: 'segmented-control',
          createView: { fieldMode: 'hidden' },
        },
      }),
      email: text({validation:{ isRequired: true }, isIndexed: 'unique'}),
      phone: integer({validation:{ isRequired: true }})
      
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