import Vue from 'vue';
import moment from 'moment';
import numeral from 'numeral';
Vue.use(numeral)
Vue.mixin({
    methods: {
        getDateTime(unix) {
            moment.locale('vi');
            return moment(unix).utcOffset('+00:00').format('DD-MM-YYYY');
        },

        TruncateToDecimals2(num, type, dec = 2) {
            const numberFormat = parseFloat(num.toFixed(10));
            const d = numberFormat.toString().split('.');
            if (type === 1) {
                return `${numeral(d[0]).format(0, 0)}`;
            }
            return `${numeral(d[0]).format(0, 0)}${
                d[1] ? `.${d[1].slice(0, dec)}` : ''
            }`;
        },
    },
});
