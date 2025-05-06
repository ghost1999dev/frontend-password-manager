import { generateRandomUsername } from "./generateRandomUsername";

export const generatedCustomEmail =()=>{
    const domains = [
        "example.es",
        "test.com",
        "sample.com",
        "demo.com"
    ]
    const domain = domains[Math.floor(Math.random() * domains.length)]
    const username = generateRandomUsername(8)
    
    return `${username}@${domain}`
}