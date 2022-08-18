import instance from "../axios";


const getData = (obj) => {
   return instance.get('farm', obj)
}

const postData = () => {
   return instance.post('/farm/latest-data')
}
const updateData = (device) => {
   return instance.patch(`/farm/status/?device=${device}`)
}



export {
   getData,
   postData,
   updateData,
}