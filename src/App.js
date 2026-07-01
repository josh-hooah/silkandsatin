import "./App.css";
import ceow from './s&s.jpg'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {

FaWhatsapp,

FaInstagram,

FaShoppingBag,

FaBars,

FaTimes,

FaArrowRight,

FaStar,

FaPalette,

FaHeart,

FaGem

} from "react-icons/fa";

/* ===========================================
   WHATSAPP
=========================================== */

const WHATSAPP_NUMBER = "2348119315176";

/* ===========================================
   PRODUCTS
=========================================== */

// navlinks1
const navLinks = [

    {
        name: "Home",
        link: "#home"
    },

    {
        name: "Collection",
        link: "#collection"
    },

    {
        name: "Custom Order",
        link: "#custom"
    },

    {
        name: "Gallery",
        link: "#gallery"
    },

    {
        name: "Reviews",
        link: "#reviews"
    },

    {
        name: "Contact",
        link: "#contact"
    }

];
const stats = [

    {
        number: "500+",
        label: "Happy Customers"
    },

    {
        number: "1000+",
        label: "Luxury Pieces"
    },

    {
        number: "5★",
        label: "Average Rating"
    },

    {
        number: "24/7",
        label: "Support"
    }

];
const categories = [

    "All",

    "Bonnet",

    "Scrunchie",

    "Sash",

    "Gift Box"

];
const products = [

{

id:1,

name:"Luxury Double Layer Bonnet",

category:"Bonnet",

price:8500,

rating:5,

image:"https://toallmyblackgirls.com/cdn/shop/products/G81A2745.jpg?v=1610209756&width=1100",

description:

"Premium double-layer satin bonnet handcrafted for healthy hair."

},

{

id:2,

name:"Royal Silk Bonnet",

category:"Bonnet",

price:5000,

rating:4,

image:"https://jadubeauty.com/cdn/shop/files/Mulberry-silk-bonnet_960x.jpg?v=1771625922",

description:

"Luxury silk bonnet with extra comfort for day and night."

},

{

id:3,

name:"Silk Scrunchie Set",

category:"Scrunchie",

price:3500,

rating:5,

image:"https://www.tberry.in/cdn/shop/files/image_56eec154-eb5c-41ba-a9d1-ee3fa8e99ae3_1284x.jpg?v=1716915167",

description:

"Handmade satin scrunchies available in multiple colours."

},

{

id:4,

name:"Premium Bridal Sash",

category:"Sash",

price:2000,

rating:5,

image:"https://i5.walmartimages.com/seo/Bride-to-be-sash-Bridal-Shower-party-favor-Bachelorette-Party-Sash-Bride-ribbon-BLACK-with-GOLD-PRINT_118aa27b-5a27-443a-81cd-27faf917257f.505191998d9efc109b2d6ed3c56b98ee.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",

description:

"Elegant customized bridal sash with premium finishing."

},

{

id:5,

name:"Birthday Celebration Sash",

category:"Sash",

price:8000,

rating:5,

image:"https://chukify.com/wp-content/uploads/2024/08/Birthday-Sashes.jpeg",

description:

"Customized birthday sash made with luxury satin."

},

{

id:6,

name:"Luxury Gift Package",

category:"Gift Box",

price:18000,

rating:5,

image:"https://eloquentgift.com/wp-content/uploads/2025/01/val-day-gifts-hamper-packages-nigeria.jpg",

description:

"Luxury bonnet, scrunchie and sash beautifully packaged."

}

];

/* ===========================================
   FABRIC COLORS
=========================================== */

const fabricColors=[

"Black",

"Wine",

"Purple",

"Pink",

"White",

"Gold",

"Navy",

"Emerald",

"Champagne",

"Silver"

];/* ===========================================
   APP
=========================================== */

