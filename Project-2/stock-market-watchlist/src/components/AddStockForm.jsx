import { useState } from "react";
import { addStockToWatchlist } from "./stockService";
import { getStock } from "./stockService";
import { getWatchlist } from "./stockService";
 
export default function AddStockForm({ addStock }){
    
    const [formData, setFormData] = useState("");
    const [message, setMessage] = useState("")
    const handleChange = (event) => {
        const ticker = event.target.value
        setFormData(ticker)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const stockdata = await getStock(formData)
        const watchlistdata = await getWatchlist()
        const tickerlist = watchlistdata.records.map((stock) => stock.fields.Name)
        console.log(tickerlist)

        // if (stockdata.c !== 0 || !tickerlist.includes(formData)) {
        //     const stock = await addStockToWatchlist(formData) 
        //     console.log("Airtable response:", stock);
        //     addStock(formData)
        //     setFormData("")
        // }

        // check if formData is already within Watchlist

        if (stockdata.c === 0) {
            setMessage("No such stock exists.")
            
        } else if (tickerlist.includes(formData)) {
            setMessage(`${formData} is already in your watchlist.`)

        } else {
            const stock = await addStockToWatchlist(formData) 
            console.log("Airtable response:", stock);
            addStock(formData)
            setMessage(`${formData} has successfully been added to your watchlist.`)

        }
        
        setFormData("")
    }



return (
  <div className="max-w-md bg-gray-900 p-6 rounded-2xl shadow-md">
    <h3 className="text-lg font-semibold mb-4">
      Add a Stock
    </h3>

    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        value={formData}
        onChange={handleChange}
        placeholder="Enter ticker (e.g. NVDA)"
        className="flex-1 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition active:scale-95">
        Add
      </button>
    </form>

    {message && (
      <p className="mt-4 text-sm text-gray-300">
        {message}
      </p>
    )}
  </div>
)



}