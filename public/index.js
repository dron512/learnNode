document.getElementById('user-form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    alert('출력');

    // axios.post('/users/save',{data:"qwerqwerqwer"})
    // .then(result =>{console.log(result)});

    const result = await axios.post('/users/save',{data:"qwerqwerqwer"})
    console.log(result)
})