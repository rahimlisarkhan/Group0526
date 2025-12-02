import instanceAxios from "../helper/instance";




export const getTodos = async () => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "/todos"
    });
  
    return response;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export const getTodoById = async (id) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: `/todos/${id}`
    });
  
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
  }
}

export const createTodo = async (todoData) => {
  try {
    const response = await instanceAxios({
      method: "POST",
      url: "/todos",
      data: todoData
    });
  
    return response;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export const updateTodo = async (id, updatedData) => {
  try {
    const response = await instanceAxios({
      method: "PUT",
      url: `/todos/${id}`,
      data: updatedData
    });
  
    return response;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
  }
}

export const deleteTodo = async (id) => {
  try {
    const response = await instanceAxios({
      method: "DELETE",
      url: `/todos/${id}`
    });
  
    return response;
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
  }
}