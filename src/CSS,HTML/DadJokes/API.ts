import axios from "axios";



// export const dadJoke = async () => {
//     const config = {
//         headers: {
//           Accept: 'application/json',
//         },
//       }
//     const response = await fetch("https://icanhazdadjoke.com", config);
//     const user = await response.json();
//     return user;
//   };

// export default dadJoke;

// Axios to fetch dad jokes
const dadJoke = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: 'application/json',
        },
    });
    return response.data;
}

export default dadJoke;