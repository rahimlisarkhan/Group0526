import axios from "axios";


const baseURL = "https://blog-api-t6u0.onrender.com";

export const getBlogs = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseURL}/posts`
    });
  
    return response;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export const getBlogId = async (id) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseURL}/posts/${id}`
    });
  
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
  }
}

export const createBlog = async (data) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseURL}/posts`,
      data
    });
  
    return response;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export const updateBlog = async (id, data) => {
  try {
    const response = await axios({
      method: "PUT",
      url: `${baseURL}/posts/${id}`,
      data
    });
  
    return response;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
  }
}

export const deleteBlog = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `${baseURL}/posts/${id}`
    });
  
    return response;

}