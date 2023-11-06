async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });

    if(!res.ok){
        throw new Error(`Could not fetch ${url},status: ${res.status}`)
    }

    return await res.json();
}

export { postData };

///////sider cgatgpt yozib bergani pastda////
// async function postData(url, data) {
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error(
//                 `Could not fetch ${url}, status: ${response.status}`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         // console.error(error);
//     }
// }

// export { postData };
