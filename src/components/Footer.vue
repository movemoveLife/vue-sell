<template>
    <div>
        <div>
            <RouterLink to="/home">
                <van-icon name="wap-home-o" />
                首页
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/cart">
                <van-icon name="shopping-cart-o" />
                购物车
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/order">
                <van-icon name="coupon-o" />
                订单
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/mine">
                <van-icon name="manager-o" />
                我的
            </RouterLink>
        </div>
    </div>
</template>