import axios from "axios";



export async function getBlogs() {
    try{
        const res = await axios(`https://jsonplaceholder.typicode.com/posts`)
        return res.data;

    }catch(err){
        console.log("Error while fetching blog by id", err);
    }
}

export async function getBlogId(id) {
    try{
        const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return res.data;

    }catch(err){
        console.log("Error while fetching blog by id", err);
    }
}