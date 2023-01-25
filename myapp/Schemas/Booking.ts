import { integer, select, text, timestamp,bigInt } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

export const Booking = list({
  ui: {
    listView: {
          defaultFieldMode: ({ session, context }) => 'read',
          initialColumns: ['name', 'Duration', 'Timing' ,'agenda'],
          initialSort: { field: 'name', direction: 'ASC' },
          pageSize: 50,
        },
  },
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),                         //  name of client
      agenda: text({                                                            //-- WHAT THEY SAY
        ui: {
          displayMode: 'textarea',
        },
      }),
      subject:text(),
      Meeting_Room_Name:select({
        type:'integer',
        options: [
          { label: 'Room Number 1 (10 seater)', value: 1},
          { label: 'Room Number 2 (4 seater Green room)', value:2},
          { label: 'Room Number 3 (4 seater Red room)', value: 3 }
        ],
        defaultValue: 1,
        ui: {
          displayMode: 'select'
        },
        validation:{ isRequired: true } 
      }),
      Duration: select({
        type:'integer',
        options: [
            { label: '15 min', value: 15},
            { label: '30 min', value: 30},
            { label: '45 min', value: 45},
            { label: '1 hr', value: 60}, 
            { label: '1 hr 15 min', value: 75},
            { label: '1 hr 30 min', value: 90},
            { label: '1 hr 45 min', value: 105},
            { label: '2 hr', value: 120}
          ],
          defaultValue: 1,
          ui: {
            displayMode: 'select'
          },
         validation:{ isRequired: true }
      }),
      Timing: timestamp({validation:{ isRequired: true }}),
      meeting_type: select({
        options: [
          { label: 'Buisness Meeting', value: 'Buisness Meeting' },
          {label:'Design Meeting', value:'Design Meeting'},
          { label: 'Interview Meeting', value: 'Interview' },
          {label:'Other', value:'Other'}
        ],
        defaultValue: 'other',
        ui: {
          displayMode: 'select'
        },
      }),
      email: text({validation:{ isRequired: true }, isIndexed: 'unique'}),
      phone: bigInt({validation:{ isRequired: true }}),
      
    },
  });