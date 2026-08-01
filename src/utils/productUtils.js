
export const getReviewCount = (len, id) => {
    return len > 3 ? len : ((id * 37) % 280) + 45;
}

export const getOriginalPrice = (discountPercentage, price) => {
    return (discountPercentage > 0
        ? (price / (1 - discountPercentage / 100)).toFixed(2)
        : null);
}

export const getCategoryProdCount = (items, cat) => {
    const filteredCat = items.filter(prod => prod.category === cat);
    return (filteredCat.length);
}