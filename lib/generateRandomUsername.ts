
export const generateRandomUsername =(length = 8)=>{
    const adjectives =[
        "Quick",
        "Happy",
        "Clever",
        "Brave",
        "Calm",
        "Eager",
        "Fancy",
        "Gentle",
        "Jolly",
        "Kind"
    ]
    const nouns =[
        "Tiger",
        "Lion",
        "Panda",
        "Eagle",
        "Shark",
        "Wolf",
        "Bear",
        "Fox",
        "Owl",
        "Falcon"
    ]
    const randomItem = (array:any)=> array[Math.floor(Math.random()* array.length)]
    let username = ""
    username += randomItem(adjectives)
  
    username += randomItem(nouns)
    username += Math.floor(Math.random() * 1000)
    if (username.length > length) {
        username = username.substring(0,length) 
    }
   
    
    return username

}