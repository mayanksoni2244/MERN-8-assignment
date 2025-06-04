async function Curr_api() {
    const response=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`);
    if(!response.ok){
        throw new Error('cant fetch data');
    }
    const data=await response.json();
    return Object.keys(data);

}
Curr_api()
export default Curr_api


