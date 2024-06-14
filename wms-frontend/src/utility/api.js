import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:5172/api", 
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
    }
})
    
