document.getElementById('user-form').addEventListener('submit', async(e)=>{
    e.preventDefault(); // 기본적인 서브밋 기능 삭제

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const married = document.getElementById('married').checked;

    const info = document.getElementById('info');
    axios.post('/users/save',
        {username, age, married}
    )
    .then( (result)=>{
        info.textContent = result.data;
        location.href="/";
    })
    .catch( (err)=>{
        info.textContent = err.data;
    })
    
})