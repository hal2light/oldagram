const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postSections = document.getElementById("post-sections")

for(let i=0;i<posts.length;i++){
    let post = posts[i]
    postSections.innerHTML += 
    `
    <section class="post">
        <div class="post-user padding">
            <img class="post-user-image" src=${post.avatar} alt="profile picture of vangogh">
            <div class="post-user-info">
                <p class="post-user-name bold">${post.name}</p>
                <p class="post-user-location small-text">${post.location}</p>
            </div>
        </div>
        <img class="post-image" src=${post.post} alt="picture of vangogh">
        <div class="post-interactions padding">
            <img src="images/icon-heart.png" alt="heart icon">
            <img src="images/icon-comment.png" alt="comment icon">
            <img src="images/icon-dm.png" alt="dm icon">
        </div>
        <div class="padding">
            <p class="like bold">${post.likes} likes</p>
            <p class="comment"><span class="bold">${post.username}</span> ${post.comment} lol</p>
        </div>
    </section>
    `
}