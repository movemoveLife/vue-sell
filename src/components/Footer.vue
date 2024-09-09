<template>
    <div class="footer">
        <div class="item">
            <RouterLink to="/home" class="nav-item">
                <van-icon name="wap-home-o" />
                首页
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/cart" class="nav-item">
                <van-icon name="shopping-cart-o" />
                购物车
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/order" class="nav-item">
                <van-icon name="coupon-o" />
                订单
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/mine" class="nav-item">
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
        .nav-item {
            display: flex;
            flex-flow:column;
            align-items: center;
        }
    }
}
</style>