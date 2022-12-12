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
    let uri="http://localhost:3000/download"
    axios.post(uri,response,{
        responseType: 'blob'
    }).then(async(res)=>{
        //console.log("response received",res.config.data);
        let data=await ConvertJsontoCsv(res.config.data,Queryname);
        fileDownload(data, `${list.gqlNames.listQueryName}.csv`);
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


async function ConvertJsontoCsv(jsonData,arrayName){
    let JSONData=[]
    jsonData=JSON.parse(jsonData);
    jsonData[arrayName].forEach(ele => {
        JSONData=JSONData.concat(ele)
    });
    //console.log(JSONData)

    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';
    var row = "";
    for (var index in arrData[0]) {
        row += index + ',';
    }
    row = row.slice(0, -1);
    CSV += row + '\r\n';
    for (var i = 0; i < arrData.length; i++) {
        row=''
        for (var index in arrData[i]) {
            var arrValue = arrData[i][index] == null ? "" : '"' + arrData[i][index] + '"';
            row += arrValue + ',';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }
    console.log(CSV)
    return CSV;
}