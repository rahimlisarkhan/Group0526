import instanceAxios from "../helper/instance";




export const getBlogs = async () => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "/posts"
    });
  
    return response;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export const getBlogId = async (id) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: `/posts/${id}`
    });
  
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
  }
}

export const createBlog = async (data) => {
  try {
    const response = await instanceAxios({
      method: "POST",
      url: "/posts",
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
    const response = await instanceAxios({
      method: "PUT",
      url: `/posts/${id}`,
      data
    });
  
    return response;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
  }
}

export const deleteBlog = async (id) => {
    const response = await instanceAxios({
      method: "DELETE",
      url: `/posts/${id}`
    });
  
    return response;

}