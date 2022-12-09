import ApiService from "./ApiService"

export default class JobRolesService{
    static async createJobRole(){

    }

    static async showAllJobRoles(){
        const result=await ApiService(`
            query{
                jobRoles{
                Role,
                jobType,
                jobLocation,
                jobResponsilbilty{
                    document
                },
                jobRequirement{
                    document
                },
                employmenttype
                }
            }`
        )
        return result
    }

    static async findJobRolesByRoleName(name){

    }
}