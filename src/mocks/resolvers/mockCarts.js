export const mockGetCarts = async (req, res, ctx) => {
    let carts = [];
    for (let i = 1; i < 6; i += 1) {
        carts.push({id: i, name: `item ${i}`, price: 1000, quantity: 1});
    }

    return res(
        ctx.status(200),
        ctx.json(carts)
    );
}