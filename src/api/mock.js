import Mock from 'mockjs'
import homeApi from './mockData/homeApi'
import storeApi from './mockData/storeApi'

// 模拟数据
Mock.mock('/home/getHomeData', homeApi.getHomeData)
Mock.mock('/home/getStoreData', storeApi.getStoreData)