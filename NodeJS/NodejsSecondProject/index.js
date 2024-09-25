const posts = [
    {
        name: "Blog1"
    },
    {
        name: "Blog2"
    },
    {
        name: "Blog3"
    }
]

const listPosts = () => {
    posts.map((post) => {
        console.log(post.name);
    }

    )
}
console.log("Eski Liste");
listPosts();

const addPosts = (newPost) => {
    const promise1= new Promise((resolve,reject) =>
    {
        posts.push(newPost);
        resolve(posts);
    });
    return promise1;
};

async function showPosts() {
    try
    {
        await addPosts({name:"Blog4"});
        listPosts();
    }
    catch
    {
        console.log("Error");
    }
}
console.log("Yeni liste")
 showPosts();
