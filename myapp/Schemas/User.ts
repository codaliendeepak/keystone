import { list } from '@keystone-6/core';
import { allOperations, allowAll } from '@keystone-6/core/access';
import { text, password, relationship, timestamp,checkbox } from '@keystone-6/core/fields';
import { isNamedExportBindings } from 'typescript';
import { isAdmin } from '../access';
//import { permissions, rules } from '../access';


export const User = list({
  access: {
    operation: {
      query:allowAll,
      create:isAdmin,
      update:isAdmin,
      delete:isAdmin
  }},
  
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    password: password(),
    createdAt:timestamp(),
    isAdmin: checkbox({defaultValue:false}),
    
  },
});