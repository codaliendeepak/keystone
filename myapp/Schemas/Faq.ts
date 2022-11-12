import {  text,  } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const Faq = list({
    access: allowAll,
    fields: {
      Question: text({ validation: { isRequired: true } }),                                  //  njob role
      ans: text({                                                 //-- inside of details ask for seperate model of req and res
        ui: {
          displayMode: 'textarea',
        },
      }),
   
    },
  });