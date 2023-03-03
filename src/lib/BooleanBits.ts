import type BitBoolean from "./bit-boolean";

export default class BooleanBits {

    readonly #list: Array<BitBoolean>;

    constructor(bits: Array<BitBoolean>, value:number=0) {
        this.#list = bits;
        this.value = value;
    }

    get list():Array<BitBoolean> {
        return this.#list;
    }

    get value():number {
        let value = 0;
        this.#list.forEach((item, idx)=>{
            if (item.value) {
                value += (1 << idx);
            }
        });
        console.log(this.#list);
        return value;
    }

    set value(value: number) {
        this.#list.forEach((item, idx)=>{
            let bv = 1 << idx;
            item.value = ((value & bv) ==  bv);
        });
    }

    get allTrue(): boolean {
        let result = true;
        this.#list.forEach(item=>(result &&= (item.value == true)));
        return result;
    }
}