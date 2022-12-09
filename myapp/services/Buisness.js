import ApiService from "./ApiService";

class BuisnessService{
    
    async findClientByName(name){                    //lets say client
          const results = await ApiService(`
            {
                clients(where: {name:{equals:"${name}"}}){
                    id,
                    description,
                    name,
                    email,
                    photo{
                    url
                    },
                    phone
                }
            }
            `
        ) 
        return results;
    }
    async findAllClient(){
        const results = await ApiService(`
            {
                clients{
                    id,
                    description,
                    name,
                    email,
                    photo{
                    url
                    },
                    phone
                }
            }
            `) 
          return results;
    }
    
}

exports = module.exports = BuisnessService;

// const ContentService= require("./ContentService");
// async function bob(){
// const Content=new ContentService()
//     var r=await Content.findAllContent()
//     console.log(r.data);
// }
// bob();
