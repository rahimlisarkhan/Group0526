

function getCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
}

