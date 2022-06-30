import {useState} from 'react';
import './App.css';
import Navbar from './Navbar';

import Card from './Card';



function App() {
  const[data,setData] = useState([
    {
      id:1,
      name: "Fancy product",
      oldprice: 40.00,
      newprice: 80.00,
      isbadge:false,
      israting:false,
      isbtnname:"View options",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:2,
      name: "Special Item",
      oldprice: "$20.00",
      newprice: 18.00,
      isbadge:true,
      israting: true,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:3,
      name: "Sale Item",
      oldprice: "$50.00",
      newprice: 25.00,
      isbadge:false,
      israting: false,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

    },
    {
      id:4,
      name: "Popular Item",
      oldprice: "",
      newprice: 40.00,
      isbadge: false,
      israting: true,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:5,
      name: "Sale Item",
      oldprice: 50.00,
      newprice: 25.00,
      isbadge: false,
      israting: false,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:6,
      name: "Fancy product",
      oldprice: 120.00,
      newprice: 280.00,
      isbadge: false,
      israting: false,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:7,
      name: "Special Item",
      oldprice: "$20.00",
      newprice: 18.00,
      isbadge:true,
      israting: true,
      isbtnname:"View options",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

    },
    {
      id:8,
      name: "Popular Item",
      oldprice: "",
      newprice: 40.00,
      isbadge: false,
      israting: true,
      isbtnname:"Add to cart",
      isadded:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    }]);
    const [Cart,setcart] = useState ([]);
    const [total,settotal] = useState (0);
    

    let Addtocart = (items,index) => {
      let tempdata = data
      tempdata[index].isadded=true;
      setData(tempdata);
      setcart([...Cart,items])
      settotal (total+items.newprice)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
   

    let Removecart = (items,index) => {
      let tempdata = data
      tempdata[index].isadded=false;
      let itemindex = Cart.findIndex(obj => items.id === obj.id);
      Cart.splice(itemindex,1);
      setcart([...Cart])
      settotal (total- items.newprice);
    }
   

    return (
    <div className="App">
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <Navbar Cart = {Cart} Removecart ={Removecart} total = {total}/>
      </nav>
      <header class="bg-dark py-5">
        <Header/>
      </header>
      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    data.map((Product,index)=>{
                      return <Card product = {Product} key = {index} Addcart= {Addtocart} Cart={Cart} index={index} Removecart={Removecart} />
                    })
                  }
                  </div>
                  </div>
                  </section>

  
        <Footer/>
    

</div>
  );
}

export default App;


function Footer (){
    return(
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
    );
}

function Header (){
  return (
      <header class="bg-dark py-5">
<div class="container px-4 px-lg-5 my-5">
  <div class="text-center text-white">
      <h1 class="display-4 fw-bolder">Shop in style</h1>
      <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
  </div>
</div>
</header>
  );
}


