





export const getProfile = () => {
    // Simulate an API call to get user profile
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data:{ name: "John Doe", email: "john.doe@example.com" },
                // data:null,
                status: 200,
                statusText: "OK"
            }); 

            }, 1000);

    });
}