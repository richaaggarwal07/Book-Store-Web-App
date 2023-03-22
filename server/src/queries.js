
const createWishlistQuery="insert into wishlist_data(author,bookId,characters,coverImg,description,genres,isbn,language,pages,price,publishDate,rating,series,title) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)"
const getWishlist="Select * from wishlist_data"
const removewishlist="delete from wishlist_data where bookid=$1"

module.exports={createWishlistQuery,getWishlist,removewishlist};
