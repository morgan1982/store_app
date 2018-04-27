export default class PriceCalculator {

    discount = (price, num) => {
        let finalPrice = null;
        let numPrice = parseFloat(price);
        let discount = null;
        switch (true) {
            case num === 1:
                finalPrice = numPrice;
                break;
            case num === 2:
                discount = numPrice * .5;
                finalPrice = (numPrice - discount).toFixed(2);
                break;
            case num >= 3:
                discount = numPrice * 0.75
                finalPrice =(numPrice - discount).toFixed(2);
                break;
            default:
                finalPrice = numPrice;
        }
        console.log("final price -- num ", finalPrice, num);
        return finalPrice;
    }

    fixedDiscount = (val, nr, lc) {
        let total = parseFloat(val);
        total = nr ? initVal / 1.24 : initVal;
        total = lc ? initVal / 1.1 : initVal;
        total.fixed(2);
        return total;
    } 


}