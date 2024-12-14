import UserModel from "../model/UserModel.js"


//registerService

export const registerService =async (req)=>{
    try{
        let reqBody = req.body;
        let Data = await UserModel.create(reqBody);

        return {status: "success", data: Data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

//loginService

export const loginService =async (req)=>{
    try{
        let reqBody = req.body;
        const data = await UserModel.aggregate([
            {
                $match: reqBody,
            },
            {
                $project: {
                    _id: 1,
                    email: 1,
                },
            },
        ]);
        if (!data || data.length === 0) {
            return {status: "fail"};
        }
        return {status: "success", data: data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

