export function formatCurrency(priceCents){
    return (priceCents / 100).toFixed(2);
}

export default formatCurrency;//only one 
// default export available per file to make the 
// code cleaner