export function FormatPrice(price:number){
    const fixedPrice = Number(price.toFixed(0))

   const priceFormatted = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(fixedPrice)

    return priceFormatted
}
