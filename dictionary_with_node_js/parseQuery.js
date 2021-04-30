module.exports= function(query){
    const parsedQuery={};
    const pairs=query.split('&');
    for (let pair of pairs){
        const [key,value]=pair.split('=')
        parsedQuery[key]=value.replace("+"," ");
    }
    return parsedQuery;
}