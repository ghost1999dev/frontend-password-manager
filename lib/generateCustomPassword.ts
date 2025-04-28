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
    const specialCharset = "!@#$%^&*()_+[]{}|;:',.<>?/`~-=\\\"";
    let charset =""
    if(mayus)charset +=numbersCharset
    if(minus) charset += minusCharacters
    if(numbers)charset += numbersCharset
    if(specialCharacters) charset += specialCharset

    let password = ""

}