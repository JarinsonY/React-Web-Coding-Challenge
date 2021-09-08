export const formatDate = (date) => {
    const numDate = new Date(date * 1000).toLocaleDateString("en-US");
    const timeDate = new Date(date * 1000).toLocaleTimeString("en-US");
    return numDate + " - " + timeDate;
};
