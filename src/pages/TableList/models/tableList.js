export default {
  namespace: 'tableList',
  state: {
    tableData: [
      {
        "sendGroup": "杭州萧山",
        "dispatchInfo": [
          {
            "chargeItemNameA": "二1",
            "chargeItems": [
              {
                "chargeItemName": "三1",
                "expression": [
                  { "endWeight": 1 },
                  { "endWeight": 2 },
                  { "endWeight": 3 },
                ],
                "tt": [
                  { "dd": 1235 },
                  { "dd": 2234 },
                  { "dd": 4455 },
                  { "dd": 467451},
                ]

              },
              {
                "chargeItemName": "三2",
                "expression": [
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                ]
              }
            ],
          },
          {
            "chargeItemNameA": "二2",
            "chargeItems": [
              {
                "chargeItemName": "三3",
                "expression": [
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]
              },
              {
                "chargeItemName": "三4",
                "expression": [
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]
              }
            ]
          }
        ]
      },
      {
        "sendGroup": "杭州萧山1",
        "dispatchInfo": [
          {
            "chargeItemNameA": "二1",
            "chargeItems": [
              {
                "chargeItemName": "三1",
                "expression": [
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                  { "endWeight": 467451},
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]

              },
              {
                "chargeItemName": "三2",
                "expression": [
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]
              }
            ]
          },
          {
            "chargeItemNameA": "二2",
            "chargeItems": [
              {
                "chargeItemName": "三3",
                "expression": [
                  { "endWeight": 467451 },
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]
              },
              {
                "chargeItemName": "三4",
                "expression": [
                  { "endWeight": 467451 },
                ],
                "tt": [
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451 },
                  { "dd": 467451},
                ]
              }
            ]
          }
        ]
      },
    ],
    // tableData: [
    //   {
    //   "serviceType": "派送,门店自提,分拨自提",
    //   "quoteMainName": "12.18重量与体积 ",
    //   "sendGroup": "杭州萧山",
    //   "dispatchInfo": [
    //     {
    //     "chargeItemNameA": "我是二级数据1111",
    //     "chargeItems": [{
    //       "chargeItemName": "收中转费",
    //       "expression": [{
    //         "firstWeight": 0,
    //         "floorMoney": 5,
    //         "endWeight": 467451,
    //         "price": 2,
    //         "basicPrice": 0,
    //         "expressionType": 1,
    //         "startWeight": 0.1
    //       }, {
    //         "firstWeight": 0,
    //         "floorMoney": 3,
    //         "endWeight": 100,
    //         "price": 3,
    //         "basicPrice": 0,
    //         "expressionType": 1,
    //         "startWeight": 1.1
    //       }, {
    //         "firstWeight": 0,
    //         "floorMoney": 3,
    //         "endWeight": 45611,
    //         "price": 0,
    //         "basicPrice": 0,
    //         "expressionType": 2,
    //         "startWeight": 100
    //       }],
    //       "dispatch": "发上发大水",
    //       "dispatchId": 9407055
    //     }, {
    //       "chargeItemName": "操作费11111",
    //       "expression": [{
    //         "firstWeight": 10,
    //         "endWeight": 467451,
    //         "price": 12,
    //         "basicPrice": 11,
    //         "expressionType": 1,
    //         "startWeight": 0.1
    //       }, {
    //         "firstWeight": 3,
    //         "floorMoney": 2,
    //         "endWeight": 100,
    //         "price": 5,
    //         "basicPrice": 4,
    //         "expressionType": 1,
    //         "startWeight": 1.1
    //       }, {
    //         "firstWeight": 6,
    //         "floorMoney": 2,
    //         "endWeight": 45611,
    //         "price": 8,
    //         "basicPrice": 7,
    //         "expressionType": 2,
    //         "startWeight": 100
    //       }],
    //       "dispatch": "发上发大水",
    //       "dispatchId": 7780966
    //     }, {
    //       "chargeItemName": "操作费",
    //       "expression": [{
    //         "firstWeight": 0,
    //         "floorMoney": 5,
    //         "endWeight": 467451,
    //         "price": 2,
    //         "basicPrice": 0,
    //         "expressionType": 1,
    //         "startWeight": 0.1
    //       }, {
    //         "firstWeight": 0,
    //         "floorMoney": 3,
    //         "endWeight": 100,
    //         "price": 3,
    //         "basicPrice": 0,
    //         "expressionType": 1,
    //         "startWeight": 1.1
    //       }, {
    //         "firstWeight": 0,
    //         "floorMoney": 3,
    //         "endWeight": 45611,
    //         "price": 0,
    //         "basicPrice": 0,
    //         "expressionType": 2,
    //         "startWeight": 100
    //       }],
    //       "dispatch": "发上发大水",
    //       "dispatchId": 9407055
    //       }, {
    //         "chargeItemName": "操作费",
    //       "expression": [{
    //         "firstWeight": 10,
    //         "endWeight": 467451,
    //         "price": 12,
    //         "basicPrice": 11,
    //         "expressionType": 1,
    //         "startWeight": 0.1
    //       }, {
    //         "firstWeight": 3,
    //         "floorMoney": 2,
    //         "endWeight": 100,
    //         "price": 5,
    //         "basicPrice": 4,
    //         "expressionType": 1,
    //         "startWeight": 1.1
    //       }, {
    //         "firstWeight": 6,
    //         "floorMoney": 2,
    //         "endWeight": 45611,
    //         "price": 8,
    //         "basicPrice": 7,
    //         "expressionType": 2,
    //         "startWeight": 100
    //       }],
    //       "dispatch": "发上发大水",
    //       "dispatchId": 7780966
    //     }
    //     ]
    //     },
    //     {
    //       "chargeItemNameA": "我是二级数据--2",
    //       "chargeItems": [{
    //         "chargeItemName": "收中转费3",
    //         "expression": [
    //           {
    //           "firstWeight": 0,
    //           "floorMoney": 3,
    //           "endWeight": 45611,
    //           "price": 0,
    //           "basicPrice": 0,
    //           "expressionType": 2,
    //           "startWeight": 100
    //         }],
    //         "dispatch": "发上发大水",
    //         "dispatchId": 9407055
    //       }, {
    //         "expression": [{
    //           "firstWeight": 10,
    //           "endWeight": 467451,
    //           "price": 12,
    //           "basicPrice": 11,
    //           "expressionType": 1,
    //           "startWeight": 0.1
    //         }, {
    //           "firstWeight": 3,
    //           "floorMoney": 2,
    //           "endWeight": 100,
    //           "price": 5,
    //           "basicPrice": 4,
    //           "expressionType": 1,
    //           "startWeight": 1.1
    //         }, {
    //           "firstWeight": 6,
    //           "floorMoney": 2,
    //           "endWeight": 45611,
    //           "price": 8,
    //           "basicPrice": 7,
    //           "expressionType": 2,
    //           "startWeight": 100
    //         }],
    //         "dispatch": "发上发大水",
    //         "dispatchId": 7780966
    //       }, {
    //         "chargeItemName": "操作费",
    //         "expression": [{
    //           "firstWeight": 0,
    //           "floorMoney": 5,
    //           "endWeight": 467451,
    //           "price": 2,
    //           "basicPrice": 0,
    //           "expressionType": 1,
    //           "startWeight": 0.1
    //         }, {
    //           "firstWeight": 0,
    //           "floorMoney": 3,
    //           "endWeight": 100,
    //           "price": 3,
    //           "basicPrice": 0,
    //           "expressionType": 1,
    //           "startWeight": 1.1
    //         }, {
    //           "firstWeight": 0,
    //           "floorMoney": 3,
    //           "endWeight": 45611,
    //           "price": 0,
    //           "basicPrice": 0,
    //           "expressionType": 2,
    //           "startWeight": 100
    //         }],
    //         "dispatch": "发上发大水",
    //         "dispatchId": 9407055
    //       }, {
    //         "expression": [{
    //           "firstWeight": 10,
    //           "endWeight": 467451,
    //           "price": 12,
    //           "basicPrice": 11,
    //           "expressionType": 1,
    //           "startWeight": 0.1
    //         }, {
    //           "firstWeight": 3,
    //           "floorMoney": 2,
    //           "endWeight": 100,
    //           "price": 5,
    //           "basicPrice": 4,
    //           "expressionType": 1,
    //           "startWeight": 1.1
    //         }, {
    //           "firstWeight": 6,
    //           "floorMoney": 2,
    //           "endWeight": 45611,
    //           "price": 8,
    //           "basicPrice": 7,
    //           "expressionType": 2,
    //           "startWeight": 100
    //         }],
    //         "dispatch": "发上发大水",
    //         "dispatchId": 7780966
    //       }
    //       ]
    //       }
    //   ],
    //   "sendGroupId": 7780971,
    //   "productType": "定时达,精准零担,MiNi电商大件,MiNi电商小件,整车,普惠达,填仓,专线,安心达",
    //   "throwrange": "0<x<=2500,2500<x<=5000,5000<x,0<x<=2500(特殊)",
    //   "validTime": "2020-11-29 09:00:00 至 2021-01-02 08:59:59",
    //   "time": "2020-12-18 17:18:21"

    // }, {
    //   "serviceType": "派送,门店自提,分拨自提",
    //   "quoteMainName": "12.18.1",
    //   "sendGroup": "杭州萧山",
    //   "createdTime": "2020-12-18 10:48:24",
    //     "dispatchInfo": [
    //       {
    //     "chargeItemNameA": "我是二3333级数据",
    //     "chargeItems": [{
    //       "chargeItemName": "收中转费",
    //       "expression": [{
    //         "firstWeight": 0,
    //         "floorMoney": 5,
    //         "price": 2,
    //         "basicPrice": 0,
    //         "startWeight": 0.1,
    //         "expressionType": 2
    //       }, {
    //         "firstWeight": 0,
    //         "floorMoney": 3,
    //         "endWeight": 10000,
    //         "price": 3,
    //         "startWeight": 1.1,
    //         "expressionType": 1
    //       }]
    //     }],
    //     "dispatch": "发上发大水",
    //     "dispatchId": 7780953
    //       },
    //       {
    //         "chargeItemNameA": "我是二335555级数据",
    //         "chargeItems": [{
    //           "chargeItemName": "收中转费",
    //           "expression": [{
    //             "firstWeight": 0,
    //             "floorMoney": 5,
    //             "price": 2,
    //             "basicPrice": 0,
    //             "startWeight": 0.1,
    //             "expressionType": 2
    //           }]
    //         }],
    //         "dispatch": "发上发大水",
    //         "dispatchId": 7780953
    //           }
    //     ],

    //   "sendGroupId": 7780932,
    //   "productType": "定时达,精准零担,MiNi电商大件,MiNi电商小件,整车,普惠达,填仓,专线,安心达",
    //   "throwrange": "0<x<=2500,2500<x<=5000,5000<x,0<x<=2500(特殊)",
    //   "chargeItem": "收中转费",
    //   "validTime": "2020-11-29 09:00:00 至 2021-01-02 08:59:59",
    //   "time": "2020-12-18 17:18:21"
    //   }
    // ],
    data:[]
  },
  effects: {
    *getData({ payload }, { call, put, select }) {
      // 跨 model 访问
      const { tableData } = yield select(({ tableList }) => ({
        tableData: tableList.tableData,
      }));
      // console.log('tableData', tableData)
      var arr = [];

      // 第一层循环
     tableData.map(item => {
        var len=0;
        // console.log('item', item)
        // 第二层
        item.dispatchInfo && item.dispatchInfo.map(i => {
          // console.log('i', i)
          //第三层
          const arr1 = [];
          i.chargeItems && i.chargeItems.map(j => {
            console.log('j', j)
            // 第四层
            console.log('第四层长度', j.expression.length);
            len = j.expression.length;
          //   arr3.push(
          //     {
          //       ...j,
          //       span: j.expression.length
          //     }
          //   )
          //  let arr2 = arr.reduce(function(a , b){
          //   return b > a ? b : a;
          //   });
          //   console.log(arr2);
            // console.log('arr3',arr3)
            // arr.push(j.expression.length);
            // console.log('arr',arr)
            // len +=  j.expression.length;
            // arr.push(j.expression.length);
            // console.log('bb', arr.push(j.expression.length))
            // const aa = sum(arr.push(j.expression.length));
            // let aa = eval(bb.join("+"));

          })
          // console.log('len',len)

        })
      })
      console.log('tableData',tableData)
      yield put({
        type: 'updateState',
        payload: { data: tableData}
      });
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}
