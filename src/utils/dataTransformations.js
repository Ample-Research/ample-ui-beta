export const formatFileSize = (rawSize) => {
    if(rawSize>= 1000000) {
        return (rawSize / 1000000).toFixed(1) + 'mb'
    } else {
        return (rawSize / 1000).toFixed(0) + 'kb'
    }
}