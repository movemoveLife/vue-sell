<template>
    <div class="login">
        <Header title="登录" />
        <div class="img">买团</div>
        <van-form @submit="onSubmit">
            <van-field v-model="data.username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="data.password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" color="#ffc400">登录</van-button>
                <van-button round block type="info" color="#ffc400" class="register"
                    @click="toRegister">去注册</van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

const data = reactive({
    username: '',
    password: ''
})
const onSubmit = () => {

}
const toRegister = () => {
    router.push('/register');
}
</script>

<style lang="less" scoped>
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>