package com.foodapplication.service;

import com.foodapplication.io.CartRequest;
import com.foodapplication.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);

}
