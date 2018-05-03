 module.exports = {

    discount (price, num) {
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
        // console.log("final price -- num ", finalPrice, num);
        return finalPrice;
    },

    fixedDiscount (val, nr=false, lc=false) {
        let total = parseFloat(val);
        total = nr ? total / 1.24 : total;
        total = lc ? total / 1.1 : total;
        total = Math.round(total * 100) / 100;
        console.log("total", total);
        return total;
    },

    customDiscount (num, r) {
        let price = parseFloat(num);
        let rate = parseFloat(r);
        rate = price * (rate / 100);
        price = (price - rate).toFixed(2); 

        return price;
        
    }


}

