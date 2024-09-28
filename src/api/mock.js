import Mock from 'mockjs'
import homeApi from './mockData/homeApi'

// 模拟数据
Mock.mock('/home/getHomeData', homeApi.getHomeData)