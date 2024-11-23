const output = document.getElementById("output");


document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**



    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let params = new URLSearchParams( {name, age} );
    let resp = await fetch("https://www.mywebsite.com/search?" + params.toString());
    let data = await resp.json();
    let format = JSON.stringify(data, null, 2);
    output.textContent = format;
    // TODO
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let ops = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({q:name, page:age}),
    };
    let response = await fetch("https://echo.zuplo.io/api", options);

    let whatever = await response.json();

    let format = JSON.stringify(whatever, null, 2);
    output.textContent = format;

    // TODO
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let ops = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: new URLSearchParams({name, age}),
    };
    let response = await fetch("https://echo.zuplo.io/api", options);

    let whatever = await response.json();
    let format = JSON.stringify(whatever, null, 2);
    output.textContent = format;



    // TODO
});
