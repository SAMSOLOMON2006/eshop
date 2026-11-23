
import React, { useContext, useEffect, useRef } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const CartItems = () => {
    const {
        getTotalCartAmount,
        all_product,
        cartItems,
        removeFromCart
    } = useContext(ShopContext)

    const cartRef = useRef(null)

    useEffect(() => {
        const cart = cartRef.current
        if (!cart) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                cart.classList.toggle('cart-visible', entry.isIntersecting)
            },
            { threshold: 0.08 }
        )

        observer.observe(cart)

        return () => observer.disconnect()
    }, [])

    const totalAmount = getTotalCartAmount()

    const cartProducts = all_product.filter(
        (product) => cartItems[product.id] > 0
    )

    return (
        <section className="cartitems" ref={cartRef}>

            <div className="cartitems-heading">
                <span className="cartitems-eyebrow">YOUR SELECTION</span>
                <h1>Your Shopping Bag<span>.</span></h1>
                <p>Thoughtfully chosen. Ready to be yours.</p>
            </div>

            {cartProducts.length > 0 ? (
                <>
                    <div className="cartitems-table">

                        <div className="cartitems-format-main cartitems-header">
                            <p>PRODUCT</p>
                            <p>DETAILS</p>
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                            <p>TOTAL</p>
                            <p></p>
                        </div>

                        <div className="cartitems-products">
                            {cartProducts.map((product, index) => (
                                <div
                                    className="cartitems-product-row"
                                    key={product.id}
                                    style={{
                                        '--row-delay': `${index * 0.12}s`
                                    }}
                                >
                                    <div className="cartitems-product-image">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="carticon-product-icon"
                                        />
                                    </div>

                                    <div className="cartitems-product-details">
                                        <p className="cartitems-product-name">
                                            {product.name}
                                        </p>
                                        <span className="cartitems-product-label">
                                            LOUIS &amp; SONS COLLECTION
                                        </span>
                                    </div>

                                    <p className="cartitems-price">
                                        ${product.new_price}
                                    </p>

                                    <div className="cartitems-quantity">
                                        {cartItems[product.id]}
                                    </div>

                                    <p className="cartitems-line-total">
                                        ${(product.new_price * cartItems[product.id]).toFixed(2)}
                                    </p>

                                    <button
                                        type="button"
                                        className="cartitems-remove"
                                        onClick={() => removeFromCart(product.id)}
                                        aria-label={`Remove ${product.name} from cart`}
                                    >
                                        <img src={remove_icon} alt="" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cartitems-down">

                        <div className="cartitems-total">
                            <span className="cartitems-summary-label">
                                ORDER SUMMARY
                            </span>

                            <h2>Cart Totals</h2>

                            <div className="cartitems-total-details">
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>${totalAmount.toFixed(2)}</p>
                                </div>

                                <div className="cartitems-total-item">
                                    <p>Shipping Fee</p>
                                    <p className="cartitems-free">Free</p>
                                </div>

                                <div className="cartitems-total-item cartitems-grand-total">
                                    <h3>Total</h3>
                                    <h3>${totalAmount.toFixed(2)}</h3>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="cartitems-checkout"
                            >
                                PROCEED TO CHECKOUT
                                <span>→</span>
                            </button>

                            <p className="cartitems-secure-note">
                                A little something special is on its way.
                            </p>
                        </div>

                        <div className="cartitems-promocode">
                            <span className="cartitems-summary-label">
                                A LITTLE EXTRA
                            </span>

                            <h3>Have a promo code?</h3>

                            <p>
                                Enter your code below to redeem your offer.
                            </p>

                            <div className="cartitems-promobox">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    aria-label="Promo code"
                                />

                                <button type="button">
                                    Apply
                                </button>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <div className="cartitems-empty">
                    <div className="cartitems-empty-icon">✧</div>
                    <h2>Your bag is waiting.</h2>
                    <p>
                        It looks like you haven't added anything to your
                        shopping bag yet.
                    </p>
                    <a href="/mens" className="cartitems-shop-link">
                        EXPLORE COLLECTION <span>→</span>
                    </a>
                </div>
            )}

        </section>
    )
}

export default CartItems
