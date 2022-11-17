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

//     filter: {
//       query: rules.canManageUsers,
//       update: rules.canManageUsers,
//     },
//   },
//   ui: {
//     // hide the backend UI from regular users
//     hideCreate: args => !permissions.canManageUsers(args),
//     hideDelete: args => !permissions.canManageUsers(args),
//   },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    password: password(),
    createdAt:timestamp(),
    isAdmin: checkbox({defaultValue:false}),
    // cart: relationship({
    //   ref: 'CartItem.user',
    //   many: true,
    //   ui: {
    //     createView: { fieldMode: 'hidden' },
    //     itemView: { fieldMode: 'read' },
    //   },
    // }),
    // orders: relationship({ ref: 'Order.user', many: true }),
    // role: relationship({
    //   ref: 'Role.assignedTo',
    //   access: {
    //     create: permissions.canManageUsers,
    //     update: permissions.canManageUsers,
    //   },
    // }),
    // products: relationship({
    //   ref: 'Product.user',
    //   many: true,
    // }),
  },
});