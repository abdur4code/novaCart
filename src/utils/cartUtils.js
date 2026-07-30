
export const cartCount = (items) => {
    if (!items) {
        return 0;
    }
    return items.reduce((sum, item) => sum + item.quantity, 0)
}