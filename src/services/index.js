import axios from "axios";

const API_KEY = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
const baseUrl = 'https://eshop-deve.herokuapp.com/api/v2/orders'



export  async function getProduct(){

    try{
        const response = await axios({
          url: baseUrl,
          method: 'GET',  
          json: true,
          headers: { 'Authorization':
            `Bearer ${API_KEY}`
          } 
        })
        return response
      }
      catch(e){
        console.log(e)
      }
}

export async function insertProduct(dataProduct){
        try{
            const response = await axios({
                method: 'POST',
                url: baseUrl,
                headers: { 
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    order: {
            
                        items: [
                            {              
                                sku: `${dataProduct.sku}`,           
                                name: `${dataProduct.name}`,
                                quantity: `${dataProduct.quantity}`,
                                price: `${dataProduct.price}`
                                
                            }
                        ]
                    }
                    }

                ), 
                redirect: 'follow'
                }
                )
            return response
        } catch(e){
            console.log(e)
        }
}

