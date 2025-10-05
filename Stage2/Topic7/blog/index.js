

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

const blogModal = new bootstrap.Modal('#blogModal', {
  keyboard: false
})

const submitBtn = document.getElementById("add-post-btn");
const saveBtn = document.getElementById("saveBtn");





async function renderPosts(){
    const posts = await getPosts();

    const postsContainer = document.getElementById("posts-container");


    postsContainer.innerHTML = posts.reverse().map(post => `
         <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            <button class="btn btn-danger"  onclick="choosePost(${post.id},'remove')">Delete Post</button>
            <button class="btn btn-success" onclick="choosePost(${post.id},'edit')">Edit Post</button>
         </div>
        `).join("");

    console.log(posts);
    
}


renderPosts();



async function choosePost(id,method){
    console.log(id,method);


    if(method == "remove"){
       await rmvPostById(id);
       await renderPosts();
    }else if (method == "edit"){

        const blogData = await getPostById(id)
        // console.log("blogData",blogData);
        
        // blogTitle.innerHTML  = blogData.title
        // blogBody.innerHTML  = blogData.body

        blogModal.show()
        
        setTimeout(()=>{
            // Remove the '#' from getElementById - it expects just the ID name
            const blogTitle = document.getElementById("post-title-upt")
            const blogBody = document.getElementById("post-body-upt")
            const commentList = document.getElementById("commentList")
            
            // Now populate the fields with the blog data
            if (blogTitle && blogBody && commentList) {
                blogTitle.value = blogData.title;
                blogBody.value = blogData.body;
                // blogTitle["data-post-id"] = blogData.id; // Store post ID in a data attribute
                localStorage.setItem("postId", blogData.id); // Store post ID in localStorage

                // Render comments
                if(blogData.comments && blogData.comments.length > 0){
                    commentList.innerHTML = blogData.comments.map(comment => `
                        <div class="p-3 mb-2 bg-light text-dark">
                            ${comment.body}
                        </div>
                    `).join("");
                } else {
                    commentList.innerHTML = "<p>No comments available.</p>";
                }
            } 

        },500)

    }

}




//EVENT LISTENERS
saveBtn.addEventListener("click", async () => {
    const blogTitle = document.getElementById("post-title-upt")
    const blogBody = document.getElementById("post-body-upt")

    const id = localStorage.getItem("postId");

    console.log("id",id);


    const updatedPost = {
        title: blogTitle.value,
        body: blogBody.value,
    };


    console.log("updatedPost",updatedPost);
    

    await updatePostById(id, updatedPost);
    await renderPosts();

    blogTitle.value = "";
    blogBody.value = "";

    blogModal.hide();
  
});

submitBtn.addEventListener("click", async () => {
    const titleInput = document.getElementById("post-title");
    const bodyInput = document.getElementById("post-body");

    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        // img_url:"",
        // age:""
    };

    await addNewPost(newPost);
    await renderPosts();

    titleInput.value = "";
    bodyInput.value = "";
});