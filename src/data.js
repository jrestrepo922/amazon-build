class product {
    constructor(id, title, image, price, rating, description ){
        this.id = id; 
        this.title = title; 
        this.image = image; 
        this.price = price; 
        this.rating = rating; 
        this.description = description; 
    }

}


 export default function productMaker(){
     
    const product1 = new product(
        0,
        "Long-Distance Real Estate Investing",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/Long-DistanceRealEstateInvesting_cover_1.jpg?v=1617234040", 
        "14.99",
        5,
        "In this book, real estate investor and police officer David Greene shows you exactly how he's built a multi-million dollar portfolio through buying, managing, and flipping out-of-state properties, often without ever even seeing the properties in person."
    ); 

    const product2 = new product(
        1,
        "Set for life",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/FINALSetForLife-PaperbackFRONTONLY.jpg?v=1617234058", 
        "10.99",
        4.5,
        "Learn to build a stable financial foundation that will carry you through times of economic uncertainty. Fans of Rich Dad, Poor Dad and Total Money Makeover will love the actionable advice in this personal finance bestseller!"
    ); 

    const product3 = new product(
        2,
        "Short-Term Rental, Long-Term Wealth",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/9781947200449_FChigh_x483@2x.jpg?v=1626389136", 
        "12.99",
        5,
        "From analyzing potential properties to effectively managing your listings, this book is your one-stop resource for making a profit with short-term rentals!"
    ); 

    const product4 = new product(
        3,
        "The Multifamily Millionaire, Volume I",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/Vol1_MultifamilyMillionaire_4e_1.jpg?v=1617234073", 
        "26.99",
        4,
        "Multifamily real estate investing can turn anyone into a multimillionaire—but only if you buy the right deals, achieve the right cash flow, and run your business the right way!  "
    ); 

    const product5 = new product(
        4,
        "Investing in Real Estate with No (and Low) Money Down",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/9781947200975_FChigh.jpg?v=1617234041", 
        "10.99",
        5,
        "Is your lack of cash holding you back from your real estate dreams? Discover the creative real estate financing techniques that savvy investors are using to do more deals, more often."
    ); 

    const product6 = new product(
        5,
        "The Book on Estimating Rehab Costs",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/9781947200128_FChigh.jpg?v=1617234058", 
        "14.99",
        4.5,
        "How much does it really cost to flip a house? In this new second edition, get all the updated costs, upgrade details, and associated values when it comes to estimating your next renovation!"
    ); 

    const product7 = new product(
        6,
        "The Book on Flipping Houses",
        "https://cdn.shopify.com/s/files/1/0260/1192/6624/products/9781947200104_FChigh.jpg?v=1617234058", 
        "12.99",
        5,
        "Entirely revised and updated with more than 120,000 copies sold! Learn how to find a great investment property, fix it up, and walk away with a profit."
    ); 



    
    
    const data = [product1, product2, product3, product4, product5, product6, product7]
    return data; 
}