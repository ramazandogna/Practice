type PlainObject = { [key: string]: unknown}

export function flattenObject(obj: PlainObject, prefix: string = ''): PlainObject{
    const result: PlainObject = {};

    // Iterate through each key in the object
    for( const key in obj){
        //check if the property is directly on the object
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            
            // Create new key by appending prefix example: a, a.b
            const newKey = prefix ? `${prefix}.${key}` : key;
            const value = obj[key]

            // Check if the value is an object and not null
            if(typeof value === 'object' && value !== null && !Array.isArray(value)){
                // Recursively step
                // Recursively flatten the nested object
                // Merge the returned result into the main result
                const nested = flattenObject(value as PlainObject, newKey)
                Object.assign(result, nested);

            }else{
                // BASE CASE
                // Value is not an object, (number, string etc..)
                // Add to the result
                result[newKey] = value;
            }
        }
    }
    return result;
}