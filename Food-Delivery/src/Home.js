import React, { useEffect, useState } from "react"
import { foodMenu } from "./utils/menuList";
import { particularFoodData } from "./utils/particularFoodInfo";
import './App.css';
import { useDispatch } from "react-redux";
import { addItemFromCart } from "./redux";


const Home = (props) => {
  const [menuItem, selectedmenuItem] = useState("Salad");
  const [cart, setCart] = useState([]);


  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hello");
    
    dispatch(addItemFromCart(cart))
  }, [cart]);



  function addItem(selectedItem) {
    setCart((previouscartItem) => {
      const isExistProduct = previouscartItem.find((data) => data.foodId === selectedItem.foodId)

      if (isExistProduct) {
        return previouscartItem.map((previousItem) => {
          if (previousItem.foodId === selectedItem.foodId) {
            return { ...selectedItem, quantity: previousItem.quantity + 1 }
          } else {
            return previousItem
          }
        })
      } else {
        return [...previouscartItem, { ...selectedItem, quantity: 1 }]
      }
    })
  }

  function removeItem(selectedItem) {

    setCart((previouscartItem) => {
      const isExistProduct = previouscartItem.find((data) => data.foodId === selectedItem.foodId)
      if (isExistProduct) {
        return previouscartItem.map((previousItem) => {
          if (previousItem.foodId === selectedItem.foodId) {
            if (previousItem.quantity <= 0) {
              return { ...selectedItem, quantity: 0 }
            }
            return { ...selectedItem, quantity: previousItem.quantity - 1 }
          } else {
            return previousItem
          }
        })
      } else {
        return previouscartItem
      }
    })


  }


  function selectItem(item) {
    selectedmenuItem(item);
  }

  return (
    <div>
      {/* Banner Section */}
      <img src="https://t4.ftcdn.net/jpg/02/89/80/03/360_F_289800335_l89vweOGANYIhKuVHRgpGh5QRwKQMsQx.jpg" style={{ marginLeft: '15px', marginTop: '10px', width: '98%' }}></img>



      {/* Explore Item Section */}
      <div className="p-5">
        <h2>Explore Items</h2>
        <div className="menu-item-wrapper">

          {
            foodMenu.map(function (item, index) {
              return (
                <div key={index} onClick={() => selectItem(item.menuItemName)}>
                  <img src={item.menuItemImage} style={{ width: '160px', height: '160px', 'borderRadius': '100px' }}
                    className={"menu-item " + (menuItem === item.menuItemName ? 'unSelectedMenuItemImage' : 'selectedMenuItemImage ')}></img>
                  <h4 className={"menu-item " + (menuItem === item.menuItemName ? 'unSelectedMenuItem' : 'selectedMenuItem ')}>{item.menuItemName}</h4>
                </div>
              )

            })
          }
        </div>
      </div>



      {/* Particular Category Section */}
      <div>
        <div className="bg-white">
          <h2 className="sr-only">Products</h2>
          <div className="particular-item-wrapper">
            {
              particularFoodData.filter(item => item.foodName.includes(menuItem)).map(function (item, index) {
                return (
                  <div key={index}>
                    <div >
                      <img src={item.foodImageUrl} alt={item.foodDescription} style={{ width: '690px', height: '420px', 'borderRadius': '50px' }} />
                    </div>
                    <div className="food-header">
                      <h3 className="mt-1 text-lg font-medium">{item.foodName}</h3>
                      <div className="subfood-header my-2">
                        <button className="btn btn-sm btn-success mx-2 action-btn" onClick={() => addItem(item)}>Add</button>
                        {
                          cart.map(function (data, index) {
                            if (data.foodId === item.foodId) {
                              return <span className="count" key={index}> {data.quantity}  </span>
                            } else {
                              <span className="count" key={index}> 0  </span>
                            }
                          })
                        }

                        <button className="btn btn-sm btn-danger mx-2 action-btn" onClick={() => removeItem(item)}>Remove</button>
                      </div>
                    </div>
                    <p className="text-lg font-medium price">₹{item.foodPrice}</p>
                    <p className="text-sm description">{item.foodDescription}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
