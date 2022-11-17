import { integer, select, text, relationship, file } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const JobApplication = list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),                                         // Name 
      email:text({validation:{isRequired:true}, isIndexed:true}),                                  
      jobRole: text({ validation: { isRequired: true } }),                             //  Job Role
      coverLetter: text({                                          //-- inside of details ask for seperate model of req and res
        ui: {
          displayMode: 'textarea',
        },
      }),                                                                                                        
      CV: file({storage:'filestorage'})                                                                //file
      
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