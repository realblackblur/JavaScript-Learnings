function placeOrder(item, delay, callback) {
    if (item === ""){
        throw new Error("Invalid Order");

    } else {
        console.log(`Order placed for ${item}`);
        setTimeout(() => {
            callback(item);
        }, delay);
    }
}

function orderReady(item) {
    console.log(`${item} is ready for pickup!`);
}

try {
    placeOrder("", 1000, orderReady);
    console.log("You can do other things while waiting...");
} catch (error) {
    console.log("Error: ", error.message);
}

try {
    placeOrder("Burger", 3000, orderReady);
    console.log("You can do other things while waiting...");
} catch (error) {
    console.log("Error: ", error.message);
}

try {
    placeOrder("Pizza", 1000, orderReady);
    console.log("You can do other things while waiting...");
} catch (error) {
    console.log("Error: ", error.message);
}

try {
    placeOrder("Salad", 2000, orderReady);
    console.log("You can do other things while waiting...");
} catch (error) {
    console.log("Error: ", error.message);
}

