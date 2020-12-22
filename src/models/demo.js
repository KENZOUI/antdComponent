import dayjs from 'dayjs';
import moment from 'moment';
const paramsForm = {
  condition: 1,
  // creatData:'2020-11-10'
  // creatData1: dayjs('2018-08-08').format(`YYY-MM-DD`),
  // cc:dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'),
  // creatData2: dayjs().format('2020-11-10', 'YYY-MM-DD'),
  creatDataaa:dayjs('2020-12-11'),
  creatData: moment('2020-11-10','YYYY-MM-DD')
}
export default {
  namespace: 'demo',
  state: {
    searchParams: { ...paramsForm},
  },
  effects: {

  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}
