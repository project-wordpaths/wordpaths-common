
export default class Encoder_
{
    /**
     * Encodes a float array into bytes.
     */
    static encodeFloatArrayToBytes(floatArray) {
        const f32a          = new Float32Array(floatArray)
        const bytes         = new Uint8Array(f32a.buffer)
        return bytes
    }   

    /**
     * Decodes a float array from bytes.
     */
    static decodeFloatArrayFromBytes(bytes) {
        const items_f32     = new Float32Array(
            bytes.buffer, 
            bytes.byteOffset, 
            bytes.byteLength / Float32Array.BYTES_PER_ELEMENT
        );
        const items = Array.from(items_f32)
        return items
    }

    /**
     * Encodes integer array to bytes.
     */
    static encodeIntArrayToBytes(intArray) {
        const f32a          = new Int32Array(intArray)
        const bytes         = new Uint8Array(f32a.buffer)
        return bytes
    }

    /**
     * Decodes an integer array from bytes.
     */
    static decodeIntArrayFromBytes(bytes) {
        const items_i32     = new Int32Array(
            bytes.buffer, 
            bytes.byteOffset, 
            bytes.byteLength / Int32Array.BYTES_PER_ELEMENT
        );
        const items = Array.from(items_i32)
        return items
    }
}