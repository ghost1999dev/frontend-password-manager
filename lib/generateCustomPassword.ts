import { match } from "node:assert"


export const generateCustomPassword =(
    lenght:number,
    mayus:boolean,
    minus:boolean,
    numbers:boolean,
    specialCharacters:boolean
)=>{
    const mayusCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const minusCharacters= "abcdefghijklmnopqrstuvwxyz"
    const numbersCharset= "0123456789"
    const specialCharset = "!@#$%^&*()_+[]{}|;:',.<>?/`~-=\\\""
    let charset =""
    if(mayus)charset +=mayusCharacters
    if(minus) charset += minusCharacters
    if(numbers)charset += numbersCharset
    if(specialCharacters) charset += specialCharset

    let password = ""
    if (mayus) 
        password += mayusCharacters.charAt(
            Math.floor(Math.random() * mayusCharacters.length)
        )
    if (minus)
        password += minusCharacters.charAt(
            Math.floor(Math.random() * minusCharacters.length)
        )
    if (numbers)
        password += numbersCharset.charAt(
            Math.floor(Math.random() * numbersCharset.length)
        )
    if(specialCharacters)
        password += specialCharset.charAt(
            Math.floor(Math.random() * specialCharset.length)
        )
    
    for (let i = password.length; i < lenght; i++) {
        password += charset.charAt(Math.floor(Math.random()*charset.length))
    }

    password = password.split("").sort(()=> Math.random()-0.5).join("")

    return password
    
    

}