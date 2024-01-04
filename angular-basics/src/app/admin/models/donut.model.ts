export interface Donut {
    // interface is like a blue print how our datatype lokks like
    //npx ng g interface admin/models/Donut model -- cmd to create a model
    id: string;
    name: string;
    icon: string;
    price: number;
    description: string;
}
