import { integer, select, text, relationship, bigInt, decimal } from '@keystone-6/core/fields';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
// import * as fs from 'fs';
// import express from 'express';
// import https from 'https';
// var app=express()

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
      phone: decimal({validation:{ isRequired: true }})                                              //to ask for normal queries we have this subject not used in buisness queries
    },
    // hooks: {
    //   afterOperation: ({ operation, item }) => {
    //     if (operation === 'create' || operation === 'update') {
    //       console.log(`New Query created for user Name: ${item.name}, Email: ${item.email}`);
    //       var data={
    //         "name":item.name,
    //         "email":item.email,
    //         "subject":item.subject,
    //       }
    //       fs.writeFileSync('tempfile.txt',JSON.stringify(data))
    //       app.get('/api/graphql',(req,res) => {
    //       //   // Image will be stored at this path
    //       //   const path = `${__dirname}/files/img.jpeg`; 
    //       //const filePath = fs.createWriteStream('tempfile.txt')
    //       // res.setHeader("Content-Disposition", "attachment; tempfile.txt");
    //       // res.pipe(filePath);
    //       console.log("hello")
    //       res.download("./tempfile.txt");
    //       //   filePath.on('finish',() => {
    //       //       filePath.close();
    //       //       console.log('Download Completed'); 
    //      })
    //     }
    //   }
    // }
  });