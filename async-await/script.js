    function placeOrder(item, delay) {
    return new Promise((resolve, reject) => {
        console.log(`Order placed for ${item}`);

        setTimeout(() => {
            if (item === "") {
                reject("Invalid Item");
            } else {
                resolve(item);
            }
        }, delay);
    });
}

function processPayment(item) {
    return new Promise((resolve) => {
        console.log("Processing payment...");
        setTimeout(() => resolve(item), 1000);
    });
}

function printReceipt(item) {
    return new Promise((resolve) => {
        console.log("Printing receipt...");
        setTimeout(() => resolve(item), 1000);
    });
}

async function runOrder(item, delay) {
    try {
        const orderedItem = await placeOrder(item, delay);
        await processPayment(orderedItem);
        await printReceipt(orderedItem);
        console.log(`${item} order completed!`);
    } catch (error) {
        console.log("Error:", error);
    }
}

async function main() {
    await runOrder("Pizza", 1000);
    await runOrder("", 1000);
}

main();