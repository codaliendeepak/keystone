import ApiService from "./ApiService";
import axios from "axios";
import fileDownload from 'js-file-download'


export default async function DownloadViaList(list){
    const Queryname=list.gqlNames.listQueryName;
    const object= list.fields
    let query='{'+list.gqlNames.listQueryName+'{';
    for (const [key, value] of Object.entries(object)){
       query= query.concat(value.controller.graphqlSelection+',');
    }
    query=query.concat('}}')
    console.log(query);
    var response;
    try{
        response=await ApiService(query);
    }catch(e){
        console.log("error while fetching list")
        return e;
    }
    console.log(response);
    let uri="http://localhost:8080/download"
    axios.post(uri,response,{
        responseType: 'blob'
    }).then(res=>{
        console.log("response received",res);
        fileDownload(res.data, `${list.gqlNames.listQueryName}`);
        return new Blob([res.data]);
    }).catch(err=>{
        console.log(err);
    });
    
    // var response;
    // try{
    //     response=await ApiService(query);
    // }catch(e){
    //     console.log("error while fetching list")
    //     return e;
    // }
    // console.log(response);
    // const file = '/tempfile.txt'
    // try {
    //     fs.writeFileSync( file, response, options )
    // }catch(err){
    //     console.log("error writing to file");
    //     return err;
    // }    
// Path to store the downloaded file
    // const filePath = `${__dirname}/public/files`;
    //     download(file,filePath)
    //     .then(() => {
    //     console.log('File downloaded successfully!');
    //     })
    
}