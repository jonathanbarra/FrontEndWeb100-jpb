
type Transformer = (x: string) => string;
export function formatName(
    first: string,
    last: string,
    transformer: Transformer = (x) => x): string {
    /*  let fullName = `${last}, ${first}`;
 
     if (transformer) {
         fullName = transformer(fullName);
     }
     return fullName; */

    return transformer(`${last}, ${first}`);
}