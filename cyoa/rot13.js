// from https://codereview.stackexchange.com/a/132140/8591

const input = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
const output = `NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234`
const index = x => input.indexOf(x)
const translate = x => index(x) > -1 ? output[index(x)] : x

export default str => str.split(``).map(translate).join(``)
