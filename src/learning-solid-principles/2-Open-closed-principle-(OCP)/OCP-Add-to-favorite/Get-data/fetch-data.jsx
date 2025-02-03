import { useEffect } from "react"

export default function ({getData}) {

    async function FetchDada () {
        try{ 
            const data = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${(count')
            const response = await data.json()
                {getData}(response)
            
        }catch{

        }
    }

    useEffect(() => {
        FetchDada()
    },[])

    return(<></>)
}