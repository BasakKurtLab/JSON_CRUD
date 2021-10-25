
const app = new Vue({
    el: "#app",
    data: {
        users:[]
        
    },
    methods: {
        getUserList() {
            fetch("https://reqres.in/api/users")
                .then(response => response.json())
                .then(data => {
                    for (user of data.data)
                    {
                       this.users.push(user);
                    }
                    
                    console.log(this.users);
            })
        }
        
    },


})
app.getUserList();