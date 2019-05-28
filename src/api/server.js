import axios from './api'

const SERVER = {
    /**
     * 查询指定目录的key列表
     */
    GetMemberList() {
        return axios.get(`/v1/keys/members`);
    },

    /**
     * 获取所有etcd服务列表
     */
    GetEtcdServerList(){
        return axios.get(`/v1/server`);
    },

    /**
     * 添加
     * @param {Object} info 添加详情
     */
    AddEtcdServer(info){
        return axios.post(`/v1/server`, info);
    },

    /**
     * 修复etcd key目录结构
     */
    RestoreEtcdServer(id){
        if (!id){
            return
        }
        return axios.get(`/v1/server/restore?etcd_id=${id}`);
    }

}

export {
    SERVER
}