import mongoose, { mongo } from "mongoose";

export default async function connect(url: string) {
    await mongoose.connect(url).then(() => {
        console.log('connected to db')
    }).catch(err => {
        console.log(err)
    })
}