export interface Donut {
    // interface is like a blue print how our datatype lokks like
    //npx ng g interface admin/models/Donut model -- cmd to create a model
    id: string;
    name: string;
    icon: string;
    price: number;
    description: string;
    // promo: boolean;  this give an error as we ha does not have value in the of promo in order to make this and 
                    // mwe can make this an optional valueby adding (?)
    promo? :boolean
                }
