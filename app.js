const xhr = new easyHTTP;

// Get Posts
// xhr.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Get Single Posts
// xhr.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'A Post'
}

// Create Post
// xhr.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// Update Post
// xhr.put("https://jsonplaceholder.typicode.com/posts/12", data, function (err, post) {
//     if (err) {
//         console.log(err);   
//     } else {
//         console.log(post);
//     }
// })

// Delete Posts
xhr.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});





// const http = new EasyHTTP;

// Get Users
// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const data = {
//     name: 'john doe',
//     username: 'johndoe',
//     email: 'johndoe@mail.com'
// }

// Create Users
// http.post("https://jsonplaceholder.typicode.com/users", data)
//     .then(dara => console.log(data))
//     .catch(err => console.log(err));

// Update Users
// http.put("https://jsonplaceholder.typicode.com/users/5", data)
//     .then(dara => console.log(data))
//     .catch(err => console.log(err));

// Delete Users
// http.delete("https://jsonplaceholder.typicode.com/users/3")
//     .then(() => console.log('Resource Deleted...'))
//     .catch(err => console.log(err));