function App() {

const [loading,setLoading]=useState(true);

const [mobileMenu,setMobileMenu]=useState(false);

const [cartOpen,setCartOpen]=useState(false);

const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const [cart,setCart]=useState([]);

const [scrollWidth,setScrollWidth]=useState(0);


/* ===========================================
   CUSTOM ORDER FORM
=========================================== */

const [customOrder,setCustomOrder]=useState({

name:"",

phone:"",

product:"",

color:"",

quantity:1,

date:"",

note:""

});

/* ===========================================
   CONTACT FORM
=========================================== */

const [contactForm,setContactForm]=useState({

name:"",

phone:"",

email:"",

message:""

});

/* ===========================================
   LOADER
=========================================== */

useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},3500);

return()=>clearTimeout(timer);

},[]);

/* ===========================================
   SCROLL BAR
=========================================== */

useEffect(()=>{

const handleScroll=()=>{

const scrollTop=window.scrollY;

const docHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=

(scrollTop/docHeight)*100;

setScrollWidth(percent);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener(

"scroll",

handleScroll

);

},[]);

/* ===========================================
   FORM HANDLERS
=========================================== */

const handleCustomChange=(e)=>{

const {name,value}=e.target;

setCustomOrder(prev=>({

...prev,

[name]:value

}));

};

const handleContactChange=(e)=>{

const {name,value}=e.target;

setContactForm(prev=>({

...prev,

[name]:value

}));

};/* ===========================================
   CART FUNCTIONS
=========================================== */

const addToCart=(product)=>{

const existing=cart.find(

item=>item.id===product.id

);

if(existing){

setCart(

cart.map(item=>

item.id===product.id

?{

...item,

quantity:item.quantity+1

}

:item

)

);

}else{

setCart([

...cart,

{

...product,

quantity:1

}

]);

}

};

const increaseQty=(id)=>{

setCart(

cart.map(item=>

item.id===id

?{

...item,

quantity:item.quantity+1

}

:item

)

);

};

const decreaseQty=(id)=>{

setCart(

cart.map(item=>

item.id===id

?{

...item,

quantity:item.quantity-1

}

:item

).filter(item=>item.quantity>0)

);

};

const removeItem=(id)=>{

setCart(

cart.filter(item=>

item.id!==id)

);

};

/* ===========================================
   TOTAL PRICE
=========================================== */

const totalPrice=

cart.reduce(

(total,item)=>

total+(item.price*item.quantity),

0

);

/* ===========================================
   FILTER PRODUCTS
=========================================== */

const filteredProducts= products.filter(product=>{

const matchCategory=category==="All" || product.category===category;

const matchSearch=product.name.toLowerCase().includes(search.toLowerCase());

return(
matchCategory && matchSearch

);

});

/* ===========================================
   WHATSAPP CHECKOUT
=========================================== */

const checkoutOrder=()=>{

if(cart.length===0){

alert("Your cart is empty.");

return;

}

let message=

`Hello Silk & Satin,

I would like to order the following items:

`;

cart.forEach(item=>{

message+=

`• ${item.name}

Quantity: ${item.quantity}

Price: ₦${item.price.toLocaleString()}

`;

});

message+=

`

Total Amount:

₦${totalPrice.toLocaleString()}

Thank you.

`;

window.open(

`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

"_blank"

);

};
/* ===========================================
   CUSTOM ORDER (WHATSAPP)
=========================================== */

const submitCustomOrder=(e)=>{

e.preventDefault();

const message=

`Hello Silk & Satin,

My name is ${customOrder.name}.

I would love to place a custom order.

Product:
${customOrder.product}

Preferred Colour:
${customOrder.color}

Quantity:
${customOrder.quantity}

Preferred Delivery Date:
${customOrder.date}

Additional Instructions:
${customOrder.note}

Phone Number:
${customOrder.phone}

Thank you.
`;

window.open(

`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

"_blank"

);

setCustomOrder({

name:"",

phone:"",

product:"",

color:"",

quantity:1,

date:"",

note:""

});

};

/* ===========================================
   CONTACT (WHATSAPP)
=========================================== */

const submitContact=(e)=>{

e.preventDefault();

const message=

`Hello Silk & Satin,

My name is ${contactForm.name}.

Phone:
${contactForm.phone}

Email:
${contactForm.email}

Message:

${contactForm.message}

Thank you.
`;

window.open(

`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

"_blank"

);

setContactForm({

name:"",

phone:"",

email:"",

message:""

});

};

/* ===========================================
   TESTIMONIALS
=========================================== */

const testimonials=[

{

name:"Amara",

title:"Bride",

review:

"My bridal sash exceeded my expectations. The finishing was beautiful and delivery was right on time.",

// image:

// "https://images.unsplash.com/photo-1494790108377-be9c29b29330"

},

{

name:"Jessica",

title:"Customer",

review:

"The satin bonnet feels incredibly soft. My hair stays neat every morning.",

// image:

// "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"

},

{

name:"Faith",

title:"Returning Customer",

review:

"I've ordered scrunchies three times already. The quality has always been excellent.",

// image:

// "https://images.unsplash.com/photo-1544005313-94ddf0286df2"

}

];

/* ===========================================
   GALLERY
=========================================== */

const gallery=[

"https://toallmyblackgirls.com/cdn/shop/products/G81A2745.jpg?v=1610209756&width=1100",
"https://jadubeauty.com/cdn/shop/files/Mulberry-silk-bonnet_960x.jpg?v=1771625922",
"https://www.tberry.in/cdn/shop/files/image_56eec154-eb5c-41ba-a9d1-ee3fa8e99ae3_1284x.jpg?v=1716915167",
"https://i5.walmartimages.com/seo/Bride-to-be-sash-Bridal-Shower-party-favor-Bachelorette-Party-Sash-Bride-ribbon-BLACK-with-GOLD-PRINT_118aa27b-5a27-443a-81cd-27faf917257f.505191998d9efc109b2d6ed3c56b98ee.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF",
"https://chukify.com/wp-content/uploads/2024/08/Birthday-Sashes.jpeg",
"https://eloquentgift.com/wp-content/uploads/2025/01/val-day-gifts-hamper-packages-nigeria.jpg",

];

return (

<>

{/*======================================
SCROLL PROGRESS BAR
=======================================*/}

<div
className="scroll-progress"
style={{
width:`${scrollWidth}%`
}}
></div>

{/*======================================
LOADER
=======================================*/}

<AnimatePresence>

{loading && (

<motion.div

className="loader"

initial={{opacity:1}}

exit={{

opacity:0,

transition:{

duration:1

}

}}

>

<div className="loader-background">

<div className="silk-wave silk-one"></div>

<div className="silk-wave silk-two"></div>

<div className="silk-wave silk-three"></div>

</div>

<motion.div

className="loader-content"

initial={{opacity:0,y:40}}

animate={{

opacity:1,

y:0

}}

transition={{

delay:.5,

duration:1

}}

>

<motion.h1

initial={{letterSpacing:"40px"}}

animate={{

letterSpacing:"8px"

}}

transition={{

duration:2

}}

>

Silk & Satin

</motion.h1>

<motion.p

initial={{opacity:0}}

animate={{

opacity:1

}}

transition={{

delay:1.8

}}

>

Handcrafted Elegance

</motion.p>

</motion.div>

</motion.div>

)}

</AnimatePresence>

{/*======================================
APP
=======================================*/}

<div className="app">

{/* <a

    href={`https://wa.me/${WHATSAPP_NUMBER}`}

    target="_blank"

    rel="noreferrer"

    className="floating-whatsapp"

>

    <FaWhatsapp />

</a> */}

{/*======================================
NAVBAR
=======================================*/}

<nav className="navbar">

<div className="logo">

Silk<span>&</span>Satin

</div>

<div className="nav-links">

</div>

<div className="nav-actions">

<button

className="cart-btn"

onClick={()=>setCartOpen(true)}

>

<FaShoppingBag/>

<span>

{cart.length}

</span>

</button>

<button

className="menu-btn"

onClick={()=>

setMobileMenu(!mobileMenu )
}>
{mobileMenu ?  <FaTimes/> : <FaBars/> }
</button>

</div>

</nav>
{/*======================================
MOBILE MENU
=======================================*/}

<AnimatePresence>

{
mobileMenu && (

<motion.div

className="mobile-menu"

initial={{

x:"100%"

}}

animate={{

x:0

}}

exit={{

x:"100%"

}}

transition={{

duration:.5

}}

>

<div className="mobile-links">

{

navLinks.map(link=>(

<a

key={link.name}

href={link.link}

onClick={()=>setMobileMenu(false)}

>

{link.name}

</a>

))

}

</div>

</motion.div>

)

}

</AnimatePresence>

{/*======================================
HERO
=======================================*/}

<section

id="home"

className="hero"

>

<div className="hero-overlay"></div>

<div className="hero-content">

<motion.div

className="hero-left"

initial={{

opacity:0,

x:-80

}}

animate={{

opacity:1,

x:0

}}

transition={{

duration:1

}}

>

<p className="hero-tag">

Luxury Handmade Collection

</p>

<h1>
Silk & Satin

</h1>

<p className="hero-text">

Discover handcrafted satin bonnets,

premium scrunchies and custom

celebration sashes designed with

luxury fabrics, careful finishing

and timeless elegance.

</p>

<div className="hero-buttons">

<a

href="#collection"

className="primary-btn"

>

Shop Collection

<FaArrowRight/>

</a>

<a

href="#custom"

className="secondary-btn"

>

Design Yours

</a>

</div>

<div className="hero-stats">

{

stats.map(item=>(

<div

key={item.label}

className="stat"

>

<h2>

{item.number}

</h2>

<p>

{item.label}

</p>

</div>

))

}

</div>

</motion.div>

<motion.div

className="hero-right"

initial={{

opacity:0,

scale:.85

}}

animate={{

opacity:1,

scale:1

}}

transition={{

duration:1.2

}}

>

<div className="image-card">

<img

src="https://blog.megannielsen.com/wp-content/uploads/2024/08/2024-08-24-Bonnet-blog-2.jpg"

alt="Luxury Satin"

/>

<div className="floating-card top">

<FaHeart/>

Handmade

</div>

<div className="floating-card middle">

<FaPalette/>

Premium Satin

</div>

<div className="floating-card bottom">

<FaGem/>

Luxury Finish

</div>

</div>

</motion.div>

</div>

</section>
{/*======================================
FEATURED COLLECTION
=======================================*/}

<section

id="collection"

className="collection"

>

<div className="section-header">

<p>

OUR COLLECTION

</p>

<h2>

Handcrafted Luxury

Made Just For You

</h2>

<span></span>

</div>

{/* Search */}

<div className="collection-controls">

<input

type="text"

placeholder="Search bonnets, scrunchies or sashes..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="search-box"

/>

</div>

{/* Categories */}

<div className="categories">

{

categories.map(item=>(

<button

key={item}

className={

category===item

?

"active"

:

""

}

onClick={()=>setCategory(item)}

>

{item}

</button>

))

}

</div>

{/* Products */}

<div className="product-grid">

{

filteredProducts.map(product=>(
<motion.div layout
whileHover={{
y:-12
}}

key={product.id}
className="product-card"
>

<div className="product-image">

<img
src={product.image}
alt={product.name}
/>

<div className="product-overlay">
<button
onClick={()=>addToCart(product)}>
Add to Bag

</button>

</div>

</div>

<div className="product-content">

<p className="category">

{product.category}

</p>

<h3>

{product.name}

</h3>

<p className="description">

{product.description}

</p>

<div className="rating">

{

[1,2,3,4,5].map(i=>

<FaStar

key={i}

/>

)

}

</div>

<div className="product-bottom">

<h2>

₦{product.price.toLocaleString()}

</h2>

<button

className="bag-btn"

onClick={()=>

addToCart(product)

}

>

<FaShoppingBag/>

</button>

</div>

</div>

</motion.div>

))

}

</div>

</section>
{/*======================================
CUSTOM ORDER
=======================================*/}

<section

id="custom"

className="custom-order"

>

<div className="section-header">

<p>

BESPOKE CREATIONS

</p>

<h2>

Design Your Own

Luxury Piece

</h2>

<span></span>

</div>

<div className="custom-wrapper">

<div className="custom-left">

<img

src="https://blog.megannielsen.com/wp-content/uploads/2024/08/2024-08-24-Bonnet-blog-2.jpg"

alt="Luxury Sewing"

/>

<div className="craft-card">

{/* <FaScissors/> */}

<div>

<h3>

Handcrafted

</h3>

<p>

Every order is made with attention to detail.

</p>

</div>

</div>

</div>

<form

className="custom-form"

onSubmit={submitCustomOrder}

>

<input

type="text"

name="name"

placeholder="Your Full Name"

value={customOrder.name}

onChange={handleCustomChange}

required

/>

<input

type="tel"

name="phone"

placeholder="Phone Number"

value={customOrder.phone}

onChange={handleCustomChange}

required

/>

<select

name="product"

value={customOrder.product}

onChange={handleCustomChange}

required

>

<option value="">

Select Product

</option>

<option>

Luxury Bonnet

</option>

<option>

Silk Scrunchie

</option>

<option>

Graduation Sash

</option>

<option>

Gift Box

</option>

</select>

<h4>

Choose Fabric Colour

</h4>

<div className="color-grid">

{

fabricColors.map(color=>(

<button

type="button"

key={color}

className={

customOrder.color===color

?

"color active"

:

"color"

}

onClick={()=>

setCustomOrder({

...customOrder,

color

})

}

>

{color}

</button>

))

}

</div>

<select

name="size"

value={customOrder.size}

onChange={handleCustomChange}

required

>

<option value="">

Select Size

</option>

<option>

Small

</option>

<option>

Medium

</option>

<option>

Large

</option>

<option>

Extra Large

</option>

</select>
<input

type="text"

name="personalization"

placeholder="Embroidery (Optional)"

value={customOrder.personalization}

onChange={handleCustomChange}

/>

<select

name="giftPackage"

value={customOrder.giftPackage}

onChange={handleCustomChange}

>

<option>

No

</option>

<option>

Yes

</option>

</select>

<select

name="deliveryMethod"

value={customOrder.deliveryMethod}

onChange={handleCustomChange}

>

<option>

Delivery

</option>

<option>

Pickup

</option>

</select>

<input

type="number"

name="quantity"

min="1"

value={customOrder.quantity}

onChange={handleCustomChange}

required

/>

<input

type="date"

name="date"

value={customOrder.date}

onChange={handleCustomChange}

required

/>

<textarea

rows="5"

name="note"

placeholder="Tell us anything special about your order..."

value={customOrder.note}

onChange={handleCustomChange}

/>

<button

className="primary-btn"

type="submit"

>

Send Custom Order

<FaWhatsapp/>

</button>

</form>

</div>

</section>
{/*======================================
OUR CRAFT
=======================================*/}

<section

className="craft"

>

<div className="section-header">

<p>

OUR PROCESS

</p>

<h2>

Every Stitch

Tells A Story

</h2>

<span></span>

</div>

<div className="craft-grid">

<motion.div

whileHover={{

y:-8

}}

className="craft-item"

>

<div className="craft-icon">

<FaPalette/>

</div>

<h3>

Premium Fabrics

</h3>

<p>

Every bonnet, sash and scrunchie is made
from carefully selected satin and silk
materials for comfort and durability.

</p>

</motion.div>

<motion.div

whileHover={{

y:-8

}}

className="craft-item"

>

<div className="craft-icon">

{/* <FaScissors/> */}

</div>

<h3>

Handcrafted

</h3>

<p>

Each order is individually cut,
stitched and finished with
careful attention to detail.

</p>

</motion.div>

<motion.div

whileHover={{

y:-8

}}

className="craft-item"

>

<div className="craft-icon">

<FaGem/>

</div>

<h3>

Luxury Finish

</h3>

<p>

Every product is inspected
before delivery to ensure
a premium finish.

</p>

</motion.div>

</div>

</section>

{/*======================================
GALLERY
=======================================*/}

<section

id="gallery"

className="gallery"

>

<div className="section-header">

<p>

OUR GALLERY

</p>

<h2>

Beautiful Pieces

Made With Love

</h2>

<span></span>

</div>

<div className="gallery-grid">

{

gallery.map((image,index)=>(

<motion.div

key={index}

layout

whileHover={{

scale:1.03

}}

className="gallery-item"

>

<img

src={image}

alt="Silk & Satin"

/>

</motion.div>

))

}

</div>

</section>
{/*======================================
TESTIMONIALS
=======================================*/}

<section

id="reviews"

className="reviews"

>

<div className="section-header">

<p>

CLIENT LOVE

</p>

<h2>

What Our

Customers Say

</h2>

<span></span>

</div>

<div className="testimonial-grid">

{

testimonials.map(item=>(

<motion.div

whileHover={{

y:-10

}}

key={item.name}

className="testimonial"

>

<img

src={item.image}

alt={item.name}

/>

<h3>

{item.name}

</h3>

<h5>

{item.title}

</h5>

<div className="stars">

{

[1,2,3,4,5].map(i=>

<FaStar key={i}/>

)

}

</div>

<p>

"{item.review}"

</p>

</motion.div>

))

}

</div>

</section>

{/*======================================
BEHIND THE BRAND
=======================================*/}

<section id="founder" className="founder">

    <div className="founder-image">

        <img
            src={ceow}
            alt="Founder of Silk & Satin"
        />

    </div>

    <div className="founder-content">

        <span className="founder-tag">

            BEHIND THE BRAND

        </span>

        <h2>

            Meet the Creative Mind
            Behind Silk & Satin

        </h2>

        <p>

            Hi, I'm <strong>CONSTANCE EBOIGBE</strong>, founder of
            Silk & Satin.

            What started as a passion for creating elegant satin
            accessories has grown into a brand trusted by women,
            graduates and families who appreciate quality
            craftsmanship.

        </p>

        <p>

            Every bonnet, scrunchie and sash is carefully designed
            with premium fabrics and attention to detail because
            luxury should be felt in every stitch.

        </p>

        <div className="founder-stats">

            <div>

                <h3>500+</h3>

                <p>Happy Clients</p>

            </div>

            <div>

                <h3>1000+</h3>

                <p>Luxury Pieces</p>

            </div>

            <div>

                <h3>5★</h3>

                <p>Customer Rating</p>

            </div>

        </div>

        <a

            href={`https://wa.me/${WHATSAPP_NUMBER}`}

            className="primary-btn"

            target="_blank"

            rel="noreferrer"

        >

            Chat With Me

            <FaWhatsapp/>

        </a>

    </div>

</section>
{/*======================================
SHOPPING BAG
=======================================*/}

<AnimatePresence>

{

cartOpen && (

<motion.div

className="cart-overlay"

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setCartOpen(false)}

>

<motion.div

className="cart"

initial={{x:"100%"}}

animate={{x:0}}

exit={{x:"100%"}}

transition={{duration:.45}}

onClick={(e)=>e.stopPropagation()}

>

<div className="cart-header">

<h2>

Your Collection

</h2>

<button

onClick={()=>setCartOpen(false)}

>

<FaTimes/>

</button>

</div>

{

cart.length===0

?

(

<div className="empty-cart">

<h3>

Your collection is empty.

</h3>

<p>

Explore our handcrafted products and add your favourites.

</p>

</div>

)

:

(

<>

<div className="cart-items">

{

cart.map(item=>(

<div

key={item.id}

className="cart-item"

>

<img

src={item.image}

alt={item.name}

/>

<div className="cart-details">

<h3>

{item.name}

</h3>

<p>

₦{item.price.toLocaleString()}

</p>

<div className="quantity">
  <button

onClick={()=>decreaseQty(item.id)}

>

-

</button>

<span>

{item.quantity}

</span>

<button

onClick={()=>increaseQty(item.id)}

>

+

</button>

</div>

<button

className="remove-btn"

onClick={()=>removeItem(item.id)}

>

Remove

</button>

</div>

</div>

))

}

</div>

<div className="cart-footer">

<div className="cart-total">

<h3>

Total

</h3>

<h2>

₦{totalPrice.toLocaleString()}

</h2>

</div>

<button

className="checkout-btn"

onClick={checkoutOrder}

>

<FaWhatsapp/>

Proceed to WhatsApp

</button>

</div>

</>

)

}

</motion.div>

</motion.div>

)

}

</AnimatePresence>
{/*======================================
FINAL CALL TO ACTION
=======================================*/}

<section className="final-cta">

    <motion.div

        initial={{opacity:0,y:60}}

        whileInView={{opacity:1,y:0}}

        viewport={{once:true}}

        transition={{duration:.8}}

        className="cta-box"

    >

        <p>READY TO OWN SOMETHING BEAUTIFUL?</p>

        <h2>

            Let us create something

            uniquely yours.

        </h2>

        <a

            href={`https://wa.me/${WHATSAPP_NUMBER}`}

            target="_blank"

            rel="noreferrer"

            className="primary-btn"

        >

            <FaWhatsapp/>

            Order on WhatsApp

        </a>

    </motion.div>

</section>

{/*======================================
CONTACT
=======================================*/}

<section

id="contact"

className="contact"

>

<div className="section-header">

<p>

GET IN TOUCH

</p>

<h2>

We'd Love

To Hear From You

</h2>

<span></span>

</div>

<div className="contact-wrapper">

<div className="contact-info">

<h3>

Silk & Satin

</h3>

<p>

Luxury handcrafted bonnets,

premium satin scrunchies,

beautiful celebration sashes

and bespoke creations made

especially for you.

</p>

<div className="contact-item">

<strong>Phone</strong>

<p>

+234 81 1931 5176

</p>

</div>

<div className="contact-item">

<strong>Email</strong>

<p>

constanceegboigbe@gmail.com

</p>

</div>

<div className="contact-item">

<strong>Location</strong>

<p>

Benin City, Edo State

</p>

</div>

<div className="contact-item">

<strong>Working Hours</strong>

<p>

Monday - Saturday

9:00AM - 6:00PM

</p>

</div>

</div>

<form

className="contact-form"

onSubmit={submitContact}

>

<input

type="text"

name="name"

placeholder="Full Name"

value={contactForm.name}

onChange={handleContactChange}

required

/>

<input

type="tel"

name="phone"

placeholder="Phone Number"

value={contactForm.phone}

onChange={handleContactChange}

required

/>

<input

type="email"

name="email"

placeholder="Email Address"

value={contactForm.email}

onChange={handleContactChange}

required

/>

<textarea

rows="6"

name="message"

placeholder="How can we help you?"

value={contactForm.message}

onChange={handleContactChange}

required

/>

<button

className="primary-btn"

type="submit"

>

Send via WhatsApp

</button>

</form>

</div>

</section>

{/*======================================
FOOTER
=======================================*/}

<footer>

<div className="footer-grid">

<div>

<h2>

Silk & Satin

</h2>

<p>

Luxury handmade satin products

crafted with elegance,

care and attention to detail.

Every stitch tells a story.

</p>

</div>

<div>

<h3>

Quick Links

</h3>

<a href="#home">Home</a>

<a href="#collection">Collection</a>

<a href="#custom">Custom Order</a>

<a href="#gallery">Gallery</a>

<a href="#reviews">Reviews</a>

<a href="#contact">Contact</a>

</div>

<div>

<h3>

Collections

</h3>

<p>Luxury Bonnets</p>

<p>Premium Scrunchies</p>

<p>Graduation Sashes</p>

<p>Gift Packages</p>

</div>

<div>

<h3>

Follow Us

</h3>

<a

href="https://instagram.com/silkandsatin"

target="_blank"

rel="noreferrer"

>

<FaInstagram/>

Instagram

</a>

<a

href={`https://wa.me/${WHATSAPP_NUMBER}`}

target="_blank"

rel="noreferrer"

>

<FaWhatsapp/>

WhatsApp

</a>

</div>

</div>

<div className="footer-bottom">

<p>

© {new Date().getFullYear()}

Silk & Satin.

All Rights Reserved.

</p>

</div>

</footer>

</div>

</>

);

}

export default App;