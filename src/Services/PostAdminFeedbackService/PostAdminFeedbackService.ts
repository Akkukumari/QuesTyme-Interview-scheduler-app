import axios from "axios";

export const postAdminFeedback = (interviewId: number, userId: number, token: string, notes: string) => {
    console.log(interviewId, userId, token, notes)
    return axios({
        method: "post",
        url: `https://questymeprojectrepo-production.up.railway.app/api/interview/${interviewId}/admin-feedback`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: notes
    }).then((res) => {
        console.log(res)
        return res
    })
        .catch((err) => {
            console.log(err)
        })
}
