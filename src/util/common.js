export const generateIdsParams = (ids) => {

    if (!ids || ids.length == 0)
        return ""
    let param = "?ids="
    ids.map(id => {
        param = param + id + ","
    })

    return param
}

export const displayAmountWithCommas = (amount) => {
    const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedAmount
  }