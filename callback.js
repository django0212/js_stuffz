console.clear()
// only change code below this line

const posts = [
	{ title: 'Post 1', body: 'Body of Post 1' },
	{ title: 'Post 2', body: 'Body of Post 2' },
	{ title: 'Post 3', body: 'Body of Post 3' }
];

function getPost() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<p>${post.title}</p>
						<li>${post.body}</li>`;
		});
		document.body.innerHTML = output;
	}, 200)
}

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 1500);
}

getPost();

createPost({title: 'LOL', body: 'ROFL'}, getPost)
