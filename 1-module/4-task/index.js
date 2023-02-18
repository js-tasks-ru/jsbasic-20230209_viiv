function checkSpam(str) {
  const spamInclude = str.toLowerCase();
    const spamLower = spamInclude;
    if (spamLower.includes("1xbet") || spamLower.includes("xxx")) {
        return true;
    } else {
        return false;
    };
}
