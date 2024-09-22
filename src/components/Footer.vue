<template>
    <div class="footer">
        <div class="item">
            <RouterLink to="/home" class="nav-item" active-class="nav-color">
                <van-icon name="wap-home-o" size="30" />
                首页
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="shopping-cart-o" size="30" />
                购物车
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="coupon-o" size="30" />
                订单
            </RouterLink>
        </div>
        <div class="item">
            <RouterLink to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="manager-o" size="30" />
                我的
            </RouterLink>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer {
    display: flex;
    background: #fff;
    border-top: 0.5px solid #eee;
    font-size: 12px;

    .item {
        flex: 1;

        .nav-color {
            color: #ffc400;
        }

        .nav-item {
            display: flex;
            flex-flow: column;
            align-items: center;
        }
    }
}
</style>