interface Posts{
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

async function fetchData(url : string) : Promise<Posts[]>{
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("something went wrong");
    }
    const data: Posts[]= await res.json();
    return data;
}

const returnedData = fetchData("https://jsonplaceholder.typicode.com/posts");
returnedData.then(data => {
    const titles = data.map(posts => posts.title)
    console.log(titles);
})