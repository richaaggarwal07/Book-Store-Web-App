const queries = require('../queries');
const pool = require('../db');

  const createWishlist = (req,res)=>{
    // console.log("here in controller..")
    const{author,bookId,characters,coverImg,description,genres,isbn,language,pages,price,publishDate,rating,series,title}=req.body;
    // console.log(req.body);
     pool.query(queries.createWishlistQuery,[author,bookId,characters,coverImg,description,genres,isbn,language,pages,price,publishDate,rating,series,title],(error,results)=>{
         if(error) throw error;
 
     })
     res.status(200).send("wishlist created")
 };

 const wishlistgetController=(req,res)=>
 {
    pool.query(queries.getWishlist,(error,results)=>{
        if(error) throw error;
        // console.log(results)
        res.status(200).json(results.rows)
       })

       res.status(204);
 }

 const removewishlist = (req,res)=>{
  console.log('id',req.params.bookid)
  const bookid= req.params.bookid;
    pool.query(queries.removewishlist,[bookid],(error,results)=>{
     if(error) throw error;
     res.status(200).send("Wishlist deleted")
   
    })
 }

 module.exports ={ createWishlist,wishlistgetController,removewishlist};