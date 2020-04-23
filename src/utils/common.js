/**
 * 将backend的数据转化为 antd Table
 * @param {object} data 
 */
export function convertToDataSource(data) {
  let keys = Object.keys(data)

  keys.map(user => {
    let ks = Object.keys(user)
    return {

    }
  })
}

/**
 * 
 * @param {Object} data 
 */
export function convertToColumn(column) {
  return Object.keys(column).map(v => ({
    title: column(v),
    dataIndex: column(v),
    editable:true
  }))
}