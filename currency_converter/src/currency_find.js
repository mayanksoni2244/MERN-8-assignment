async function Curr_finder() {
    const response=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    if(!response.ok){
        throw new Error('cant fetch')
    }
    const data=await response.json()
    return data
}
Curr_finder()
export default Curr_finder


