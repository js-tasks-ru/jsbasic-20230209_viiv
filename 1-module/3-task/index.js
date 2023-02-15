function usFirst(str) {
    let firstUpper = str[0].toUpperCase() + str.slice(1);
    console.log(firstUpper);
    return `${firstUpper}`;
};

usFirst('wri');