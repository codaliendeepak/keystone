import {  text,  } from '../core/src/fields';
import { list } from '../core/src';
import { allowAll } from '../core/src/access';

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