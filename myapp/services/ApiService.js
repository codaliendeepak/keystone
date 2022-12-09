import axios from 'axios'

// const apiUrl = 'http://localhost:3000/api/graphql'
// const apiUrl = 'https://api.jobizo.dc1.codalien.net/api/graph-api'
//const apiUrl = 'https://staging.jobizo.com/api/graph-api'
// const apiUrl = 'https://app.jobizo.com/api/graph-api'

const Url="http://localhost:3000/api/graphql";


async function ApiService(query,variables){
   let res={}
   try {
      res= await axios.post(Url,{
      query:query,
      variables:variables
      },
      {
         headers: {
           'Content-Type': 'application/json'
       }
      }) 
      console.log(res.data.data);
   }catch(err){
      console.log('api error', err)
      return res;
   }
   return res.data.data;
}


// const Query2=`
// {
//     contents(where: { AND: [{pagename:{contains:"${pagename}"}},
//       { type: {contains: "${contenttype}"}}]}){
//       id,
//       pagename,
//       image{
//         url
//       }
//       type,
//       description
//     }
//   }
// `


// const resolve = responseData => {
//   const resultant = {}
//   if (responseData.errors) {
//     resultant.error = {
//       errors: [...responseData.errors]
//     }
//   } else resultant.error = responseData.error || null
//   resultant.data = responseData.data || null
//   return resultant
// }

// const api = async (query, variables = null) => {
//   const data = {
//     query: query
//   }
//   if (variables) {
//     data.variables = variables
//   }
//   let resultant = {}
//   try {
//     const { data: response } = await axios({
//       method: 'POST',
//       url: apiUrl,
//       data: data
//     })
//     resultant = resolve(response)
//   } catch (err) {
//     console.log('api error', err)
//     if (err.response) {
//       const { data: response } = err.response
//       resultant = resolve(response)
//     } else {
//       resultant = { error: err.message, data: undefined }
//     }
//   }
//   console.log(resultant)
//   return resultant
// }


// api.BUILD_FLAVOUR = BUILD_FLAVOUR

//export default api;

export default ApiService;
