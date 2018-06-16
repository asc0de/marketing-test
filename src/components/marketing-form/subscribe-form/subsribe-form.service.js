export default function sendSubscription() {
    return new Promise((resolve, reject) => {
        // immitate request before server side will be implemented for #task3
        const immitateRequest = setTimeout(() => {
            resolve();
            clearTimeout(immitateRequest);
        }, 3000);
    });
}
