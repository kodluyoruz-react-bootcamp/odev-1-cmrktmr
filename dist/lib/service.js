"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

async function getData(userID){
    const ENDPOINT="https://jsonplaceholder.typicode.com"

    try{
        const {data:users} = await _axios2.default.get(`${ENDPOINT}/users/${userID}`);
            const{data:posts} = await _axios2.default.get(`${ENDPOINT}/posts?userId=${userID}`);

       return {users:users,posts:posts}

    }catch(e){
        console.log(e)


    }

}


exports. default = getData