import ApiService from "./ApiService";

export default class JobApplicationService {
  static async createJobApplication(name, jobRole, email, cover, Url) {
    const result = await ApiService(
      `mutation{
        createJobApplication(data:{
          name:"${name}",
          email:"${email}",
          jobRole:"${jobRole}"
        }){
          name
        }
      }`
    );
    return result;
  }

  static async showAllJobsApplication() {
    const result = await ApiService(
      `query{
                jobApplications{
                  name,
                  email,
                  jobRole
                }
              }
            `
    );
    return result;
  }

  static async FindJobApplicationsByPosition(jobrole) {}

  static async FindJobApplicationsByPositionandName(jobrole, name) {}
}

// `mutation createjobApplication($name:String!, $email:String!, $jobRole:String!) {
//   createJobApplication(data:{name:$name,email:$email,jobRole:$jobRole}) {
//     name
//   }
// }`
// ,{
//   name: name,
//   email: email,
//   jobRole: jobRole    
// }
