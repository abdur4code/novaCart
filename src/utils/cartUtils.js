
export const cartCount = (items) => {
    if (!items) {
        return 0;
    }
    return items.reduce((sum, item) => sum + item.quantity, 0)
}

export const getCart = (email) => {
    if (!email) return [];

    const data = localStorage.getItem(`cart_${email}`);
    return data ? JSON.parse(data) : [];
};

export const saveCart = (email, items) => {
    if (!email) return;

    localStorage.setItem(
        `cart_${email}`,
        JSON.stringify(items)
    );
};