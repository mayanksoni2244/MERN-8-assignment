async function get() {
    const input = document.getElementById("username").value;
  
    if (input === "") {
      alert("Please enter a username");
    }
  
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      
      if (!response.ok) {
        throw new Error("Username not found");
      }
  
      const data = await response.json();
      console.log(data);
      document.querySelector('.card img').src=data.avatar_url;
      document.querySelector('#name').textContent=data.name
      document.querySelector('#bio').textContent=data.bio
      document.querySelector('#location').textContent=`Location :  ${data.location}`
      document.querySelector('#follower').textContent=`Follower : ${data.followers}`
      document.querySelector('#following').textContent=`Following : ${data.following}`
      document.querySelector('#repos').textContent=`Repos : ${data.public_repos}`
      document.querySelector('#company').textContent=`company : ${data.company}`
  

    } catch (err) {
      console.log(err);
    }
}