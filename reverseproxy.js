/**
 * This is to bypass browser CORS 
 * to read images remotely
 */

module.exports = function(req, resp){
  
  const {body={}, param={}, query={}} = req;
  console.log("Request:",param, body, query);
  
  fetch(body.url || query.url)
  .then((res)=>{
    resp.header("Content-Type", "image/svg+xml");
    res.body.pipe(resp);
  })
  .catch((e)=> resp.end(e))
};