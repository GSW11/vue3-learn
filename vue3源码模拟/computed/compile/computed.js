import { effect } from "../../reactive/compile/effect.js";
export const computed = (getter) => {
    let _value = effect(getter);
    class ComputedRefImpl {
        get value() {
            return _value();
        }
    }
    return new ComputedRefImpl();
};
