export const isEmpty = (e) => {

    switch (e) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof (e) == "undefined": return true
        default: return false
    }

}