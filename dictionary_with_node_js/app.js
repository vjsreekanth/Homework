const queryParser = require('./parseQuery');
const http = require('http');
const fs = require('fs');
const filepath = "./dictionary.txt"


const server=http.createServer((req,res)=>{ // http.createServer is used to create a  server. It takes to arguments: 
    // url=req.url;
    const [url,query]=req.url.split('?')
    // console.log(url);
    if (query){
        req.query=queryParser(query);
    }
   
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`
            <main>
            <h1>Welcome to Dictionary</h1>
                <form action='word' >
                    Word:
                    <input type='text' name='word'/>
                    <input type='submit' value='submit'/>
                </form>
            </main>
            `)
        return res.end(); 
    }

    // after receiving word from user
    if (url === '/word'){
        
            res.writeHead(200,{'content-type':'text/html'});
            let word = req.query.word;
            let searchWord = word.toLowerCase() || "#";
            console.log(searchWord)
            let definition = "Sorry your word was not found";

            fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
            console.log("There was an error reading the Dictionary:", err)
            } 
            else {
                const fileLines = data.split("\n");

              fileLines.forEach((line, index) => {
                let searchLine = line.toLowerCase()
    
                if(searchLine.startsWith(searchWord) && searchLine.slice(searchWord.length, (searchWord.length + 1) ) === " "){
                    definition= searchLine.slice(searchWord.length)
                    return definition;
                }
              })
              
                res.write(`
                <main>
                <h1>${definition}</h1>
                            
                </main> 
                `)
                return res.end();
            }
           
        })
    }
})
          
const PORT=3000;
const DOMAIN='localhost'

server.listen(PORT,DOMAIN,()=>{
    console.log('server listening')
}) 
    
    













