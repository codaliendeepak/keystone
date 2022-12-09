import ApiService from "./ApiService"

export default class Contents{
    static async findall(){
           const res= await ApiService(`
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
            }`)
            return res
    }
    static async findClientByPagenameSectionAndField(pagename,section,field){
        const res= await ApiService(`
        query{
                contents(where: { AND: [{pagename:{contains:"${pagename}"}},
                {Section: {contains:"${section}"}},
                {heading:{contains:"${field}"}}]}){
                    id,
                    link
                    pagename,
                    image{
                        url
                    }
                    type,
                    description,
                    heading,
                    content{
                        document
                    }
                }
            }
      `) 
        return res 
    }
    static async findContentByTypeNameandSection(pagename,contenttype,section){
        console.log(typeof(pagename),typeof(contenttype))  
        const res= await ApiService(`
            query{
                    contents(where: { AND: [{pagename:{contains:"${pagename}"}},
                    { type: {contains: "${contenttype}"}},
                    {Section: {contains:"${section}"}}]}){
                    id,
                    link
                    pagename,
                    image{
                        url
                    }
                    type,
                    description,
                    heading,
                    content{
                        document
                      }
                    }
                }
          `) 
            return res
        } 
        // static async findContentBy(pagename,contenttype,section){
        //     console.log(typeof(pagename),typeof(contenttype))  
        //     const res= await Apif(`
        //         query{
        //                 contents(where: { AND: [{pagename:{contains:"${pagename}"}},
        //                 { type: {contains: "${contenttype}"}},
        //                 {Section: {contains:"${section}"}}]}){
        //                 id,
        //                 link
        //                 pagename,
        //                 image{
        //                     url
        //                 }
        //                 type,
        //                 description,
        //                 heading,
        //                 content{
        //                     document
        //                   }
        //                 }
        //             }
        //       `) 
        //         return res
        //     } 
    static async findContentByContentTypeandPagename(pagename,contenttype){
        console.log(typeof(pagename),typeof(contenttype))  
        const res= await ApiService(`
            query{
                    contents(where: { AND: [{pagename:{contains:"${pagename}"}},
                    { type: {contains: "${contenttype}"}}]}){
                    id,
                    publishedAt,
                    pagename,
                    image{
                        url
                    }
                    type,
                    description,
                    heading,
                    content{
                        document
                    }
                    }
                }
          `) 
            return res
        }  

    }
