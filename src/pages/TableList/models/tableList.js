export default {
  namespace: 'tableList',
  state: {
    data: [
      {
        "sendGroup": "第一层第一条数据",
        "dispatchInfo": [
          {
            "chargeItemNameA": "二1",
            "details": {
              id: 1111,
              name: 'Ant Design React 致力于提供给程序员愉悦的开发体验',
            },
            "chargeItems": [
              {
                "chargeItemName": "三我有颜色1",
                "expression": [
                  {
                    "endWeight": 'abc', "dd": 1235, 'color': 'green',
                  },
                  { "endWeight": 2,"dd": '你好中国' },
                  { "endWeight": "aaaaa"},
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2,"bb": 1235 },
                ],

              },
              {
                "chargeItemName": "三2qqrttyyy",
                "expression": [
                  { "endWeight": 1,"dd": 1235 },
                  { "endWeight": 2,"dd": 1235 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              }
            ],
          },
          {
            "chargeItemNameA": "二2",
            "chargeItems": [
              {
                "chargeItemName": "三3我是二和我说下",
                "expression": [
                  { "endWeight": 1,"dd": 1235 },
                  { "endWeight": 2,"dd": 345 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              },
              {
                "chargeItemName": "三4 儿童667未老先衰",
                "expression": [
                  { "endWeight": 1,"dd": 1566235 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              }
            ]
          }
        ]
      },
      {
        "sendGroup": "第一层第二条数",
        "dispatchInfo": [
          {
            "chargeItemNameA": "二1",
            "chargeItems": [
              {
                "chargeItemName": "三1 插入法国花园6",
                "expression": [
                  { "endWeight": 1,"dd": 1235 },
                  { "endWeight": 2,"dd": 1235 },
                  { "endWeight": 3, "dd": 1235 },
                  { "endWeight": 4,"dd": 56788 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              },
              {
                "chargeItemName": "三2 让他667u",
                "expression": [
                  { "endWeight": 1,"dd": 1235 },
                  { "endWeight": 2,"dd": 1235 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              }
            ]
          },
          {
            "chargeItemNameA": "二2",
            "chargeItems": [
              {
                "chargeItemName": "三3 ®6用户8877",
                "expression": [
                  { "endWeight": 1,"dd": 1235 },
                  { "endWeight": 2,"dd": 1235 },
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              },
              {
                "chargeItemName": "三4 哲 有才无德6 磊",
                "expression": [
                  { "endWeight": 467451 , "dd": 467451},
                ],
                "tt": [
                  {
                    "aa": 'abc', "bb": 1235, 'cc': 'green',
                  },
                  { "aa": 2, "bb": 1235 },
                  { "aa": 3,"bb": 1234456 },
                ],
              }
            ]
          }
        ]
      },
    ],
    // data: []
  },
  *getData({ payload }, { call, put, select }) {
    // 跨 model 访问
    const { data } = yield select(({ tableList }) => ({
      data: tableList.data,
    }));
    // console.log('data',data)
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}
