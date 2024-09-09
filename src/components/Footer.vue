<template>
    <div class="footer">
        <div class="item">
            <RouterLink to="/home">
                <van-icon name="wap-home-o" />
                首页
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/cart">
                <van-icon name="shopping-cart-o" />
                购物车
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/order">
                <van-icon name="coupon-o" />
                订单
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/mine">
                <van-icon name="manager-o" />
                我的
            </RouterLink>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer {
    display: flex;

    .item {
        flex: 1;
    }
}
</style>