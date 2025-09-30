

// ===== API Requests with Fetch =====
// Fetching posts from a blog API
async function getPosts(){
    try{
        const url = `https://blog-api-t6u0.onrender.com/posts`

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(url, options);

        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error fetching posts:", error);
        
    }
}

// Fetching a specific post by ID from the blog API
async function getPostById(id){
    try{
        const url = `https://blog-api-t6u0.onrender.com/posts/${id}?_embed=comments`

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(url, options);

        const data = await response.json();

        console.log("Fetched posts:", data);

        return data
    }catch(error){
        console.error("Error fetching posts:", error);
    }
}


async function rmvPostById(id){
    try{
        const url = `https://blog-api-t6u0.onrender.com/posts/${id}`

        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Deleted post:", data); 
        return data

    }catch(error){
        console.error("Error deleting post:", error);
    }
}


async function addNewPost(newPost){
    try{
        const url = `https://blog-api-t6u0.onrender.com/posts`

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),// JS obyekti - JSON string
        }

        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Added new post:", data);
        return data

    }catch(error){
        console.error("Error adding new post:", error);
    }
}


async function updatePostById(id, updatedPost){
    try{
        const url = `https://blog-api-t6u0.onrender.com/posts/${id}`

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),// JS obyekti - JSON string
        }

        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Updated post:", data);

        return data

    }catch(error){
        console.error("Error updating post:", error);
    }
}


// ==== RENDER UI ====

const submitBtn = document.getElementById("add-post-btn");

submitBtn.addEventListener("click", async () => {
    const titleInput = document.getElementById("post-title");
    const bodyInput = document.getElementById("post-body");

    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
    };

    await addNewPost(newPost);
    await renderPosts();

    titleInput.value = "";
    bodyInput.value = "";
});



async function renderPosts(){
    const posts = await getPosts();

    const postsContainer = document.getElementById("posts-container");


    postsContainer.innerHTML = posts.reverse().map(post => `
         <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            <button class="delete-post-btn" onclick="choosePost(${post.id})">Delete Post</button>
         </div>
        `).join("");

    console.log(posts);
    
}


renderPosts();



async function choosePost(id){
    console.log(id);
    await rmvPostById(id);
    await renderPosts();
}