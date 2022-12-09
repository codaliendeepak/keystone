import ApiService from "./ApiService";

class ContentService{
    async findContentByContentTypeandPagename(pagename,contenttype){
      console.log(typeof(pagename),typeof(contenttype))                    //lets say client
          const results = await ApiService(`
            query{
              contents(where: { AND: [{pagename:{contains:"${pagename}"}},
                { type: {contains: "${contenttype}"}}]}){
                id,
                pagename,
                image{
                  url
                }
                type,
                description
              }
            }`
          ); 
        return results;
    }

    async findAllContent(){
        const results = await ApiService(`
          query{
              contents{
                id,
                pagename,
                image{
                  url
                }
                type,
                description
              }
            }`
          ); 
        return results;
    }

    async createFormQuery(name,description,email,packagesCount,type,category,phone){
      const results =await ApiService(`
        mutation{
          createFormQuery(data:{name:${name},
            description:${description},
            email:${email},
            packagesCount:${packagesCount},
            type:${type},
            buisnessCategory:${category},
            phone:${phone})
            {
            name 
            }
        }`
      )
        return results;
    }
    

}

exports = module.exports = ContentService;