import { integer, select, text, relationship } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const JobRole = list({
    access: allowAll,
    fields: {
      jobrole: text({ validation: { isRequired: true } }),                                  //  njob role
      employmenttype:select({                                                               //  employment type
        options: [
          { label: 'Full Time Employee (FTE)', value: 'Full Time Employee (FTE)' },
          { label: 'other', value: 'other' },
        ],
        defaultValue: 'Full Time Employee (FTE)',
        ui: {
          displayMode: 'segmented-control',
          createView: { fieldMode: 'hidden' },
        },
      }),
      jobType:select({
        options: [
            { label: 'Product', value: 'PRODUCT' },
            { label: 'Commercial', value: 'COMMERCIAL' },
            { label: 'Marketing', value: 'MARKETING' },
          ],
          defaultValue: 'PRODUCT',
          ui: {
            displayMode: 'select',
            createView: { fieldMode: 'hidden' },
          },
      }),
      jobResponsilbilties: text({                                          //-- inside of details ask for seperate model of req and res
        ui: {
          displayMode: 'textarea',
        },
      }),
      jobRequirements: text({                                                       //-- inside of details ask for seperate model
        ui: {
          displayMode: 'textarea',
        },
      }),                                                                                                        
      jobLocation: text({validation:{ isRequired: true }})                                    //location vary
      
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