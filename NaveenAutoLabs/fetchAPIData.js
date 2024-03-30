//JavaScript program to hit an endpoint with Get request and get the response using Async-await concepts

const fetchUserInfo = async () => {
    try {
    let response = await fetch('https://reqres.in/api/users?page=2')

    if(!response.ok) {
        throw new Error("User is not available")
    }

    //Parse Json response:
    const userData = await response.json()

    console.log(userData)
    }

    catch(error) {
        console.log("Error: ", error)
    }
}

fetchUserInfo()