
const fetchPosts = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
    return 'fetching heavy posts'
  
}

const HeavyPost = async() => {
  const posts = await fetchPosts();
  return (
    <div>
      <p>
        {posts}
      </p>
    </div>
  );
};

export default HeavyPost;