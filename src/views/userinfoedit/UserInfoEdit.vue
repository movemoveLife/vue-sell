<template>
    <Header title="编辑资料" />
    <div>
        <van-field v-model="data.name" label="昵称" placeholder="请输入昵称" />
        <van-field v-model="data.sign" label="个性签名" placeholder="请输入个性签名" disabled />
        <van-field v-model="data.pass" label="密码" placeholder="请输入密码" />
    </div>
    <van-button type="primary" color="#ffc400" @click="save" block round class="save-btn">保存</van-button>
    <van-button type="primary" color="#ffc400" @click="logOut" block round class="save-btn">退出登录</van-button>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'

const router = useRouter()
const data = reactive({
    name: '',
    sign: '战胜自己是命运的强者',
    pass: ''
})

const save = () => {
    if (data.name && data.pass) {
        let userInfo = JSON.parse(localStorage.userInfo)
        let newUserInfo = {
            user: data.name || userInfo.name,
            pass: data.pass || userInfo.pass,
        }
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
        Toast('修改成功')
        router.push('/mine')
    } else {
        Toast('请输入内容')
    }
}

const logOut = () => {
    localStorage.removeItem('isLogin')
    router.push('/login')
    Toast('退出成功')
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color: #ffc400;
}

.save-btn {
    width: 80%;
    margin: 20px auto;
}
</style>