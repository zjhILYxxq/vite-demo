import { transform } from "lodash";

const customePlugin = {
    name: 'custome-plugin',
    async transform(code, id) {
        if (id.includes('util.1')) {
            code = `import { throttle } from 'lodash-es'; console.log(throttle); ${code}`;
        }
        return code;

    }
}

export { customePlugin };