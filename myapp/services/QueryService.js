import ApiService from "./ApiService";
export default class QueryService{
  static async createFormQuery(name,description,email,packagesCount,type,category,Subject,phone){
    const results =await ApiService(`
      mutation{
        createFormQuery(data:{
          name:"${name}",
          description:"${description}",
          email:"${email}",
          packagesCount:"${packagesCount}",
          type:"${type}",
          subject:"${Subject}",
          buisnessCategory:"${category}",
          phone:"${phone}"})
          {
          name 
          }
      }`
    )
    return results;
  }

  static async findQueriesByType(type){
    const results =await ApiService(`
    {
      formQueries(where:{type:{equals:"${type}"}}){
        name,
        type,
        description,
        buisnessCategory,
        packagesCount,
        phone,
        email,
        subject
      }
    }`)
    return results;
  }

  static async findAllFormQueries(){
    const results = await ApiService(`{
      formQueries{
        name,
        type,
        description,
        buisnessCategory,
        packagesCount,
        phone,
        email,
        subject
      }
    }`)
    return results;
  }
  
}




    // async findall(){
    //     const response = await graphql(
    //     `query{
    //         contents{
    //           id,
    //           pagename,
    //           image{
    //             url
    //           }
    //           type,
    //           description
    //         }
    //       }`
    //     )
    //     return response;
    //   } 
