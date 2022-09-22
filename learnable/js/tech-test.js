var list = [5,8,5,5,5,4,7,3,6,9,1,2,5,7,2,9,1,7,2]
var n = 3 /*What number do you want to check? */

function nth_most_rarest_item_signature(a,b) {

    //Check the number of times each element occurs and tell the amount of times your selected number occured
    return a.reduce((accumulator,element) => {
        return (b === element ? accumulator + 1 : accumulator)
    
    }, 0)
    
}

nth_most_rarest_item_signature(list,n)