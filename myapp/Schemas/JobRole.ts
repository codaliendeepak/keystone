import { integer, select, text, relationship } from '../core/src/fields';
import { list } from '../core/src';
import { document } from '../fields-document/src';
import { allowAll } from '../core/src/access';

export const JobRole = list({
    access: allowAll,
    fields: {
      Role: text({ validation: { isRequired: true } }),                                  //  n job role
      employmenttype:select({                                                               //  employment type
        options: [
          { label: 'Full Time Employee (FTE)', value: 'Full Time Employee (FTE)' },
          { label: 'other', value: 'other' },
        ],
        defaultValue: 'Full Time Employee (FTE)',
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      jobType:select({
        options: [
            { label: 'Product', value: 'Product' },
            { label: 'Commercial', value: 'Commercial' },
            { label: 'Marketing', value: 'Marketing' },
          ],
          defaultValue: 'Product',
          ui: {
            displayMode: 'select',
          },
      }),
      jobResponsilbilty : document({
        formatting: true,
        links: true,
        dividers: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      jobRequirement: document({
        formatting: true,
        links: true,
        dividers: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),                                                                                                        
      jobLocation: text({validation:{ isRequired: true }}),                                    //location vary
      ShowVacancy: select({
        options:[
          {label:'Enable',value:'Enable'},
          {label:'Disable',value:'Disable'}
        ],
        defaultValue:'Enable',
        ui:{
          displayMode:'radio'
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